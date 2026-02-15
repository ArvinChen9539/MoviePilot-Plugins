import { n as __export, t as Page_default } from "./Page-C019kNM2.js";
import { r as importShared } from "./_virtual___federation_fn_import-CGvRSdYS.js";
import "./preload-helper-D8ypjKNi.js";
import "./_plugin-vue_export-helper-BtmITFDH.js";
import { $ as getCurrentInstance, $t as mergeDeep, At as filterInputAttrs, B as useLayout, Bt as has, C as useIcon, Ct as deepToRaw, D as provideTheme, Dt as escapeForRegex, E as makeThemeProps, Et as ensureValidVNode, F as useToggleScope, Ft as getDecimals, G as standardEasing, Gt as isComposingIgnoreKey, H as useResizeObserver, Ht as humanReadableFileSize, I as VuetifyLayoutKey, It as getEventCoordinates, J as genericComponent, Jt as isOn, K as defineComponent, Kt as isEmpty, L as createLayout, Lt as getNextElement, M as useLocale, Mt as flattenFragments, N as useRtl, Nt as focusChild, O as useTheme, Ot as eventName, P as useProxiedModel, Pt as focusableChildren, Qt as matchesSelector, R as makeLayoutItemProps, Rt as getObjectValueByPath, S as VSvgIcon, St as debounce, Tt as destructComputed, U as acceleratedEasing, Ut as includes, V as useLayoutItem, Vt as hasEvent, W as deceleratedEasing, Wt as isClickInsideElement, Xt as keyValues, Yt as isPrimitive, Z as provideDefaults, Zt as keys, _n as propsFactory, _t as camelizeProps, an as refElement, at as HSVtoRGB, b as VComponentIcon, bt as convertToUnit, c as useDate, cn as wrapInArray, ct as RGBtoHSV, d as useGoTo, dn as SUPPORTS_EYE_DROPPER, dt as isCssColor, en as noop, et as getCurrentInstanceName, fn as SUPPORTS_INTERSECTION, ft as isParsableColor, g as useDisplay, gn as deprecate, gt as callEvent, h as makeDisplayProps, hn as consoleWarn, ht as EventProp, in as pickWithRest, it as HSVtoHex, j as provideLocale, jt as findChildrenWithProvide, kt as extractNumber, ln as IN_BROWSER, lt as getContrast, mn as consoleError, mt as CircularBuffer, n as splitKeySequence, nn as onlyDefinedProps, nt as HSVtoCSS, o as createDateRange, on as renderSlot, ot as HexToHSV, p as breakpoints, pn as SUPPORTS_MATCH_MEDIA, pt as parseColor, q as defineFunctionalComponent, qt as isObject, rn as pick, rt as HSVtoHSL, s as daysDiff, sn as templateRef, st as RGBtoCSS, t as splitKeyCombination, tn as omit, tt as HSLtoHSV, un as PREFERS_REDUCED_MOTION, ut as getForeground, v as IconValue, vt as checkPrintable, wt as defer, x as VLigatureIcon, xt as createRange, y as VClassIcon, yt as clamp, z as makeLayoutProps, zt as getPropertyFromItem } from "./hotkey-parsing-DEnHchh5.js";
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
var { defineComponent: _defineComponent } = await importShared("vue");
var { createVNode: _createVNode$142, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
var _hoisted_1 = { class: "app-container" };
var App_default = /* @__PURE__ */ _defineComponent({
	__name: "App",
	setup(__props) {
		return (_ctx, _cache) => {
			return _openBlock(), _createElementBlock("div", _hoisted_1, [_createVNode$142(Page_default)]);
		};
	}
});
const makeComponentProps = propsFactory({
	class: [
		String,
		Array,
		Object
	],
	style: {
		type: [
			String,
			Array,
			Object
		],
		default: null
	}
}, "component");
var block = ["top", "bottom"];
var inline = [
	"start",
	"end",
	"left",
	"right"
];
function parseAnchor(anchor, isRtl) {
	let [side, align] = anchor.split(" ");
	if (!align) align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
	return {
		side: toPhysical(side, isRtl),
		align: toPhysical(align, isRtl)
	};
}
function toPhysical(str, isRtl) {
	if (str === "start") return isRtl ? "right" : "left";
	if (str === "end") return isRtl ? "left" : "right";
	return str;
}
function flipSide(anchor) {
	return {
		side: {
			center: "center",
			top: "bottom",
			bottom: "top",
			left: "right",
			right: "left"
		}[anchor.side],
		align: anchor.align
	};
}
function flipAlign(anchor) {
	return {
		side: anchor.side,
		align: {
			center: "center",
			top: "bottom",
			bottom: "top",
			left: "right",
			right: "left"
		}[anchor.align]
	};
}
function flipCorner(anchor) {
	return {
		side: anchor.align,
		align: anchor.side
	};
}
function getAxis(anchor) {
	return includes(block, anchor.side) ? "y" : "x";
}
var Box = class {
	constructor(args) {
		const pageScale = document.body.currentCSSZoom ?? 1;
		const isElement = args instanceof Element;
		const factor = isElement ? 1 + (1 - pageScale) / pageScale : 1;
		const { x, y, width, height } = isElement ? args.getBoundingClientRect() : args;
		this.x = x * factor;
		this.y = y * factor;
		this.width = width * factor;
		this.height = height * factor;
	}
	get top() {
		return this.y;
	}
	get bottom() {
		return this.y + this.height;
	}
	get left() {
		return this.x;
	}
	get right() {
		return this.x + this.width;
	}
};
function getOverflow(a, b) {
	return {
		x: {
			before: Math.max(0, b.left - a.left),
			after: Math.max(0, a.right - b.right)
		},
		y: {
			before: Math.max(0, b.top - a.top),
			after: Math.max(0, a.bottom - b.bottom)
		}
	};
}
function getTargetBox(target) {
	if (Array.isArray(target)) {
		const pageScale = document.body.currentCSSZoom ?? 1;
		const factor = 1 + (1 - pageScale) / pageScale;
		return new Box({
			x: target[0] * factor,
			y: target[1] * factor,
			width: 0 * factor,
			height: 0 * factor
		});
	} else return new Box(target);
}
function getElementBox(el) {
	if (el === document.documentElement) if (!visualViewport) return new Box({
		x: 0,
		y: 0,
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
	});
	else {
		const pageScale = document.body.currentCSSZoom ?? 1;
		return new Box({
			x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
			y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
			width: visualViewport.width * visualViewport.scale / pageScale,
			height: visualViewport.height * visualViewport.scale / pageScale
		});
	}
	else return new Box(el);
}
function nullifyTransforms(el) {
	const rect = new Box(el);
	const style = getComputedStyle(el);
	const tx = style.transform;
	if (tx) {
		let ta, sx, sy, dx, dy;
		if (tx.startsWith("matrix3d(")) {
			ta = tx.slice(9, -1).split(/, /);
			sx = Number(ta[0]);
			sy = Number(ta[5]);
			dx = Number(ta[12]);
			dy = Number(ta[13]);
		} else if (tx.startsWith("matrix(")) {
			ta = tx.slice(7, -1).split(/, /);
			sx = Number(ta[0]);
			sy = Number(ta[3]);
			dx = Number(ta[4]);
			dy = Number(ta[5]);
		} else return new Box(rect);
		const to = style.transformOrigin;
		return new Box({
			x: rect.x - dx - (1 - sx) * parseFloat(to),
			y: rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1)),
			width: sx ? rect.width / sx : el.offsetWidth + 1,
			height: sy ? rect.height / sy : el.offsetHeight + 1
		});
	} else return new Box(rect);
}
function animate(el, keyframes, options) {
	if (typeof el.animate === "undefined") return { finished: Promise.resolve() };
	let animation;
	try {
		animation = el.animate(keyframes, options);
	} catch (err) {
		return { finished: Promise.resolve() };
	}
	if (typeof animation.finished === "undefined") animation.finished = new Promise((resolve) => {
		animation.onfinish = () => {
			resolve(animation);
		};
	});
	return animation;
}
var handlers = /* @__PURE__ */ new WeakMap();
function bindProps(el, props) {
	Object.keys(props).forEach((k) => {
		if (isOn(k)) {
			const name = eventName(k);
			const handler = handlers.get(el);
			if (props[k] == null) handler?.forEach((v) => {
				const [n, fn] = v;
				if (n === name) {
					el.removeEventListener(name, fn);
					handler.delete(v);
				}
			});
			else if (!handler || ![...handler]?.some((v) => v[0] === name && v[1] === props[k])) {
				el.addEventListener(name, props[k]);
				const _handler = handler || /* @__PURE__ */ new Set();
				_handler.add([name, props[k]]);
				if (!handlers.has(el)) handlers.set(el, _handler);
			}
		} else if (props[k] == null) el.removeAttribute(k);
		else el.setAttribute(k, props[k]);
	});
}
function unbindProps(el, props) {
	Object.keys(props).forEach((k) => {
		if (isOn(k)) {
			const name = eventName(k);
			const handler = handlers.get(el);
			handler?.forEach((v) => {
				const [n, fn] = v;
				if (n === name) {
					el.removeEventListener(name, fn);
					handler.delete(v);
				}
			});
		} else el.removeAttribute(k);
	});
}
var { camelize: camelize$1, capitalize: capitalize$3, h: h$5 } = await importShared("vue");
function createSimpleFunctional(klass) {
	let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
	let name = arguments.length > 2 ? arguments[2] : void 0;
	return genericComponent()({
		name: name ?? capitalize$3(camelize$1(klass.replace(/__/g, "-"))),
		props: {
			tag: {
				type: String,
				default: tag
			},
			...makeComponentProps()
		},
		setup(props, _ref) {
			let { slots } = _ref;
			return () => {
				return h$5(props.tag, {
					class: [klass, props.class],
					style: props.style
				}, slots.default?.());
			};
		}
	});
}
function updateRecursionCache(a, b, cache, result) {
	if (!cache || isPrimitive(a) || isPrimitive(b)) return;
	const visitedObject = cache.get(a);
	if (visitedObject) visitedObject.set(b, result);
	else {
		const newCacheItem = /* @__PURE__ */ new WeakMap();
		newCacheItem.set(b, result);
		cache.set(a, newCacheItem);
	}
}
function findCachedComparison(a, b, cache) {
	if (!cache || isPrimitive(a) || isPrimitive(b)) return null;
	const r1 = cache.get(a)?.get(b);
	if (typeof r1 === "boolean") return r1;
	const r2 = cache.get(b)?.get(a);
	if (typeof r2 === "boolean") return r2;
	return null;
}
function deepEqual(a, b) {
	let recursionCache = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
	if (a === b) return true;
	if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) return false;
	if (a !== Object(a) || b !== Object(b)) return false;
	const props = Object.keys(a);
	if (props.length !== Object.keys(b).length) return false;
	const cachedComparisonResult = findCachedComparison(a, b, recursionCache);
	if (cachedComparisonResult) return cachedComparisonResult;
	updateRecursionCache(a, b, recursionCache, true);
	return props.every((p) => deepEqual(a[p], b[p], recursionCache));
}
function attachedRoot(node) {
	/* istanbul ignore next */
	if (typeof node.getRootNode !== "function") {
		while (node.parentNode) node = node.parentNode;
		if (node !== document) return null;
		return document;
	}
	const root = node.getRootNode();
	if (root !== document && root.getRootNode({ composed: true }) !== document) return null;
	return root;
}
function getPrefixedEventHandlers(attrs, suffix, getData) {
	return Object.keys(attrs).filter((key) => isOn(key) && key.endsWith(suffix)).reduce((acc, key) => {
		acc[key.slice(0, -suffix.length)] = (event) => callEvent(attrs[key], event, getData(event));
		return acc;
	}, {});
}
function getScrollParent(el) {
	let includeHidden = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
	while (el) {
		if (includeHidden ? isPotentiallyScrollable(el) : hasScrollbar(el)) return el;
		el = el.parentElement;
	}
	return document.scrollingElement;
}
function getScrollParents(el, stopAt) {
	const elements = [];
	if (stopAt && el && !stopAt.contains(el)) return elements;
	while (el) {
		if (hasScrollbar(el)) elements.push(el);
		if (el === stopAt) break;
		el = el.parentElement;
	}
	return elements;
}
function hasScrollbar(el) {
	if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
	const style = window.getComputedStyle(el);
	const hasVerticalScrollbar = style.overflowY === "scroll" || style.overflowY === "auto" && el.scrollHeight > el.clientHeight;
	const hasHorizontalScrollbar = style.overflowX === "scroll" || style.overflowX === "auto" && el.scrollWidth > el.clientWidth;
	return hasVerticalScrollbar || hasHorizontalScrollbar;
}
function isPotentiallyScrollable(el) {
	if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
	const style = window.getComputedStyle(el);
	return ["scroll", "auto"].includes(style.overflowY);
}
function getIndentLines(_ref) {
	let { depth, isLast, isLastGroup, leafLinks, separateRoots, parentIndentLines, variant } = _ref;
	const isLastLeaf = isLast && (!isLastGroup || separateRoots || depth > 1);
	if (!parentIndentLines || !depth) return {
		leaf: void 0,
		node: void 0,
		children: parentIndentLines,
		footer: parentIndentLines && (!isLastLeaf || variant === "simple") ? [...parentIndentLines, separateRoots ? "none" : "line"] : ["none"]
	};
	if (variant === "simple") return {
		leaf: [...parentIndentLines, "line"],
		node: [...parentIndentLines, "line"],
		children: [...parentIndentLines, "line"],
		footer: [
			...parentIndentLines,
			"line",
			"line"
		]
	};
	return {
		leaf: [
			...parentIndentLines,
			isLastLeaf ? "last-leaf" : "leaf",
			...leafLinks ? ["leaf-link"] : []
		],
		node: [...parentIndentLines, isLastLeaf ? "last-leaf" : "leaf"],
		children: [...parentIndentLines, isLastLeaf ? "none" : "line"],
		footer: [...parentIndentLines, isLastLeaf ? "none" : "line"]
	};
}
function isFixedPosition(el) {
	while (el) {
		if (window.getComputedStyle(el).position === "fixed") return true;
		el = el.offsetParent;
	}
	return false;
}
function useRender(render$1) {
	const vm = getCurrentInstance("useRender");
	vm.render = render$1;
}
function throttle(fn, delay) {
	let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
		leading: true,
		trailing: true
	};
	let timeoutId = 0;
	let lastExec = 0;
	let throttling = false;
	let start = 0;
	function clear() {
		clearTimeout(timeoutId);
		throttling = false;
		start = 0;
	}
	const wrap = function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		clearTimeout(timeoutId);
		const now = Date.now();
		if (!start) start = now;
		const elapsed = now - Math.max(start, lastExec);
		function invoke() {
			lastExec = Date.now();
			timeoutId = setTimeout(clear, delay);
			fn(...args);
		}
		if (!throttling) {
			throttling = true;
			if (options.leading) invoke();
		} else if (elapsed >= delay) invoke();
		else if (options.trailing) timeoutId = setTimeout(invoke, delay - elapsed);
	};
	wrap.clear = clear;
	wrap.immediate = fn;
	return wrap;
}
var { createElementVNode: _createElementVNode$116, normalizeClass: _normalizeClass$101, normalizeStyle: _normalizeStyle$86 } = await importShared("vue");
const makeVAppProps = propsFactory({
	...makeComponentProps(),
	...omit(makeLayoutProps(), ["fullHeight"]),
	...makeThemeProps()
}, "VApp");
const VApp = genericComponent()({
	name: "VApp",
	props: makeVAppProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const theme = provideTheme(props);
		const { layoutClasses, getLayoutItem, items, layoutRef } = createLayout({
			...props,
			fullHeight: true
		});
		const { rtlClasses } = useRtl();
		useRender(() => _createElementVNode$116("div", {
			"ref": layoutRef,
			"class": _normalizeClass$101([
				"v-application",
				theme.themeClasses.value,
				layoutClasses.value,
				rtlClasses.value,
				props.class
			]),
			"style": _normalizeStyle$86([props.style])
		}, [_createElementVNode$116("div", { "class": "v-application__wrap" }, [slots.default?.()])]));
		return {
			getLayoutItem,
			items,
			theme
		};
	}
});
const makeTagProps = propsFactory({ tag: {
	type: [
		String,
		Object,
		Function
	],
	default: "div"
} }, "tag");
var { createElementVNode: _createElementVNode$115, normalizeClass: _normalizeClass$100, normalizeStyle: _normalizeStyle$85, createVNode: _createVNode$141 } = await importShared("vue");
const makeVToolbarTitleProps = propsFactory({
	text: String,
	...makeComponentProps(),
	...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
	name: "VToolbarTitle",
	props: makeVToolbarTitleProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => {
			const hasText = !!(slots.default || slots.text || props.text);
			return _createVNode$141(props.tag, {
				"class": _normalizeClass$100(["v-toolbar-title", props.class]),
				"style": _normalizeStyle$85(props.style)
			}, { default: () => [hasText && _createElementVNode$115("div", { "class": "v-toolbar-title__placeholder" }, [slots.text ? slots.text() : props.text, slots.default?.()])] });
		});
		return {};
	}
});
var { h: h$4, Transition: Transition$5, TransitionGroup: TransitionGroup$1 } = await importShared("vue");
const makeTransitionProps$1 = propsFactory({
	disabled: Boolean,
	group: Boolean,
	hideOnLeave: Boolean,
	leaveAbsolute: Boolean,
	mode: String,
	origin: String
}, "transition");
function createCssTransition(name, origin, mode) {
	return genericComponent()({
		name,
		props: makeTransitionProps$1({
			mode,
			origin
		}),
		setup(props, _ref) {
			let { slots } = _ref;
			const functions = {
				onBeforeEnter(el) {
					if (props.origin) el.style.transformOrigin = props.origin;
				},
				onLeave(el) {
					if (props.leaveAbsolute) {
						const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;
						el._transitionInitialStyles = {
							position: el.style.position,
							top: el.style.top,
							left: el.style.left,
							width: el.style.width,
							height: el.style.height
						};
						el.style.position = "absolute";
						el.style.top = `${offsetTop}px`;
						el.style.left = `${offsetLeft}px`;
						el.style.width = `${offsetWidth}px`;
						el.style.height = `${offsetHeight}px`;
					}
					if (props.hideOnLeave) el.style.setProperty("display", "none", "important");
				},
				onAfterLeave(el) {
					if (props.leaveAbsolute && el?._transitionInitialStyles) {
						const { position, top, left, width, height } = el._transitionInitialStyles;
						delete el._transitionInitialStyles;
						el.style.position = position || "";
						el.style.top = top || "";
						el.style.left = left || "";
						el.style.width = width || "";
						el.style.height = height || "";
					}
				}
			};
			return () => {
				return h$4(props.group ? TransitionGroup$1 : Transition$5, {
					name: props.disabled ? "" : name,
					css: !props.disabled,
					...props.group ? void 0 : { mode: props.mode },
					...props.disabled ? {} : functions
				}, slots.default);
			};
		}
	});
}
function createJavascriptTransition(name, functions) {
	let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
	return genericComponent()({
		name,
		props: {
			mode: {
				type: String,
				default: mode
			},
			disabled: {
				type: Boolean,
				default: PREFERS_REDUCED_MOTION()
			},
			group: Boolean
		},
		setup(props, _ref2) {
			let { slots } = _ref2;
			const tag = props.group ? TransitionGroup$1 : Transition$5;
			return () => {
				return h$4(tag, {
					name: props.disabled ? "" : name,
					css: !props.disabled,
					...props.disabled ? {} : functions
				}, slots.default);
			};
		}
	});
}
var { camelize } = await importShared("vue");
function expand_transition_default() {
	let expandedParentClass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
	const sizeProperty = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false) ? "width" : "height";
	const offsetProperty = camelize(`offset-${sizeProperty}`);
	return {
		onBeforeEnter(el) {
			el._parent = el.parentNode;
			el._initialStyle = {
				transition: el.style.transition,
				overflow: el.style.overflow,
				[sizeProperty]: el.style[sizeProperty]
			};
		},
		onEnter(el) {
			const initialStyle = el._initialStyle;
			if (!initialStyle) return;
			el.style.setProperty("transition", "none", "important");
			el.style.overflow = "hidden";
			const offset = `${el[offsetProperty]}px`;
			el.style[sizeProperty] = "0";
			el.offsetHeight;
			el.style.transition = initialStyle.transition;
			if (expandedParentClass && el._parent) el._parent.classList.add(expandedParentClass);
			requestAnimationFrame(() => {
				el.style[sizeProperty] = offset;
			});
		},
		onAfterEnter: resetStyles,
		onEnterCancelled: resetStyles,
		onLeave(el) {
			el._initialStyle = {
				transition: "",
				overflow: el.style.overflow,
				[sizeProperty]: el.style[sizeProperty]
			};
			el.style.overflow = "hidden";
			el.style[sizeProperty] = `${el[offsetProperty]}px`;
			el.offsetHeight;
			requestAnimationFrame(() => el.style[sizeProperty] = "0");
		},
		onAfterLeave,
		onLeaveCancelled: onAfterLeave
	};
	function onAfterLeave(el) {
		if (expandedParentClass && el._parent) el._parent.classList.remove(expandedParentClass);
		resetStyles(el);
	}
	function resetStyles(el) {
		if (!el._initialStyle) return;
		const size = el._initialStyle[sizeProperty];
		el.style.overflow = el._initialStyle.overflow;
		if (size != null) el.style[sizeProperty] = size;
		delete el._initialStyle;
	}
}
var { Transition: Transition$4, mergeProps: _mergeProps$82, createVNode: _createVNode$140 } = await importShared("vue");
const makeVDialogTransitionProps = propsFactory({ target: [Object, Array] }, "v-dialog-transition");
var saved = /* @__PURE__ */ new WeakMap();
const VDialogTransition = genericComponent()({
	name: "VDialogTransition",
	props: makeVDialogTransitionProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const functions = {
			onBeforeEnter(el) {
				el.style.pointerEvents = "none";
				el.style.visibility = "hidden";
			},
			async onEnter(el, done) {
				await new Promise((resolve) => requestAnimationFrame(resolve));
				await new Promise((resolve) => requestAnimationFrame(resolve));
				el.style.visibility = "";
				const dimensions = getDimensions(props.target, el);
				const { x, y, sx, sy, speed } = dimensions;
				saved.set(el, dimensions);
				if (PREFERS_REDUCED_MOTION()) animate(el, [{ opacity: 0 }, {}], {
					duration: 125 * speed,
					easing: deceleratedEasing
				}).finished.then(() => done());
				else {
					const animation = animate(el, [{
						transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
						opacity: 0
					}, {}], {
						duration: 225 * speed,
						easing: deceleratedEasing
					});
					getChildren(el)?.forEach((el$1) => {
						animate(el$1, [
							{ opacity: 0 },
							{
								opacity: 0,
								offset: .33
							},
							{}
						], {
							duration: 450 * speed,
							easing: standardEasing
						});
					});
					animation.finished.then(() => done());
				}
			},
			onAfterEnter(el) {
				el.style.removeProperty("pointer-events");
			},
			onBeforeLeave(el) {
				el.style.pointerEvents = "none";
			},
			async onLeave(el, done) {
				await new Promise((resolve) => requestAnimationFrame(resolve));
				let dimensions;
				if (!saved.has(el) || Array.isArray(props.target) || props.target.offsetParent || props.target.getClientRects().length) dimensions = getDimensions(props.target, el);
				else dimensions = saved.get(el);
				const { x, y, sx, sy, speed } = dimensions;
				if (PREFERS_REDUCED_MOTION()) animate(el, [{}, { opacity: 0 }], {
					duration: 85 * speed,
					easing: acceleratedEasing
				}).finished.then(() => done());
				else {
					animate(el, [{}, {
						transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
						opacity: 0
					}], {
						duration: 125 * speed,
						easing: acceleratedEasing
					}).finished.then(() => done());
					getChildren(el)?.forEach((el$1) => {
						animate(el$1, [
							{},
							{
								opacity: 0,
								offset: .2
							},
							{ opacity: 0 }
						], {
							duration: 250 * speed,
							easing: standardEasing
						});
					});
				}
			},
			onAfterLeave(el) {
				el.style.removeProperty("pointer-events");
			}
		};
		return () => {
			return props.target ? _createVNode$140(Transition$4, _mergeProps$82({ "name": "dialog-transition" }, functions, { "css": false }), slots) : _createVNode$140(Transition$4, { "name": "dialog-transition" }, slots);
		};
	}
});
function getChildren(el) {
	const els = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;
	return els && [...els];
}
function getDimensions(target, el) {
	const targetBox = getTargetBox(target);
	const elBox = nullifyTransforms(el);
	const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
	const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
	let offsetX = targetBox.left + targetBox.width / 2;
	if (anchorSide === "left" || anchorOffset === "left") offsetX -= targetBox.width / 2;
	else if (anchorSide === "right" || anchorOffset === "right") offsetX += targetBox.width / 2;
	let offsetY = targetBox.top + targetBox.height / 2;
	if (anchorSide === "top" || anchorOffset === "top") offsetY -= targetBox.height / 2;
	else if (anchorSide === "bottom" || anchorOffset === "bottom") offsetY += targetBox.height / 2;
	const tsx = targetBox.width / elBox.width;
	const tsy = targetBox.height / elBox.height;
	const maxs = Math.max(1, tsx, tsy);
	const sx = tsx / maxs || 0;
	const sy = tsy / maxs || 0;
	const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
	const speed = asa > .12 ? Math.min(1.5, (asa - .12) * 10 + 1) : 1;
	return {
		x: offsetX - (originX + elBox.left),
		y: offsetY - (originY + elBox.top),
		sx,
		sy,
		speed
	};
}
const VFabTransition = createCssTransition("fab-transition", "center center", "out-in");
const VDialogBottomTransition = createCssTransition("dialog-bottom-transition");
const VDialogTopTransition = createCssTransition("dialog-top-transition");
const VFadeTransition = createCssTransition("fade-transition");
const VScaleTransition = createCssTransition("scale-transition");
const VScrollXTransition = createCssTransition("scroll-x-transition");
const VScrollXReverseTransition = createCssTransition("scroll-x-reverse-transition");
const VScrollYTransition = createCssTransition("scroll-y-transition");
const VScrollYReverseTransition = createCssTransition("scroll-y-reverse-transition");
const VSlideXTransition = createCssTransition("slide-x-transition");
const VSlideXReverseTransition = createCssTransition("slide-x-reverse-transition");
const VSlideYTransition = createCssTransition("slide-y-transition");
const VSlideYReverseTransition = createCssTransition("slide-y-reverse-transition");
const VExpandTransition = createJavascriptTransition("expand-transition", expand_transition_default());
const VExpandXTransition = createJavascriptTransition("expand-x-transition", expand_transition_default("", true));
var { toRefs: toRefs$4 } = await importShared("vue");
const makeVDefaultsProviderProps = propsFactory({
	defaults: Object,
	disabled: Boolean,
	reset: [Number, String],
	root: [Boolean, String],
	scoped: Boolean
}, "VDefaultsProvider");
const VDefaultsProvider = genericComponent(false)({
	name: "VDefaultsProvider",
	props: makeVDefaultsProviderProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { defaults, disabled, reset, root, scoped } = toRefs$4(props);
		provideDefaults(defaults, {
			reset,
			root,
			scoped,
			disabled
		});
		return () => slots.default?.();
	}
});
var { computed: computed$126 } = await importShared("vue");
const makeDimensionProps = propsFactory({
	height: [Number, String],
	maxHeight: [Number, String],
	maxWidth: [Number, String],
	minHeight: [Number, String],
	minWidth: [Number, String],
	width: [Number, String]
}, "dimension");
function useDimension(props) {
	return { dimensionStyles: computed$126(() => {
		const styles = {};
		const height = convertToUnit(props.height);
		const maxHeight = convertToUnit(props.maxHeight);
		const maxWidth = convertToUnit(props.maxWidth);
		const minHeight = convertToUnit(props.minHeight);
		const minWidth = convertToUnit(props.minWidth);
		const width = convertToUnit(props.width);
		if (height != null) styles.height = height;
		if (maxHeight != null) styles.maxHeight = maxHeight;
		if (maxWidth != null) styles.maxWidth = maxWidth;
		if (minHeight != null) styles.minHeight = minHeight;
		if (minWidth != null) styles.minWidth = minWidth;
		if (width != null) styles.width = width;
		return styles;
	}) };
}
var { normalizeStyle: _normalizeStyle$84, createElementVNode: _createElementVNode$114, normalizeClass: _normalizeClass$99 } = await importShared("vue");
var { computed: computed$125 } = await importShared("vue");
function useAspectStyles(props) {
	return { aspectStyles: computed$125(() => {
		const ratio = Number(props.aspectRatio);
		return ratio ? { paddingBottom: String(1 / ratio * 100) + "%" } : void 0;
	}) };
}
const makeVResponsiveProps = propsFactory({
	aspectRatio: [String, Number],
	contentClass: null,
	inline: Boolean,
	...makeComponentProps(),
	...makeDimensionProps()
}, "VResponsive");
const VResponsive = genericComponent()({
	name: "VResponsive",
	props: makeVResponsiveProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { aspectStyles } = useAspectStyles(props);
		const { dimensionStyles } = useDimension(props);
		useRender(() => _createElementVNode$114("div", {
			"class": _normalizeClass$99([
				"v-responsive",
				{ "v-responsive--inline": props.inline },
				props.class
			]),
			"style": _normalizeStyle$84([dimensionStyles.value, props.style])
		}, [
			_createElementVNode$114("div", {
				"class": "v-responsive__sizer",
				"style": _normalizeStyle$84(aspectStyles.value)
			}, null),
			slots.additional?.(),
			slots.default && _createElementVNode$114("div", { "class": _normalizeClass$99(["v-responsive__content", props.contentClass]) }, [slots.default()])
		]));
		return {};
	}
});
var { toValue: toValue$7 } = await importShared("vue");
function useColor(colors) {
	return destructComputed(() => {
		const { class: colorClasses, style: colorStyles } = computeColor(colors);
		return {
			colorClasses,
			colorStyles
		};
	});
}
function useTextColor(color) {
	const { colorClasses: textColorClasses, colorStyles: textColorStyles } = useColor(() => ({ text: toValue$7(color) }));
	return {
		textColorClasses,
		textColorStyles
	};
}
function useBackgroundColor(color) {
	const { colorClasses: backgroundColorClasses, colorStyles: backgroundColorStyles } = useColor(() => ({ background: toValue$7(color) }));
	return {
		backgroundColorClasses,
		backgroundColorStyles
	};
}
function computeColor(colors) {
	const _colors = toValue$7(colors);
	const classes = [];
	const styles = {};
	if (_colors.background) if (isCssColor(_colors.background)) {
		styles.backgroundColor = _colors.background;
		if (!_colors.text && isParsableColor(_colors.background)) {
			const backgroundColor = parseColor(_colors.background);
			if (backgroundColor.a == null || backgroundColor.a === 1) {
				const textColor = getForeground(backgroundColor);
				styles.color = textColor;
				styles.caretColor = textColor;
			}
		}
	} else classes.push(`bg-${_colors.background}`);
	if (_colors.text) if (isCssColor(_colors.text)) {
		styles.color = _colors.text;
		styles.caretColor = _colors.text;
	} else classes.push(`text-${_colors.text}`);
	return {
		class: classes,
		style: styles
	};
}
var { computed: computed$124, isRef: isRef$1 } = await importShared("vue");
const makeRoundedProps = propsFactory({
	rounded: {
		type: [
			Boolean,
			Number,
			String
		],
		default: void 0
	},
	tile: Boolean
}, "rounded");
function useRounded(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { roundedClasses: computed$124(() => {
		const rounded = isRef$1(props) ? props.value : props.rounded;
		const tile = isRef$1(props) ? false : props.tile;
		const classes = [];
		if (tile || rounded === false) classes.push("rounded-0");
		else if (rounded === true || rounded === "") classes.push(`${name}--rounded`);
		else if (typeof rounded === "string" || rounded === 0) for (const value of String(rounded).split(" ")) classes.push(`rounded-${value}`);
		return classes;
	}) };
}
var { h: h$3, mergeProps: mergeProps$13, Transition: Transition$3, TransitionGroup } = await importShared("vue");
const makeTransitionProps = propsFactory({ transition: {
	type: null,
	default: "fade-transition",
	validator: (val) => val !== true
} }, "transition");
const MaybeTransition = (props, _ref) => {
	let { slots } = _ref;
	const { transition, disabled, group, ...rest } = props;
	const { component = group ? TransitionGroup : Transition$3, ...customProps } = isObject(transition) ? transition : {};
	let transitionProps;
	if (isObject(transition)) transitionProps = mergeProps$13(customProps, onlyDefinedProps({
		disabled,
		group
	}), rest);
	else transitionProps = mergeProps$13({ name: disabled || !transition ? "" : transition }, rest);
	return h$3(component, transitionProps, slots);
};
function mounted$5(el, binding) {
	if (!SUPPORTS_INTERSECTION) return;
	const modifiers = binding.modifiers || {};
	const value = binding.value;
	const { handler, options } = typeof value === "object" ? value : {
		handler: value,
		options: {}
	};
	const observer = new IntersectionObserver(function() {
		let entries = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
		let observer$1 = arguments.length > 1 ? arguments[1] : void 0;
		const _observe = el._observe?.[binding.instance.$.uid];
		if (!_observe) return;
		const isIntersecting = entries.some((entry) => entry.isIntersecting);
		if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) handler(isIntersecting, entries, observer$1);
		if (isIntersecting && modifiers.once) unmounted$5(el, binding);
		else _observe.init = true;
	}, options);
	el._observe = Object(el._observe);
	el._observe[binding.instance.$.uid] = {
		init: false,
		observer
	};
	observer.observe(el);
}
function unmounted$5(el, binding) {
	const observe = el._observe?.[binding.instance.$.uid];
	if (!observe) return;
	observe.observer.unobserve(el);
	delete el._observe[binding.instance.$.uid];
}
const Intersect = {
	mounted: mounted$5,
	unmounted: unmounted$5
};
var intersect_default = Intersect;
var { normalizeClass: _normalizeClass$98, createElementVNode: _createElementVNode$113, createVNode: _createVNode$139, Fragment: _Fragment$46, mergeProps: _mergeProps$81, withDirectives: _withDirectives$22 } = await importShared("vue");
var { computed: computed$123, nextTick: nextTick$30, onBeforeMount: onBeforeMount$4, onBeforeUnmount: onBeforeUnmount$10, ref: ref$64, shallowRef: shallowRef$53, toRef: toRef$74, vShow, watch: watch$50, withDirectives: withDirectives$2 } = await importShared("vue");
const makeVImgProps = propsFactory({
	absolute: Boolean,
	alt: String,
	cover: Boolean,
	color: String,
	draggable: {
		type: [Boolean, String],
		default: void 0
	},
	eager: Boolean,
	gradient: String,
	lazySrc: String,
	options: {
		type: Object,
		default: () => ({
			root: void 0,
			rootMargin: void 0,
			threshold: void 0
		})
	},
	sizes: String,
	src: {
		type: [String, Object],
		default: ""
	},
	crossorigin: String,
	referrerpolicy: String,
	srcset: String,
	position: String,
	...makeVResponsiveProps(),
	...makeComponentProps(),
	...makeRoundedProps(),
	...makeTransitionProps()
}, "VImg");
const VImg = genericComponent()({
	name: "VImg",
	directives: { vIntersect: intersect_default },
	props: makeVImgProps(),
	emits: {
		loadstart: (value) => true,
		load: (value) => true,
		error: (value) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { roundedClasses } = useRounded(props);
		const vm = getCurrentInstance("VImg");
		const currentSrc = shallowRef$53("");
		const image = ref$64();
		const state = shallowRef$53(props.eager ? "loading" : "idle");
		const naturalWidth = shallowRef$53();
		const naturalHeight = shallowRef$53();
		const normalisedSrc = computed$123(() => {
			return props.src && typeof props.src === "object" ? {
				src: props.src.src,
				srcset: props.srcset || props.src.srcset,
				lazySrc: props.lazySrc || props.src.lazySrc,
				aspect: Number(props.aspectRatio || props.src.aspect || 0)
			} : {
				src: props.src,
				srcset: props.srcset,
				lazySrc: props.lazySrc,
				aspect: Number(props.aspectRatio || 0)
			};
		});
		const aspectRatio = computed$123(() => {
			return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
		});
		watch$50(() => props.src, () => {
			init(state.value !== "idle");
		});
		watch$50(aspectRatio, (val, oldVal) => {
			if (!val && oldVal && image.value) pollForSize(image.value);
		});
		onBeforeMount$4(() => init());
		function init(isIntersecting) {
			if (props.eager && isIntersecting) return;
			if (SUPPORTS_INTERSECTION && !isIntersecting && !props.eager) return;
			state.value = "loading";
			if (normalisedSrc.value.lazySrc) {
				const lazyImg = new Image();
				lazyImg.src = normalisedSrc.value.lazySrc;
				pollForSize(lazyImg, null);
			}
			if (!normalisedSrc.value.src) return;
			nextTick$30(() => {
				emit("loadstart", image.value?.currentSrc || normalisedSrc.value.src);
				setTimeout(() => {
					if (vm.isUnmounted) return;
					if (image.value?.complete) {
						if (!image.value.naturalWidth) onError();
						if (state.value === "error") return;
						if (!aspectRatio.value) pollForSize(image.value, null);
						if (state.value === "loading") onLoad();
					} else {
						if (!aspectRatio.value) pollForSize(image.value);
						getSrc();
					}
				});
			});
		}
		function onLoad() {
			if (vm.isUnmounted) return;
			getSrc();
			pollForSize(image.value);
			state.value = "loaded";
			emit("load", image.value?.currentSrc || normalisedSrc.value.src);
		}
		function onError() {
			if (vm.isUnmounted) return;
			state.value = "error";
			emit("error", image.value?.currentSrc || normalisedSrc.value.src);
		}
		function getSrc() {
			const img = image.value;
			if (img) currentSrc.value = img.currentSrc || img.src;
		}
		let timer = -1;
		onBeforeUnmount$10(() => {
			clearTimeout(timer);
		});
		function pollForSize(img) {
			let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
			const poll = () => {
				clearTimeout(timer);
				if (vm.isUnmounted) return;
				const { naturalHeight: imgHeight, naturalWidth: imgWidth } = img;
				if (imgHeight || imgWidth) {
					naturalWidth.value = imgWidth;
					naturalHeight.value = imgHeight;
				} else if (!img.complete && state.value === "loading" && timeout != null) timer = window.setTimeout(poll, timeout);
				else if (img.currentSrc.endsWith(".svg") || img.currentSrc.startsWith("data:image/svg+xml")) {
					naturalWidth.value = 1;
					naturalHeight.value = 1;
				}
			};
			poll();
		}
		const containClasses = toRef$74(() => ({
			"v-img__img--cover": props.cover,
			"v-img__img--contain": !props.cover
		}));
		const __image = () => {
			if (!normalisedSrc.value.src || state.value === "idle") return null;
			const img = _createElementVNode$113("img", {
				"class": _normalizeClass$98(["v-img__img", containClasses.value]),
				"style": { objectPosition: props.position },
				"crossorigin": props.crossorigin,
				"src": normalisedSrc.value.src,
				"srcset": normalisedSrc.value.srcset,
				"alt": props.alt,
				"referrerpolicy": props.referrerpolicy,
				"draggable": props.draggable,
				"sizes": props.sizes,
				"ref": image,
				"onLoad": onLoad,
				"onError": onError
			}, null);
			const sources = slots.sources?.();
			return _createVNode$139(MaybeTransition, {
				"transition": props.transition,
				"appear": true
			}, { default: () => [withDirectives$2(sources ? _createElementVNode$113("picture", { "class": "v-img__picture" }, [sources, img]) : img, [[vShow, state.value === "loaded"]])] });
		};
		const __preloadImage = () => _createVNode$139(MaybeTransition, { "transition": props.transition }, { default: () => [normalisedSrc.value.lazySrc && state.value !== "loaded" && _createElementVNode$113("img", {
			"class": _normalizeClass$98([
				"v-img__img",
				"v-img__img--preload",
				containClasses.value
			]),
			"style": { objectPosition: props.position },
			"crossorigin": props.crossorigin,
			"src": normalisedSrc.value.lazySrc,
			"alt": props.alt,
			"referrerpolicy": props.referrerpolicy,
			"draggable": props.draggable
		}, null)] });
		const __placeholder = () => {
			if (!slots.placeholder) return null;
			return _createVNode$139(MaybeTransition, {
				"transition": props.transition,
				"appear": true
			}, { default: () => [(state.value === "loading" || state.value === "error" && !slots.error) && _createElementVNode$113("div", { "class": "v-img__placeholder" }, [slots.placeholder()])] });
		};
		const __error = () => {
			if (!slots.error) return null;
			return _createVNode$139(MaybeTransition, {
				"transition": props.transition,
				"appear": true
			}, { default: () => [state.value === "error" && _createElementVNode$113("div", { "class": "v-img__error" }, [slots.error()])] });
		};
		const __gradient = () => {
			if (!props.gradient) return null;
			return _createElementVNode$113("div", {
				"class": "v-img__gradient",
				"style": { backgroundImage: `linear-gradient(${props.gradient})` }
			}, null);
		};
		const isBooted = shallowRef$53(false);
		{
			const stop = watch$50(aspectRatio, (val) => {
				if (val) {
					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							isBooted.value = true;
						});
					});
					stop();
				}
			});
		}
		useRender(() => {
			const responsiveProps = VResponsive.filterProps(props);
			return _withDirectives$22(_createVNode$139(VResponsive, _mergeProps$81({
				"class": [
					"v-img",
					{
						"v-img--absolute": props.absolute,
						"v-img--booting": !isBooted.value
					},
					backgroundColorClasses.value,
					roundedClasses.value,
					props.class
				],
				"style": [
					{ width: convertToUnit(props.width === "auto" ? naturalWidth.value : props.width) },
					backgroundColorStyles.value,
					props.style
				]
			}, responsiveProps, {
				"aspectRatio": aspectRatio.value,
				"aria-label": props.alt,
				"role": props.alt ? "img" : void 0
			}), {
				additional: () => _createElementVNode$113(_Fragment$46, null, [
					_createVNode$139(__image, null, null),
					_createVNode$139(__preloadImage, null, null),
					_createVNode$139(__gradient, null, null),
					_createVNode$139(__placeholder, null, null),
					_createVNode$139(__error, null, null)
				]),
				default: slots.default
			}), [[
				intersect_default,
				{
					handler: init,
					options: props.options
				},
				null,
				{ once: true }
			]]);
		});
		return {
			currentSrc,
			image,
			state,
			naturalWidth,
			naturalHeight
		};
	}
});
var { computed: computed$122 } = await importShared("vue");
const makeBorderProps = propsFactory({ border: [
	Boolean,
	Number,
	String
] }, "border");
function useBorder(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { borderClasses: computed$122(() => {
		const border = props.border;
		if (border === true || border === "") return `${name}--border`;
		else if (typeof border === "string" || border === 0) return String(border).split(" ").map((v) => `border-${v}`);
		return [];
	}) };
}
var { isRef, toRef: toRef$73 } = await importShared("vue");
const makeElevationProps = propsFactory({ elevation: {
	type: [Number, String],
	validator(v) {
		const value = parseInt(v);
		return !isNaN(value) && value >= 0 && value <= 24;
	}
} }, "elevation");
function useElevation(props) {
	return { elevationClasses: toRef$73(() => {
		const elevation = isRef(props) ? props.value : props.elevation;
		if (elevation == null) return [];
		return [`elevation-${elevation}`];
	}) };
}
var { createVNode: _createVNode$138, createElementVNode: _createElementVNode$112, normalizeClass: _normalizeClass$97, normalizeStyle: _normalizeStyle$83 } = await importShared("vue");
var { computed: computed$121, shallowRef: shallowRef$52 } = await importShared("vue");
var allowedDensities$1 = [
	null,
	"prominent",
	"default",
	"comfortable",
	"compact"
];
const makeVToolbarProps = propsFactory({
	absolute: Boolean,
	collapse: Boolean,
	collapsePosition: {
		type: String,
		default: "start"
	},
	color: String,
	density: {
		type: String,
		default: "default",
		validator: (v) => allowedDensities$1.includes(v)
	},
	extended: {
		type: Boolean,
		default: null
	},
	extensionHeight: {
		type: [Number, String],
		default: 48
	},
	flat: Boolean,
	floating: Boolean,
	height: {
		type: [Number, String],
		default: 64
	},
	image: String,
	title: String,
	...makeBorderProps(),
	...makeComponentProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeTagProps({ tag: "header" }),
	...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
	name: "VToolbar",
	props: makeVToolbarProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { borderClasses } = useBorder(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const { themeClasses } = provideTheme(props);
		const { rtlClasses } = useRtl();
		const isExtended = shallowRef$52(props.extended === null ? !!slots.extension?.() : props.extended);
		const contentHeight = computed$121(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
		const extensionHeight = computed$121(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
		provideDefaults({ VBtn: { variant: "text" } });
		useRender(() => {
			const hasTitle = !!(props.title || slots.title);
			const hasImage = !!(slots.image || props.image);
			const extension = slots.extension?.();
			isExtended.value = props.extended === null ? !!extension : props.extended;
			return _createVNode$138(props.tag, {
				"class": _normalizeClass$97([
					"v-toolbar",
					`v-toolbar--collapse-${props.collapsePosition}`,
					{
						"v-toolbar--absolute": props.absolute,
						"v-toolbar--collapse": props.collapse,
						"v-toolbar--flat": props.flat,
						"v-toolbar--floating": props.floating,
						[`v-toolbar--density-${props.density}`]: true
					},
					backgroundColorClasses.value,
					borderClasses.value,
					elevationClasses.value,
					roundedClasses.value,
					themeClasses.value,
					rtlClasses.value,
					props.class
				]),
				"style": _normalizeStyle$83([backgroundColorStyles.value, props.style])
			}, { default: () => [
				hasImage && _createElementVNode$112("div", {
					"key": "image",
					"class": "v-toolbar__image"
				}, [!slots.image ? _createVNode$138(VImg, {
					"key": "image-img",
					"cover": true,
					"src": props.image
				}, null) : _createVNode$138(VDefaultsProvider, {
					"key": "image-defaults",
					"disabled": !props.image,
					"defaults": { VImg: {
						cover: true,
						src: props.image
					} }
				}, slots.image)]),
				_createVNode$138(VDefaultsProvider, { "defaults": { VTabs: { height: convertToUnit(contentHeight.value) } } }, { default: () => [_createElementVNode$112("div", {
					"class": "v-toolbar__content",
					"style": { height: convertToUnit(contentHeight.value) }
				}, [
					slots.prepend && _createElementVNode$112("div", { "class": "v-toolbar__prepend" }, [slots.prepend?.()]),
					hasTitle && _createVNode$138(VToolbarTitle, {
						"key": "title",
						"text": props.title
					}, { text: slots.title }),
					slots.default?.(),
					slots.append && _createElementVNode$112("div", { "class": "v-toolbar__append" }, [slots.append?.()])
				])] }),
				_createVNode$138(VDefaultsProvider, { "defaults": { VTabs: { height: convertToUnit(extensionHeight.value) } } }, { default: () => [_createVNode$138(VExpandTransition, null, { default: () => [isExtended.value && _createElementVNode$112("div", {
					"class": "v-toolbar__extension",
					"style": { height: convertToUnit(extensionHeight.value) }
				}, [extension])] })] })
			] });
		});
		return {
			contentHeight,
			extensionHeight
		};
	}
});
var { computed: computed$120, onBeforeUnmount: onBeforeUnmount$9, onMounted: onMounted$16, ref: ref$63, shallowRef: shallowRef$51, watch: watch$49 } = await importShared("vue");
const makeScrollProps = propsFactory({
	scrollTarget: { type: String },
	scrollThreshold: {
		type: [String, Number],
		default: 300
	}
}, "scroll");
function useScroll(props) {
	const { canScroll, layoutSize } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	let previousScroll = 0;
	let previousScrollHeight = 0;
	const target = ref$63(null);
	const currentScroll = shallowRef$51(0);
	const savedScroll = shallowRef$51(0);
	const currentThreshold = shallowRef$51(0);
	const isScrollActive = shallowRef$51(false);
	const isScrollingUp = shallowRef$51(false);
	const isAtBottom = shallowRef$51(false);
	const reachedBottomWhileScrollingDown = shallowRef$51(false);
	const hasEnoughScrollableSpace = shallowRef$51(true);
	const scrollThreshold = computed$120(() => {
		return Number(props.scrollThreshold);
	});
	const scrollRatio = computed$120(() => {
		return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
	});
	function getScrollMetrics(targetEl) {
		return {
			clientHeight: "window" in targetEl ? window.innerHeight : targetEl.clientHeight,
			scrollHeight: "window" in targetEl ? document.documentElement.scrollHeight : targetEl.scrollHeight
		};
	}
	function checkScrollableSpace() {
		const targetEl = target.value;
		if (!targetEl) return;
		const { clientHeight, scrollHeight } = getScrollMetrics(targetEl);
		const maxScrollableDistance = scrollHeight - clientHeight;
		const elementHeight = layoutSize?.value || 0;
		hasEnoughScrollableSpace.value = maxScrollableDistance > scrollThreshold.value + elementHeight;
	}
	function onResize() {
		checkScrollableSpace();
	}
	function onScroll() {
		const targetEl = target.value;
		if (!targetEl || canScroll && !canScroll.value) return;
		previousScroll = currentScroll.value;
		currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
		const currentScrollHeight = targetEl instanceof Window ? document.documentElement.scrollHeight : targetEl.scrollHeight;
		if (previousScrollHeight !== currentScrollHeight) {
			if (currentScrollHeight > previousScrollHeight) checkScrollableSpace();
			previousScrollHeight = currentScrollHeight;
		}
		isScrollingUp.value = currentScroll.value < previousScroll;
		currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
		const { clientHeight, scrollHeight } = getScrollMetrics(targetEl);
		const atBottom = currentScroll.value + clientHeight >= scrollHeight - 5;
		if (!isScrollingUp.value && atBottom && currentScroll.value >= scrollThreshold.value && hasEnoughScrollableSpace.value) reachedBottomWhileScrollingDown.value = true;
		const scrollJumped = Math.abs(currentScroll.value - previousScroll) > 100;
		const atTop = currentScroll.value <= 5;
		if (isScrollingUp.value && previousScroll - currentScroll.value > 1 && !atBottom || scrollJumped && currentScroll.value < scrollThreshold.value || atTop) reachedBottomWhileScrollingDown.value = false;
		isAtBottom.value = atBottom;
	}
	watch$49(isScrollingUp, () => {
		savedScroll.value = savedScroll.value || currentScroll.value;
	});
	watch$49(isScrollActive, () => {
		savedScroll.value = 0;
	});
	onMounted$16(() => {
		watch$49(() => props.scrollTarget, (scrollTarget) => {
			const newTarget = scrollTarget ? document.querySelector(scrollTarget) : window;
			if (!newTarget) {
				consoleWarn(`Unable to locate element with identifier ${scrollTarget}`);
				return;
			}
			if (newTarget === target.value) return;
			target.value?.removeEventListener("scroll", onScroll);
			target.value = newTarget;
			target.value.addEventListener("scroll", onScroll, { passive: true });
			Promise.resolve().then(() => {
				checkScrollableSpace();
			});
		}, { immediate: true });
		window.addEventListener("resize", onResize, { passive: true });
	});
	onBeforeUnmount$9(() => {
		target.value?.removeEventListener("scroll", onScroll);
		window.removeEventListener("resize", onResize);
	});
	canScroll && watch$49(canScroll, onScroll, { immediate: true });
	return {
		scrollThreshold,
		currentScroll,
		currentThreshold,
		isScrollActive,
		scrollRatio,
		isScrollingUp,
		savedScroll,
		isAtBottom,
		reachedBottomWhileScrollingDown,
		hasEnoughScrollableSpace
	};
}
var { onMounted: onMounted$15, readonly: readonly$2, shallowRef: shallowRef$50, toRef: toRef$72 } = await importShared("vue");
function useSsrBoot() {
	const isBooted = shallowRef$50(false);
	onMounted$15(() => {
		window.requestAnimationFrame(() => {
			isBooted.value = true;
		});
	});
	return {
		ssrBootStyles: toRef$72(() => !isBooted.value ? { transition: "none !important" } : void 0),
		isBooted: readonly$2(isBooted)
	};
}
var { mergeProps: _mergeProps$80, createVNode: _createVNode$137 } = await importShared("vue");
var { computed: computed$119, ref: ref$62, shallowRef: shallowRef$49, toRef: toRef$71, watchEffect: watchEffect$19 } = await importShared("vue");
const makeVAppBarProps = propsFactory({
	scrollBehavior: String,
	modelValue: {
		type: Boolean,
		default: true
	},
	location: {
		type: String,
		default: "top",
		validator: (value) => ["top", "bottom"].includes(value)
	},
	...makeVToolbarProps(),
	...makeLayoutItemProps(),
	...makeScrollProps(),
	height: {
		type: [Number, String],
		default: 64
	}
}, "VAppBar");
const VAppBar = genericComponent()({
	name: "VAppBar",
	props: makeVAppBarProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const vToolbarRef = ref$62();
		const isActive = useProxiedModel(props, "modelValue");
		const scrollBehavior = computed$119(() => {
			const behavior = new Set(props.scrollBehavior?.split(" ") ?? []);
			return {
				hide: behavior.has("hide"),
				fullyHide: behavior.has("fully-hide"),
				inverted: behavior.has("inverted"),
				collapse: behavior.has("collapse"),
				elevate: behavior.has("elevate"),
				fadeImage: behavior.has("fade-image")
			};
		});
		const { currentScroll, scrollThreshold, isScrollingUp, scrollRatio, isAtBottom, reachedBottomWhileScrollingDown, hasEnoughScrollableSpace } = useScroll(props, {
			canScroll: computed$119(() => {
				const behavior = scrollBehavior.value;
				return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || !isActive.value;
			}),
			layoutSize: computed$119(() => {
				return (vToolbarRef.value?.contentHeight ?? 0) + (vToolbarRef.value?.extensionHeight ?? 0);
			})
		});
		const canHide = toRef$71(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
		const isCollapsed = computed$119(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
		const isFlat = computed$119(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
		const opacity = computed$119(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
		const height = computed$119(() => {
			if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
			const height$1 = vToolbarRef.value?.contentHeight ?? 0;
			const extensionHeight = vToolbarRef.value?.extensionHeight ?? 0;
			if (!canHide.value) return height$1 + extensionHeight;
			return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height$1 + extensionHeight : height$1;
		});
		useToggleScope(() => !!props.scrollBehavior, () => {
			watchEffect$19(() => {
				if (!canHide.value) {
					isActive.value = true;
					return;
				}
				if (scrollBehavior.value.inverted) {
					isActive.value = currentScroll.value > scrollThreshold.value;
					return;
				}
				if (!hasEnoughScrollableSpace.value) {
					isActive.value = true;
					return;
				}
				if (reachedBottomWhileScrollingDown.value) {
					isActive.value = false;
					return;
				}
				isActive.value = isScrollingUp.value && !isAtBottom.value || currentScroll.value < scrollThreshold.value;
			});
		});
		const { ssrBootStyles } = useSsrBoot();
		const { layoutItemStyles } = useLayoutItem({
			id: props.name,
			order: computed$119(() => parseInt(props.order, 10)),
			position: toRef$71(() => props.location),
			layoutSize: height,
			elementSize: shallowRef$49(void 0),
			active: isActive,
			absolute: toRef$71(() => props.absolute)
		});
		useRender(() => {
			const toolbarProps = VToolbar.filterProps(props);
			return _createVNode$137(VToolbar, _mergeProps$80({
				"ref": vToolbarRef,
				"class": [
					"v-app-bar",
					{ "v-app-bar--bottom": props.location === "bottom" },
					props.class
				],
				"style": [{
					...layoutItemStyles.value,
					"--v-toolbar-image-opacity": opacity.value,
					height: void 0,
					...ssrBootStyles.value
				}, props.style]
			}, toolbarProps, {
				"collapse": isCollapsed.value,
				"flat": isFlat.value
			}), slots);
		});
		return {};
	}
});
var { toRef: toRef$70 } = await importShared("vue");
var allowedDensities = [
	null,
	"default",
	"comfortable",
	"compact"
];
const makeDensityProps = propsFactory({ density: {
	type: String,
	default: "default",
	validator: (v) => allowedDensities.includes(v)
} }, "density");
function useDensity(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { densityClasses: toRef$70(() => {
		return `${name}--density-${props.density}`;
	}) };
}
var { Fragment: _Fragment$45, normalizeClass: _normalizeClass$96, createElementVNode: _createElementVNode$111 } = await importShared("vue");
var { toRef: toRef$69, toValue: toValue$6 } = await importShared("vue");
const allowedVariants$3 = [
	"elevated",
	"flat",
	"tonal",
	"outlined",
	"text",
	"plain"
];
function genOverlays(isClickable, name) {
	return _createElementVNode$111(_Fragment$45, null, [isClickable && _createElementVNode$111("span", {
		"key": "overlay",
		"class": _normalizeClass$96(`${name}__overlay`)
	}, null), _createElementVNode$111("span", {
		"key": "underlay",
		"class": _normalizeClass$96(`${name}__underlay`)
	}, null)]);
}
const makeVariantProps = propsFactory({
	color: String,
	variant: {
		type: String,
		default: "elevated",
		validator: (v) => allowedVariants$3.includes(v)
	}
}, "variant");
function useVariant(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	const variantClasses = toRef$69(() => {
		const { variant } = toValue$6(props);
		return `${name}--variant-${variant}`;
	});
	const { colorClasses, colorStyles } = useColor(() => {
		const { variant, color } = toValue$6(props);
		return { [["elevated", "flat"].includes(variant) ? "background" : "text"]: color };
	});
	return {
		colorClasses,
		colorStyles,
		variantClasses
	};
}
var { normalizeClass: _normalizeClass$95, normalizeStyle: _normalizeStyle$82, createVNode: _createVNode$136 } = await importShared("vue");
var { toRef: toRef$68 } = await importShared("vue");
const makeVBtnGroupProps = propsFactory({
	baseColor: String,
	divided: Boolean,
	direction: {
		type: String,
		default: "horizontal"
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps()
}, "VBtnGroup");
const VBtnGroup = genericComponent()({
	name: "VBtnGroup",
	props: makeVBtnGroupProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { densityClasses } = useDensity(props);
		const { borderClasses } = useBorder(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		provideDefaults({ VBtn: {
			height: toRef$68(() => props.direction === "horizontal" ? "auto" : null),
			baseColor: toRef$68(() => props.baseColor),
			color: toRef$68(() => props.color),
			density: toRef$68(() => props.density),
			flat: true,
			variant: toRef$68(() => props.variant)
		} });
		useRender(() => {
			return _createVNode$136(props.tag, {
				"class": _normalizeClass$95([
					"v-btn-group",
					`v-btn-group--${props.direction}`,
					{ "v-btn-group--divided": props.divided },
					themeClasses.value,
					borderClasses.value,
					densityClasses.value,
					elevationClasses.value,
					roundedClasses.value,
					props.class
				]),
				"style": _normalizeStyle$82(props.style)
			}, slots);
		});
	}
});
var { computed: computed$118, inject: inject$24, onBeforeUnmount: onBeforeUnmount$8, onMounted: onMounted$14, onUpdated: onUpdated$1, provide: provide$17, reactive: reactive$4, toRef: toRef$67, unref: unref$2, useId: useId$15, watch: watch$48 } = await importShared("vue");
const makeGroupProps = propsFactory({
	modelValue: {
		type: null,
		default: void 0
	},
	multiple: Boolean,
	mandatory: [Boolean, String],
	max: Number,
	selectedClass: String,
	disabled: Boolean
}, "group");
const makeGroupItemProps = propsFactory({
	value: null,
	disabled: Boolean,
	selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
	let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
	const vm = getCurrentInstance("useGroupItem");
	if (!vm) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
	const id = useId$15();
	provide$17(Symbol.for(`${injectKey.description}:id`), id);
	const group = inject$24(injectKey, null);
	if (!group) {
		if (!required) return group;
		throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
	}
	const value = toRef$67(() => props.value);
	const disabled = computed$118(() => !!(group.disabled.value || props.disabled));
	function register() {
		group?.register({
			id,
			value,
			disabled
		}, vm);
	}
	function unregister() {
		group?.unregister(id);
	}
	register();
	onBeforeUnmount$8(() => unregister());
	const isSelected = computed$118(() => {
		return group.isSelected(id);
	});
	const isFirst = computed$118(() => {
		return group.items.value[0].id === id;
	});
	const isLast = computed$118(() => {
		return group.items.value[group.items.value.length - 1].id === id;
	});
	const selectedClass = computed$118(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
	watch$48(isSelected, (value$1) => {
		vm.emit("group:selected", { value: value$1 });
	}, { flush: "sync" });
	return {
		id,
		isSelected,
		isFirst,
		isLast,
		toggle: () => group.select(id, !isSelected.value),
		select: (value$1) => group.select(id, value$1),
		selectedClass,
		value,
		disabled,
		group,
		register,
		unregister
	};
}
function useGroup(props, injectKey) {
	let isUnmounted = false;
	const items = reactive$4([]);
	const selected = useProxiedModel(props, "modelValue", [], (v) => {
		if (v === void 0) return [];
		return getIds(items, v === null ? [null] : wrapInArray(v));
	}, (v) => {
		const arr = getValues(items, v);
		return props.multiple ? arr : arr[0];
	});
	const groupVm = getCurrentInstance("useGroup");
	function register(item, vm) {
		const unwrapped = item;
		const index = findChildrenWithProvide(Symbol.for(`${injectKey.description}:id`), groupVm?.vnode).indexOf(vm);
		if (unref$2(unwrapped.value) === void 0) {
			unwrapped.value = index;
			unwrapped.useIndexAsValue = true;
		}
		if (index > -1) items.splice(index, 0, unwrapped);
		else items.push(unwrapped);
	}
	function unregister(id) {
		if (isUnmounted) return;
		forceMandatoryValue();
		const index = items.findIndex((item) => item.id === id);
		items.splice(index, 1);
	}
	function forceMandatoryValue() {
		const item = items.find((item$1) => !item$1.disabled);
		if (item && props.mandatory === "force" && !selected.value.length) selected.value = [item.id];
	}
	onMounted$14(() => {
		forceMandatoryValue();
	});
	onBeforeUnmount$8(() => {
		isUnmounted = true;
	});
	onUpdated$1(() => {
		for (let i = 0; i < items.length; i++) if (items[i].useIndexAsValue) items[i].value = i;
	});
	function select(id, value) {
		const item = items.find((item$1) => item$1.id === id);
		if (value && item?.disabled) return;
		if (props.multiple) {
			const internalValue = selected.value.slice();
			const index = internalValue.findIndex((v) => v === id);
			const isSelected = ~index;
			value = value ?? !isSelected;
			if (isSelected && props.mandatory && internalValue.length <= 1) return;
			if (!isSelected && props.max != null && internalValue.length + 1 > props.max) return;
			if (index < 0 && value) internalValue.push(id);
			else if (index >= 0 && !value) internalValue.splice(index, 1);
			selected.value = internalValue;
		} else {
			const isSelected = selected.value.includes(id);
			if (props.mandatory && isSelected) return;
			if (!isSelected && !value) return;
			selected.value = value ?? !isSelected ? [id] : [];
		}
	}
	function step(offset) {
		if (props.multiple) consoleWarn("This method is not supported when using \"multiple\" prop");
		if (!selected.value.length) {
			const item = items.find((item$1) => !item$1.disabled);
			item && (selected.value = [item.id]);
		} else {
			const currentId = selected.value[0];
			const currentIndex = items.findIndex((i) => i.id === currentId);
			let newIndex = (currentIndex + offset) % items.length;
			let newItem = items[newIndex];
			while (newItem.disabled && newIndex !== currentIndex) {
				newIndex = (newIndex + offset) % items.length;
				newItem = items[newIndex];
			}
			if (newItem.disabled) return;
			selected.value = [items[newIndex].id];
		}
	}
	const state = {
		register,
		unregister,
		selected,
		select,
		disabled: toRef$67(() => props.disabled),
		prev: () => step(items.length - 1),
		next: () => step(1),
		isSelected: (id) => selected.value.includes(id),
		selectedClass: toRef$67(() => props.selectedClass),
		items: toRef$67(() => items),
		getItemIndex: (value) => getItemIndex(items, value)
	};
	provide$17(injectKey, state);
	return state;
}
function getItemIndex(items, value) {
	const ids = getIds(items, [value]);
	if (!ids.length) return -1;
	return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
	const ids = [];
	modelValue.forEach((value) => {
		const item = items.find((item$1) => deepEqual(value, item$1.value));
		const itemByIndex = items[value];
		if (item?.value !== void 0) ids.push(item.id);
		else if (itemByIndex?.useIndexAsValue) ids.push(itemByIndex.id);
	});
	return ids;
}
function getValues(items, ids) {
	const values = [];
	ids.forEach((id) => {
		const itemIndex = items.findIndex((item) => item.id === id);
		if (~itemIndex) {
			const item = items[itemIndex];
			values.push(item.value !== void 0 ? item.value : itemIndex);
		}
	});
	return values;
}
var { mergeProps: _mergeProps$79, createVNode: _createVNode$135 } = await importShared("vue");
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
const makeVBtnToggleProps = propsFactory({
	...makeVBtnGroupProps(),
	...makeGroupProps()
}, "VBtnToggle");
const VBtnToggle = genericComponent()({
	name: "VBtnToggle",
	props: makeVBtnToggleProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { isSelected, next, prev, select, selected } = useGroup(props, VBtnToggleSymbol);
		useRender(() => {
			const btnGroupProps = VBtnGroup.filterProps(props);
			return _createVNode$135(VBtnGroup, _mergeProps$79({ "class": ["v-btn-toggle", props.class] }, btnGroupProps, { "style": props.style }), { default: () => [slots.default?.({
				isSelected,
				next,
				prev,
				select,
				selected
			})] });
		});
		return {
			next,
			prev,
			select
		};
	}
});
var predefinedSizes = [
	"x-small",
	"small",
	"default",
	"large",
	"x-large"
];
const makeSizeProps = propsFactory({ size: {
	type: [String, Number],
	default: "default"
} }, "size");
function useSize(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return destructComputed(() => {
		const size = props.size;
		let sizeClasses;
		let sizeStyles;
		if (includes(predefinedSizes, size)) sizeClasses = `${name}--size-${size}`;
		else if (size) sizeStyles = {
			width: convertToUnit(size),
			height: convertToUnit(size)
		};
		return {
			sizeClasses,
			sizeStyles
		};
	});
}
var { normalizeClass: _normalizeClass$94, normalizeStyle: _normalizeStyle$81, createVNode: _createVNode$134 } = await importShared("vue");
var { shallowRef: shallowRef$48, Text } = await importShared("vue");
const makeVIconProps = propsFactory({
	color: String,
	disabled: Boolean,
	start: Boolean,
	end: Boolean,
	icon: IconValue,
	opacity: [String, Number],
	...makeComponentProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "i" }),
	...makeThemeProps()
}, "VIcon");
const VIcon = genericComponent()({
	name: "VIcon",
	props: makeVIconProps(),
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const slotIcon = shallowRef$48();
		const { themeClasses } = useTheme();
		const { iconData } = useIcon(() => slotIcon.value || props.icon);
		const { sizeClasses } = useSize(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		useRender(() => {
			const slotValue = slots.default?.();
			if (slotValue) slotIcon.value = flattenFragments(slotValue).filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]?.children;
			const hasClick = !!(attrs.onClick || attrs.onClickOnce);
			return _createVNode$134(iconData.value.component, {
				"tag": props.tag,
				"icon": iconData.value.icon,
				"class": _normalizeClass$94([
					"v-icon",
					"notranslate",
					themeClasses.value,
					sizeClasses.value,
					textColorClasses.value,
					{
						"v-icon--clickable": hasClick,
						"v-icon--disabled": props.disabled,
						"v-icon--start": props.start,
						"v-icon--end": props.end
					},
					props.class
				]),
				"style": _normalizeStyle$81([
					{ "--v-icon-opacity": props.opacity },
					!sizeClasses.value ? {
						fontSize: convertToUnit(props.size),
						height: convertToUnit(props.size),
						width: convertToUnit(props.size)
					} : void 0,
					textColorStyles.value,
					props.style
				]),
				"role": hasClick ? "button" : void 0,
				"aria-hidden": !hasClick,
				"tabindex": hasClick ? props.disabled ? -1 : 0 : void 0
			}, { default: () => [slotValue] });
		});
		return {};
	}
});
var { onScopeDispose: onScopeDispose$14, ref: ref$61, shallowRef: shallowRef$47, watch: watch$47 } = await importShared("vue");
function useIntersectionObserver(callback, options) {
	const intersectionRef = ref$61();
	const isIntersecting = shallowRef$47(false);
	if (SUPPORTS_INTERSECTION) {
		const observer = new IntersectionObserver((entries) => {
			callback?.(entries, observer);
			isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
		}, options);
		onScopeDispose$14(() => {
			observer.disconnect();
		});
		watch$47(intersectionRef, (newValue, oldValue) => {
			if (oldValue) {
				observer.unobserve(oldValue);
				isIntersecting.value = false;
			}
			if (newValue) observer.observe(newValue);
		}, { flush: "post" });
	}
	return {
		intersectionRef,
		isIntersecting
	};
}
var { normalizeClass: _normalizeClass$93, normalizeStyle: _normalizeStyle$80, createElementVNode: _createElementVNode$110, createVNode: _createVNode$133 } = await importShared("vue");
var { computed: computed$117, ref: ref$60, toRef: toRef$66, watchEffect: watchEffect$18 } = await importShared("vue");
const makeVProgressCircularProps = propsFactory({
	bgColor: String,
	color: String,
	indeterminate: [Boolean, String],
	rounded: Boolean,
	modelValue: {
		type: [Number, String],
		default: 0
	},
	rotate: {
		type: [Number, String],
		default: 0
	},
	width: {
		type: [Number, String],
		default: 4
	},
	...makeComponentProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "div" }),
	...makeThemeProps()
}, "VProgressCircular");
const VProgressCircular = genericComponent()({
	name: "VProgressCircular",
	props: makeVProgressCircularProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const MAGIC_RADIUS_CONSTANT = 20;
		const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
		const root = ref$60();
		const { themeClasses } = provideTheme(props);
		const { sizeClasses, sizeStyles } = useSize(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const { textColorClasses: underlayColorClasses, textColorStyles: underlayColorStyles } = useTextColor(() => props.bgColor);
		const { intersectionRef, isIntersecting } = useIntersectionObserver();
		const { resizeRef, contentRect } = useResizeObserver();
		const normalizedValue = toRef$66(() => clamp(parseFloat(props.modelValue), 0, 100));
		const width = toRef$66(() => Number(props.width));
		const size = toRef$66(() => {
			return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
		});
		const diameter = toRef$66(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
		const strokeWidth = toRef$66(() => width.value / size.value * diameter.value);
		const strokeDashOffset = toRef$66(() => {
			const baseLength = (100 - normalizedValue.value) / 100 * CIRCUMFERENCE;
			return props.rounded && normalizedValue.value > 0 && normalizedValue.value < 100 ? convertToUnit(Math.min(CIRCUMFERENCE - .01, baseLength + strokeWidth.value)) : convertToUnit(baseLength);
		});
		const startAngle = computed$117(() => {
			const baseAngle = Number(props.rotate);
			return props.rounded ? baseAngle + strokeWidth.value / 2 / CIRCUMFERENCE * 360 : baseAngle;
		});
		watchEffect$18(() => {
			intersectionRef.value = root.value;
			resizeRef.value = root.value;
		});
		useRender(() => _createVNode$133(props.tag, {
			"ref": root,
			"class": _normalizeClass$93([
				"v-progress-circular",
				{
					"v-progress-circular--indeterminate": !!props.indeterminate,
					"v-progress-circular--visible": isIntersecting.value,
					"v-progress-circular--disable-shrink": props.indeterminate && (props.indeterminate === "disable-shrink" || PREFERS_REDUCED_MOTION())
				},
				themeClasses.value,
				sizeClasses.value,
				textColorClasses.value,
				props.class
			]),
			"style": _normalizeStyle$80([
				sizeStyles.value,
				textColorStyles.value,
				props.style
			]),
			"role": "progressbar",
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
		}, { default: () => [_createElementVNode$110("svg", {
			"style": { transform: `rotate(calc(-90deg + ${startAngle.value}deg))` },
			"xmlns": "http://www.w3.org/2000/svg",
			"viewBox": `0 0 ${diameter.value} ${diameter.value}`
		}, [_createElementVNode$110("circle", {
			"class": _normalizeClass$93(["v-progress-circular__underlay", underlayColorClasses.value]),
			"style": _normalizeStyle$80(underlayColorStyles.value),
			"fill": "transparent",
			"cx": "50%",
			"cy": "50%",
			"r": MAGIC_RADIUS_CONSTANT,
			"stroke-width": strokeWidth.value,
			"stroke-dasharray": CIRCUMFERENCE,
			"stroke-dashoffset": 0
		}, null), _createElementVNode$110("circle", {
			"class": "v-progress-circular__overlay",
			"fill": "transparent",
			"cx": "50%",
			"cy": "50%",
			"r": MAGIC_RADIUS_CONSTANT,
			"stroke-width": strokeWidth.value,
			"stroke-dasharray": CIRCUMFERENCE,
			"stroke-dashoffset": strokeDashOffset.value,
			"stroke-linecap": props.rounded ? "round" : void 0
		}, null)]), slots.default && _createElementVNode$110("div", { "class": "v-progress-circular__content" }, [slots.default({ value: normalizedValue.value })])] }));
		return {};
	}
});
var { computed: computed$116 } = await importShared("vue");
var oppositeMap = {
	center: "center",
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
const makeLocationProps = propsFactory({ location: String }, "location");
function useLocation(props) {
	let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
	let offset = arguments.length > 2 ? arguments[2] : void 0;
	const { isRtl } = useRtl();
	return { locationStyles: computed$116(() => {
		if (!props.location) return {};
		const { side, align } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
		function getOffset$2(side$1) {
			return offset ? offset(side$1) : 0;
		}
		const styles = {};
		if (side !== "center") if (opposite) styles[oppositeMap[side]] = `calc(100% - ${getOffset$2(side)}px)`;
		else styles[side] = 0;
		if (align !== "center") if (opposite) styles[oppositeMap[align]] = `calc(100% - ${getOffset$2(align)}px)`;
		else styles[align] = 0;
		else {
			if (side === "center") styles.top = styles.left = "50%";
			else styles[{
				top: "left",
				bottom: "left",
				left: "top",
				right: "top"
			}[side]] = "50%";
			styles.transform = {
				top: "translateX(-50%)",
				bottom: "translateX(-50%)",
				left: "translateY(-50%)",
				right: "translateY(-50%)",
				center: "translate(-50%, -50%)"
			}[side];
		}
		return styles;
	}) };
}
var { computed: computed$115, toRef: toRef$65, toValue: toValue$5 } = await importShared("vue");
const makeChunksProps = propsFactory({
	chunkCount: {
		type: [Number, String],
		default: null
	},
	chunkWidth: {
		type: [Number, String],
		default: null
	},
	chunkGap: {
		type: [Number, String],
		default: 4
	}
}, "chunks");
function useChunks(props, containerWidth) {
	const hasChunks = toRef$65(() => !!props.chunkCount || !!props.chunkWidth);
	const chunkWidth = computed$115(() => {
		const containerSize = toValue$5(containerWidth);
		if (!containerSize) return 0;
		if (!props.chunkCount) return Number(props.chunkWidth);
		const count = Number(props.chunkCount);
		return (containerSize - Number(props.chunkGap) * (count - 1)) / count;
	});
	const chunkGap = toRef$65(() => Number(props.chunkGap));
	const chunksMaskStyles = computed$115(() => {
		if (!hasChunks.value) return {};
		const chunkGapPx = convertToUnit(chunkGap.value);
		const chunkWidthPx = convertToUnit(chunkWidth.value);
		return {
			maskRepeat: "repeat-x",
			maskImage: `linear-gradient(90deg, #000, #000 ${chunkWidthPx}, transparent ${chunkWidthPx}, transparent)`,
			maskSize: `calc(${chunkWidthPx} + ${chunkGapPx}) 100%`
		};
	});
	function snapValueToChunk(val) {
		const containerSize = toValue$5(containerWidth);
		if (!containerSize) return val;
		const gapRelativeSize = 100 * chunkGap.value / containerSize;
		const chunkRelativeSize = 100 * (chunkWidth.value + chunkGap.value) / containerSize;
		return clamp(0, Math.floor((val + gapRelativeSize) / chunkRelativeSize) * chunkRelativeSize - gapRelativeSize / 2, 100);
	}
	return {
		hasChunks,
		chunksMaskStyles,
		snapValueToChunk
	};
}
var { normalizeClass: _normalizeClass$92, createElementVNode: _createElementVNode$109, normalizeStyle: _normalizeStyle$79, createVNode: _createVNode$132 } = await importShared("vue");
var { computed: computed$114, ref: ref$59, shallowRef: shallowRef$46, Transition: Transition$2, watchEffect: watchEffect$17 } = await importShared("vue");
const makeVProgressLinearProps = propsFactory({
	absolute: Boolean,
	active: {
		type: Boolean,
		default: true
	},
	bgColor: String,
	bgOpacity: [Number, String],
	bufferValue: {
		type: [Number, String],
		default: 0
	},
	bufferColor: String,
	bufferOpacity: [Number, String],
	clickable: Boolean,
	color: String,
	height: {
		type: [Number, String],
		default: 4
	},
	indeterminate: Boolean,
	max: {
		type: [Number, String],
		default: 100
	},
	modelValue: {
		type: [Number, String],
		default: 0
	},
	opacity: [Number, String],
	reverse: Boolean,
	stream: Boolean,
	striped: Boolean,
	roundedBar: Boolean,
	...makeChunksProps(),
	...makeComponentProps(),
	...makeLocationProps({ location: "top" }),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VProgressLinear");
const VProgressLinear = genericComponent()({
	name: "VProgressLinear",
	props: makeVProgressLinearProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const root = ref$59();
		const progress = useProxiedModel(props, "modelValue");
		const { isRtl, rtlClasses } = useRtl();
		const { themeClasses } = provideTheme(props);
		const { locationStyles } = useLocation(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor || props.color);
		const { backgroundColorClasses: bufferColorClasses, backgroundColorStyles: bufferColorStyles } = useBackgroundColor(() => props.bufferColor || props.bgColor || props.color);
		const { backgroundColorClasses: barColorClasses, backgroundColorStyles: barColorStyles } = useBackgroundColor(() => props.color);
		const { roundedClasses } = useRounded(props);
		const { intersectionRef, isIntersecting } = useIntersectionObserver();
		const max = computed$114(() => parseFloat(props.max));
		const height = computed$114(() => parseFloat(props.height));
		const normalizedBuffer = computed$114(() => clamp(parseFloat(props.bufferValue) / max.value * 100, 0, 100));
		const normalizedValue = computed$114(() => clamp(parseFloat(progress.value) / max.value * 100, 0, 100));
		const isReversed = computed$114(() => isRtl.value !== props.reverse);
		const transition = computed$114(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
		const containerWidth = shallowRef$46(0);
		const { hasChunks, chunksMaskStyles, snapValueToChunk } = useChunks(props, containerWidth);
		useToggleScope(hasChunks, () => {
			const { resizeRef } = useResizeObserver((entries) => containerWidth.value = entries[0].contentRect.width);
			watchEffect$17(() => resizeRef.value = root.value);
		});
		const bufferWidth = computed$114(() => {
			return hasChunks.value ? snapValueToChunk(normalizedBuffer.value) : normalizedBuffer.value;
		});
		const barWidth = computed$114(() => {
			return hasChunks.value ? snapValueToChunk(normalizedValue.value) : normalizedValue.value;
		});
		function handleClick(e) {
			if (!intersectionRef.value) return;
			const { left, right, width } = intersectionRef.value.getBoundingClientRect();
			const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
			progress.value = Math.round(value / width * max.value);
		}
		watchEffect$17(() => {
			intersectionRef.value = root.value;
		});
		useRender(() => _createVNode$132(props.tag, {
			"ref": root,
			"class": _normalizeClass$92([
				"v-progress-linear",
				{
					"v-progress-linear--absolute": props.absolute,
					"v-progress-linear--active": props.active && isIntersecting.value,
					"v-progress-linear--reverse": isReversed.value,
					"v-progress-linear--rounded": props.rounded,
					"v-progress-linear--rounded-bar": props.roundedBar,
					"v-progress-linear--striped": props.striped,
					"v-progress-linear--clickable": props.clickable
				},
				roundedClasses.value,
				themeClasses.value,
				rtlClasses.value,
				props.class
			]),
			"style": _normalizeStyle$79([
				{
					bottom: props.location === "bottom" ? 0 : void 0,
					top: props.location === "top" ? 0 : void 0,
					height: props.active ? convertToUnit(height.value) : 0,
					"--v-progress-linear-height": convertToUnit(height.value),
					...props.absolute ? locationStyles.value : {}
				},
				chunksMaskStyles.value,
				props.style
			]),
			"role": "progressbar",
			"aria-hidden": props.active ? "false" : "true",
			"aria-valuemin": "0",
			"aria-valuemax": props.max,
			"aria-valuenow": props.indeterminate ? void 0 : Math.min(parseFloat(progress.value), max.value),
			"onClick": props.clickable && handleClick
		}, { default: () => [
			props.stream && _createElementVNode$109("div", {
				"key": "stream",
				"class": _normalizeClass$92(["v-progress-linear__stream", textColorClasses.value]),
				"style": {
					...textColorStyles.value,
					[isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
					borderTop: `${convertToUnit(height.value / 2)} dotted`,
					opacity: parseFloat(props.bufferOpacity),
					top: `calc(50% - ${convertToUnit(height.value / 4)})`,
					width: convertToUnit(100 - normalizedBuffer.value, "%"),
					"--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
				}
			}, null),
			_createElementVNode$109("div", {
				"class": _normalizeClass$92(["v-progress-linear__background", backgroundColorClasses.value]),
				"style": _normalizeStyle$79([backgroundColorStyles.value, {
					opacity: parseFloat(props.bgOpacity),
					width: props.stream ? 0 : void 0
				}])
			}, null),
			_createElementVNode$109("div", {
				"class": _normalizeClass$92(["v-progress-linear__buffer", bufferColorClasses.value]),
				"style": _normalizeStyle$79([bufferColorStyles.value, {
					opacity: parseFloat(props.bufferOpacity),
					width: convertToUnit(bufferWidth.value, "%")
				}])
			}, null),
			_createVNode$132(Transition$2, { "name": transition.value }, { default: () => [!props.indeterminate ? _createElementVNode$109("div", {
				"class": _normalizeClass$92(["v-progress-linear__determinate", barColorClasses.value]),
				"style": _normalizeStyle$79([barColorStyles.value, { width: convertToUnit(barWidth.value, "%") }])
			}, null) : _createElementVNode$109("div", { "class": "v-progress-linear__indeterminate" }, [["long", "short"].map((bar) => _createElementVNode$109("div", {
				"key": bar,
				"class": _normalizeClass$92([
					"v-progress-linear__indeterminate",
					bar,
					barColorClasses.value
				]),
				"style": _normalizeStyle$79(barColorStyles.value)
			}, null))])] }),
			slots.default && _createElementVNode$109("div", { "class": "v-progress-linear__content" }, [slots.default({
				value: normalizedValue.value,
				buffer: normalizedBuffer.value
			})])
		] }));
		return {};
	}
});
var { createVNode: _createVNode$131, normalizeClass: _normalizeClass$91, createElementVNode: _createElementVNode$108 } = await importShared("vue");
var { toRef: toRef$64 } = await importShared("vue");
const makeLoaderProps = propsFactory({ loading: [Boolean, String] }, "loader");
function useLoader(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { loaderClasses: toRef$64(() => ({ [`${name}--loading`]: props.loading })) };
}
function LoaderSlot(props, _ref) {
	let { slots } = _ref;
	return _createElementVNode$108("div", { "class": _normalizeClass$91(`${props.name}__loader`) }, [slots.default?.({
		color: props.color,
		isActive: props.active
	}) || _createVNode$131(VProgressLinear, {
		"absolute": props.absolute,
		"active": props.active,
		"color": props.color,
		"height": "2",
		"indeterminate": true
	}, null)]);
}
var { toRef: toRef$63 } = await importShared("vue");
var positionValues = [
	"static",
	"relative",
	"fixed",
	"absolute",
	"sticky"
];
const makePositionProps = propsFactory({ position: {
	type: String,
	validator: (v) => positionValues.includes(v)
} }, "position");
function usePosition(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { positionClasses: toRef$63(() => {
		return props.position ? `${name}--${props.position}` : void 0;
	}) };
}
var { computed: computed$113, nextTick: nextTick$29, onScopeDispose: onScopeDispose$13, reactive: reactive$3, resolveDynamicComponent, toRef: toRef$62 } = await importShared("vue");
function useRoute() {
	const vm = getCurrentInstance("useRoute");
	return computed$113(() => vm?.proxy?.$route);
}
function useRouter() {
	return getCurrentInstance("useRouter")?.proxy?.$router;
}
function useLink(props, attrs) {
	const RouterLink = resolveDynamicComponent("RouterLink");
	const isLink = toRef$62(() => !!(props.href || props.to));
	const isClickable = computed$113(() => {
		return isLink?.value || hasEvent(attrs, "click") || hasEvent(props, "click");
	});
	if (typeof RouterLink === "string" || !("useLink" in RouterLink)) {
		const href$1 = toRef$62(() => props.href);
		return {
			isLink,
			isRouterLink: toRef$62(() => false),
			isClickable,
			href: href$1,
			linkProps: reactive$3({ href: href$1 })
		};
	}
	const routerLink = RouterLink.useLink({
		to: toRef$62(() => props.to || ""),
		replace: toRef$62(() => props.replace)
	});
	const link = computed$113(() => props.to ? routerLink : void 0);
	const route = useRoute();
	const isActive = computed$113(() => {
		if (!link.value) return false;
		if (!props.exact) return link.value.isActive?.value ?? false;
		if (!route.value) return link.value.isExactActive?.value ?? false;
		return link.value.isExactActive?.value && deepEqual(link.value.route.value.query, route.value.query);
	});
	const href = computed$113(() => props.to ? link.value?.route.value.href : props.href);
	return {
		isLink,
		isRouterLink: toRef$62(() => !!props.to),
		isClickable,
		isActive,
		route: link.value?.route,
		navigate: link.value?.navigate,
		href,
		linkProps: reactive$3({
			href,
			"aria-current": toRef$62(() => isActive.value ? "page" : void 0),
			"aria-disabled": toRef$62(() => props.disabled && isLink.value ? "true" : void 0),
			tabindex: toRef$62(() => props.disabled && isLink.value ? "-1" : void 0)
		})
	};
}
const makeRouterProps = propsFactory({
	href: String,
	replace: Boolean,
	to: [String, Object],
	exact: Boolean
}, "router");
var inTransition = false;
function useBackButton(router, cb) {
	let popped = false;
	let removeBefore;
	let removeAfter;
	if (IN_BROWSER && router?.beforeEach) {
		nextTick$29(() => {
			window.addEventListener("popstate", onPopstate);
			removeBefore = router.beforeEach((to, from, next) => {
				if (!inTransition) setTimeout(() => popped ? cb(next) : next());
				else popped ? cb(next) : next();
				inTransition = true;
			});
			removeAfter = router?.afterEach(() => {
				inTransition = false;
			});
		});
		onScopeDispose$13(() => {
			window.removeEventListener("popstate", onPopstate);
			removeBefore?.();
			removeAfter?.();
		});
	}
	function onPopstate(e) {
		if (e.state?.replaced) return;
		popped = true;
		setTimeout(() => popped = false);
	}
}
var { nextTick: nextTick$28, watch: watch$46 } = await importShared("vue");
function useSelectLink(link, select) {
	watch$46(() => link.isActive?.value, (isActive) => {
		if (link.isLink.value && isActive != null && select) nextTick$28(() => {
			select(isActive);
		});
	}, { immediate: true });
}
var stopSymbol = Symbol("rippleStop");
var DELAY_RIPPLE = 80;
function transform(el, value) {
	el.style.transform = value;
	el.style.webkitTransform = value;
}
function isTouchEvent(e) {
	return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
	return e.constructor.name === "KeyboardEvent";
}
var calculate = function(e, el) {
	let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	let localX = 0;
	let localY = 0;
	if (!isKeyboardEvent(e)) {
		const offset = el.getBoundingClientRect();
		const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
		localX = target.clientX - offset.left;
		localY = target.clientY - offset.top;
	}
	let radius = 0;
	let scale = .3;
	if (el._ripple?.circle) {
		scale = .15;
		radius = el.clientWidth / 2;
		radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
	} else radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
	const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
	const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
	const x = value.center ? centerX : `${localX - radius}px`;
	const y = value.center ? centerY : `${localY - radius}px`;
	return {
		radius,
		scale,
		x,
		y,
		centerX,
		centerY
	};
};
var ripples = {
	show(e, el) {
		let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (!el?._ripple?.enabled) return;
		const container = document.createElement("span");
		const animation = document.createElement("span");
		container.appendChild(animation);
		container.className = "v-ripple__container";
		if (value.class) container.className += ` ${value.class}`;
		const { radius, scale, x, y, centerX, centerY } = calculate(e, el, value);
		const size = `${radius * 2}px`;
		animation.className = "v-ripple__animation";
		animation.style.width = size;
		animation.style.height = size;
		el.appendChild(container);
		const computed$127 = window.getComputedStyle(el);
		if (computed$127 && computed$127.position === "static") {
			el.style.position = "relative";
			el.dataset.previousPosition = "static";
		}
		animation.classList.add("v-ripple__animation--enter");
		animation.classList.add("v-ripple__animation--visible");
		transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
		animation.dataset.activated = String(performance.now());
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				animation.classList.remove("v-ripple__animation--enter");
				animation.classList.add("v-ripple__animation--in");
				transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
			});
		});
	},
	hide(el) {
		if (!el?._ripple?.enabled) return;
		const ripples$1 = el.getElementsByClassName("v-ripple__animation");
		if (ripples$1.length === 0) return;
		const animation = Array.from(ripples$1).findLast((ripple) => !ripple.dataset.isHiding);
		if (!animation) return;
		else animation.dataset.isHiding = "true";
		const diff = performance.now() - Number(animation.dataset.activated);
		const delay = Math.max(250 - diff, 0);
		setTimeout(() => {
			animation.classList.remove("v-ripple__animation--in");
			animation.classList.add("v-ripple__animation--out");
			setTimeout(() => {
				if (el.getElementsByClassName("v-ripple__animation").length === 1 && el.dataset.previousPosition) {
					el.style.position = el.dataset.previousPosition;
					delete el.dataset.previousPosition;
				}
				if (animation.parentNode?.parentNode === el) el.removeChild(animation.parentNode);
			}, 300);
		}, delay);
	}
};
function isRippleEnabled(value) {
	return typeof value === "undefined" || !!value;
}
function rippleShow(e) {
	const value = {};
	const element = e.currentTarget;
	if (!element?._ripple || element._ripple.touched || e[stopSymbol]) return;
	e[stopSymbol] = true;
	if (isTouchEvent(e)) {
		element._ripple.touched = true;
		element._ripple.isTouch = true;
	} else if (element._ripple.isTouch) return;
	value.center = element._ripple.centered || isKeyboardEvent(e);
	if (element._ripple.class) value.class = element._ripple.class;
	if (isTouchEvent(e)) {
		if (element._ripple.showTimerCommit) return;
		element._ripple.showTimerCommit = () => {
			ripples.show(e, element, value);
		};
		element._ripple.showTimer = window.setTimeout(() => {
			if (element?._ripple?.showTimerCommit) {
				element._ripple.showTimerCommit();
				element._ripple.showTimerCommit = null;
			}
		}, DELAY_RIPPLE);
	} else ripples.show(e, element, value);
}
function rippleStop(e) {
	e[stopSymbol] = true;
}
function rippleHide(e) {
	const element = e.currentTarget;
	if (!element?._ripple) return;
	window.clearTimeout(element._ripple.showTimer);
	if (e.type === "touchend" && element._ripple.showTimerCommit) {
		element._ripple.showTimerCommit();
		element._ripple.showTimerCommit = null;
		element._ripple.showTimer = window.setTimeout(() => {
			rippleHide(e);
		});
		return;
	}
	window.setTimeout(() => {
		if (element._ripple) element._ripple.touched = false;
	});
	ripples.hide(element);
}
function rippleCancelShow(e) {
	const element = e.currentTarget;
	if (!element?._ripple) return;
	if (element._ripple.showTimerCommit) element._ripple.showTimerCommit = null;
	window.clearTimeout(element._ripple.showTimer);
}
var keyboardRipple = false;
function keyboardRippleShow(e, keys$1) {
	if (!keyboardRipple && keys$1.includes(e.key)) {
		keyboardRipple = true;
		rippleShow(e);
	}
}
function keyboardRippleHide(e) {
	keyboardRipple = false;
	rippleHide(e);
}
function focusRippleHide(e) {
	if (keyboardRipple) {
		keyboardRipple = false;
		rippleHide(e);
	}
}
function updateRipple(el, binding, wasEnabled) {
	const { value, modifiers } = binding;
	const enabled = isRippleEnabled(value);
	if (!enabled) ripples.hide(el);
	el._ripple = el._ripple ?? {};
	el._ripple.enabled = enabled;
	el._ripple.centered = modifiers.center;
	el._ripple.circle = modifiers.circle;
	const bindingValue = isObject(value) ? value : {};
	if (bindingValue.class) el._ripple.class = bindingValue.class;
	const allowedKeys = bindingValue.keys ?? ["Enter", "Space"];
	el._ripple.keyDownHandler = (e) => keyboardRippleShow(e, allowedKeys);
	if (enabled && !wasEnabled) {
		if (modifiers.stop) {
			el.addEventListener("touchstart", rippleStop, { passive: true });
			el.addEventListener("mousedown", rippleStop);
			return;
		}
		el.addEventListener("touchstart", rippleShow, { passive: true });
		el.addEventListener("touchend", rippleHide, { passive: true });
		el.addEventListener("touchmove", rippleCancelShow, { passive: true });
		el.addEventListener("touchcancel", rippleHide);
		el.addEventListener("mousedown", rippleShow);
		el.addEventListener("mouseup", rippleHide);
		el.addEventListener("mouseleave", rippleHide);
		el.addEventListener("keydown", el._ripple.keyDownHandler);
		el.addEventListener("keyup", keyboardRippleHide);
		el.addEventListener("blur", focusRippleHide);
		el.addEventListener("dragstart", rippleHide, { passive: true });
	} else if (!enabled && wasEnabled) removeListeners(el);
}
function removeListeners(el) {
	el.removeEventListener("touchstart", rippleStop);
	el.removeEventListener("mousedown", rippleStop);
	el.removeEventListener("touchstart", rippleShow);
	el.removeEventListener("touchend", rippleHide);
	el.removeEventListener("touchmove", rippleCancelShow);
	el.removeEventListener("touchcancel", rippleHide);
	el.removeEventListener("mousedown", rippleShow);
	el.removeEventListener("mouseup", rippleHide);
	el.removeEventListener("mouseleave", rippleHide);
	if (el._ripple?.keyDownHandler) el.removeEventListener("keydown", el._ripple.keyDownHandler);
	el.removeEventListener("keyup", keyboardRippleHide);
	el.removeEventListener("blur", focusRippleHide);
	el.removeEventListener("dragstart", rippleHide);
}
function mounted$4(el, binding) {
	updateRipple(el, binding, false);
}
function unmounted$4(el) {
	removeListeners(el);
	delete el._ripple;
}
function updated$1(el, binding) {
	if (binding.value === binding.oldValue) return;
	updateRipple(el, binding, isRippleEnabled(binding.oldValue));
}
const Ripple = {
	mounted: mounted$4,
	unmounted: unmounted$4,
	updated: updated$1
};
var ripple_default = Ripple;
var { createVNode: _createVNode$130, createElementVNode: _createElementVNode$107, mergeProps: _mergeProps$78 } = await importShared("vue");
var { computed: computed$112, toDisplayString: toDisplayString$5, toRef: toRef$61, withDirectives: withDirectives$1 } = await importShared("vue");
const makeVBtnProps = propsFactory({
	active: {
		type: Boolean,
		default: void 0
	},
	activeColor: String,
	baseColor: String,
	symbol: {
		type: null,
		default: VBtnToggleSymbol
	},
	flat: Boolean,
	icon: [
		Boolean,
		String,
		Function,
		Object
	],
	prependIcon: IconValue,
	appendIcon: IconValue,
	block: Boolean,
	readonly: Boolean,
	slim: Boolean,
	stacked: Boolean,
	spaced: String,
	ripple: {
		type: [Boolean, Object],
		default: true
	},
	text: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeGroupItemProps(),
	...makeLoaderProps(),
	...makeLocationProps(),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeRouterProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "button" }),
	...makeThemeProps(),
	...makeVariantProps({ variant: "elevated" })
}, "VBtn");
const VBtn = genericComponent()({
	name: "VBtn",
	props: makeVBtnProps(),
	emits: { "group:selected": (val) => true },
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { loaderClasses } = useLoader(props);
		const { locationStyles } = useLocation(props);
		const { positionClasses } = usePosition(props);
		const { roundedClasses } = useRounded(props);
		const { sizeClasses, sizeStyles } = useSize(props);
		const group = useGroupItem(props, props.symbol, false);
		const link = useLink(props, attrs);
		const isActive = computed$112(() => {
			if (props.active !== void 0) return props.active;
			if (link.isRouterLink.value) return link.isActive?.value;
			return group?.isSelected.value;
		});
		const color = toRef$61(() => isActive.value ? props.activeColor ?? props.color : props.color);
		const { colorClasses, colorStyles, variantClasses } = useVariant(computed$112(() => {
			return {
				color: group?.isSelected.value && (!link.isLink.value || link.isActive?.value) || !group || link.isActive?.value ? color.value ?? props.baseColor : props.baseColor,
				variant: props.variant
			};
		}));
		const isDisabled = computed$112(() => group?.disabled.value || props.disabled);
		const isElevated = toRef$61(() => {
			return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
		});
		const valueAttr = computed$112(() => {
			if (props.value === void 0 || typeof props.value === "symbol") return void 0;
			return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
		});
		function onClick(e) {
			if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank")) return;
			if (link.isRouterLink.value) link.navigate?.(e);
			else group?.toggle();
		}
		useSelectLink(link, group?.select);
		useRender(() => {
			const Tag = link.isLink.value ? "a" : props.tag;
			const hasPrepend = !!(props.prependIcon || slots.prepend);
			const hasAppend = !!(props.appendIcon || slots.append);
			const hasIcon = !!(props.icon && props.icon !== true);
			return withDirectives$1(_createVNode$130(Tag, _mergeProps$78(link.linkProps, {
				"type": Tag === "a" ? void 0 : "button",
				"class": [
					"v-btn",
					group?.selectedClass.value,
					{
						"v-btn--active": isActive.value,
						"v-btn--block": props.block,
						"v-btn--disabled": isDisabled.value,
						"v-btn--elevated": isElevated.value,
						"v-btn--flat": props.flat,
						"v-btn--icon": !!props.icon,
						"v-btn--loading": props.loading,
						"v-btn--readonly": props.readonly,
						"v-btn--slim": props.slim,
						"v-btn--stacked": props.stacked
					},
					props.spaced ? ["v-btn--spaced", `v-btn--spaced-${props.spaced}`] : [],
					themeClasses.value,
					borderClasses.value,
					colorClasses.value,
					densityClasses.value,
					elevationClasses.value,
					loaderClasses.value,
					positionClasses.value,
					roundedClasses.value,
					sizeClasses.value,
					variantClasses.value,
					props.class
				],
				"style": [
					colorStyles.value,
					dimensionStyles.value,
					locationStyles.value,
					sizeStyles.value,
					props.style
				],
				"aria-busy": props.loading ? true : void 0,
				"disabled": isDisabled.value && Tag !== "a" || void 0,
				"tabindex": props.loading || props.readonly ? -1 : void 0,
				"onClick": onClick,
				"value": valueAttr.value
			}), { default: () => [
				genOverlays(true, "v-btn"),
				!props.icon && hasPrepend && _createElementVNode$107("span", {
					"key": "prepend",
					"class": "v-btn__prepend"
				}, [!slots.prepend ? _createVNode$130(VIcon, {
					"key": "prepend-icon",
					"icon": props.prependIcon
				}, null) : _createVNode$130(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !props.prependIcon,
					"defaults": { VIcon: { icon: props.prependIcon } }
				}, slots.prepend)]),
				_createElementVNode$107("span", {
					"class": "v-btn__content",
					"data-no-activator": ""
				}, [!slots.default && hasIcon ? _createVNode$130(VIcon, {
					"key": "content-icon",
					"icon": props.icon
				}, null) : _createVNode$130(VDefaultsProvider, {
					"key": "content-defaults",
					"disabled": !hasIcon,
					"defaults": { VIcon: { icon: props.icon } }
				}, { default: () => [slots.default?.() ?? toDisplayString$5(props.text)] })]),
				!props.icon && hasAppend && _createElementVNode$107("span", {
					"key": "append",
					"class": "v-btn__append"
				}, [!slots.append ? _createVNode$130(VIcon, {
					"key": "append-icon",
					"icon": props.appendIcon
				}, null) : _createVNode$130(VDefaultsProvider, {
					"key": "append-defaults",
					"disabled": !props.appendIcon,
					"defaults": { VIcon: { icon: props.appendIcon } }
				}, slots.append)]),
				!!props.loading && _createElementVNode$107("span", {
					"key": "loader",
					"class": "v-btn__loader"
				}, [slots.loader?.() ?? _createVNode$130(VProgressCircular, {
					"color": typeof props.loading === "boolean" ? void 0 : props.loading,
					"indeterminate": true,
					"width": "2"
				}, null)])
			] }), [[
				ripple_default,
				!isDisabled.value && props.ripple,
				"",
				{ center: !!props.icon }
			]]);
		});
		return { group };
	}
});
var { mergeProps: _mergeProps$77, createVNode: _createVNode$129 } = await importShared("vue");
const makeVAppBarNavIconProps = propsFactory({ ...omit(makeVBtnProps({
	icon: "$menu",
	variant: "text"
}), ["spaced"]) }, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
	name: "VAppBarNavIcon",
	props: makeVAppBarNavIconProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createVNode$129(VBtn, _mergeProps$77(props, { "class": ["v-app-bar-nav-icon"] }), slots));
		return {};
	}
});
var { mergeProps: _mergeProps$76, createVNode: _createVNode$128 } = await importShared("vue");
const VAppBarTitle = genericComponent()({
	name: "VAppBarTitle",
	props: makeVToolbarTitleProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createVNode$128(VToolbarTitle, _mergeProps$76(props, { "class": "v-app-bar-title" }), slots));
		return {};
	}
});
const VAlertTitle = createSimpleFunctional("v-alert-title");
var { computed: computed$111 } = await importShared("vue");
const makeIconSizeProps = propsFactory({
	iconSize: [Number, String],
	iconSizes: {
		type: Array,
		default: () => [
			["x-small", 10],
			["small", 16],
			["default", 24],
			["large", 28],
			["x-large", 32]
		]
	}
}, "iconSize");
function useIconSizes(props, fallback) {
	return { iconSize: computed$111(() => {
		const iconSizeMap = new Map(props.iconSizes);
		const _iconSize = props.iconSize ?? fallback() ?? "default";
		return iconSizeMap.has(_iconSize) ? iconSizeMap.get(_iconSize) : _iconSize;
	}) };
}
var { normalizeClass: _normalizeClass$90, normalizeStyle: _normalizeStyle$78, createElementVNode: _createElementVNode$106, mergeProps: _mergeProps$75, createVNode: _createVNode$127 } = await importShared("vue");
var { toRef: toRef$60 } = await importShared("vue");
var allowedTypes = [
	"success",
	"info",
	"warning",
	"error"
];
const makeVAlertProps = propsFactory({
	border: {
		type: [Boolean, String],
		validator: (val) => {
			return typeof val === "boolean" || [
				"top",
				"end",
				"bottom",
				"start"
			].includes(val);
		}
	},
	borderColor: String,
	closable: Boolean,
	closeIcon: {
		type: IconValue,
		default: "$close"
	},
	closeLabel: {
		type: String,
		default: "$vuetify.close"
	},
	icon: {
		type: [
			Boolean,
			String,
			Function,
			Object
		],
		default: null
	},
	modelValue: {
		type: Boolean,
		default: true
	},
	prominent: Boolean,
	title: String,
	text: String,
	type: {
		type: String,
		validator: (val) => allowedTypes.includes(val)
	},
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeIconSizeProps(),
	...makeLocationProps(),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps({ variant: "flat" })
}, "VAlert");
const VAlert = genericComponent()({
	name: "VAlert",
	props: makeVAlertProps(),
	emits: {
		"click:close": (e) => true,
		"update:modelValue": (value) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const isActive = useProxiedModel(props, "modelValue");
		const icon = toRef$60(() => {
			if (props.icon === false) return void 0;
			if (!props.type) return props.icon;
			return props.icon ?? `$${props.type}`;
		});
		const { iconSize } = useIconSizes(props, () => props.prominent ? 44 : void 0);
		const { themeClasses } = provideTheme(props);
		const { colorClasses, colorStyles, variantClasses } = useVariant(() => ({
			color: props.color ?? props.type,
			variant: props.variant
		}));
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { locationStyles } = useLocation(props);
		const { positionClasses } = usePosition(props);
		const { roundedClasses } = useRounded(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.borderColor);
		const { t } = useLocale();
		const closeProps = toRef$60(() => ({
			"aria-label": t(props.closeLabel),
			onClick(e) {
				isActive.value = false;
				emit("click:close", e);
			}
		}));
		return () => {
			const hasPrepend = !!(slots.prepend || icon.value);
			const hasTitle = !!(slots.title || props.title);
			const hasClose = !!(slots.close || props.closable);
			const iconProps = {
				density: props.density,
				icon: icon.value,
				size: props.iconSize || props.prominent ? iconSize.value : void 0
			};
			return isActive.value && _createVNode$127(props.tag, {
				"class": _normalizeClass$90([
					"v-alert",
					props.border && {
						"v-alert--border": !!props.border,
						[`v-alert--border-${props.border === true ? "start" : props.border}`]: true
					},
					{ "v-alert--prominent": props.prominent },
					themeClasses.value,
					colorClasses.value,
					densityClasses.value,
					elevationClasses.value,
					positionClasses.value,
					roundedClasses.value,
					variantClasses.value,
					props.class
				]),
				"style": _normalizeStyle$78([
					colorStyles.value,
					dimensionStyles.value,
					locationStyles.value,
					props.style
				]),
				"role": "alert"
			}, { default: () => [
				genOverlays(false, "v-alert"),
				props.border && _createElementVNode$106("div", {
					"key": "border",
					"class": _normalizeClass$90(["v-alert__border", textColorClasses.value]),
					"style": _normalizeStyle$78(textColorStyles.value)
				}, null),
				hasPrepend && _createElementVNode$106("div", {
					"key": "prepend",
					"class": "v-alert__prepend"
				}, [!slots.prepend ? _createVNode$127(VIcon, _mergeProps$75({ "key": "prepend-icon" }, iconProps), null) : _createVNode$127(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !icon.value,
					"defaults": { VIcon: { ...iconProps } }
				}, slots.prepend)]),
				_createElementVNode$106("div", { "class": "v-alert__content" }, [
					hasTitle && _createVNode$127(VAlertTitle, { "key": "title" }, { default: () => [slots.title?.() ?? props.title] }),
					slots.text?.() ?? props.text,
					slots.default?.()
				]),
				slots.append && _createElementVNode$106("div", {
					"key": "append",
					"class": "v-alert__append"
				}, [slots.append()]),
				hasClose && _createElementVNode$106("div", {
					"key": "close",
					"class": "v-alert__close"
				}, [!slots.close ? _createVNode$127(VBtn, _mergeProps$75({
					"key": "close-btn",
					"icon": props.closeIcon,
					"size": "x-small",
					"variant": "text"
				}, closeProps.value), null) : _createVNode$127(VDefaultsProvider, {
					"key": "close-defaults",
					"defaults": { VBtn: {
						icon: props.closeIcon,
						size: "x-small",
						variant: "text"
					} }
				}, { default: () => [slots.close?.({ props: closeProps.value })] })])
			] });
		};
	}
});
var { createVNode: _createVNode$126, normalizeClass: _normalizeClass$89, normalizeStyle: _normalizeStyle$77 } = await importShared("vue");
const makeVAvatarProps = propsFactory({
	start: Boolean,
	end: Boolean,
	icon: IconValue,
	image: String,
	text: String,
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeRoundedProps(),
	...makeSizeProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps({ variant: "flat" })
}, "VAvatar");
const VAvatar = genericComponent()({
	name: "VAvatar",
	props: makeVAvatarProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { colorClasses, colorStyles, variantClasses } = useVariant(props);
		const { densityClasses } = useDensity(props);
		const { roundedClasses } = useRounded(props);
		const { sizeClasses, sizeStyles } = useSize(props);
		useRender(() => _createVNode$126(props.tag, {
			"class": _normalizeClass$89([
				"v-avatar",
				{
					"v-avatar--start": props.start,
					"v-avatar--end": props.end
				},
				themeClasses.value,
				borderClasses.value,
				colorClasses.value,
				densityClasses.value,
				roundedClasses.value,
				sizeClasses.value,
				variantClasses.value,
				props.class
			]),
			"style": _normalizeStyle$77([
				colorStyles.value,
				sizeStyles.value,
				props.style
			])
		}, { default: () => [!slots.default ? props.image ? _createVNode$126(VImg, {
			"key": "image",
			"src": props.image,
			"alt": "",
			"cover": true
		}, null) : props.icon ? _createVNode$126(VIcon, {
			"key": "icon",
			"icon": props.icon
		}, null) : props.text : _createVNode$126(VDefaultsProvider, {
			"key": "content-defaults",
			"defaults": {
				VImg: {
					cover: true,
					src: props.image
				},
				VIcon: { icon: props.icon }
			}
		}, { default: () => [slots.default()] }), genOverlays(false, "v-avatar")] }));
		return {};
	}
});
var { normalizeClass: _normalizeClass$88, normalizeStyle: _normalizeStyle$76, createElementVNode: _createElementVNode$105 } = await importShared("vue");
const makeVLabelProps = propsFactory({
	text: String,
	onClick: EventProp(),
	...makeComponentProps(),
	...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
	name: "VLabel",
	props: makeVLabelProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createElementVNode$105("label", {
			"class": _normalizeClass$88([
				"v-label",
				{ "v-label--clickable": !!props.onClick },
				props.class
			]),
			"style": _normalizeStyle$76(props.style),
			"onClick": props.onClick
		}, [props.text, slots.default?.()]));
		return {};
	}
});
var { normalizeClass: _normalizeClass$87, normalizeStyle: _normalizeStyle$75, createElementVNode: _createElementVNode$104 } = await importShared("vue");
var { onScopeDispose: onScopeDispose$12, provide: provide$16, toRef: toRef$59, useId: useId$14 } = await importShared("vue");
const VSelectionControlGroupSymbol = Symbol.for("vuetify:selection-control-group");
const makeSelectionControlGroupProps = propsFactory({
	color: String,
	disabled: {
		type: Boolean,
		default: null
	},
	defaultsTarget: String,
	error: Boolean,
	id: String,
	inline: Boolean,
	falseIcon: IconValue,
	trueIcon: IconValue,
	ripple: {
		type: [Boolean, Object],
		default: true
	},
	multiple: {
		type: Boolean,
		default: null
	},
	name: String,
	readonly: {
		type: Boolean,
		default: null
	},
	modelValue: null,
	type: String,
	valueComparator: {
		type: Function,
		default: deepEqual
	},
	...makeComponentProps(),
	...makeDensityProps(),
	...makeThemeProps()
}, "SelectionControlGroup");
const makeVSelectionControlGroupProps = propsFactory({ ...makeSelectionControlGroupProps({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
const VSelectionControlGroup = genericComponent()({
	name: "VSelectionControlGroup",
	props: makeVSelectionControlGroupProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const modelValue = useProxiedModel(props, "modelValue");
		const uid = useId$14();
		const id = toRef$59(() => props.id || `v-selection-control-group-${uid}`);
		const name = toRef$59(() => props.name || id.value);
		const updateHandlers = /* @__PURE__ */ new Set();
		provide$16(VSelectionControlGroupSymbol, {
			modelValue,
			forceUpdate: () => {
				updateHandlers.forEach((fn) => fn());
			},
			onForceUpdate: (cb) => {
				updateHandlers.add(cb);
				onScopeDispose$12(() => {
					updateHandlers.delete(cb);
				});
			}
		});
		provideDefaults({ [props.defaultsTarget]: {
			color: toRef$59(() => props.color),
			disabled: toRef$59(() => props.disabled),
			density: toRef$59(() => props.density),
			error: toRef$59(() => props.error),
			inline: toRef$59(() => props.inline),
			modelValue,
			multiple: toRef$59(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
			name,
			falseIcon: toRef$59(() => props.falseIcon),
			trueIcon: toRef$59(() => props.trueIcon),
			readonly: toRef$59(() => props.readonly),
			ripple: toRef$59(() => props.ripple),
			type: toRef$59(() => props.type),
			valueComparator: toRef$59(() => props.valueComparator)
		} });
		useRender(() => _createElementVNode$104("div", {
			"class": _normalizeClass$87([
				"v-selection-control-group",
				{ "v-selection-control-group--inline": props.inline },
				props.class
			]),
			"style": _normalizeStyle$75(props.style),
			"role": props.type === "radio" ? "radiogroup" : void 0
		}, [slots.default?.()]));
		return {};
	}
});
var { mergeProps: _mergeProps$74, createElementVNode: _createElementVNode$103, Fragment: _Fragment$44, createVNode: _createVNode$125, normalizeClass: _normalizeClass$86, withDirectives: _withDirectives$21, normalizeStyle: _normalizeStyle$74 } = await importShared("vue");
var { computed: computed$110, inject: inject$23, nextTick: nextTick$27, ref: ref$58, shallowRef: shallowRef$45, toRef: toRef$58, useId: useId$13 } = await importShared("vue");
const makeVSelectionControlProps = propsFactory({
	label: String,
	baseColor: String,
	trueValue: null,
	falseValue: null,
	value: null,
	...makeComponentProps(),
	...makeSelectionControlGroupProps()
}, "VSelectionControl");
function useSelectionControl(props) {
	const group = inject$23(VSelectionControlGroupSymbol, void 0);
	const { densityClasses } = useDensity(props);
	const modelValue = useProxiedModel(props, "modelValue");
	const trueValue = computed$110(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
	const falseValue = computed$110(() => props.falseValue !== void 0 ? props.falseValue : false);
	const isMultiple = computed$110(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
	const model = computed$110({
		get() {
			const val = group ? group.modelValue.value : modelValue.value;
			return isMultiple.value ? wrapInArray(val).some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
		},
		set(val) {
			if (props.readonly) return;
			const currentValue = val ? trueValue.value : falseValue.value;
			let newVal = currentValue;
			if (isMultiple.value) newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
			if (group) group.modelValue.value = newVal;
			else modelValue.value = newVal;
		}
	});
	const { textColorClasses, textColorStyles } = useTextColor(() => {
		if (props.error || props.disabled) return void 0;
		return model.value ? props.color : props.baseColor;
	});
	const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => {
		return model.value && !props.error && !props.disabled ? props.color : props.baseColor;
	});
	return {
		group,
		densityClasses,
		trueValue,
		falseValue,
		model,
		textColorClasses,
		textColorStyles,
		backgroundColorClasses,
		backgroundColorStyles,
		icon: computed$110(() => model.value ? props.trueIcon : props.falseIcon)
	};
}
const VSelectionControl = genericComponent()({
	name: "VSelectionControl",
	directives: { vRipple: ripple_default },
	inheritAttrs: false,
	props: makeVSelectionControlProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { group, densityClasses, icon, model, textColorClasses, textColorStyles, backgroundColorClasses, backgroundColorStyles, trueValue } = useSelectionControl(props);
		const uid = useId$13();
		const isFocused = shallowRef$45(false);
		const isFocusVisible = shallowRef$45(false);
		const input = ref$58();
		const id = toRef$58(() => props.id || `input-${uid}`);
		const isInteractive = toRef$58(() => !props.disabled && !props.readonly);
		group?.onForceUpdate(() => {
			if (input.value) input.value.checked = model.value;
		});
		function onFocus(e) {
			if (!isInteractive.value) return;
			isFocused.value = true;
			if (matchesSelector(e.target, ":focus-visible") !== false) isFocusVisible.value = true;
		}
		function onBlur() {
			isFocused.value = false;
			isFocusVisible.value = false;
		}
		function onClickLabel(e) {
			e.stopPropagation();
		}
		function onInput(e) {
			if (!isInteractive.value) {
				if (input.value) input.value.checked = model.value;
				return;
			}
			if (props.readonly && group) nextTick$27(() => group.forceUpdate());
			model.value = e.target.checked;
		}
		useRender(() => {
			const label = slots.label ? slots.label({
				label: props.label,
				props: { for: id.value }
			}) : props.label;
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			const inputNode = _createElementVNode$103("input", _mergeProps$74({
				"ref": input,
				"checked": model.value,
				"disabled": !!props.disabled,
				"id": id.value,
				"onBlur": onBlur,
				"onFocus": onFocus,
				"onInput": onInput,
				"aria-disabled": !!props.disabled,
				"aria-label": props.label,
				"type": props.type,
				"value": trueValue.value,
				"name": props.name,
				"aria-checked": props.type === "checkbox" ? model.value : void 0
			}, inputAttrs), null);
			return _createElementVNode$103("div", _mergeProps$74({ "class": [
				"v-selection-control",
				{
					"v-selection-control--dirty": model.value,
					"v-selection-control--disabled": props.disabled,
					"v-selection-control--error": props.error,
					"v-selection-control--focused": isFocused.value,
					"v-selection-control--focus-visible": isFocusVisible.value,
					"v-selection-control--inline": props.inline
				},
				densityClasses.value,
				props.class
			] }, rootAttrs, { "style": props.style }), [_createElementVNode$103("div", {
				"class": _normalizeClass$86(["v-selection-control__wrapper", textColorClasses.value]),
				"style": _normalizeStyle$74(textColorStyles.value)
			}, [slots.default?.({
				backgroundColorClasses,
				backgroundColorStyles
			}), _withDirectives$21(_createElementVNode$103("div", { "class": _normalizeClass$86(["v-selection-control__input"]) }, [slots.input?.({
				model,
				textColorClasses,
				textColorStyles,
				backgroundColorClasses,
				backgroundColorStyles,
				inputNode,
				icon: icon.value,
				props: {
					onFocus,
					onBlur,
					id: id.value
				}
			}) ?? _createElementVNode$103(_Fragment$44, null, [icon.value && _createVNode$125(VIcon, {
				"key": "icon",
				"icon": icon.value
			}, null), inputNode])]), [[
				ripple_default,
				!props.disabled && !props.readonly && props.ripple,
				null,
				{
					center: true,
					circle: true
				}
			]])]), label && _createVNode$125(VLabel, {
				"for": id.value,
				"onClick": onClickLabel
			}, { default: () => [label] })]);
		});
		return {
			isFocused,
			input
		};
	}
});
var { mergeProps: _mergeProps$73, createVNode: _createVNode$124 } = await importShared("vue");
var { toRef: toRef$57 } = await importShared("vue");
const makeVCheckboxBtnProps = propsFactory({
	indeterminate: Boolean,
	indeterminateIcon: {
		type: IconValue,
		default: "$checkboxIndeterminate"
	},
	...makeVSelectionControlProps({
		falseIcon: "$checkboxOff",
		trueIcon: "$checkboxOn"
	})
}, "VCheckboxBtn");
const VCheckboxBtn = genericComponent()({
	name: "VCheckboxBtn",
	props: makeVCheckboxBtnProps(),
	emits: {
		"update:modelValue": (value) => true,
		"update:indeterminate": (value) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const indeterminate = useProxiedModel(props, "indeterminate");
		const model = useProxiedModel(props, "modelValue");
		function onChange(v) {
			if (indeterminate.value) indeterminate.value = false;
		}
		const falseIcon = toRef$57(() => {
			return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
		});
		const trueIcon = toRef$57(() => {
			return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
		});
		useRender(() => {
			return _createVNode$124(VSelectionControl, _mergeProps$73(omit(VSelectionControl.filterProps(props), ["modelValue"]), {
				"modelValue": model.value,
				"onUpdate:modelValue": [($event) => model.value = $event, onChange],
				"class": ["v-checkbox-btn", props.class],
				"style": props.style,
				"type": "checkbox",
				"falseIcon": falseIcon.value,
				"trueIcon": trueIcon.value,
				"aria-checked": indeterminate.value ? "mixed" : void 0
			}), slots);
		});
		return {};
	}
});
var { mergeProps: _mergeProps$72, createVNode: _createVNode$123 } = await importShared("vue");
function useInputIcon(props) {
	const { t } = useLocale();
	function InputIcon(_ref) {
		let { name, color, ...attrs } = _ref;
		const localeKey = {
			prepend: "prependAction",
			prependInner: "prependAction",
			append: "appendAction",
			appendInner: "appendAction",
			clear: "clear"
		}[name];
		const listener = props[`onClick:${name}`];
		function onKeydown$1(e) {
			if (e.key !== "Enter" && e.key !== " ") return;
			e.preventDefault();
			e.stopPropagation();
			callEvent(listener, new PointerEvent("click", e));
		}
		const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
		return _createVNode$123(VIcon, _mergeProps$72({
			"icon": props[`${name}Icon`],
			"aria-label": label,
			"onClick": listener,
			"onKeydown": onKeydown$1,
			"color": color
		}, attrs), null);
	}
	return { InputIcon };
}
var { createElementVNode: _createElementVNode$102, normalizeClass: _normalizeClass$85, normalizeStyle: _normalizeStyle$73, createVNode: _createVNode$122 } = await importShared("vue");
var { computed: computed$109 } = await importShared("vue");
const makeVMessagesProps = propsFactory({
	active: Boolean,
	color: String,
	messages: {
		type: [Array, String],
		default: () => []
	},
	...makeComponentProps(),
	...makeTransitionProps({ transition: {
		component: VSlideYTransition,
		leaveAbsolute: true,
		group: true
	} })
}, "VMessages");
const VMessages = genericComponent()({
	name: "VMessages",
	props: makeVMessagesProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const messages = computed$109(() => wrapInArray(props.messages));
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		useRender(() => _createVNode$122(MaybeTransition, {
			"transition": props.transition,
			"tag": "div",
			"class": _normalizeClass$85([
				"v-messages",
				textColorClasses.value,
				props.class
			]),
			"style": _normalizeStyle$73([textColorStyles.value, props.style])
		}, { default: () => [props.active && messages.value.map((message, i) => _createElementVNode$102("div", {
			"class": "v-messages__message",
			"key": `${i}-${messages.value}`
		}, [slots.message ? slots.message({ message }) : message]))] }));
		return {};
	}
});
var { toRef: toRef$56 } = await importShared("vue");
const makeFocusProps = propsFactory({
	focused: Boolean,
	"onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	const isFocused = useProxiedModel(props, "focused");
	const focusClasses = toRef$56(() => {
		return { [`${name}--focused`]: isFocused.value };
	});
	function focus() {
		isFocused.value = true;
	}
	function blur() {
		isFocused.value = false;
	}
	return {
		focusClasses,
		isFocused,
		focus,
		blur
	};
}
var { computed: computed$108, inject: inject$22, markRaw, provide: provide$15, ref: ref$57, shallowRef: shallowRef$44, toRef: toRef$55, watch: watch$45 } = await importShared("vue");
const FormKey = Symbol.for("vuetify:form");
const makeFormProps = propsFactory({
	disabled: Boolean,
	fastFail: Boolean,
	readonly: Boolean,
	modelValue: {
		type: Boolean,
		default: null
	},
	validateOn: {
		type: String,
		default: "input"
	}
}, "form");
function createForm(props) {
	const model = useProxiedModel(props, "modelValue");
	const isDisabled = toRef$55(() => props.disabled);
	const isReadonly = toRef$55(() => props.readonly);
	const isValidating = shallowRef$44(false);
	const items = ref$57([]);
	const errors = ref$57([]);
	async function validate() {
		const results = [];
		let valid = true;
		errors.value = [];
		isValidating.value = true;
		for (const item of items.value) {
			const itemErrorMessages = await item.validate();
			if (itemErrorMessages.length > 0) {
				valid = false;
				results.push({
					id: item.id,
					errorMessages: itemErrorMessages
				});
			}
			if (!valid && props.fastFail) break;
		}
		errors.value = results;
		isValidating.value = false;
		return {
			valid,
			errors: errors.value
		};
	}
	function reset() {
		items.value.forEach((item) => item.reset());
	}
	function resetValidation() {
		items.value.forEach((item) => item.resetValidation());
	}
	watch$45(items, () => {
		let valid = 0;
		let invalid = 0;
		const results = [];
		for (const item of items.value) if (item.isValid === false) {
			invalid++;
			results.push({
				id: item.id,
				errorMessages: item.errorMessages
			});
		} else if (item.isValid === true) valid++;
		errors.value = results;
		model.value = invalid > 0 ? false : valid === items.value.length ? true : null;
	}, {
		deep: true,
		flush: "post"
	});
	provide$15(FormKey, {
		register: (_ref) => {
			let { id, vm, validate: validate$1, reset: reset$1, resetValidation: resetValidation$1 } = _ref;
			if (items.value.some((item) => item.id === id)) consoleWarn(`Duplicate input name "${id}"`);
			items.value.push({
				id,
				validate: validate$1,
				reset: reset$1,
				resetValidation: resetValidation$1,
				vm: markRaw(vm),
				isValid: null,
				errorMessages: []
			});
		},
		unregister: (id) => {
			items.value = items.value.filter((item) => {
				return item.id !== id;
			});
		},
		update: (id, isValid, errorMessages) => {
			const found = items.value.find((item) => item.id === id);
			if (!found) return;
			found.isValid = isValid;
			found.errorMessages = errorMessages;
		},
		isDisabled,
		isReadonly,
		isValidating,
		isValid: model,
		items,
		validateOn: toRef$55(() => props.validateOn)
	});
	return {
		errors,
		isDisabled,
		isReadonly,
		isValidating,
		isValid: model,
		items,
		validate,
		reset,
		resetValidation
	};
}
function useForm(props) {
	const form = inject$22(FormKey, null);
	return {
		...form,
		isReadonly: computed$108(() => !!(props?.readonly ?? form?.isReadonly.value)),
		isDisabled: computed$108(() => !!(props?.disabled ?? form?.isDisabled.value))
	};
}
var { computed: computed$107, inject: inject$21, toRef: toRef$54 } = await importShared("vue");
const RulesSymbol = Symbol.for("vuetify:rules");
function useRules(fn) {
	const rules = inject$21(RulesSymbol, null);
	if (!fn) {
		if (!rules) throw new Error("Could not find Vuetify rules injection");
		return rules.aliases;
	}
	return rules?.resolve(fn) ?? toRef$54(fn);
}
var { computed: computed$106, nextTick: nextTick$26, onBeforeMount: onBeforeMount$3, onBeforeUnmount: onBeforeUnmount$7, onMounted: onMounted$13, ref: ref$56, shallowRef: shallowRef$43, unref: unref$1, useId: useId$12, watch: watch$44 } = await importShared("vue");
const makeValidationProps = propsFactory({
	disabled: {
		type: Boolean,
		default: null
	},
	error: Boolean,
	errorMessages: {
		type: [Array, String],
		default: () => []
	},
	maxErrors: {
		type: [Number, String],
		default: 1
	},
	name: String,
	label: String,
	readonly: {
		type: Boolean,
		default: null
	},
	rules: {
		type: Array,
		default: () => []
	},
	modelValue: null,
	validateOn: String,
	validationValue: null,
	...makeFocusProps()
}, "validation");
function useValidation(props) {
	let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : useId$12();
	const model = useProxiedModel(props, "modelValue");
	const validationModel = computed$106(() => props.validationValue === void 0 ? model.value : props.validationValue);
	const form = useForm(props);
	const rules = useRules(() => props.rules);
	const internalErrorMessages = ref$56([]);
	const isPristine = shallowRef$43(true);
	const isDirty = computed$106(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
	const errorMessages = computed$106(() => {
		return props.errorMessages?.length ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, Number(props.maxErrors))) : internalErrorMessages.value;
	});
	const validateOn = computed$106(() => {
		let value = (props.validateOn ?? form.validateOn?.value) || "input";
		if (value === "lazy") value = "input lazy";
		if (value === "eager") value = "input eager";
		const set = new Set(value?.split(" ") ?? []);
		return {
			input: set.has("input"),
			blur: set.has("blur") || set.has("input") || set.has("invalid-input"),
			invalidInput: set.has("invalid-input"),
			lazy: set.has("lazy"),
			eager: set.has("eager")
		};
	});
	const isValid = computed$106(() => {
		if (props.error || props.errorMessages?.length) return false;
		if (!props.rules.length) return true;
		if (isPristine.value) return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
		else return !internalErrorMessages.value.length;
	});
	const isValidating = shallowRef$43(false);
	const validationClasses = computed$106(() => {
		return {
			[`${name}--error`]: isValid.value === false,
			[`${name}--dirty`]: isDirty.value,
			[`${name}--disabled`]: form.isDisabled.value,
			[`${name}--readonly`]: form.isReadonly.value
		};
	});
	const vm = getCurrentInstance("validation");
	const uid = computed$106(() => props.name ?? unref$1(id));
	onBeforeMount$3(() => {
		form.register?.({
			id: uid.value,
			vm,
			validate,
			reset,
			resetValidation
		});
	});
	onBeforeUnmount$7(() => {
		form.unregister?.(uid.value);
	});
	onMounted$13(async () => {
		if (!validateOn.value.lazy) await validate(!validateOn.value.eager);
		form.update?.(uid.value, isValid.value, errorMessages.value);
	});
	useToggleScope(() => validateOn.value.input || validateOn.value.invalidInput && isValid.value === false, () => {
		watch$44(validationModel, () => {
			if (validationModel.value != null) validate();
			else if (props.focused) {
				const unwatch = watch$44(() => props.focused, (val) => {
					if (!val) validate();
					unwatch();
				});
			}
		});
	});
	useToggleScope(() => validateOn.value.blur, () => {
		watch$44(() => props.focused, (val) => {
			if (!val) validate();
		});
	});
	watch$44([isValid, errorMessages], () => {
		form.update?.(uid.value, isValid.value, errorMessages.value);
	});
	async function reset() {
		model.value = null;
		await nextTick$26();
		await resetValidation();
	}
	async function resetValidation() {
		isPristine.value = true;
		if (!validateOn.value.lazy) await validate(!validateOn.value.eager);
		else internalErrorMessages.value = [];
	}
	async function validate() {
		let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
		const results = [];
		isValidating.value = true;
		for (const rule of rules.value) {
			if (results.length >= Number(props.maxErrors ?? 1)) break;
			const result = await (typeof rule === "function" ? rule : () => rule)(validationModel.value);
			if (result === true) continue;
			if (result !== false && typeof result !== "string") {
				console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
				continue;
			}
			results.push(result || "");
		}
		internalErrorMessages.value = results;
		isValidating.value = false;
		isPristine.value = silent;
		return internalErrorMessages.value;
	}
	return {
		errorMessages,
		isDirty,
		isDisabled: form.isDisabled,
		isReadonly: form.isReadonly,
		isPristine,
		isValid,
		isValidating,
		reset,
		resetValidation,
		validate,
		validationClasses
	};
}
var { createVNode: _createVNode$121, createElementVNode: _createElementVNode$101, normalizeClass: _normalizeClass$84, normalizeStyle: _normalizeStyle$72 } = await importShared("vue");
var { computed: computed$105, toRef: toRef$53, useId: useId$11 } = await importShared("vue");
const makeVInputProps = propsFactory({
	id: String,
	appendIcon: IconValue,
	baseColor: String,
	centerAffix: {
		type: Boolean,
		default: true
	},
	color: String,
	glow: Boolean,
	iconColor: [Boolean, String],
	prependIcon: IconValue,
	hideDetails: [Boolean, String],
	hideSpinButtons: Boolean,
	hint: String,
	persistentHint: Boolean,
	messages: {
		type: [Array, String],
		default: () => []
	},
	direction: {
		type: String,
		default: "horizontal",
		validator: (v) => ["horizontal", "vertical"].includes(v)
	},
	"onClick:prepend": EventProp(),
	"onClick:append": EventProp(),
	...makeComponentProps(),
	...makeDensityProps(),
	...pick(makeDimensionProps(), [
		"maxWidth",
		"minWidth",
		"width"
	]),
	...makeThemeProps(),
	...makeValidationProps()
}, "VInput");
const VInput = genericComponent()({
	name: "VInput",
	props: { ...makeVInputProps() },
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { attrs, slots, emit } = _ref;
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { themeClasses } = provideTheme(props);
		const { rtlClasses } = useRtl();
		const { InputIcon } = useInputIcon(props);
		const uid = useId$11();
		const id = computed$105(() => props.id || `input-${uid}`);
		const { errorMessages, isDirty, isDisabled, isReadonly, isPristine, isValid, isValidating, reset, resetValidation, validate, validationClasses } = useValidation(props, "v-input", id);
		const messages = computed$105(() => {
			if (props.errorMessages?.length || !isPristine.value && errorMessages.value.length) return errorMessages.value;
			else if (props.hint && (props.persistentHint || props.focused)) return props.hint;
			else return props.messages;
		});
		const hasMessages = toRef$53(() => messages.value.length > 0);
		const hasDetails = toRef$53(() => !props.hideDetails || props.hideDetails === "auto" && (hasMessages.value || !!slots.details));
		const messagesId = computed$105(() => hasDetails.value ? `${id.value}-messages` : void 0);
		const slotProps = computed$105(() => ({
			id,
			messagesId,
			isDirty,
			isDisabled,
			isReadonly,
			isPristine,
			isValid,
			isValidating,
			hasDetails,
			reset,
			resetValidation,
			validate
		}));
		const color = toRef$53(() => {
			return props.error || props.disabled ? void 0 : props.focused ? props.color : props.baseColor;
		});
		const iconColor = toRef$53(() => {
			if (!props.iconColor) return void 0;
			return props.iconColor === true ? color.value : props.iconColor;
		});
		useRender(() => {
			const hasPrepend = !!(slots.prepend || props.prependIcon);
			const hasAppend = !!(slots.append || props.appendIcon);
			return _createElementVNode$101("div", {
				"class": _normalizeClass$84([
					"v-input",
					`v-input--${props.direction}`,
					{
						"v-input--center-affix": props.centerAffix,
						"v-input--focused": props.focused,
						"v-input--glow": props.glow,
						"v-input--hide-spin-buttons": props.hideSpinButtons
					},
					densityClasses.value,
					themeClasses.value,
					rtlClasses.value,
					validationClasses.value,
					props.class
				]),
				"style": _normalizeStyle$72([dimensionStyles.value, props.style])
			}, [
				hasPrepend && _createElementVNode$101("div", {
					"key": "prepend",
					"class": "v-input__prepend"
				}, [slots.prepend ? slots.prepend(slotProps.value) : props.prependIcon && _createVNode$121(InputIcon, {
					"key": "prepend-icon",
					"name": "prepend",
					"color": iconColor.value
				}, null)]),
				slots.default && _createElementVNode$101("div", { "class": "v-input__control" }, [slots.default?.(slotProps.value)]),
				hasAppend && _createElementVNode$101("div", {
					"key": "append",
					"class": "v-input__append"
				}, [slots.append ? slots.append(slotProps.value) : props.appendIcon && _createVNode$121(InputIcon, {
					"key": "append-icon",
					"name": "append",
					"color": iconColor.value
				}, null)]),
				hasDetails.value && _createElementVNode$101("div", {
					"id": messagesId.value,
					"class": "v-input__details",
					"role": "alert",
					"aria-live": "polite"
				}, [_createVNode$121(VMessages, {
					"active": hasMessages.value,
					"messages": messages.value
				}, { message: slots.message }), slots.details?.(slotProps.value)])
			]);
		});
		return {
			reset,
			resetValidation,
			validate,
			isValid,
			errorMessages
		};
	}
});
var Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
	let currentObj = obj;
	while (currentObj) {
		const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
		if (descriptor) return descriptor;
		currentObj = Object.getPrototypeOf(currentObj);
	}
}
function forwardRefs(target) {
	for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) refs[_key - 1] = arguments[_key];
	target[Refs] = refs;
	return new Proxy(target, {
		get(target$1, key) {
			if (Reflect.has(target$1, key)) return Reflect.get(target$1, key);
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
			for (const ref$65 of refs) if (ref$65.value && Reflect.has(ref$65.value, key)) {
				const val = Reflect.get(ref$65.value, key);
				return typeof val === "function" ? val.bind(ref$65.value) : val;
			}
		},
		has(target$1, key) {
			if (Reflect.has(target$1, key)) return true;
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
			for (const ref$65 of refs) if (ref$65.value && Reflect.has(ref$65.value, key)) return true;
			return false;
		},
		set(target$1, key, value) {
			if (Reflect.has(target$1, key)) return Reflect.set(target$1, key, value);
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
			for (const ref$65 of refs) if (ref$65.value && Reflect.has(ref$65.value, key)) return Reflect.set(ref$65.value, key, value);
			return false;
		},
		getOwnPropertyDescriptor(target$1, key) {
			const descriptor = Reflect.getOwnPropertyDescriptor(target$1, key);
			if (descriptor) return descriptor;
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
			for (const ref$65 of refs) {
				if (!ref$65.value) continue;
				const descriptor$1 = getDescriptor(ref$65.value, key) ?? ("_" in ref$65.value ? getDescriptor(ref$65.value._?.setupState, key) : void 0);
				if (descriptor$1) return descriptor$1;
			}
			for (const ref$65 of refs) {
				const childRefs = ref$65.value && ref$65.value[Refs];
				if (!childRefs) continue;
				const queue = childRefs.slice();
				while (queue.length) {
					const ref$66 = queue.shift();
					const descriptor$1 = getDescriptor(ref$66.value, key);
					if (descriptor$1) return descriptor$1;
					const childRefs$1 = ref$66.value && ref$66.value[Refs];
					if (childRefs$1) queue.push(...childRefs$1);
				}
			}
		}
	});
}
var { mergeProps: _mergeProps$71, createVNode: _createVNode$120 } = await importShared("vue");
var { ref: ref$55, useId: useId$10 } = await importShared("vue");
const makeVCheckboxProps = propsFactory({
	...omit(makeVInputProps(), ["direction"]),
	...omit(makeVCheckboxBtnProps(), ["inline"])
}, "VCheckbox");
const VCheckbox = genericComponent()({
	name: "VCheckbox",
	inheritAttrs: false,
	props: makeVCheckboxProps(),
	emits: {
		"update:modelValue": (value) => true,
		"update:focused": (focused) => true
	},
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const { isFocused, focus, blur } = useFocus(props);
		const inputRef = ref$55();
		const uid = useId$10();
		useRender(() => {
			const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
			const inputProps = VInput.filterProps(props);
			const checkboxProps = VCheckboxBtn.filterProps(props);
			return _createVNode$120(VInput, _mergeProps$71({
				"ref": inputRef,
				"class": ["v-checkbox", props.class]
			}, rootAttrs, inputProps, {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"id": props.id || `checkbox-${uid}`,
				"focused": isFocused.value,
				"style": props.style
			}), {
				...slots,
				default: (_ref2) => {
					let { id, messagesId, isDisabled, isReadonly, isValid } = _ref2;
					return _createVNode$120(VCheckboxBtn, _mergeProps$71(checkboxProps, {
						"id": id.value,
						"aria-describedby": messagesId.value,
						"disabled": isDisabled.value,
						"readonly": isReadonly.value
					}, controlAttrs, {
						"error": isValid.value === false,
						"modelValue": model.value,
						"onUpdate:modelValue": ($event) => model.value = $event,
						"onFocus": focus,
						"onBlur": blur
					}), slots);
				}
			});
		});
		return forwardRefs({}, inputRef);
	}
});
function calculateUpdatedTarget(_ref) {
	let { selectedElement, containerElement, isRtl, isHorizontal } = _ref;
	const containerSize = getOffsetSize(isHorizontal, containerElement);
	const scrollPosition = getScrollPosition(isHorizontal, isRtl, containerElement);
	const childrenSize = getOffsetSize(isHorizontal, selectedElement);
	const childrenStartPosition = getOffsetPosition(isHorizontal, selectedElement);
	const additionalOffset = childrenSize * .4;
	if (scrollPosition > childrenStartPosition) return childrenStartPosition - additionalOffset;
	else if (scrollPosition + containerSize < childrenStartPosition + childrenSize) return childrenStartPosition - containerSize + childrenSize + additionalOffset;
	return scrollPosition;
}
function calculateCenteredTarget(_ref2) {
	let { selectedElement, containerElement, isHorizontal } = _ref2;
	const containerOffsetSize = getOffsetSize(isHorizontal, containerElement);
	const childrenOffsetPosition = getOffsetPosition(isHorizontal, selectedElement);
	const childrenOffsetSize = getOffsetSize(isHorizontal, selectedElement);
	return childrenOffsetPosition - containerOffsetSize / 2 + childrenOffsetSize / 2;
}
function getScrollSize(isHorizontal, element) {
	return element?.[isHorizontal ? "scrollWidth" : "scrollHeight"] || 0;
}
function getClientSize(isHorizontal, element) {
	return element?.[isHorizontal ? "clientWidth" : "clientHeight"] || 0;
}
function getScrollPosition(isHorizontal, rtl, element) {
	if (!element) return 0;
	const { scrollLeft, offsetWidth, scrollWidth } = element;
	if (isHorizontal) return rtl ? scrollWidth - offsetWidth + scrollLeft : scrollLeft;
	return element.scrollTop;
}
function getOffsetSize(isHorizontal, element) {
	return element?.[isHorizontal ? "offsetWidth" : "offsetHeight"] || 0;
}
function getOffsetPosition(isHorizontal, element) {
	return element?.[isHorizontal ? "offsetLeft" : "offsetTop"] || 0;
}
var { createVNode: _createVNode$119, normalizeClass: _normalizeClass$83, createElementVNode: _createElementVNode$100, normalizeStyle: _normalizeStyle$71 } = await importShared("vue");
var { computed: computed$104, shallowRef: shallowRef$42, watch: watch$43 } = await importShared("vue");
const VSlideGroupSymbol = Symbol.for("vuetify:v-slide-group");
const makeVSlideGroupProps = propsFactory({
	centerActive: Boolean,
	scrollToActive: {
		type: Boolean,
		default: true
	},
	contentClass: null,
	direction: {
		type: String,
		default: "horizontal"
	},
	symbol: {
		type: null,
		default: VSlideGroupSymbol
	},
	nextIcon: {
		type: IconValue,
		default: "$next"
	},
	prevIcon: {
		type: IconValue,
		default: "$prev"
	},
	showArrows: {
		type: [Boolean, String],
		validator: (v) => typeof v === "boolean" || [
			"always",
			"desktop",
			"mobile",
			"never"
		].includes(v)
	},
	...makeComponentProps(),
	...makeDisplayProps({ mobile: null }),
	...makeTagProps(),
	...makeGroupProps({ selectedClass: "v-slide-group-item--active" })
}, "VSlideGroup");
const VSlideGroup = genericComponent()({
	name: "VSlideGroup",
	props: makeVSlideGroupProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { isRtl } = useRtl();
		const { displayClasses, mobile } = useDisplay(props);
		const group = useGroup(props, props.symbol);
		const isOverflowing = shallowRef$42(false);
		const scrollOffset = shallowRef$42(0);
		const containerSize = shallowRef$42(0);
		const contentSize = shallowRef$42(0);
		const isHorizontal = computed$104(() => props.direction === "horizontal");
		const { resizeRef: containerRef, contentRect: containerRect } = useResizeObserver();
		const { resizeRef: contentRef, contentRect } = useResizeObserver();
		const goTo = useGoTo();
		const goToOptions = computed$104(() => {
			return {
				container: containerRef.el,
				duration: 200,
				easing: "easeOutQuart"
			};
		});
		const firstSelectedIndex = computed$104(() => {
			if (!group.selected.value.length) return -1;
			return group.items.value.findIndex((item) => item.id === group.selected.value[0]);
		});
		const lastSelectedIndex = computed$104(() => {
			if (!group.selected.value.length) return -1;
			return group.items.value.findIndex((item) => item.id === group.selected.value[group.selected.value.length - 1]);
		});
		if (IN_BROWSER) {
			let frame = -1;
			watch$43(() => [
				group.selected.value,
				containerRect.value,
				contentRect.value,
				isHorizontal.value
			], () => {
				cancelAnimationFrame(frame);
				frame = requestAnimationFrame(() => {
					if (containerRect.value && contentRect.value) {
						const sizeProperty = isHorizontal.value ? "width" : "height";
						containerSize.value = containerRect.value[sizeProperty];
						contentSize.value = contentRect.value[sizeProperty];
						isOverflowing.value = containerSize.value + 1 < contentSize.value;
					}
					if (props.scrollToActive && firstSelectedIndex.value >= 0 && contentRef.el) {
						const selectedElement = contentRef.el.children[lastSelectedIndex.value];
						scrollToChildren(selectedElement, props.centerActive);
					}
				});
			});
		}
		const isFocused = shallowRef$42(false);
		function scrollToChildren(children, center) {
			let target = 0;
			if (center) target = calculateCenteredTarget({
				containerElement: containerRef.el,
				isHorizontal: isHorizontal.value,
				selectedElement: children
			});
			else target = calculateUpdatedTarget({
				containerElement: containerRef.el,
				isHorizontal: isHorizontal.value,
				isRtl: isRtl.value,
				selectedElement: children
			});
			scrollToPosition(target);
		}
		function scrollToPosition(newPosition) {
			if (!IN_BROWSER || !containerRef.el) return;
			const offsetSize = getOffsetSize(isHorizontal.value, containerRef.el);
			const scrollPosition = getScrollPosition(isHorizontal.value, isRtl.value, containerRef.el);
			if (getScrollSize(isHorizontal.value, containerRef.el) <= offsetSize || Math.abs(newPosition - scrollPosition) < 16) return;
			if (isHorizontal.value && isRtl.value && containerRef.el) {
				const { scrollWidth, offsetWidth: containerWidth } = containerRef.el;
				newPosition = scrollWidth - containerWidth - newPosition;
			}
			if (isHorizontal.value) goTo.horizontal(newPosition, goToOptions.value);
			else goTo(newPosition, goToOptions.value);
		}
		function onScroll(e) {
			const { scrollTop, scrollLeft } = e.target;
			scrollOffset.value = isHorizontal.value ? scrollLeft : scrollTop;
		}
		function onFocusin(e) {
			isFocused.value = true;
			if (!isOverflowing.value || !contentRef.el) return;
			for (const el of e.composedPath()) for (const item of contentRef.el.children) if (item === el) {
				scrollToChildren(item);
				return;
			}
		}
		function onFocusout(e) {
			isFocused.value = false;
		}
		let ignoreFocusEvent = false;
		function onFocus(e) {
			if (!ignoreFocusEvent && !isFocused.value && !(e.relatedTarget && contentRef.el?.contains(e.relatedTarget))) focus();
			ignoreFocusEvent = false;
		}
		function onFocusAffixes() {
			ignoreFocusEvent = true;
		}
		function onKeydown$1(e) {
			if (!contentRef.el) return;
			function toFocus(location) {
				e.preventDefault();
				focus(location);
			}
			if (isHorizontal.value) {
				if (e.key === "ArrowRight") toFocus(isRtl.value ? "prev" : "next");
				else if (e.key === "ArrowLeft") toFocus(isRtl.value ? "next" : "prev");
			} else if (e.key === "ArrowDown") toFocus("next");
			else if (e.key === "ArrowUp") toFocus("prev");
			if (e.key === "Home") toFocus("first");
			else if (e.key === "End") toFocus("last");
		}
		function getSiblingElement(el, location) {
			if (!el) return void 0;
			let sibling = el;
			do
				sibling = sibling?.[location === "next" ? "nextElementSibling" : "previousElementSibling"];
			while (sibling?.hasAttribute("disabled"));
			return sibling;
		}
		function focus(location) {
			if (!contentRef.el) return;
			let el;
			if (!location) el = focusableChildren(contentRef.el)[0];
			else if (location === "next") {
				el = getSiblingElement(contentRef.el.querySelector(":focus"), location);
				if (!el) return focus("first");
			} else if (location === "prev") {
				el = getSiblingElement(contentRef.el.querySelector(":focus"), location);
				if (!el) return focus("last");
			} else if (location === "first") {
				el = contentRef.el.firstElementChild;
				if (el?.hasAttribute("disabled")) el = getSiblingElement(el, "next");
			} else if (location === "last") {
				el = contentRef.el.lastElementChild;
				if (el?.hasAttribute("disabled")) el = getSiblingElement(el, "prev");
			}
			if (el) el.focus({ preventScroll: true });
		}
		function scrollTo(location) {
			const direction = isHorizontal.value && isRtl.value ? -1 : 1;
			const offsetStep = (location === "prev" ? -direction : direction) * containerSize.value;
			let newPosition = scrollOffset.value + offsetStep;
			if (isHorizontal.value && isRtl.value && containerRef.el) {
				const { scrollWidth, offsetWidth: containerWidth } = containerRef.el;
				newPosition += scrollWidth - containerWidth;
			}
			scrollToPosition(newPosition);
		}
		const slotProps = computed$104(() => ({
			next: group.next,
			prev: group.prev,
			select: group.select,
			isSelected: group.isSelected
		}));
		const hasOverflowOrScroll = computed$104(() => isOverflowing.value || Math.abs(scrollOffset.value) > 0);
		const hasAffixes = computed$104(() => {
			switch (props.showArrows) {
				case "never": return false;
				case "always": return true;
				case "desktop": return !mobile.value;
				case true: return hasOverflowOrScroll.value;
				case "mobile": return mobile.value || hasOverflowOrScroll.value;
				default: return !mobile.value && hasOverflowOrScroll.value;
			}
		});
		const hasPrev = computed$104(() => {
			return Math.abs(scrollOffset.value) > 1;
		});
		const hasNext = computed$104(() => {
			if (!containerRef.value || !hasOverflowOrScroll.value) return false;
			return getScrollSize(isHorizontal.value, containerRef.el) - getClientSize(isHorizontal.value, containerRef.el) - Math.abs(scrollOffset.value) > 1;
		});
		useRender(() => _createVNode$119(props.tag, {
			"class": _normalizeClass$83([
				"v-slide-group",
				{
					"v-slide-group--vertical": !isHorizontal.value,
					"v-slide-group--has-affixes": hasAffixes.value,
					"v-slide-group--is-overflowing": isOverflowing.value
				},
				displayClasses.value,
				props.class
			]),
			"style": _normalizeStyle$71(props.style),
			"tabindex": isFocused.value || group.selected.value.length ? -1 : 0,
			"onFocus": onFocus
		}, { default: () => [
			hasAffixes.value && _createElementVNode$100("div", {
				"key": "prev",
				"class": _normalizeClass$83(["v-slide-group__prev", { "v-slide-group__prev--disabled": !hasPrev.value }]),
				"onMousedown": onFocusAffixes,
				"onClick": () => hasPrev.value && scrollTo("prev")
			}, [slots.prev?.(slotProps.value) ?? _createVNode$119(VFadeTransition, null, { default: () => [_createVNode$119(VIcon, { "icon": isRtl.value ? props.nextIcon : props.prevIcon }, null)] })]),
			_createElementVNode$100("div", {
				"key": "container",
				"ref": containerRef,
				"class": _normalizeClass$83(["v-slide-group__container", props.contentClass]),
				"onScroll": onScroll
			}, [_createElementVNode$100("div", {
				"ref": contentRef,
				"class": "v-slide-group__content",
				"onFocusin": onFocusin,
				"onFocusout": onFocusout,
				"onKeydown": onKeydown$1
			}, [slots.default?.(slotProps.value)])]),
			hasAffixes.value && _createElementVNode$100("div", {
				"key": "next",
				"class": _normalizeClass$83(["v-slide-group__next", { "v-slide-group__next--disabled": !hasNext.value }]),
				"onMousedown": onFocusAffixes,
				"onClick": () => hasNext.value && scrollTo("next")
			}, [slots.next?.(slotProps.value) ?? _createVNode$119(VFadeTransition, null, { default: () => [_createVNode$119(VIcon, { "icon": isRtl.value ? props.prevIcon : props.nextIcon }, null)] })])
		] }));
		return {
			selected: group.selected,
			scrollTo,
			scrollOffset,
			focus,
			hasPrev,
			hasNext
		};
	}
});
var { mergeProps: _mergeProps$70, createVNode: _createVNode$118 } = await importShared("vue");
var { toRef: toRef$52 } = await importShared("vue");
const VChipGroupSymbol = Symbol.for("vuetify:v-chip-group");
const makeVChipGroupProps = propsFactory({
	baseColor: String,
	column: Boolean,
	filter: Boolean,
	valueComparator: {
		type: Function,
		default: deepEqual
	},
	...makeVSlideGroupProps({ scrollToActive: false }),
	...makeComponentProps(),
	...makeGroupProps({ selectedClass: "v-chip--selected" }),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps({ variant: "tonal" })
}, "VChipGroup");
const VChipGroup = genericComponent()({
	name: "VChipGroup",
	props: makeVChipGroupProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { isSelected, select, next, prev, selected } = useGroup(props, VChipGroupSymbol);
		provideDefaults({ VChip: {
			baseColor: toRef$52(() => props.baseColor),
			color: toRef$52(() => props.color),
			disabled: toRef$52(() => props.disabled),
			filter: toRef$52(() => props.filter),
			variant: toRef$52(() => props.variant)
		} });
		useRender(() => {
			return _createVNode$118(VSlideGroup, _mergeProps$70(VSlideGroup.filterProps(props), {
				"class": [
					"v-chip-group",
					{ "v-chip-group--column": props.column },
					themeClasses.value,
					props.class
				],
				"style": props.style
			}), { default: () => [slots.default?.({
				isSelected,
				select,
				next,
				prev,
				selected: selected.value
			})] });
		});
		return {};
	}
});
var { createVNode: _createVNode$117, vShow: _vShow$9, createElementVNode: _createElementVNode$99, withDirectives: _withDirectives$20, Fragment: _Fragment$43, mergeProps: _mergeProps$69 } = await importShared("vue");
var { computed: computed$103, toDisplayString: toDisplayString$4, toRef: toRef$51, watch: watch$42 } = await importShared("vue");
const makeVChipProps = propsFactory({
	activeClass: String,
	appendAvatar: String,
	appendIcon: IconValue,
	baseColor: String,
	closable: Boolean,
	closeIcon: {
		type: IconValue,
		default: "$delete"
	},
	closeLabel: {
		type: String,
		default: "$vuetify.close"
	},
	draggable: Boolean,
	filter: Boolean,
	filterIcon: {
		type: IconValue,
		default: "$complete"
	},
	label: Boolean,
	link: {
		type: Boolean,
		default: void 0
	},
	pill: Boolean,
	prependAvatar: String,
	prependIcon: IconValue,
	ripple: {
		type: [Boolean, Object],
		default: true
	},
	text: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	modelValue: {
		type: Boolean,
		default: true
	},
	onClick: EventProp(),
	onClickOnce: EventProp(),
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeElevationProps(),
	...makeGroupItemProps(),
	...makeRoundedProps(),
	...makeRouterProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "span" }),
	...makeThemeProps(),
	...makeVariantProps({ variant: "tonal" })
}, "VChip");
const VChip = genericComponent()({
	name: "VChip",
	directives: { vRipple: ripple_default },
	props: makeVChipProps(),
	emits: {
		"click:close": (e) => true,
		"update:modelValue": (value) => true,
		"group:selected": (val) => true,
		click: (e) => true
	},
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const { t } = useLocale();
		const { borderClasses } = useBorder(props);
		const { densityClasses } = useDensity(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const { sizeClasses } = useSize(props);
		const { themeClasses } = provideTheme(props);
		const isActive = useProxiedModel(props, "modelValue");
		const group = useGroupItem(props, VChipGroupSymbol, false);
		const slideGroup = useGroupItem(props, VSlideGroupSymbol, false);
		const link = useLink(props, attrs);
		const isLink = toRef$51(() => props.link !== false && link.isLink.value);
		const isClickable = computed$103(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
		const closeProps = toRef$51(() => ({
			"aria-label": t(props.closeLabel),
			disabled: props.disabled,
			onClick(e) {
				e.preventDefault();
				e.stopPropagation();
				isActive.value = false;
				emit("click:close", e);
			}
		}));
		watch$42(isActive, (val) => {
			if (val) {
				group?.register();
				slideGroup?.register();
			} else {
				group?.unregister();
				slideGroup?.unregister();
			}
		});
		const { colorClasses, colorStyles, variantClasses } = useVariant(() => {
			return {
				color: !group || group.isSelected.value ? props.color ?? props.baseColor : props.baseColor,
				variant: props.variant
			};
		});
		function onClick(e) {
			emit("click", e);
			if (!isClickable.value) return;
			link.navigate?.(e);
			group?.toggle();
		}
		function onKeyDown(e) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				onClick(e);
			}
		}
		return () => {
			const Tag = link.isLink.value ? "a" : props.tag;
			const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
			const hasAppend = !!(hasAppendMedia || slots.append);
			const hasClose = !!(slots.close || props.closable);
			const hasFilter = !!(slots.filter || props.filter) && group;
			const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
			const hasPrepend = !!(hasPrependMedia || slots.prepend);
			return isActive.value && _withDirectives$20(_createVNode$117(Tag, _mergeProps$69(link.linkProps, {
				"class": [
					"v-chip",
					{
						"v-chip--disabled": props.disabled,
						"v-chip--label": props.label,
						"v-chip--link": isClickable.value,
						"v-chip--filter": hasFilter,
						"v-chip--pill": props.pill,
						[`${props.activeClass}`]: props.activeClass && link.isActive?.value
					},
					themeClasses.value,
					borderClasses.value,
					colorClasses.value,
					densityClasses.value,
					elevationClasses.value,
					roundedClasses.value,
					sizeClasses.value,
					variantClasses.value,
					group?.selectedClass.value,
					props.class
				],
				"style": [colorStyles.value, props.style],
				"disabled": props.disabled || void 0,
				"draggable": props.draggable,
				"tabindex": isClickable.value ? 0 : void 0,
				"onClick": onClick,
				"onKeydown": isClickable.value && !isLink.value && onKeyDown
			}), { default: () => [
				genOverlays(isClickable.value, "v-chip"),
				hasFilter && _createVNode$117(VExpandXTransition, { "key": "filter" }, { default: () => [_withDirectives$20(_createElementVNode$99("div", { "class": "v-chip__filter" }, [!slots.filter ? _createVNode$117(VIcon, {
					"key": "filter-icon",
					"icon": props.filterIcon
				}, null) : _createVNode$117(VDefaultsProvider, {
					"key": "filter-defaults",
					"disabled": !props.filterIcon,
					"defaults": { VIcon: { icon: props.filterIcon } }
				}, slots.filter)]), [[_vShow$9, group.isSelected.value]])] }),
				hasPrepend && _createElementVNode$99("div", {
					"key": "prepend",
					"class": "v-chip__prepend"
				}, [!slots.prepend ? _createElementVNode$99(_Fragment$43, null, [props.prependIcon && _createVNode$117(VIcon, {
					"key": "prepend-icon",
					"icon": props.prependIcon,
					"start": true
				}, null), props.prependAvatar && _createVNode$117(VAvatar, {
					"key": "prepend-avatar",
					"image": props.prependAvatar,
					"start": true
				}, null)]) : _createVNode$117(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !hasPrependMedia,
					"defaults": {
						VAvatar: {
							image: props.prependAvatar,
							start: true
						},
						VIcon: {
							icon: props.prependIcon,
							start: true
						}
					}
				}, slots.prepend)]),
				_createElementVNode$99("div", {
					"class": "v-chip__content",
					"data-no-activator": ""
				}, [slots.default?.({
					isSelected: group?.isSelected.value,
					selectedClass: group?.selectedClass.value,
					select: group?.select,
					toggle: group?.toggle,
					value: group?.value.value,
					disabled: props.disabled
				}) ?? toDisplayString$4(props.text)]),
				hasAppend && _createElementVNode$99("div", {
					"key": "append",
					"class": "v-chip__append"
				}, [!slots.append ? _createElementVNode$99(_Fragment$43, null, [props.appendIcon && _createVNode$117(VIcon, {
					"key": "append-icon",
					"end": true,
					"icon": props.appendIcon
				}, null), props.appendAvatar && _createVNode$117(VAvatar, {
					"key": "append-avatar",
					"end": true,
					"image": props.appendAvatar
				}, null)]) : _createVNode$117(VDefaultsProvider, {
					"key": "append-defaults",
					"disabled": !hasAppendMedia,
					"defaults": {
						VAvatar: {
							end: true,
							image: props.appendAvatar
						},
						VIcon: {
							end: true,
							icon: props.appendIcon
						}
					}
				}, slots.append)]),
				hasClose && _createElementVNode$99("button", _mergeProps$69({
					"key": "close",
					"class": "v-chip__close",
					"type": "button",
					"data-testid": "close-chip"
				}, closeProps.value), [!slots.close ? _createVNode$117(VIcon, {
					"key": "close-icon",
					"icon": props.closeIcon,
					"size": "x-small"
				}, null) : _createVNode$117(VDefaultsProvider, {
					"key": "close-defaults",
					"defaults": { VIcon: {
						icon: props.closeIcon,
						size: "x-small"
					} }
				}, slots.close)])
			] }), [[
				ripple_default,
				isClickable.value && props.ripple,
				null
			]]);
		};
	}
});
var { normalizeClass: _normalizeClass$82, normalizeStyle: _normalizeStyle$70, createElementVNode: _createElementVNode$98 } = await importShared("vue");
var { computed: computed$102, toRef: toRef$50 } = await importShared("vue");
var allowedVariants$2 = [
	"dotted",
	"dashed",
	"solid",
	"double"
];
const makeVDividerProps = propsFactory({
	color: String,
	contentOffset: [
		Number,
		String,
		Array
	],
	gradient: Boolean,
	inset: Boolean,
	length: [Number, String],
	opacity: [Number, String],
	thickness: [Number, String],
	vertical: Boolean,
	variant: {
		type: String,
		default: "solid",
		validator: (v) => allowedVariants$2.includes(v)
	},
	...makeComponentProps(),
	...makeThemeProps()
}, "VDivider");
const VDivider = genericComponent()({
	name: "VDivider",
	props: makeVDividerProps(),
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const dividerStyles = computed$102(() => {
			const styles = {};
			if (props.length) styles[props.vertical ? "height" : "width"] = convertToUnit(props.length);
			if (props.thickness) styles[props.vertical ? "borderRightWidth" : "borderTopWidth"] = convertToUnit(props.thickness);
			return styles;
		});
		const contentStyles = toRef$50(() => {
			const margin = Array.isArray(props.contentOffset) ? props.contentOffset[0] : props.contentOffset;
			const shift = Array.isArray(props.contentOffset) ? props.contentOffset[1] : 0;
			return {
				marginBlock: props.vertical && margin ? convertToUnit(margin) : void 0,
				marginInline: !props.vertical && margin ? convertToUnit(margin) : void 0,
				transform: shift ? `translate${props.vertical ? "X" : "Y"}(${convertToUnit(shift)})` : void 0
			};
		});
		useRender(() => {
			const divider = _createElementVNode$98("hr", {
				"class": _normalizeClass$82([
					{
						"v-divider": true,
						"v-divider--gradient": props.gradient && !slots.default,
						"v-divider--inset": props.inset,
						"v-divider--vertical": props.vertical
					},
					themeClasses.value,
					textColorClasses.value,
					props.class
				]),
				"style": _normalizeStyle$70([
					dividerStyles.value,
					textColorStyles.value,
					{ "--v-border-opacity": props.opacity },
					{ "border-style": props.variant },
					props.style
				]),
				"aria-orientation": !attrs.role || attrs.role === "separator" ? props.vertical ? "vertical" : "horizontal" : void 0,
				"role": `${attrs.role || "separator"}`
			}, null);
			if (!slots.default) return divider;
			return _createElementVNode$98("div", { "class": _normalizeClass$82(["v-divider__wrapper", {
				"v-divider__wrapper--gradient": props.gradient,
				"v-divider__wrapper--inset": props.inset,
				"v-divider__wrapper--vertical": props.vertical
			}]) }, [
				divider,
				_createElementVNode$98("div", {
					"class": "v-divider__content",
					"style": _normalizeStyle$70(contentStyles.value)
				}, [slots.default()]),
				divider
			]);
		});
		return {};
	}
});
var { computed: computed$101, inject: inject$20, provide: provide$14, shallowRef: shallowRef$41 } = await importShared("vue");
const ListKey = Symbol.for("vuetify:list");
function createList() {
	let { filterable } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
	const parent = inject$20(ListKey, {
		filterable: false,
		hasPrepend: shallowRef$41(false),
		updateHasPrepend: () => null
	});
	const data = {
		filterable: parent.filterable || filterable,
		hasPrepend: shallowRef$41(false),
		updateHasPrepend: (value) => {
			if (value) data.hasPrepend.value = value;
		}
	};
	provide$14(ListKey, data);
	return parent;
}
function useList() {
	return inject$20(ListKey, null);
}
var { toRaw: toRaw$7 } = await importShared("vue");
const independentActiveStrategy = (mandatory) => {
	const strategy = {
		activate: (_ref) => {
			let { id, value, activated } = _ref;
			id = toRaw$7(id);
			if (mandatory && !value && activated.size === 1 && activated.has(id)) return activated;
			if (value) activated.add(id);
			else activated.delete(id);
			return activated;
		},
		in: (v, children, parents) => {
			let set = /* @__PURE__ */ new Set();
			if (v != null) for (const id of wrapInArray(v)) set = strategy.activate({
				id,
				value: true,
				activated: new Set(set),
				children,
				parents
			});
			return set;
		},
		out: (v) => {
			return Array.from(v);
		}
	};
	return strategy;
};
const independentSingleActiveStrategy = (mandatory) => {
	const parentStrategy = independentActiveStrategy(mandatory);
	return {
		activate: (_ref2) => {
			let { activated, id, ...rest } = _ref2;
			id = toRaw$7(id);
			const singleSelected = activated.has(id) ? new Set([id]) : /* @__PURE__ */ new Set();
			return parentStrategy.activate({
				...rest,
				id,
				activated: singleSelected
			});
		},
		in: (v, children, parents) => {
			let set = /* @__PURE__ */ new Set();
			if (v != null) {
				const arr = wrapInArray(v);
				if (arr.length) set = parentStrategy.in(arr.slice(0, 1), children, parents);
			}
			return set;
		},
		out: (v, children, parents) => {
			return parentStrategy.out(v, children, parents);
		}
	};
};
const leafActiveStrategy = (mandatory) => {
	const parentStrategy = independentActiveStrategy(mandatory);
	return {
		activate: (_ref3) => {
			let { id, activated, children, ...rest } = _ref3;
			id = toRaw$7(id);
			if (children.has(id)) return activated;
			return parentStrategy.activate({
				id,
				activated,
				children,
				...rest
			});
		},
		in: parentStrategy.in,
		out: parentStrategy.out
	};
};
const leafSingleActiveStrategy = (mandatory) => {
	const parentStrategy = independentSingleActiveStrategy(mandatory);
	return {
		activate: (_ref4) => {
			let { id, activated, children, ...rest } = _ref4;
			id = toRaw$7(id);
			if (children.has(id)) return activated;
			return parentStrategy.activate({
				id,
				activated,
				children,
				...rest
			});
		},
		in: parentStrategy.in,
		out: parentStrategy.out
	};
};
const singleOpenStrategy = {
	open: (_ref) => {
		let { id, value, opened, parents } = _ref;
		if (value) {
			const newOpened = /* @__PURE__ */ new Set();
			newOpened.add(id);
			let parent = parents.get(id);
			while (parent != null) {
				newOpened.add(parent);
				parent = parents.get(parent);
			}
			return newOpened;
		} else {
			opened.delete(id);
			return opened;
		}
	},
	select: () => null
};
const multipleOpenStrategy = {
	open: (_ref2) => {
		let { id, value, opened, parents } = _ref2;
		if (value) {
			let parent = parents.get(id);
			opened.add(id);
			while (parent != null && parent !== id) {
				opened.add(parent);
				parent = parents.get(parent);
			}
			return opened;
		} else opened.delete(id);
		return opened;
	},
	select: () => null
};
const listOpenStrategy = {
	open: multipleOpenStrategy.open,
	select: (_ref3) => {
		let { id, value, opened, parents } = _ref3;
		if (!value) return opened;
		const path = [];
		let parent = parents.get(id);
		while (parent != null) {
			path.push(parent);
			parent = parents.get(parent);
		}
		return new Set(path);
	}
};
var { toRaw: toRaw$6 } = await importShared("vue");
const independentSelectStrategy = (mandatory) => {
	const strategy = {
		select: (_ref) => {
			let { id, value, selected } = _ref;
			id = toRaw$6(id);
			if (mandatory && !value) {
				const on = Array.from(selected.entries()).reduce((arr, _ref2) => {
					let [key, value$1] = _ref2;
					if (value$1 === "on") arr.push(key);
					return arr;
				}, []);
				if (on.length === 1 && on[0] === id) return selected;
			}
			selected.set(id, value ? "on" : "off");
			return selected;
		},
		in: (v, children, parents, disabled) => {
			const map = /* @__PURE__ */ new Map();
			for (const id of v || []) strategy.select({
				id,
				value: true,
				selected: map,
				children,
				parents,
				disabled
			});
			return map;
		},
		out: (v) => {
			const arr = [];
			for (const [key, value] of v.entries()) if (value === "on") arr.push(key);
			return arr;
		}
	};
	return strategy;
};
const independentSingleSelectStrategy = (mandatory) => {
	const parentStrategy = independentSelectStrategy(mandatory);
	return {
		select: (_ref3) => {
			let { selected, id, ...rest } = _ref3;
			id = toRaw$6(id);
			const singleSelected = selected.has(id) ? new Map([[id, selected.get(id)]]) : /* @__PURE__ */ new Map();
			return parentStrategy.select({
				...rest,
				id,
				selected: singleSelected
			});
		},
		in: (v, children, parents, disabled) => {
			if (v?.length) return parentStrategy.in(v.slice(0, 1), children, parents, disabled);
			return /* @__PURE__ */ new Map();
		},
		out: (v, children, parents) => {
			return parentStrategy.out(v, children, parents);
		}
	};
};
const leafSelectStrategy = (mandatory) => {
	const parentStrategy = independentSelectStrategy(mandatory);
	return {
		select: (_ref4) => {
			let { id, selected, children, ...rest } = _ref4;
			id = toRaw$6(id);
			if (children.has(id)) return selected;
			return parentStrategy.select({
				id,
				selected,
				children,
				...rest
			});
		},
		in: parentStrategy.in,
		out: parentStrategy.out
	};
};
const leafSingleSelectStrategy = (mandatory) => {
	const parentStrategy = independentSingleSelectStrategy(mandatory);
	return {
		select: (_ref5) => {
			let { id, selected, children, ...rest } = _ref5;
			id = toRaw$6(id);
			if (children.has(id)) return selected;
			return parentStrategy.select({
				id,
				selected,
				children,
				...rest
			});
		},
		in: parentStrategy.in,
		out: parentStrategy.out
	};
};
const classicSelectStrategy = (mandatory) => {
	const strategy = {
		select: (_ref6) => {
			let { id, value, selected, children, parents, disabled } = _ref6;
			id = toRaw$6(id);
			const original = new Map(selected);
			const items = [id];
			while (items.length) {
				const item = items.shift();
				if (!disabled.has(item)) selected.set(toRaw$6(item), value ? "on" : "off");
				if (children.has(item)) items.push(...children.get(item));
			}
			let parent = toRaw$6(parents.get(id));
			while (parent) {
				let everySelected = true;
				let noneSelected = true;
				for (const child of children.get(parent)) {
					const cid = toRaw$6(child);
					if (disabled.has(cid)) continue;
					if (selected.get(cid) !== "on") everySelected = false;
					if (selected.has(cid) && selected.get(cid) !== "off") noneSelected = false;
					if (!everySelected && !noneSelected) break;
				}
				selected.set(parent, everySelected ? "on" : noneSelected ? "off" : "indeterminate");
				parent = toRaw$6(parents.get(parent));
			}
			if (mandatory && !value) {
				if (Array.from(selected.entries()).reduce((arr, _ref7) => {
					let [key, value$1] = _ref7;
					if (value$1 === "on") arr.push(key);
					return arr;
				}, []).length === 0) return original;
			}
			return selected;
		},
		in: (v, children, parents) => {
			let map = /* @__PURE__ */ new Map();
			for (const id of v || []) map = strategy.select({
				id,
				value: true,
				selected: map,
				children,
				parents,
				disabled: /* @__PURE__ */ new Set()
			});
			return map;
		},
		out: (v, children) => {
			const arr = [];
			for (const [key, value] of v.entries()) if (value === "on" && !children.has(key)) arr.push(key);
			return arr;
		}
	};
	return strategy;
};
const trunkSelectStrategy = (mandatory) => {
	const parentStrategy = classicSelectStrategy(mandatory);
	return {
		select: parentStrategy.select,
		in: parentStrategy.in,
		out: (v, children, parents) => {
			const arr = [];
			for (const [key, value] of v.entries()) if (value === "on") {
				if (parents.has(key)) {
					const parent = parents.get(key);
					if (v.get(parent) === "on") continue;
				}
				arr.push(key);
			}
			return arr;
		}
	};
};
var { computed: computed$100, inject: inject$19, nextTick: nextTick$25, onBeforeMount: onBeforeMount$2, onBeforeUnmount: onBeforeUnmount$6, provide: provide$13, ref: ref$54, shallowRef: shallowRef$40, toRaw: toRaw$5, toRef: toRef$49, toValue: toValue$4, watch: watch$41 } = await importShared("vue");
const VNestedSymbol = Symbol.for("vuetify:nested");
const emptyNested = {
	id: shallowRef$40(),
	root: {
		itemsRegistration: ref$54("render"),
		register: () => null,
		unregister: () => null,
		updateDisabled: () => null,
		children: ref$54(/* @__PURE__ */ new Map()),
		parents: ref$54(/* @__PURE__ */ new Map()),
		disabled: ref$54(/* @__PURE__ */ new Set()),
		open: () => null,
		openOnSelect: () => null,
		activate: () => null,
		select: () => null,
		activatable: ref$54(false),
		selectable: ref$54(false),
		opened: ref$54(/* @__PURE__ */ new Set()),
		activated: ref$54(/* @__PURE__ */ new Set()),
		selected: ref$54(/* @__PURE__ */ new Map()),
		selectedValues: ref$54([]),
		getPath: () => []
	}
};
const makeNestedProps = propsFactory({
	activatable: Boolean,
	selectable: Boolean,
	activeStrategy: [
		String,
		Function,
		Object
	],
	selectStrategy: [
		String,
		Function,
		Object
	],
	openStrategy: [String, Object],
	opened: null,
	activated: null,
	selected: null,
	mandatory: Boolean,
	itemsRegistration: {
		type: String,
		default: "render"
	}
}, "nested");
const useNested = (props, items, returnObject) => {
	let isUnmounted = false;
	const children = shallowRef$40(/* @__PURE__ */ new Map());
	const parents = shallowRef$40(/* @__PURE__ */ new Map());
	const disabled = shallowRef$40(/* @__PURE__ */ new Set());
	const opened = useProxiedModel(props, "opened", props.opened, (v) => new Set(Array.isArray(v) ? v.map((i) => toRaw$5(i)) : v), (v) => [...v.values()]);
	const activeStrategy = computed$100(() => {
		if (typeof props.activeStrategy === "object") return props.activeStrategy;
		if (typeof props.activeStrategy === "function") return props.activeStrategy(props.mandatory);
		switch (props.activeStrategy) {
			case "leaf": return leafActiveStrategy(props.mandatory);
			case "single-leaf": return leafSingleActiveStrategy(props.mandatory);
			case "independent": return independentActiveStrategy(props.mandatory);
			case "single-independent":
			default: return independentSingleActiveStrategy(props.mandatory);
		}
	});
	const selectStrategy = computed$100(() => {
		if (typeof props.selectStrategy === "object") return props.selectStrategy;
		if (typeof props.selectStrategy === "function") return props.selectStrategy(props.mandatory);
		switch (props.selectStrategy) {
			case "single-leaf": return leafSingleSelectStrategy(props.mandatory);
			case "leaf": return leafSelectStrategy(props.mandatory);
			case "independent": return independentSelectStrategy(props.mandatory);
			case "single-independent": return independentSingleSelectStrategy(props.mandatory);
			case "trunk": return trunkSelectStrategy(props.mandatory);
			case "classic":
			default: return classicSelectStrategy(props.mandatory);
		}
	});
	const openStrategy = computed$100(() => {
		if (typeof props.openStrategy === "object") return props.openStrategy;
		switch (props.openStrategy) {
			case "list": return listOpenStrategy;
			case "single": return singleOpenStrategy;
			case "multiple":
			default: return multipleOpenStrategy;
		}
	});
	const activated = useProxiedModel(props, "activated", props.activated, (v) => activeStrategy.value.in(v, children.value, parents.value), (v) => activeStrategy.value.out(v, children.value, parents.value));
	const selected = useProxiedModel(props, "selected", props.selected, (v) => selectStrategy.value.in(v, children.value, parents.value, disabled.value), (v) => selectStrategy.value.out(v, children.value, parents.value));
	onBeforeUnmount$6(() => {
		isUnmounted = true;
	});
	function getPath(id) {
		const path = [];
		let parent = toRaw$5(id);
		while (parent !== void 0) {
			path.unshift(parent);
			parent = parents.value.get(parent);
		}
		return path;
	}
	const vm = getCurrentInstance("nested");
	const nodeIds = /* @__PURE__ */ new Set();
	const itemsUpdatePropagation = throttle(() => {
		nextTick$25(() => {
			children.value = new Map(children.value);
			parents.value = new Map(parents.value);
		});
	}, 100);
	watch$41(() => [items.value, toValue$4(returnObject)], () => {
		if (props.itemsRegistration === "props") updateInternalMaps();
	}, { immediate: true });
	function updateInternalMaps() {
		const _parents = /* @__PURE__ */ new Map();
		const _children = /* @__PURE__ */ new Map();
		const _disabled = /* @__PURE__ */ new Set();
		const getValue = toValue$4(returnObject) ? (item) => toRaw$5(item.raw) : (item) => item.value;
		const stack$1 = [...items.value];
		let i = 0;
		while (i < stack$1.length) {
			const item = stack$1[i++];
			const itemValue = getValue(item);
			if (item.children) {
				const childValues = [];
				for (const child of item.children) {
					const childValue = getValue(child);
					_parents.set(childValue, itemValue);
					childValues.push(childValue);
					stack$1.push(child);
				}
				_children.set(itemValue, childValues);
			}
			if (item.props.disabled) _disabled.add(itemValue);
		}
		children.value = _children;
		parents.value = _parents;
		disabled.value = _disabled;
	}
	const nested = {
		id: shallowRef$40(),
		root: {
			opened,
			activatable: toRef$49(() => props.activatable),
			selectable: toRef$49(() => props.selectable),
			activated,
			selected,
			selectedValues: computed$100(() => {
				const arr = [];
				for (const [key, value] of selected.value.entries()) if (value === "on") arr.push(key);
				return arr;
			}),
			itemsRegistration: toRef$49(() => props.itemsRegistration),
			register: (id, parentId, isDisabled, isGroup) => {
				if (nodeIds.has(id)) {
					consoleError(`Multiple nodes with the same ID\n\t${getPath(id).map(String).join(" -> ")}\n\t${getPath(parentId).concat(id).map(String).join(" -> ")}`);
					return;
				} else nodeIds.add(id);
				parentId && id !== parentId && parents.value.set(id, parentId);
				isDisabled && disabled.value.add(id);
				isGroup && children.value.set(id, []);
				if (parentId != null) children.value.set(parentId, [...children.value.get(parentId) || [], id]);
				itemsUpdatePropagation();
			},
			unregister: (id) => {
				if (isUnmounted) return;
				nodeIds.delete(id);
				children.value.delete(id);
				disabled.value.delete(id);
				const parent = parents.value.get(id);
				if (parent) {
					const list = children.value.get(parent) ?? [];
					children.value.set(parent, list.filter((child) => child !== id));
				}
				parents.value.delete(id);
				itemsUpdatePropagation();
			},
			updateDisabled: (id, isDisabled) => {
				if (isDisabled) disabled.value.add(id);
				else disabled.value.delete(id);
			},
			open: (id, value, event) => {
				vm.emit("click:open", {
					id,
					value,
					path: getPath(id),
					event
				});
				const newOpened = openStrategy.value.open({
					id,
					value,
					opened: new Set(opened.value),
					children: children.value,
					parents: parents.value,
					event
				});
				newOpened && (opened.value = newOpened);
			},
			openOnSelect: (id, value, event) => {
				const newOpened = openStrategy.value.select({
					id,
					value,
					selected: new Map(selected.value),
					opened: new Set(opened.value),
					children: children.value,
					parents: parents.value,
					event
				});
				newOpened && (opened.value = newOpened);
			},
			select: (id, value, event) => {
				vm.emit("click:select", {
					id,
					value,
					path: getPath(id),
					event
				});
				const newSelected = selectStrategy.value.select({
					id,
					value,
					selected: new Map(selected.value),
					children: children.value,
					parents: parents.value,
					disabled: disabled.value,
					event
				});
				newSelected && (selected.value = newSelected);
				nested.root.openOnSelect(id, value, event);
			},
			activate: (id, value, event) => {
				if (!props.activatable) return nested.root.select(id, true, event);
				vm.emit("click:activate", {
					id,
					value,
					path: getPath(id),
					event
				});
				const newActivated = activeStrategy.value.activate({
					id,
					value,
					activated: new Set(activated.value),
					children: children.value,
					parents: parents.value,
					event
				});
				if (newActivated.size !== activated.value.size) activated.value = newActivated;
				else {
					for (const value$1 of newActivated) if (!activated.value.has(value$1)) {
						activated.value = newActivated;
						return;
					}
					for (const value$1 of activated.value) if (!newActivated.has(value$1)) {
						activated.value = newActivated;
						return;
					}
				}
			},
			children,
			parents,
			disabled,
			getPath
		}
	};
	provide$13(VNestedSymbol, nested);
	return nested.root;
};
const useNestedItem = (id, isDisabled, isGroup) => {
	const parent = inject$19(VNestedSymbol, emptyNested);
	const uidSymbol = Symbol("nested item");
	const computedId = computed$100(() => {
		const idValue = toRaw$5(toValue$4(id));
		return idValue !== void 0 ? idValue : uidSymbol;
	});
	const item = {
		...parent,
		id: computedId,
		open: (open, e) => parent.root.open(computedId.value, open, e),
		openOnSelect: (open, e) => parent.root.openOnSelect(computedId.value, open, e),
		isOpen: computed$100(() => parent.root.opened.value.has(computedId.value)),
		parent: computed$100(() => parent.root.parents.value.get(computedId.value)),
		activate: (activated, e) => parent.root.activate(computedId.value, activated, e),
		isActivated: computed$100(() => parent.root.activated.value.has(computedId.value)),
		select: (selected, e) => parent.root.select(computedId.value, selected, e),
		isSelected: computed$100(() => parent.root.selected.value.get(computedId.value) === "on"),
		isIndeterminate: computed$100(() => parent.root.selected.value.get(computedId.value) === "indeterminate"),
		isLeaf: computed$100(() => !parent.root.children.value.get(computedId.value)),
		isGroupActivator: parent.isGroupActivator
	};
	onBeforeMount$2(() => {
		if (parent.isGroupActivator || parent.root.itemsRegistration.value === "props") return;
		nextTick$25(() => {
			parent.root.register(computedId.value, parent.id.value, toValue$4(isDisabled), isGroup);
		});
	});
	onBeforeUnmount$6(() => {
		if (parent.isGroupActivator || parent.root.itemsRegistration.value === "props") return;
		parent.root.unregister(computedId.value);
	});
	watch$41(computedId, (val, oldVal) => {
		if (parent.isGroupActivator || parent.root.itemsRegistration.value === "props") return;
		parent.root.unregister(oldVal);
		nextTick$25(() => {
			parent.root.register(val, parent.id.value, toValue$4(isDisabled), isGroup);
		});
	});
	watch$41(() => toValue$4(isDisabled), (val) => {
		parent.root.updateDisabled(computedId.value, val);
	});
	isGroup && provide$13(VNestedSymbol, item);
	return item;
};
const useNestedGroupActivator = () => {
	provide$13(VNestedSymbol, {
		...inject$19(VNestedSymbol, emptyNested),
		isGroupActivator: true
	});
};
var { createVNode: _createVNode$116, vShow: _vShow$8, createElementVNode: _createElementVNode$97, withDirectives: _withDirectives$19, normalizeClass: _normalizeClass$81, normalizeStyle: _normalizeStyle$69 } = await importShared("vue");
var { computed: computed$99, inject: inject$18, toRef: toRef$48 } = await importShared("vue");
var VListGroupActivator = defineComponent({
	name: "VListGroupActivator",
	setup(_, _ref) {
		let { slots } = _ref;
		useNestedGroupActivator();
		return () => slots.default?.();
	}
});
const makeVListGroupProps = propsFactory({
	activeColor: String,
	baseColor: String,
	color: String,
	collapseIcon: {
		type: IconValue,
		default: "$collapse"
	},
	disabled: Boolean,
	expandIcon: {
		type: IconValue,
		default: "$expand"
	},
	rawId: [String, Number],
	prependIcon: IconValue,
	appendIcon: IconValue,
	fluid: Boolean,
	subgroup: Boolean,
	title: String,
	value: null,
	...makeComponentProps(),
	...makeTagProps()
}, "VListGroup");
const VListGroup = genericComponent()({
	name: "VListGroup",
	props: makeVListGroupProps(),
	setup(props, _ref2) {
		let { slots } = _ref2;
		const { isOpen, open, id: _id } = useNestedItem(() => props.value, () => props.disabled, true);
		const id = computed$99(() => `v-list-group--id-${String(props.rawId ?? _id.value)}`);
		const list = useList();
		const { isBooted } = useSsrBoot();
		const parent = inject$18(VNestedSymbol);
		const renderWhenClosed = toRef$48(() => parent?.root?.itemsRegistration.value === "render");
		function onClick(e) {
			if (["INPUT", "TEXTAREA"].includes(e.target?.tagName)) return;
			open(!isOpen.value, e);
		}
		const activatorProps = computed$99(() => ({
			onClick,
			class: "v-list-group__header",
			id: id.value
		}));
		const toggleIcon = computed$99(() => isOpen.value ? props.collapseIcon : props.expandIcon);
		const activatorDefaults = computed$99(() => ({ VListItem: {
			activeColor: props.activeColor,
			baseColor: props.baseColor,
			color: props.color,
			prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
			appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
			title: props.title,
			value: props.value
		} }));
		useRender(() => _createVNode$116(props.tag, {
			"class": _normalizeClass$81([
				"v-list-group",
				{
					"v-list-group--prepend": list?.hasPrepend.value,
					"v-list-group--fluid": props.fluid,
					"v-list-group--subgroup": props.subgroup,
					"v-list-group--open": isOpen.value
				},
				props.class
			]),
			"style": _normalizeStyle$69(props.style)
		}, { default: () => [slots.activator && _createVNode$116(VDefaultsProvider, { "defaults": activatorDefaults.value }, { default: () => [_createVNode$116(VListGroupActivator, null, { default: () => [slots.activator({
			props: activatorProps.value,
			isOpen: isOpen.value
		})] })] }), _createVNode$116(MaybeTransition, {
			"transition": { component: VExpandTransition },
			"disabled": !isBooted.value
		}, { default: () => [renderWhenClosed.value ? _withDirectives$19(_createElementVNode$97("div", {
			"class": "v-list-group__items",
			"role": "group",
			"aria-labelledby": id.value
		}, [slots.default?.()]), [[_vShow$8, isOpen.value]]) : isOpen.value && _createElementVNode$97("div", {
			"class": "v-list-group__items",
			"role": "group",
			"aria-labelledby": id.value
		}, [slots.default?.()])] })] }));
		return { isOpen };
	}
});
var { normalizeClass: _normalizeClass$80, normalizeStyle: _normalizeStyle$68, createVNode: _createVNode$115 } = await importShared("vue");
const makeVListItemSubtitleProps = propsFactory({
	opacity: [Number, String],
	...makeComponentProps(),
	...makeTagProps()
}, "VListItemSubtitle");
const VListItemSubtitle = genericComponent()({
	name: "VListItemSubtitle",
	props: makeVListItemSubtitleProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createVNode$115(props.tag, {
			"class": _normalizeClass$80(["v-list-item-subtitle", props.class]),
			"style": _normalizeStyle$68([{ "--v-list-item-subtitle-opacity": props.opacity }, props.style])
		}, slots));
		return {};
	}
});
const VListItemTitle = createSimpleFunctional("v-list-item-title");
var { Fragment: _Fragment$42, createVNode: _createVNode$114, createElementVNode: _createElementVNode$96, mergeProps: _mergeProps$68, withDirectives: _withDirectives$18 } = await importShared("vue");
var { computed: computed$98, nextTick: nextTick$24, onBeforeMount: onBeforeMount$1, toDisplayString: toDisplayString$3, toRef: toRef$47, watch: watch$40 } = await importShared("vue");
const makeVListItemProps = propsFactory({
	active: {
		type: Boolean,
		default: void 0
	},
	activeClass: String,
	activeColor: String,
	appendAvatar: String,
	appendIcon: IconValue,
	baseColor: String,
	disabled: Boolean,
	lines: [Boolean, String],
	link: {
		type: Boolean,
		default: void 0
	},
	nav: Boolean,
	prependAvatar: String,
	prependIcon: IconValue,
	ripple: {
		type: [Boolean, Object],
		default: true
	},
	slim: Boolean,
	prependGap: [Number, String],
	subtitle: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	title: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	value: null,
	onClick: EventProp(),
	onClickOnce: EventProp(),
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeRouterProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps({ variant: "text" })
}, "VListItem");
const VListItem = genericComponent()({
	name: "VListItem",
	directives: { vRipple: ripple_default },
	props: makeVListItemProps(),
	emits: { click: (e) => true },
	setup(props, _ref) {
		let { attrs, slots, emit } = _ref;
		const link = useLink(props, attrs);
		const { activate, isActivated, select, isOpen, isSelected, isIndeterminate, isGroupActivator, root, parent, openOnSelect, id: uid } = useNestedItem(computed$98(() => props.value === void 0 ? link.href.value : props.value), () => props.disabled, false);
		const list = useList();
		const isActive = computed$98(() => props.active !== false && (props.active || link.isActive?.value || (root.activatable.value ? isActivated.value : isSelected.value)));
		const isLink = toRef$47(() => props.link !== false && link.isLink.value);
		const isSelectable = computed$98(() => !!list && (root.selectable.value || root.activatable.value || props.value != null));
		const isClickable = computed$98(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || isSelectable.value));
		const role = computed$98(() => list ? isLink.value ? "link" : isSelectable.value ? "option" : "listitem" : void 0);
		const ariaSelected = computed$98(() => {
			if (!isSelectable.value) return void 0;
			return root.activatable.value ? isActivated.value : root.selectable.value ? isSelected.value : isActive.value;
		});
		const roundedProps = toRef$47(() => props.rounded || props.nav);
		const color = toRef$47(() => props.color ?? props.activeColor);
		const variantProps = toRef$47(() => ({
			color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
			variant: props.variant
		}));
		watch$40(() => link.isActive?.value, (val) => {
			if (!val) return;
			handleActiveLink();
		});
		onBeforeMount$1(() => {
			if (link.isActive?.value) nextTick$24(() => handleActiveLink());
		});
		function handleActiveLink() {
			if (parent.value != null) root.open(parent.value, true);
			openOnSelect(true);
		}
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { colorClasses, colorStyles, variantClasses } = useVariant(variantProps);
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(roundedProps);
		const lineClasses = toRef$47(() => props.lines ? `v-list-item--${props.lines}-line` : void 0);
		const rippleOptions = toRef$47(() => props.ripple !== void 0 && !!props.ripple && list?.filterable ? { keys: ["Enter"] } : props.ripple);
		const slotProps = computed$98(() => ({
			isActive: isActive.value,
			select,
			isOpen: isOpen.value,
			isSelected: isSelected.value,
			isIndeterminate: isIndeterminate.value
		}));
		function onClick(e) {
			emit("click", e);
			if (["INPUT", "TEXTAREA"].includes(e.target?.tagName)) return;
			if (!isClickable.value) return;
			link.navigate?.(e);
			if (isGroupActivator) return;
			if (root.activatable.value) activate(!isActivated.value, e);
			else if (root.selectable.value) select(!isSelected.value, e);
			else if (props.value != null && !isLink.value) select(!isSelected.value, e);
		}
		function onKeyDown(e) {
			const target = e.target;
			if (["INPUT", "TEXTAREA"].includes(target.tagName)) return;
			if (e.key === "Enter" || e.key === " " && !list?.filterable) {
				e.preventDefault();
				e.stopPropagation();
				e.target.dispatchEvent(new MouseEvent("click", e));
			}
		}
		useRender(() => {
			const Tag = isLink.value ? "a" : props.tag;
			const hasTitle = slots.title || props.title != null;
			const hasSubtitle = slots.subtitle || props.subtitle != null;
			const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
			const hasAppend = !!(hasAppendMedia || slots.append);
			const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
			const hasPrepend = !!(hasPrependMedia || slots.prepend);
			list?.updateHasPrepend(hasPrepend);
			if (props.activeColor) deprecate("active-color", ["color", "base-color"]);
			return _withDirectives$18(_createVNode$114(Tag, _mergeProps$68(link.linkProps, {
				"class": [
					"v-list-item",
					{
						"v-list-item--active": isActive.value,
						"v-list-item--disabled": props.disabled,
						"v-list-item--link": isClickable.value,
						"v-list-item--nav": props.nav,
						"v-list-item--slim": props.slim,
						[`${props.activeClass}`]: props.activeClass && isActive.value
					},
					themeClasses.value,
					borderClasses.value,
					colorClasses.value,
					densityClasses.value,
					elevationClasses.value,
					lineClasses.value,
					roundedClasses.value,
					variantClasses.value,
					props.class
				],
				"style": [
					{ "--v-list-prepend-gap": convertToUnit(props.prependGap) },
					colorStyles.value,
					dimensionStyles.value,
					props.style
				],
				"tabindex": isClickable.value ? list ? -2 : 0 : void 0,
				"aria-selected": ariaSelected.value,
				"role": role.value,
				"onClick": onClick,
				"onKeydown": isClickable.value && !isLink.value && onKeyDown
			}), { default: () => [
				genOverlays(isClickable.value || isActive.value, "v-list-item"),
				hasPrepend && _createElementVNode$96("div", {
					"key": "prepend",
					"class": "v-list-item__prepend"
				}, [!slots.prepend ? _createElementVNode$96(_Fragment$42, null, [props.prependAvatar && _createVNode$114(VAvatar, {
					"key": "prepend-avatar",
					"density": props.density,
					"image": props.prependAvatar
				}, null), props.prependIcon && _createVNode$114(VIcon, {
					"key": "prepend-icon",
					"density": props.density,
					"icon": props.prependIcon
				}, null)]) : _createVNode$114(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !hasPrependMedia,
					"defaults": {
						VAvatar: {
							density: props.density,
							image: props.prependAvatar
						},
						VIcon: {
							density: props.density,
							icon: props.prependIcon
						},
						VListItemAction: { start: true }
					}
				}, { default: () => [slots.prepend?.(slotProps.value)] }), _createElementVNode$96("div", { "class": "v-list-item__spacer" }, null)]),
				_createElementVNode$96("div", {
					"class": "v-list-item__content",
					"data-no-activator": ""
				}, [
					hasTitle && _createVNode$114(VListItemTitle, { "key": "title" }, { default: () => [slots.title?.({ title: props.title }) ?? toDisplayString$3(props.title)] }),
					hasSubtitle && _createVNode$114(VListItemSubtitle, { "key": "subtitle" }, { default: () => [slots.subtitle?.({ subtitle: props.subtitle }) ?? toDisplayString$3(props.subtitle)] }),
					slots.default?.(slotProps.value)
				]),
				hasAppend && _createElementVNode$96("div", {
					"key": "append",
					"class": "v-list-item__append"
				}, [!slots.append ? _createElementVNode$96(_Fragment$42, null, [props.appendIcon && _createVNode$114(VIcon, {
					"key": "append-icon",
					"density": props.density,
					"icon": props.appendIcon
				}, null), props.appendAvatar && _createVNode$114(VAvatar, {
					"key": "append-avatar",
					"density": props.density,
					"image": props.appendAvatar
				}, null)]) : _createVNode$114(VDefaultsProvider, {
					"key": "append-defaults",
					"disabled": !hasAppendMedia,
					"defaults": {
						VAvatar: {
							density: props.density,
							image: props.appendAvatar
						},
						VIcon: {
							density: props.density,
							icon: props.appendIcon
						},
						VListItemAction: { end: true }
					}
				}, { default: () => [slots.append?.(slotProps.value)] }), _createElementVNode$96("div", { "class": "v-list-item__spacer" }, null)])
			] }), [[ripple_default, isClickable.value && rippleOptions.value]]);
		});
		return {
			activate,
			isActivated,
			isGroupActivator,
			isSelected,
			list,
			select,
			root,
			id: uid,
			link
		};
	}
});
var { createElementVNode: _createElementVNode$95, normalizeClass: _normalizeClass$79, normalizeStyle: _normalizeStyle$67, createVNode: _createVNode$113 } = await importShared("vue");
const makeVListSubheaderProps = propsFactory({
	color: String,
	inset: Boolean,
	sticky: Boolean,
	title: String,
	...makeComponentProps(),
	...makeTagProps()
}, "VListSubheader");
const VListSubheader = genericComponent()({
	name: "VListSubheader",
	props: makeVListSubheaderProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		useRender(() => {
			const hasText = !!(slots.default || props.title);
			return _createVNode$113(props.tag, {
				"class": _normalizeClass$79([
					"v-list-subheader",
					{
						"v-list-subheader--inset": props.inset,
						"v-list-subheader--sticky": props.sticky
					},
					textColorClasses.value,
					props.class
				]),
				"style": _normalizeStyle$67([{ textColorStyles }, props.style])
			}, { default: () => [hasText && _createElementVNode$95("div", { "class": "v-list-subheader__text" }, [slots.default?.() ?? props.title])] });
		});
		return {};
	}
});
var { createVNode: _createVNode$112, mergeProps: _mergeProps$67 } = await importShared("vue");
var { mergeProps: mergeProps$12 } = await importShared("vue");
const makeVListChildrenProps = propsFactory({
	items: Array,
	returnObject: Boolean
}, "VListChildren");
const VListChildren = genericComponent()({
	name: "VListChildren",
	props: makeVListChildrenProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		createList();
		return () => slots.default?.() ?? props.items?.map((_ref2) => {
			let { children, props: itemProps, type, raw: item } = _ref2;
			if (type === "divider") return slots.divider?.({ props: itemProps }) ?? _createVNode$112(VDivider, itemProps, null);
			if (type === "subheader") return slots.subheader?.({ props: itemProps }) ?? _createVNode$112(VListSubheader, itemProps, null);
			const slotsWithItem = {
				subtitle: slots.subtitle ? (slotProps) => slots.subtitle?.({
					...slotProps,
					item
				}) : void 0,
				prepend: slots.prepend ? (slotProps) => slots.prepend?.({
					...slotProps,
					item
				}) : void 0,
				append: slots.append ? (slotProps) => slots.append?.({
					...slotProps,
					item
				}) : void 0,
				title: slots.title ? (slotProps) => slots.title?.({
					...slotProps,
					item
				}) : void 0
			};
			const listGroupProps = VListGroup.filterProps(itemProps);
			return children ? _createVNode$112(VListGroup, _mergeProps$67(listGroupProps, {
				"value": props.returnObject ? item : itemProps?.value,
				"rawId": itemProps?.value
			}), {
				activator: (_ref3) => {
					let { props: activatorProps } = _ref3;
					const listItemProps = mergeProps$12(itemProps, activatorProps, { value: props.returnObject ? item : itemProps.value });
					return slots.header ? slots.header({ props: listItemProps }) : _createVNode$112(VListItem, listItemProps, slotsWithItem);
				},
				default: () => _createVNode$112(VListChildren, {
					"items": children,
					"returnObject": props.returnObject
				}, slots)
			}) : slots.item ? slots.item({ props: itemProps }) : _createVNode$112(VListItem, _mergeProps$67(itemProps, { "value": props.returnObject ? item : itemProps.value }), slotsWithItem);
		});
	}
});
var { computed: computed$97, shallowRef: shallowRef$39, watchEffect: watchEffect$16 } = await importShared("vue");
const makeItemsProps = propsFactory({
	items: {
		type: Array,
		default: () => []
	},
	itemTitle: {
		type: [
			String,
			Array,
			Function
		],
		default: "title"
	},
	itemValue: {
		type: [
			String,
			Array,
			Function
		],
		default: "value"
	},
	itemChildren: {
		type: [
			Boolean,
			String,
			Array,
			Function
		],
		default: "children"
	},
	itemProps: {
		type: [
			Boolean,
			String,
			Array,
			Function
		],
		default: "props"
	},
	itemType: {
		type: [
			Boolean,
			String,
			Array,
			Function
		],
		default: "type"
	},
	returnObject: Boolean,
	valueComparator: Function
}, "list-items");
var itemTypes$1 = new Set([
	"item",
	"divider",
	"subheader"
]);
function transformItem$2(props, item) {
	const title = getPropertyFromItem(item, props.itemTitle, item);
	const value = getPropertyFromItem(item, props.itemValue, title);
	const children = getPropertyFromItem(item, props.itemChildren);
	const itemProps = props.itemProps === true ? typeof item === "object" && item != null && !Array.isArray(item) ? "children" in item ? omit(item, ["children"]) : item : void 0 : getPropertyFromItem(item, props.itemProps);
	let type = getPropertyFromItem(item, props.itemType, "item");
	if (!itemTypes$1.has(type)) type = "item";
	const _props = {
		title,
		value,
		...itemProps
	};
	return {
		type,
		title: String(_props.title ?? ""),
		value: _props.value,
		props: _props,
		children: type === "item" && Array.isArray(children) ? transformItems$3(props, children) : void 0,
		raw: item
	};
}
transformItem$2.neededProps = [
	"itemTitle",
	"itemValue",
	"itemChildren",
	"itemProps",
	"itemType"
];
function transformItems$3(props, items) {
	const _props = pick(props, transformItem$2.neededProps);
	const array = [];
	for (const item of items) array.push(transformItem$2(_props, item));
	return array;
}
function useItems(props) {
	const items = computed$97(() => transformItems$3(props, props.items));
	const hasNullItem = computed$97(() => items.value.some((item) => item.value === null));
	const itemsMap = shallowRef$39(/* @__PURE__ */ new Map());
	const keylessItems = shallowRef$39([]);
	watchEffect$16(() => {
		const _items = items.value;
		const map = /* @__PURE__ */ new Map();
		const keyless = [];
		for (let i = 0; i < _items.length; i++) {
			const item = _items[i];
			if (isPrimitive(item.value) || item.value === null) {
				let values = map.get(item.value);
				if (!values) {
					values = [];
					map.set(item.value, values);
				}
				values.push(item);
			} else keyless.push(item);
		}
		itemsMap.value = map;
		keylessItems.value = keyless;
	});
	function transformIn(value) {
		const _items = itemsMap.value;
		const _allItems = items.value;
		const _keylessItems = keylessItems.value;
		const _hasNullItem = hasNullItem.value;
		const _returnObject = props.returnObject;
		const hasValueComparator = !!props.valueComparator;
		const valueComparator = props.valueComparator || deepEqual;
		const _props = pick(props, transformItem$2.neededProps);
		const returnValue = [];
		main: for (const v of value) {
			if (!_hasNullItem && v === null) continue;
			if (_returnObject && typeof v === "string") {
				returnValue.push(transformItem$2(_props, v));
				continue;
			}
			const fastItems = _items.get(v);
			if (hasValueComparator || !fastItems) {
				for (const item of hasValueComparator ? _allItems : _keylessItems) if (valueComparator(v, item.value)) {
					returnValue.push(item);
					continue main;
				}
				returnValue.push(transformItem$2(_props, v));
				continue;
			}
			returnValue.push(...fastItems);
		}
		return returnValue;
	}
	function transformOut(value) {
		return props.returnObject ? value.map((_ref) => {
			let { raw } = _ref;
			return raw;
		}) : value.map((_ref2) => {
			let { value: value$1 } = _ref2;
			return value$1;
		});
	}
	return {
		items,
		transformIn,
		transformOut
	};
}
var { createVNode: _createVNode$111, normalizeClass: _normalizeClass$78, normalizeStyle: _normalizeStyle$66 } = await importShared("vue");
var { computed: computed$96, ref: ref$53, shallowRef: shallowRef$38, toRef: toRef$46 } = await importShared("vue");
var itemTypes = new Set([
	"item",
	"divider",
	"subheader"
]);
function transformItem$3(props, item) {
	const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
	const value = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemValue, void 0);
	const children = getPropertyFromItem(item, props.itemChildren);
	const itemProps = props.itemProps === true ? omit(item, ["children"]) : getPropertyFromItem(item, props.itemProps);
	let type = getPropertyFromItem(item, props.itemType, "item");
	if (!itemTypes.has(type)) type = "item";
	const _props = {
		title,
		value,
		...itemProps
	};
	return {
		type,
		title: _props.title,
		value: _props.value,
		props: _props,
		children: type === "item" && children ? transformItems$2(props, children) : void 0,
		raw: item
	};
}
function transformItems$2(props, items) {
	const array = [];
	for (const item of items) array.push(transformItem$3(props, item));
	return array;
}
function useListItems(props) {
	return { items: computed$96(() => transformItems$2(props, props.items)) };
}
const makeVListProps = propsFactory({
	baseColor: String,
	activeColor: String,
	activeClass: String,
	bgColor: String,
	disabled: Boolean,
	filterable: Boolean,
	expandIcon: IconValue,
	collapseIcon: IconValue,
	lines: {
		type: [Boolean, String],
		default: "one"
	},
	slim: Boolean,
	prependGap: [Number, String],
	indent: [Number, String],
	nav: Boolean,
	"onClick:open": EventProp(),
	"onClick:select": EventProp(),
	"onUpdate:opened": EventProp(),
	...makeNestedProps({
		selectStrategy: "single-leaf",
		openStrategy: "list"
	}),
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeItemsProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps({ variant: "text" })
}, "VList");
const VList = genericComponent()({
	name: "VList",
	props: makeVListProps(),
	emits: {
		"update:selected": (value) => true,
		"update:activated": (value) => true,
		"update:opened": (value) => true,
		"click:open": (value) => true,
		"click:activate": (value) => true,
		"click:select": (value) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const { items } = useListItems(props);
		const { themeClasses } = provideTheme(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { borderClasses } = useBorder(props);
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const { children, open, parents, select, getPath } = useNested(props, items, () => props.returnObject);
		const lineClasses = toRef$46(() => props.lines ? `v-list--${props.lines}-line` : void 0);
		const activeColor = toRef$46(() => props.activeColor);
		const baseColor = toRef$46(() => props.baseColor);
		const color = toRef$46(() => props.color);
		const isSelectable = toRef$46(() => props.selectable || props.activatable);
		createList({ filterable: props.filterable });
		provideDefaults({
			VListGroup: {
				activeColor,
				baseColor,
				color,
				expandIcon: toRef$46(() => props.expandIcon),
				collapseIcon: toRef$46(() => props.collapseIcon)
			},
			VListItem: {
				activeClass: toRef$46(() => props.activeClass),
				activeColor,
				baseColor,
				color,
				density: toRef$46(() => props.density),
				disabled: toRef$46(() => props.disabled),
				lines: toRef$46(() => props.lines),
				nav: toRef$46(() => props.nav),
				slim: toRef$46(() => props.slim),
				variant: toRef$46(() => props.variant)
			}
		});
		const isFocused = shallowRef$38(false);
		const contentRef = ref$53();
		function onFocusin(e) {
			isFocused.value = true;
		}
		function onFocusout(e) {
			isFocused.value = false;
		}
		function onFocus(e) {
			if (!isFocused.value && !(e.relatedTarget && contentRef.value?.contains(e.relatedTarget))) focus();
		}
		function onKeydown$1(e) {
			const target = e.target;
			if (!contentRef.value || target.tagName === "INPUT" && ["Home", "End"].includes(e.key) || target.tagName === "TEXTAREA") return;
			if (e.key === "ArrowDown") focus("next");
			else if (e.key === "ArrowUp") focus("prev");
			else if (e.key === "Home") focus("first");
			else if (e.key === "End") focus("last");
			else return;
			e.preventDefault();
		}
		function onMousedown(e) {
			isFocused.value = true;
		}
		function focus(location) {
			if (contentRef.value) return focusChild(contentRef.value, location);
		}
		useRender(() => {
			const indent = props.indent ?? (props.prependGap ? Number(props.prependGap) + 24 : void 0);
			return _createVNode$111(props.tag, {
				"ref": contentRef,
				"class": _normalizeClass$78([
					"v-list",
					{
						"v-list--disabled": props.disabled,
						"v-list--nav": props.nav,
						"v-list--slim": props.slim
					},
					themeClasses.value,
					backgroundColorClasses.value,
					borderClasses.value,
					densityClasses.value,
					elevationClasses.value,
					lineClasses.value,
					roundedClasses.value,
					props.class
				]),
				"style": _normalizeStyle$66([
					{
						"--v-list-indent": convertToUnit(indent),
						"--v-list-group-prepend": indent ? "0px" : void 0,
						"--v-list-prepend-gap": convertToUnit(props.prependGap)
					},
					backgroundColorStyles.value,
					dimensionStyles.value,
					props.style
				]),
				"tabindex": props.disabled ? -1 : 0,
				"role": isSelectable.value ? "listbox" : "list",
				"aria-activedescendant": void 0,
				"onFocusin": onFocusin,
				"onFocusout": onFocusout,
				"onFocus": onFocus,
				"onKeydown": onKeydown$1,
				"onMousedown": onMousedown
			}, { default: () => [_createVNode$111(VListChildren, {
				"items": items.value,
				"returnObject": props.returnObject
			}, slots)] });
		});
		return {
			open,
			select,
			focus,
			children,
			parents,
			getPath
		};
	}
});
const VListImg = createSimpleFunctional("v-list-img");
var { normalizeClass: _normalizeClass$77, normalizeStyle: _normalizeStyle$65, createVNode: _createVNode$110 } = await importShared("vue");
const makeVListItemActionProps = propsFactory({
	start: Boolean,
	end: Boolean,
	...makeComponentProps(),
	...makeTagProps()
}, "VListItemAction");
const VListItemAction = genericComponent()({
	name: "VListItemAction",
	props: makeVListItemActionProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createVNode$110(props.tag, {
			"class": _normalizeClass$77([
				"v-list-item-action",
				{
					"v-list-item-action--start": props.start,
					"v-list-item-action--end": props.end
				},
				props.class
			]),
			"style": _normalizeStyle$65(props.style)
		}, slots));
		return {};
	}
});
var { normalizeClass: _normalizeClass$76, normalizeStyle: _normalizeStyle$64, createVNode: _createVNode$109 } = await importShared("vue");
const makeVListItemMediaProps = propsFactory({
	start: Boolean,
	end: Boolean,
	...makeComponentProps(),
	...makeTagProps()
}, "VListItemMedia");
const VListItemMedia = genericComponent()({
	name: "VListItemMedia",
	props: makeVListItemMediaProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => {
			return _createVNode$109(props.tag, {
				"class": _normalizeClass$76([
					"v-list-item-media",
					{
						"v-list-item-media--start": props.start,
						"v-list-item-media--end": props.end
					},
					props.class
				]),
				"style": _normalizeStyle$64(props.style)
			}, slots);
		});
		return {};
	}
});
function elementToViewport(point, offset) {
	return {
		x: point.x + offset.x,
		y: point.y + offset.y
	};
}
function getOffset$1(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function anchorToPoint(anchor, box) {
	if (anchor.side === "top" || anchor.side === "bottom") {
		const { side, align } = anchor;
		return elementToViewport({
			x: align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align,
			y: side === "top" ? 0 : side === "bottom" ? box.height : side
		}, box);
	} else if (anchor.side === "left" || anchor.side === "right") {
		const { side, align } = anchor;
		return elementToViewport({
			x: side === "left" ? 0 : side === "right" ? box.width : side,
			y: align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align
		}, box);
	}
	return elementToViewport({
		x: box.width / 2,
		y: box.height / 2
	}, box);
}
var { computed: computed$95, nextTick: nextTick$23, onScopeDispose: onScopeDispose$11, ref: ref$52, watch: watch$39 } = await importShared("vue");
var locationStrategies = {
	static: staticLocationStrategy,
	connected: connectedLocationStrategy
};
const makeLocationStrategyProps = propsFactory({
	locationStrategy: {
		type: [String, Function],
		default: "static",
		validator: (val) => typeof val === "function" || val in locationStrategies
	},
	location: {
		type: String,
		default: "bottom"
	},
	origin: {
		type: String,
		default: "auto"
	},
	offset: [
		Number,
		String,
		Array
	],
	stickToTarget: Boolean,
	viewportMargin: {
		type: [Number, String],
		default: 12
	}
}, "VOverlay-location-strategies");
function useLocationStrategies(props, data) {
	const contentStyles = ref$52({});
	const updateLocation = ref$52();
	if (IN_BROWSER) useToggleScope(() => !!(data.isActive.value && props.locationStrategy), (reset) => {
		watch$39(() => props.locationStrategy, reset);
		onScopeDispose$11(() => {
			window.removeEventListener("resize", onResize);
			visualViewport?.removeEventListener("resize", onVisualResize);
			visualViewport?.removeEventListener("scroll", onVisualScroll);
			updateLocation.value = void 0;
		});
		window.addEventListener("resize", onResize, { passive: true });
		visualViewport?.addEventListener("resize", onVisualResize, { passive: true });
		visualViewport?.addEventListener("scroll", onVisualScroll, { passive: true });
		if (typeof props.locationStrategy === "function") updateLocation.value = props.locationStrategy(data, props, contentStyles)?.updateLocation;
		else updateLocation.value = locationStrategies[props.locationStrategy](data, props, contentStyles)?.updateLocation;
	});
	function onResize(e) {
		updateLocation.value?.(e);
	}
	function onVisualResize(e) {
		updateLocation.value?.(e);
	}
	function onVisualScroll(e) {
		updateLocation.value?.(e);
	}
	return {
		contentStyles,
		updateLocation
	};
}
function staticLocationStrategy() {}
function getIntrinsicSize(el, isRtl) {
	const contentBox = nullifyTransforms(el);
	if (isRtl) contentBox.x += parseFloat(el.style.right || 0);
	else contentBox.x -= parseFloat(el.style.left || 0);
	contentBox.y -= parseFloat(el.style.top || 0);
	return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
	if (Array.isArray(data.target.value) || isFixedPosition(data.target.value)) Object.assign(contentStyles.value, {
		position: "fixed",
		top: 0,
		[data.isRtl.value ? "right" : "left"]: 0
	});
	const { preferredAnchor, preferredOrigin } = destructComputed(() => {
		const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
		const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
		if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) return {
			preferredAnchor: flipCorner(parsedAnchor),
			preferredOrigin: flipCorner(parsedOrigin)
		};
		else return {
			preferredAnchor: parsedAnchor,
			preferredOrigin: parsedOrigin
		};
	});
	const [minWidth, minHeight, maxWidth, maxHeight] = [
		"minWidth",
		"minHeight",
		"maxWidth",
		"maxHeight"
	].map((key) => {
		return computed$95(() => {
			const val = parseFloat(props[key]);
			return isNaN(val) ? Infinity : val;
		});
	});
	const offset = computed$95(() => {
		if (Array.isArray(props.offset)) return props.offset;
		if (typeof props.offset === "string") {
			const offset$1 = props.offset.split(" ").map(parseFloat);
			if (offset$1.length < 2) offset$1.push(0);
			return offset$1;
		}
		return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
	});
	let observe = false;
	let lastFrame = -1;
	const flipped = new CircularBuffer(4);
	const observer = new ResizeObserver(() => {
		if (!observe) return;
		requestAnimationFrame((newTime) => {
			if (newTime !== lastFrame) flipped.clear();
			requestAnimationFrame((newNewTime) => {
				lastFrame = newNewTime;
			});
		});
		if (flipped.isFull) {
			const values = flipped.values();
			if (deepEqual(values.at(-1), values.at(-3)) && !deepEqual(values.at(-1), values.at(-2))) return;
		}
		const result = updateLocation();
		if (result) flipped.push(result.flipped);
	});
	let targetBox = new Box({
		x: 0,
		y: 0,
		width: 0,
		height: 0
	});
	watch$39(data.target, (newTarget, oldTarget) => {
		if (oldTarget && !Array.isArray(oldTarget)) observer.unobserve(oldTarget);
		if (!Array.isArray(newTarget)) {
			if (newTarget) observer.observe(newTarget);
		} else if (!deepEqual(newTarget, oldTarget)) updateLocation();
	}, { immediate: true });
	watch$39(data.contentEl, (newContentEl, oldContentEl) => {
		if (oldContentEl) observer.unobserve(oldContentEl);
		if (newContentEl) observer.observe(newContentEl);
	}, { immediate: true });
	onScopeDispose$11(() => {
		observer.disconnect();
	});
	function updateLocation() {
		observe = false;
		requestAnimationFrame(() => observe = true);
		if (!data.target.value || !data.contentEl.value) return;
		if (Array.isArray(data.target.value) || data.target.value.offsetParent || data.target.value.getClientRects().length) targetBox = getTargetBox(data.target.value);
		const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
		const scrollParents = getScrollParents(data.contentEl.value);
		const viewportMargin = Number(props.viewportMargin);
		if (!scrollParents.length) {
			scrollParents.push(document.documentElement);
			if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
				contentBox.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
				contentBox.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
			}
		}
		const viewport = scrollParents.reduce((box, el) => {
			const scrollBox = getElementBox(el);
			if (box) return new Box({
				x: Math.max(box.left, scrollBox.left),
				y: Math.max(box.top, scrollBox.top),
				width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
				height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
			});
			return scrollBox;
		}, void 0);
		if (props.stickToTarget) {
			viewport.x += Math.min(viewportMargin, targetBox.x);
			viewport.y += Math.min(viewportMargin, targetBox.y);
			viewport.width = Math.max(viewport.width - viewportMargin * 2, targetBox.x + targetBox.width - viewportMargin);
			viewport.height = Math.max(viewport.height - viewportMargin * 2, targetBox.y + targetBox.height - viewportMargin);
		} else {
			viewport.x += viewportMargin;
			viewport.y += viewportMargin;
			viewport.width -= viewportMargin * 2;
			viewport.height -= viewportMargin * 2;
		}
		let placement = {
			anchor: preferredAnchor.value,
			origin: preferredOrigin.value
		};
		function checkOverflow(_placement) {
			const box = new Box(contentBox);
			let { x: x$1, y: y$1 } = getOffset$1(anchorToPoint(_placement.anchor, targetBox), anchorToPoint(_placement.origin, box));
			switch (_placement.anchor.side) {
				case "top":
					y$1 -= offset.value[0];
					break;
				case "bottom":
					y$1 += offset.value[0];
					break;
				case "left":
					x$1 -= offset.value[0];
					break;
				case "right":
					x$1 += offset.value[0];
					break;
			}
			switch (_placement.anchor.align) {
				case "top":
					y$1 -= offset.value[1];
					break;
				case "bottom":
					y$1 += offset.value[1];
					break;
				case "left":
					x$1 -= offset.value[1];
					break;
				case "right":
					x$1 += offset.value[1];
					break;
			}
			box.x += x$1;
			box.y += y$1;
			box.width = Math.min(box.width, maxWidth.value);
			box.height = Math.min(box.height, maxHeight.value);
			return {
				overflows: getOverflow(box, viewport),
				x: x$1,
				y: y$1
			};
		}
		let x = 0;
		let y = 0;
		const available = {
			x: 0,
			y: 0
		};
		const flipped$1 = {
			x: false,
			y: false
		};
		let resets = -1;
		while (true) {
			if (resets++ > 10) {
				consoleError("Infinite loop detected in connectedLocationStrategy");
				break;
			}
			const { x: _x, y: _y, overflows } = checkOverflow(placement);
			x += _x;
			y += _y;
			contentBox.x += _x;
			contentBox.y += _y;
			{
				const axis$1 = getAxis(placement.anchor);
				const hasOverflowX = overflows.x.before || overflows.x.after;
				const hasOverflowY = overflows.y.before || overflows.y.after;
				let reset = false;
				["x", "y"].forEach((key) => {
					if (key === "x" && hasOverflowX && !flipped$1.x || key === "y" && hasOverflowY && !flipped$1.y) {
						const newPlacement = {
							anchor: { ...placement.anchor },
							origin: { ...placement.origin }
						};
						const flip = key === "x" ? axis$1 === "y" ? flipAlign : flipSide : axis$1 === "y" ? flipSide : flipAlign;
						newPlacement.anchor = flip(newPlacement.anchor);
						newPlacement.origin = flip(newPlacement.origin);
						const { overflows: newOverflows } = checkOverflow(newPlacement);
						if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
							placement = newPlacement;
							reset = flipped$1[key] = true;
						}
					}
				});
				if (reset) continue;
			}
			if (overflows.x.before) {
				x += overflows.x.before;
				contentBox.x += overflows.x.before;
			}
			if (overflows.x.after) {
				x -= overflows.x.after;
				contentBox.x -= overflows.x.after;
			}
			if (overflows.y.before) {
				y += overflows.y.before;
				contentBox.y += overflows.y.before;
			}
			if (overflows.y.after) {
				y -= overflows.y.after;
				contentBox.y -= overflows.y.after;
			}
			{
				const overflows$1 = getOverflow(contentBox, viewport);
				available.x = viewport.width - overflows$1.x.before - overflows$1.x.after;
				available.y = viewport.height - overflows$1.y.before - overflows$1.y.after;
				x += overflows$1.x.before;
				contentBox.x += overflows$1.x.before;
				y += overflows$1.y.before;
				contentBox.y += overflows$1.y.before;
			}
			break;
		}
		const axis = getAxis(placement.anchor);
		Object.assign(contentStyles.value, {
			"--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
			transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
			top: convertToUnit(pixelRound(y)),
			left: data.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
			right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
			minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
			maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
			maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
		});
		return {
			available,
			contentBox,
			flipped: flipped$1
		};
	}
	watch$39(() => [
		preferredAnchor.value,
		preferredOrigin.value,
		props.offset,
		props.minWidth,
		props.minHeight,
		props.maxWidth,
		props.maxHeight
	], () => updateLocation());
	nextTick$23(() => {
		const result = updateLocation();
		if (!result) return;
		const { available, contentBox } = result;
		if (contentBox.height > available.y) requestAnimationFrame(() => {
			updateLocation();
			requestAnimationFrame(() => {
				updateLocation();
			});
		});
	});
	return { updateLocation };
}
function pixelRound(val) {
	return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
	return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}
var clean = true;
var frames = [];
function requestNewFrame(cb) {
	if (!clean || frames.length) {
		frames.push(cb);
		run();
	} else {
		clean = false;
		cb();
		run();
	}
}
var raf = -1;
function run() {
	cancelAnimationFrame(raf);
	raf = requestAnimationFrame(() => {
		const frame = frames.shift();
		if (frame) frame();
		if (frames.length) run();
		else clean = true;
	});
}
var { effectScope: effectScope$2, onScopeDispose: onScopeDispose$10, watchEffect: watchEffect$15 } = await importShared("vue");
var scrollStrategies = {
	none: null,
	close: closeScrollStrategy,
	block: blockScrollStrategy,
	reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({ scrollStrategy: {
	type: [String, Function],
	default: "block",
	validator: (val) => typeof val === "function" || val in scrollStrategies
} }, "VOverlay-scroll-strategies");
function useScrollStrategies(props, data) {
	if (!IN_BROWSER) return;
	let scope;
	watchEffect$15(async () => {
		scope?.stop();
		if (!(data.isActive.value && props.scrollStrategy)) return;
		scope = effectScope$2();
		await new Promise((resolve) => setTimeout(resolve));
		scope.active && scope.run(() => {
			if (typeof props.scrollStrategy === "function") props.scrollStrategy(data, props, scope);
			else scrollStrategies[props.scrollStrategy]?.(data, props, scope);
		});
	});
	onScopeDispose$10(() => {
		scope?.stop();
	});
}
function closeScrollStrategy(data) {
	function onScroll(e) {
		data.isActive.value = false;
	}
	bindScroll(getTargetEl(data.target.value, data.contentEl.value), onScroll);
}
function blockScrollStrategy(data, props) {
	const offsetParent = data.root.value?.offsetParent;
	const target = getTargetEl(data.target.value, data.contentEl.value);
	const scrollElements = [...new Set([...getScrollParents(target, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
	const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
	const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || document.documentElement);
	if (scrollableParent) data.root.value.classList.add("v-overlay--scroll-blocked");
	scrollElements.forEach((el, i) => {
		el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
		el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
		if (el !== document.documentElement) el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
		el.classList.add("v-overlay-scroll-blocked");
	});
	onScopeDispose$10(() => {
		scrollElements.forEach((el, i) => {
			const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
			const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
			const scrollBehavior = el.style.scrollBehavior;
			el.style.scrollBehavior = "auto";
			el.style.removeProperty("--v-body-scroll-x");
			el.style.removeProperty("--v-body-scroll-y");
			el.style.removeProperty("--v-scrollbar-offset");
			el.classList.remove("v-overlay-scroll-blocked");
			el.scrollLeft = -x;
			el.scrollTop = -y;
			el.style.scrollBehavior = scrollBehavior;
		});
		if (scrollableParent) data.root.value.classList.remove("v-overlay--scroll-blocked");
	});
}
function repositionScrollStrategy(data, props, scope) {
	let slow = false;
	let raf$1 = -1;
	let ric = -1;
	function update(e) {
		requestNewFrame(() => {
			const start = performance.now();
			data.updateLocation.value?.(e);
			slow = (performance.now() - start) / (1e3 / 60) > 2;
		});
	}
	ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
		scope.run(() => {
			bindScroll(getTargetEl(data.target.value, data.contentEl.value), (e) => {
				if (slow) {
					cancelAnimationFrame(raf$1);
					raf$1 = requestAnimationFrame(() => {
						raf$1 = requestAnimationFrame(() => {
							update(e);
						});
					});
				} else update(e);
			});
		});
	});
	onScopeDispose$10(() => {
		typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
		cancelAnimationFrame(raf$1);
	});
}
function getTargetEl(target, contentEl) {
	return Array.isArray(target) ? document.elementsFromPoint(...target).find((el) => !contentEl?.contains(el)) : target ?? contentEl;
}
function bindScroll(el, onScroll) {
	const scrollElements = [document, ...getScrollParents(el)];
	scrollElements.forEach((el$1) => {
		el$1.addEventListener("scroll", onScroll, { passive: true });
	});
	onScopeDispose$10(() => {
		scrollElements.forEach((el$1) => {
			el$1.removeEventListener("scroll", onScroll);
		});
	});
}
const VMenuSymbol = Symbol.for("vuetify:v-menu");
const makeDelayProps = propsFactory({
	closeDelay: [Number, String],
	openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
	let clearDelay = () => {};
	function runDelay(isOpening, options) {
		clearDelay?.();
		const delay = isOpening ? props.openDelay : props.closeDelay;
		const normalizedDelay = Math.max(options?.minDelay ?? 0, Number(delay ?? 0));
		return new Promise((resolve) => {
			clearDelay = defer(normalizedDelay, () => {
				cb?.(isOpening);
				resolve(isOpening);
			});
		});
	}
	function runOpenDelay() {
		return runDelay(true);
	}
	function runCloseDelay(options) {
		return runDelay(false, options);
	}
	return {
		clearDelay,
		runOpenDelay,
		runCloseDelay
	};
}
var { computed: computed$94, effectScope: effectScope$1, inject: inject$17, mergeProps: mergeProps$11, nextTick: nextTick$22, onScopeDispose: onScopeDispose$9, ref: ref$51, watch: watch$38, watchEffect: watchEffect$14 } = await importShared("vue");
const makeActivatorProps = propsFactory({
	target: [String, Object],
	activator: [String, Object],
	activatorProps: {
		type: Object,
		default: () => ({})
	},
	openOnClick: {
		type: Boolean,
		default: void 0
	},
	openOnHover: Boolean,
	openOnFocus: {
		type: Boolean,
		default: void 0
	},
	closeOnContentClick: Boolean,
	...makeDelayProps()
}, "VOverlay-activator");
function useActivator(props, _ref) {
	let { isActive, isTop, contentEl } = _ref;
	const vm = getCurrentInstance("useActivator");
	const activatorEl = ref$51();
	let isHovered = false;
	let isFocused = false;
	let firstEnter = true;
	const openOnFocus = computed$94(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
	const openOnClick = computed$94(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
	const { runOpenDelay, runCloseDelay } = useDelay(props, (value) => {
		if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
			if (isActive.value !== value) firstEnter = true;
			isActive.value = value;
		}
	});
	const cursorTarget = ref$51();
	const availableEvents = {
		onClick: (e) => {
			e.stopPropagation();
			activatorEl.value = e.currentTarget || e.target;
			if (!isActive.value) cursorTarget.value = [e.clientX, e.clientY];
			isActive.value = !isActive.value;
		},
		onMouseenter: (e) => {
			isHovered = true;
			activatorEl.value = e.currentTarget || e.target;
			runOpenDelay();
		},
		onMouseleave: (e) => {
			isHovered = false;
			runCloseDelay();
		},
		onFocus: (e) => {
			if (matchesSelector(e.target, ":focus-visible") === false) return;
			isFocused = true;
			e.stopPropagation();
			activatorEl.value = e.currentTarget || e.target;
			runOpenDelay();
		},
		onBlur: (e) => {
			isFocused = false;
			e.stopPropagation();
			runCloseDelay({ minDelay: 1 });
		}
	};
	const activatorEvents = computed$94(() => {
		const events = {};
		if (openOnClick.value) events.onClick = availableEvents.onClick;
		if (props.openOnHover) {
			events.onMouseenter = availableEvents.onMouseenter;
			events.onMouseleave = availableEvents.onMouseleave;
		}
		if (openOnFocus.value) {
			events.onFocus = availableEvents.onFocus;
			events.onBlur = availableEvents.onBlur;
		}
		return events;
	});
	const contentEvents = computed$94(() => {
		const events = {};
		if (props.openOnHover) {
			events.onMouseenter = () => {
				isHovered = true;
				runOpenDelay();
			};
			events.onMouseleave = () => {
				isHovered = false;
				runCloseDelay();
			};
		}
		if (openOnFocus.value) {
			events.onFocusin = (e) => {
				if (!e.target.matches(":focus-visible")) return;
				isFocused = true;
				runOpenDelay();
			};
			events.onFocusout = () => {
				isFocused = false;
				runCloseDelay({ minDelay: 1 });
			};
		}
		if (props.closeOnContentClick) {
			const menu = inject$17(VMenuSymbol, null);
			events.onClick = () => {
				isActive.value = false;
				menu?.closeParents();
			};
		}
		return events;
	});
	const scrimEvents = computed$94(() => {
		const events = {};
		if (props.openOnHover) {
			events.onMouseenter = () => {
				if (firstEnter) {
					isHovered = true;
					firstEnter = false;
					runOpenDelay();
				}
			};
			events.onMouseleave = () => {
				isHovered = false;
				runCloseDelay();
			};
		}
		return events;
	});
	watch$38(isTop, (val) => {
		if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered)) && !contentEl.value?.contains(document.activeElement)) isActive.value = false;
	});
	watch$38(isActive, (val) => {
		if (!val) setTimeout(() => {
			cursorTarget.value = void 0;
		});
	}, { flush: "post" });
	const activatorRef = templateRef();
	watchEffect$14(() => {
		if (!activatorRef.value) return;
		nextTick$22(() => {
			activatorEl.value = activatorRef.el;
		});
	});
	const targetRef = templateRef();
	const target = computed$94(() => {
		if (props.target === "cursor" && cursorTarget.value) return cursorTarget.value;
		if (targetRef.value) return targetRef.el;
		return getTarget(props.target, vm) || activatorEl.value;
	});
	const targetEl = computed$94(() => {
		return Array.isArray(target.value) ? void 0 : target.value;
	});
	let scope;
	watch$38(() => !!props.activator, (val) => {
		if (val && IN_BROWSER) {
			scope = effectScope$1();
			scope.run(() => {
				_useActivator(props, vm, {
					activatorEl,
					activatorEvents
				});
			});
		} else if (scope) scope.stop();
	}, {
		flush: "post",
		immediate: true
	});
	onScopeDispose$9(() => {
		scope?.stop();
	});
	return {
		activatorEl,
		activatorRef,
		target,
		targetEl,
		targetRef,
		activatorEvents,
		contentEvents,
		scrimEvents
	};
}
function _useActivator(props, vm, _ref2) {
	let { activatorEl, activatorEvents } = _ref2;
	watch$38(() => props.activator, (val, oldVal) => {
		if (oldVal && val !== oldVal) {
			const activator = getActivator(oldVal);
			activator && unbindActivatorProps(activator);
		}
		if (val) nextTick$22(() => bindActivatorProps());
	}, { immediate: true });
	watch$38(() => props.activatorProps, () => {
		bindActivatorProps();
	});
	onScopeDispose$9(() => {
		unbindActivatorProps();
	});
	function bindActivatorProps() {
		let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
		let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
		if (!el) return;
		bindProps(el, mergeProps$11(activatorEvents.value, _props));
	}
	function unbindActivatorProps() {
		let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
		let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
		if (!el) return;
		unbindProps(el, mergeProps$11(activatorEvents.value, _props));
	}
	function getActivator() {
		const activator = getTarget(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator, vm);
		activatorEl.value = activator?.nodeType === Node.ELEMENT_NODE ? activator : void 0;
		return activatorEl.value;
	}
}
function getTarget(selector, vm) {
	if (!selector) return;
	let target;
	if (selector === "parent") {
		let el = vm?.proxy?.$el?.parentNode;
		while (el?.hasAttribute("data-no-activator")) el = el.parentNode;
		target = el;
	} else if (typeof selector === "string") target = document.querySelector(selector);
	else if ("$el" in selector) target = selector.$el;
	else target = selector;
	return target;
}
var { nextTick: nextTick$21, onScopeDispose: onScopeDispose$8, toRef: toRef$45, toValue: toValue$3, watch: watch$37 } = await importShared("vue");
const makeFocusTrapProps = propsFactory({
	retainFocus: Boolean,
	captureFocus: Boolean,
	disableInitialFocus: Boolean
}, "focusTrap");
var registry = /* @__PURE__ */ new Map();
var subscribers = 0;
function onKeydown(e) {
	const activeElement = document.activeElement;
	if (e.key !== "Tab" || !activeElement) return;
	const parentTraps = Array.from(registry.values()).filter((_ref) => {
		let { isActive, contentEl } = _ref;
		return isActive.value && contentEl.value?.contains(activeElement);
	}).map((x) => x.contentEl.value);
	let closestTrap;
	let currentParent = activeElement.parentElement;
	while (currentParent) {
		if (parentTraps.includes(currentParent)) {
			closestTrap = currentParent;
			break;
		}
		currentParent = currentParent.parentElement;
	}
	if (!closestTrap) return;
	const focusable = focusableChildren(closestTrap).filter((x) => x.tabIndex >= 0);
	if (!focusable.length) return;
	const active = document.activeElement;
	if (focusable.length === 1 && focusable[0].classList.contains("v-list") && focusable[0].contains(active)) {
		e.preventDefault();
		return;
	}
	const firstElement = focusable[0];
	const lastElement = focusable[focusable.length - 1];
	if (e.shiftKey && (active === firstElement || firstElement.classList.contains("v-list") && firstElement.contains(active))) {
		e.preventDefault();
		lastElement.focus();
	}
	if (!e.shiftKey && (active === lastElement || lastElement.classList.contains("v-list") && lastElement.contains(active))) {
		e.preventDefault();
		firstElement.focus();
	}
}
function useFocusTrap(props, _ref2) {
	let { isActive, localTop, activatorEl, contentEl } = _ref2;
	const trapId = Symbol("trap");
	let focusTrapSuppressed = false;
	let focusTrapSuppressionTimeout = -1;
	async function onPointerdown() {
		focusTrapSuppressed = true;
		focusTrapSuppressionTimeout = window.setTimeout(() => {
			focusTrapSuppressed = false;
		}, 100);
	}
	async function captureOnFocus(e) {
		const before = e.relatedTarget;
		const after = e.target;
		document.removeEventListener("pointerdown", onPointerdown);
		document.removeEventListener("keydown", captureOnKeydown);
		await nextTick$21();
		if (isActive.value && !focusTrapSuppressed && before !== after && contentEl.value && toValue$3(localTop) && ![document, contentEl.value].includes(after) && !contentEl.value.contains(after)) focusableChildren(contentEl.value)[0]?.focus();
	}
	function captureOnKeydown(e) {
		if (e.key !== "Tab") return;
		document.removeEventListener("keydown", captureOnKeydown);
		if (isActive.value && contentEl.value && e.target && !contentEl.value.contains(e.target)) {
			const allFocusableElements = focusableChildren(document.documentElement);
			if (e.shiftKey && e.target === allFocusableElements.at(0) || !e.shiftKey && e.target === allFocusableElements.at(-1)) {
				const focusable = focusableChildren(contentEl.value);
				if (focusable.length > 0) {
					e.preventDefault();
					focusable[0].focus();
				}
			}
		}
	}
	const shouldCapture = toRef$45(() => isActive.value && props.captureFocus && !props.disableInitialFocus);
	if (IN_BROWSER) {
		watch$37(() => props.retainFocus, (val) => {
			if (val) registry.set(trapId, {
				isActive,
				contentEl
			});
			else registry.delete(trapId);
		}, { immediate: true });
		watch$37(shouldCapture, (val) => {
			if (val) {
				document.addEventListener("pointerdown", onPointerdown);
				document.addEventListener("focusin", captureOnFocus, { once: true });
				document.addEventListener("keydown", captureOnKeydown);
			} else {
				document.removeEventListener("pointerdown", onPointerdown);
				document.removeEventListener("focusin", captureOnFocus);
				document.removeEventListener("keydown", captureOnKeydown);
			}
		}, { immediate: true });
		if (subscribers++ < 1) document.addEventListener("keydown", onKeydown);
	}
	onScopeDispose$8(() => {
		registry.delete(trapId);
		clearTimeout(focusTrapSuppressionTimeout);
		document.removeEventListener("pointerdown", onPointerdown);
		document.removeEventListener("focusin", captureOnFocus);
		document.removeEventListener("keydown", captureOnKeydown);
		if (--subscribers < 1) document.removeEventListener("keydown", onKeydown);
	});
}
var { onMounted: onMounted$12, shallowRef: shallowRef$37 } = await importShared("vue");
function useHydration() {
	if (!IN_BROWSER) return shallowRef$37(false);
	const { ssr } = useDisplay();
	if (ssr) {
		const isMounted = shallowRef$37(false);
		onMounted$12(() => {
			isMounted.value = true;
		});
		return isMounted;
	} else return shallowRef$37(true);
}
var { shallowRef: shallowRef$36, toRef: toRef$44, watch: watch$36 } = await importShared("vue");
const makeLazyProps = propsFactory({ eager: Boolean }, "lazy");
function useLazy(props, active) {
	const isBooted = shallowRef$36(false);
	const hasContent = toRef$44(() => isBooted.value || props.eager || active.value);
	watch$36(active, () => isBooted.value = true);
	function onAfterLeave() {
		if (!props.eager) isBooted.value = false;
	}
	return {
		isBooted,
		hasContent,
		onAfterLeave
	};
}
function useScopeId() {
	const scopeId = getCurrentInstance("useScopeId").vnode.scopeId;
	return { scopeId: scopeId ? { [scopeId]: "" } : void 0 };
}
var { inject: inject$16, onScopeDispose: onScopeDispose$7, provide: provide$12, reactive: reactive$2, readonly: readonly$1, shallowRef: shallowRef$35, toRaw: toRaw$4, toRef: toRef$43, toValue: toValue$2, watchEffect: watchEffect$13 } = await importShared("vue");
var StackSymbol = Symbol.for("vuetify:stack");
var globalStack = reactive$2([]);
function useStack(isActive, zIndex, disableGlobalStack) {
	const vm = getCurrentInstance("useStack");
	const createStackEntry = !disableGlobalStack;
	const parent = inject$16(StackSymbol, void 0);
	const stack$1 = reactive$2({ activeChildren: /* @__PURE__ */ new Set() });
	provide$12(StackSymbol, stack$1);
	const _zIndex = shallowRef$35(Number(toValue$2(zIndex)));
	useToggleScope(isActive, () => {
		const lastZIndex = globalStack.at(-1)?.[1];
		_zIndex.value = lastZIndex ? lastZIndex + 10 : Number(toValue$2(zIndex));
		if (createStackEntry) globalStack.push([vm.uid, _zIndex.value]);
		parent?.activeChildren.add(vm.uid);
		onScopeDispose$7(() => {
			if (createStackEntry) {
				const idx = toRaw$4(globalStack).findIndex((v) => v[0] === vm.uid);
				globalStack.splice(idx, 1);
			}
			parent?.activeChildren.delete(vm.uid);
		});
	});
	const globalTop = shallowRef$35(true);
	if (createStackEntry) watchEffect$13(() => {
		const _isTop = globalStack.at(-1)?.[0] === vm.uid;
		setTimeout(() => globalTop.value = _isTop);
	});
	const localTop = toRef$43(() => !stack$1.activeChildren.size);
	return {
		globalTop: readonly$1(globalTop),
		localTop,
		stackStyles: toRef$43(() => ({ zIndex: _zIndex.value }))
	};
}
var { computed: computed$93, warn } = await importShared("vue");
function useTeleport(target) {
	return { teleportTarget: computed$93(() => {
		const _target = target();
		if (_target === true || !IN_BROWSER) return void 0;
		const targetElement = _target === false ? document.body : typeof _target === "string" ? document.querySelector(_target) : _target;
		if (targetElement == null) {
			warn(`Unable to locate target ${_target}`);
			return;
		}
		let container = [...targetElement.children].find((el) => el.matches(".v-overlay-container"));
		if (!container) {
			container = document.createElement("div");
			container.className = "v-overlay-container";
			targetElement.appendChild(container);
		}
		return container;
	}) };
}
function defaultConditional() {
	return true;
}
function checkEvent(e, el, binding) {
	if (!e || checkIsActive(e, binding) === false) return false;
	const root = attachedRoot(el);
	if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target) return false;
	const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
	elements.push(el);
	return !elements.some((el$1) => el$1?.contains(e.target));
}
function checkIsActive(e, binding) {
	return (typeof binding.value === "object" && binding.value.closeConditional || defaultConditional)(e);
}
function directive(e, el, binding) {
	const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
	e.shadowTarget = e.target;
	el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
		checkIsActive(e, binding) && handler && handler(e);
	}, 0);
}
function handleShadow(el, callback) {
	const root = attachedRoot(el);
	callback(document);
	if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) callback(root);
}
const ClickOutside = {
	mounted(el, binding) {
		const onClick = (e) => directive(e, el, binding);
		const onMousedown = (e) => {
			el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
		};
		handleShadow(el, (app) => {
			app.addEventListener("click", onClick, true);
			app.addEventListener("mousedown", onMousedown, true);
		});
		if (!el._clickOutside) el._clickOutside = { lastMousedownWasOutside: false };
		el._clickOutside[binding.instance.$.uid] = {
			onClick,
			onMousedown
		};
	},
	beforeUnmount(el, binding) {
		if (!el._clickOutside) return;
		handleShadow(el, (app) => {
			if (!app || !el._clickOutside?.[binding.instance.$.uid]) return;
			const { onClick, onMousedown } = el._clickOutside[binding.instance.$.uid];
			app.removeEventListener("click", onClick, true);
			app.removeEventListener("mousedown", onMousedown, true);
		});
		delete el._clickOutside[binding.instance.$.uid];
	}
};
var click_outside_default = ClickOutside;
var { mergeProps: _mergeProps$66, createElementVNode: _createElementVNode$94, createVNode: _createVNode$108, Fragment: _Fragment$41, vShow: _vShow$7, withDirectives: _withDirectives$17 } = await importShared("vue");
var { computed: computed$92, mergeProps: mergeProps$10, onBeforeUnmount: onBeforeUnmount$5, ref: ref$50, Teleport, Transition: Transition$1, watch: watch$35 } = await importShared("vue");
function Scrim(props) {
	const { modelValue, color, ...rest } = props;
	return _createVNode$108(Transition$1, {
		"name": "fade-transition",
		"appear": true
	}, { default: () => [props.modelValue && _createElementVNode$94("div", _mergeProps$66({
		"class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
		"style": props.color.backgroundColorStyles.value
	}, rest), null)] });
}
const makeVOverlayProps = propsFactory({
	absolute: Boolean,
	attach: [
		Boolean,
		String,
		Object
	],
	closeOnBack: {
		type: Boolean,
		default: true
	},
	contained: Boolean,
	contentClass: null,
	contentProps: null,
	disabled: Boolean,
	opacity: [Number, String],
	noClickAnimation: Boolean,
	modelValue: Boolean,
	persistent: Boolean,
	scrim: {
		type: [Boolean, String],
		default: true
	},
	zIndex: {
		type: [Number, String],
		default: 2e3
	},
	...makeActivatorProps(),
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeLazyProps(),
	...makeLocationStrategyProps(),
	...makeScrollStrategyProps(),
	...makeFocusTrapProps(),
	...makeThemeProps(),
	...makeTransitionProps()
}, "VOverlay");
const VOverlay = genericComponent()({
	name: "VOverlay",
	directives: { vClickOutside: click_outside_default },
	inheritAttrs: false,
	props: {
		_disableGlobalStack: Boolean,
		...omit(makeVOverlayProps(), ["disableInitialFocus"])
	},
	emits: {
		"click:outside": (e) => true,
		"update:modelValue": (value) => true,
		keydown: (e) => true,
		afterEnter: () => true,
		afterLeave: () => true
	},
	setup(props, _ref) {
		let { slots, attrs, emit } = _ref;
		const vm = getCurrentInstance("VOverlay");
		const root = ref$50();
		const scrimEl = ref$50();
		const contentEl = ref$50();
		const model = useProxiedModel(props, "modelValue");
		const isActive = computed$92({
			get: () => model.value,
			set: (v) => {
				if (!(v && props.disabled)) model.value = v;
			}
		});
		const { themeClasses } = provideTheme(props);
		const { rtlClasses, isRtl } = useRtl();
		const { hasContent, onAfterLeave: _onAfterLeave } = useLazy(props, isActive);
		const scrimColor = useBackgroundColor(() => {
			return typeof props.scrim === "string" ? props.scrim : null;
		});
		const { globalTop, localTop, stackStyles } = useStack(isActive, () => props.zIndex, props._disableGlobalStack);
		const { activatorEl, activatorRef, target, targetEl, targetRef, activatorEvents, contentEvents, scrimEvents } = useActivator(props, {
			isActive,
			isTop: localTop,
			contentEl
		});
		const { teleportTarget } = useTeleport(() => {
			const target$1 = props.attach || props.contained;
			if (target$1) return target$1;
			const rootNode = activatorEl?.value?.getRootNode() || vm.proxy?.$el?.getRootNode();
			if (rootNode instanceof ShadowRoot) return rootNode;
			return false;
		});
		const { dimensionStyles } = useDimension(props);
		const isMounted = useHydration();
		const { scopeId } = useScopeId();
		watch$35(() => props.disabled, (v) => {
			if (v) isActive.value = false;
		});
		const { contentStyles, updateLocation } = useLocationStrategies(props, {
			isRtl,
			contentEl,
			target,
			isActive
		});
		useScrollStrategies(props, {
			root,
			contentEl,
			targetEl,
			target,
			isActive,
			updateLocation
		});
		function onClickOutside(e) {
			emit("click:outside", e);
			if (!props.persistent) isActive.value = false;
			else animateClick();
		}
		function closeConditional(e) {
			return isActive.value && localTop.value && (!props.scrim || e.target === scrimEl.value || e instanceof MouseEvent && e.shadowTarget === scrimEl.value);
		}
		useFocusTrap(props, {
			isActive,
			localTop,
			contentEl,
			activatorEl
		});
		IN_BROWSER && watch$35(isActive, (val) => {
			if (val) window.addEventListener("keydown", onKeydown$1);
			else window.removeEventListener("keydown", onKeydown$1);
		}, { immediate: true });
		onBeforeUnmount$5(() => {
			if (!IN_BROWSER) return;
			window.removeEventListener("keydown", onKeydown$1);
		});
		function onKeydown$1(e) {
			if (e.key === "Escape" && globalTop.value) {
				if (!contentEl.value?.contains(document.activeElement)) emit("keydown", e);
				if (!props.persistent) {
					isActive.value = false;
					if (contentEl.value?.contains(document.activeElement)) activatorEl.value?.focus();
				} else animateClick();
			}
		}
		function onKeydownSelf(e) {
			if (e.key === "Escape" && !globalTop.value) return;
			emit("keydown", e);
		}
		const router = useRouter();
		useToggleScope(() => props.closeOnBack, () => {
			useBackButton(router, (next) => {
				if (globalTop.value && isActive.value) {
					next(false);
					if (!props.persistent) isActive.value = false;
					else animateClick();
				} else next();
			});
		});
		const top = ref$50();
		watch$35(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
			if (val) {
				const scrollParent = getScrollParent(root.value);
				if (scrollParent && scrollParent !== document.scrollingElement) top.value = scrollParent.scrollTop;
			}
		});
		function animateClick() {
			if (props.noClickAnimation) return;
			contentEl.value && animate(contentEl.value, [
				{ transformOrigin: "center" },
				{ transform: "scale(1.03)" },
				{ transformOrigin: "center" }
			], {
				duration: 150,
				easing: "cubic-bezier(0.4, 0, 0.2, 1)"
			});
		}
		function onAfterEnter() {
			emit("afterEnter");
		}
		function onAfterLeave() {
			_onAfterLeave();
			emit("afterLeave");
		}
		useRender(() => _createElementVNode$94(_Fragment$41, null, [slots.activator?.({
			isActive: isActive.value,
			targetRef,
			props: mergeProps$10({ ref: activatorRef }, activatorEvents.value, props.activatorProps)
		}), isMounted.value && hasContent.value && _createVNode$108(Teleport, {
			"disabled": !teleportTarget.value,
			"to": teleportTarget.value
		}, { default: () => [_createElementVNode$94("div", _mergeProps$66({
			"class": [
				"v-overlay",
				{
					"v-overlay--absolute": props.absolute || props.contained,
					"v-overlay--active": isActive.value,
					"v-overlay--contained": props.contained
				},
				themeClasses.value,
				rtlClasses.value,
				props.class
			],
			"style": [
				stackStyles.value,
				{
					"--v-overlay-opacity": props.opacity,
					top: convertToUnit(top.value)
				},
				props.style
			],
			"ref": root,
			"onKeydown": onKeydownSelf
		}, scopeId, attrs), [_createVNode$108(Scrim, _mergeProps$66({
			"color": scrimColor,
			"modelValue": isActive.value && !!props.scrim,
			"ref": scrimEl
		}, scrimEvents.value), null), _createVNode$108(MaybeTransition, {
			"appear": true,
			"persisted": true,
			"transition": props.transition,
			"target": target.value,
			"onAfterEnter": onAfterEnter,
			"onAfterLeave": onAfterLeave
		}, { default: () => [_withDirectives$17(_createElementVNode$94("div", _mergeProps$66({
			"ref": contentEl,
			"class": ["v-overlay__content", props.contentClass],
			"style": [dimensionStyles.value, contentStyles.value]
		}, contentEvents.value, props.contentProps), [slots.default?.({ isActive })]), [[_vShow$7, isActive.value], [click_outside_default, {
			handler: onClickOutside,
			closeConditional,
			include: () => [activatorEl.value]
		}]])] })])] })]));
		return {
			activatorEl,
			scrimEl,
			target,
			animateClick,
			contentEl,
			rootEl: root,
			globalTop,
			localTop,
			updateLocation
		};
	}
});
var { createVNode: _createVNode$107, mergeProps: _mergeProps$65 } = await importShared("vue");
var { computed: computed$91, inject: inject$15, mergeProps: mergeProps$9, onBeforeUnmount: onBeforeUnmount$4, onDeactivated, provide: provide$11, ref: ref$49, shallowRef: shallowRef$34, toRef: toRef$42, useId: useId$9, watch: watch$34 } = await importShared("vue");
const makeVMenuProps = propsFactory({
	id: String,
	submenu: Boolean,
	...omit(makeVOverlayProps({
		captureFocus: true,
		closeDelay: 250,
		closeOnContentClick: true,
		locationStrategy: "connected",
		location: void 0,
		openDelay: 300,
		scrim: false,
		scrollStrategy: "reposition",
		transition: { component: VDialogTransition }
	}), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
	name: "VMenu",
	props: makeVMenuProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const isActive = useProxiedModel(props, "modelValue");
		const { scopeId } = useScopeId();
		const { isRtl } = useRtl();
		const uid = useId$9();
		const id = toRef$42(() => props.id || `v-menu-${uid}`);
		const overlay = ref$49();
		const parent = inject$15(VMenuSymbol, null);
		const openChildren = shallowRef$34(/* @__PURE__ */ new Set());
		provide$11(VMenuSymbol, {
			register() {
				openChildren.value.add(uid);
			},
			unregister() {
				openChildren.value.delete(uid);
			},
			closeParents(e) {
				setTimeout(() => {
					if (!openChildren.value.size && !props.persistent && (e == null || overlay.value?.contentEl && !isClickInsideElement(e, overlay.value.contentEl))) {
						isActive.value = false;
						parent?.closeParents();
					}
				}, 40);
			}
		});
		onBeforeUnmount$4(() => parent?.unregister());
		onDeactivated(() => isActive.value = false);
		watch$34(isActive, (val) => {
			val ? parent?.register() : parent?.unregister();
		}, { immediate: true });
		function onClickOutside(e) {
			parent?.closeParents(e);
		}
		function onKeydown$1(e) {
			if (props.disabled) return;
			if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
				if (e.key === "Enter" && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest("form"))) return;
				if (e.key === "Enter") e.preventDefault();
				if (!getNextElement(focusableChildren(overlay.value?.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0) && !props.retainFocus) {
					isActive.value = false;
					overlay.value?.activatorEl?.focus();
				}
			} else if (props.submenu && e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
				isActive.value = false;
				overlay.value?.activatorEl?.focus();
			}
		}
		function onActivatorKeydown(e) {
			if (props.disabled) return;
			const el = overlay.value?.contentEl;
			if (el && isActive.value) {
				if (e.key === "ArrowDown") {
					e.preventDefault();
					e.stopImmediatePropagation();
					focusChild(el, "next");
				} else if (e.key === "ArrowUp") {
					e.preventDefault();
					e.stopImmediatePropagation();
					focusChild(el, "prev");
				} else if (props.submenu) {
					if (e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) isActive.value = false;
					else if (e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight")) {
						e.preventDefault();
						focusChild(el, "first");
					}
				}
			} else if (props.submenu ? e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(e.key)) {
				isActive.value = true;
				e.preventDefault();
				setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
			}
		}
		const activatorProps = computed$91(() => mergeProps$9({
			"aria-haspopup": "menu",
			"aria-expanded": String(isActive.value),
			"aria-controls": id.value,
			"aria-owns": id.value,
			onKeydown: onActivatorKeydown
		}, props.activatorProps));
		useRender(() => {
			const overlayProps = VOverlay.filterProps(props);
			return _createVNode$107(VOverlay, _mergeProps$65({
				"ref": overlay,
				"id": id.value,
				"class": ["v-menu", props.class],
				"style": props.style
			}, overlayProps, {
				"modelValue": isActive.value,
				"onUpdate:modelValue": ($event) => isActive.value = $event,
				"absolute": true,
				"activatorProps": activatorProps.value,
				"location": props.location ?? (props.submenu ? "end" : "bottom"),
				"onClick:outside": onClickOutside,
				"onKeydown": onKeydown$1
			}, scopeId), {
				activator: slots.activator,
				default: function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return _createVNode$107(VDefaultsProvider, { "root": "VMenu" }, { default: () => [slots.default?.(...args)] });
				}
			});
		});
		return forwardRefs({
			id,
			ΨopenChildren: openChildren
		}, overlay);
	}
});
var { vShow: _vShow$6, normalizeClass: _normalizeClass$75, normalizeStyle: _normalizeStyle$63, createElementVNode: _createElementVNode$93, withDirectives: _withDirectives$16, createVNode: _createVNode$106 } = await importShared("vue");
var { toRef: toRef$41 } = await importShared("vue");
const makeVCounterProps = propsFactory({
	active: Boolean,
	disabled: Boolean,
	max: [Number, String],
	value: {
		type: [Number, String],
		default: 0
	},
	...makeComponentProps(),
	...makeTransitionProps({ transition: { component: VSlideYTransition } })
}, "VCounter");
const VCounter = genericComponent()({
	name: "VCounter",
	functional: true,
	props: makeVCounterProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const counter = toRef$41(() => {
			return props.max ? `${props.value} / ${props.max}` : String(props.value);
		});
		useRender(() => _createVNode$106(MaybeTransition, { "transition": props.transition }, { default: () => [_withDirectives$16(_createElementVNode$93("div", {
			"class": _normalizeClass$75([
				"v-counter",
				{ "text-error": props.max && !props.disabled && parseFloat(props.value) > parseFloat(props.max) },
				props.class
			]),
			"style": _normalizeStyle$63(props.style)
		}, [slots.default ? slots.default({
			counter: counter.value,
			max: props.max,
			value: props.value
		}) : counter.value]), [[_vShow$6, props.active]])] }));
		return {};
	}
});
var { normalizeClass: _normalizeClass$74, normalizeStyle: _normalizeStyle$62, createVNode: _createVNode$105 } = await importShared("vue");
const makeVFieldLabelProps = propsFactory({
	floating: Boolean,
	...makeComponentProps()
}, "VFieldLabel");
const VFieldLabel = genericComponent()({
	name: "VFieldLabel",
	props: makeVFieldLabelProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createVNode$105(VLabel, {
			"class": _normalizeClass$74([
				"v-field-label",
				{ "v-field-label--floating": props.floating },
				props.class
			]),
			"style": _normalizeStyle$62(props.style)
		}, slots));
		return {};
	}
});
var { createElementVNode: _createElementVNode$92, createVNode: _createVNode$104, mergeProps: _mergeProps$64, vShow: _vShow$5, withDirectives: _withDirectives$15, Fragment: _Fragment$40, normalizeClass: _normalizeClass$73, normalizeStyle: _normalizeStyle$61 } = await importShared("vue");
var { computed: computed$90, ref: ref$48, toRef: toRef$40, useId: useId$8, watch: watch$33 } = await importShared("vue");
var allowedVariants$1 = [
	"underlined",
	"outlined",
	"filled",
	"solo",
	"solo-inverted",
	"solo-filled",
	"plain"
];
const makeVFieldProps = propsFactory({
	appendInnerIcon: IconValue,
	bgColor: String,
	clearable: Boolean,
	clearIcon: {
		type: IconValue,
		default: "$clear"
	},
	active: Boolean,
	centerAffix: {
		type: Boolean,
		default: void 0
	},
	color: String,
	baseColor: String,
	dirty: Boolean,
	disabled: {
		type: Boolean,
		default: null
	},
	glow: Boolean,
	error: Boolean,
	flat: Boolean,
	iconColor: [Boolean, String],
	label: String,
	persistentClear: Boolean,
	prependInnerIcon: IconValue,
	reverse: Boolean,
	singleLine: Boolean,
	variant: {
		type: String,
		default: "filled",
		validator: (v) => allowedVariants$1.includes(v)
	},
	"onClick:clear": EventProp(),
	"onClick:appendInner": EventProp(),
	"onClick:prependInner": EventProp(),
	...makeComponentProps(),
	...makeLoaderProps(),
	...makeRoundedProps(),
	...makeThemeProps()
}, "VField");
const VField = genericComponent()({
	name: "VField",
	inheritAttrs: false,
	props: {
		id: String,
		details: Boolean,
		labelId: String,
		...makeFocusProps(),
		...makeVFieldProps()
	},
	emits: {
		"update:focused": (focused) => true,
		"update:modelValue": (value) => true
	},
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { loaderClasses } = useLoader(props);
		const { focusClasses, isFocused, focus, blur } = useFocus(props);
		const { InputIcon } = useInputIcon(props);
		const { roundedClasses } = useRounded(props);
		const { rtlClasses } = useRtl();
		const isActive = toRef$40(() => props.dirty || props.active);
		const hasLabel = toRef$40(() => !!(props.label || slots.label));
		const hasFloatingLabel = toRef$40(() => !props.singleLine && hasLabel.value);
		const uid = useId$8();
		const id = computed$90(() => props.id || `input-${uid}`);
		const messagesId = toRef$40(() => !props.details ? void 0 : `${id.value}-messages`);
		const labelRef = ref$48();
		const floatingLabelRef = ref$48();
		const controlRef = ref$48();
		const isPlainOrUnderlined = computed$90(() => ["plain", "underlined"].includes(props.variant));
		const color = computed$90(() => {
			return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
		});
		const iconColor = computed$90(() => {
			if (!props.iconColor || props.glow && !isFocused.value) return void 0;
			return props.iconColor === true ? color.value : props.iconColor;
		});
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { textColorClasses, textColorStyles } = useTextColor(color);
		watch$33(isActive, (val) => {
			if (hasFloatingLabel.value && !PREFERS_REDUCED_MOTION()) {
				const el = labelRef.value.$el;
				const targetEl = floatingLabelRef.value.$el;
				requestAnimationFrame(() => {
					const rect = nullifyTransforms(el);
					const targetRect = targetEl.getBoundingClientRect();
					const x = targetRect.x - rect.x;
					const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
					const targetWidth = targetRect.width / .75;
					const width = Math.abs(targetWidth - rect.width) > 1 ? { maxWidth: convertToUnit(targetWidth) } : void 0;
					const style = getComputedStyle(el);
					const targetStyle = getComputedStyle(targetEl);
					const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
					const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
					const color$1 = targetStyle.getPropertyValue("color");
					el.style.visibility = "visible";
					targetEl.style.visibility = "hidden";
					animate(el, {
						transform: `translate(${x}px, ${y}px) scale(${scale})`,
						color: color$1,
						...width
					}, {
						duration,
						easing: standardEasing,
						direction: val ? "normal" : "reverse"
					}).finished.then(() => {
						el.style.removeProperty("visibility");
						targetEl.style.removeProperty("visibility");
					});
				});
			}
		}, { flush: "post" });
		const slotProps = computed$90(() => ({
			isActive,
			isFocused,
			controlRef,
			iconColor,
			blur,
			focus
		}));
		const floatingLabelProps = toRef$40(() => {
			const ariaHidden = !isActive.value;
			return {
				"aria-hidden": ariaHidden,
				for: ariaHidden ? void 0 : id.value
			};
		});
		const mainLabelProps = toRef$40(() => {
			const ariaHidden = hasFloatingLabel.value && isActive.value;
			return {
				"aria-hidden": ariaHidden,
				for: ariaHidden ? void 0 : id.value
			};
		});
		function onClick(e) {
			if (e.target !== document.activeElement) e.preventDefault();
		}
		useRender(() => {
			const isOutlined = props.variant === "outlined";
			const hasPrepend = !!(slots["prepend-inner"] || props.prependInnerIcon);
			const hasClear = !!(props.clearable || slots.clear) && !props.disabled;
			const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
			const label = () => slots.label ? slots.label({
				...slotProps.value,
				label: props.label,
				props: { for: id.value }
			}) : props.label;
			return _createElementVNode$92("div", _mergeProps$64({
				"class": [
					"v-field",
					{
						"v-field--active": isActive.value,
						"v-field--appended": hasAppend,
						"v-field--center-affix": props.centerAffix ?? !isPlainOrUnderlined.value,
						"v-field--disabled": props.disabled,
						"v-field--dirty": props.dirty,
						"v-field--error": props.error,
						"v-field--glow": props.glow,
						"v-field--flat": props.flat,
						"v-field--has-background": !!props.bgColor,
						"v-field--persistent-clear": props.persistentClear,
						"v-field--prepended": hasPrepend,
						"v-field--reverse": props.reverse,
						"v-field--single-line": props.singleLine,
						"v-field--no-label": !label(),
						[`v-field--variant-${props.variant}`]: true
					},
					themeClasses.value,
					backgroundColorClasses.value,
					focusClasses.value,
					loaderClasses.value,
					roundedClasses.value,
					rtlClasses.value,
					props.class
				],
				"style": [backgroundColorStyles.value, props.style],
				"onClick": onClick
			}, attrs), [
				_createElementVNode$92("div", { "class": "v-field__overlay" }, null),
				_createVNode$104(LoaderSlot, {
					"name": "v-field",
					"active": !!props.loading,
					"color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
				}, { default: slots.loader }),
				hasPrepend && _createElementVNode$92("div", {
					"key": "prepend",
					"class": "v-field__prepend-inner"
				}, [slots["prepend-inner"] ? slots["prepend-inner"](slotProps.value) : props.prependInnerIcon && _createVNode$104(InputIcon, {
					"key": "prepend-icon",
					"name": "prependInner",
					"color": iconColor.value
				}, null)]),
				_createElementVNode$92("div", {
					"class": "v-field__field",
					"data-no-activator": ""
				}, [
					[
						"filled",
						"solo",
						"solo-inverted",
						"solo-filled"
					].includes(props.variant) && hasFloatingLabel.value && _createVNode$104(VFieldLabel, _mergeProps$64({
						"key": "floating-label",
						"ref": floatingLabelRef,
						"class": [textColorClasses.value],
						"floating": true
					}, floatingLabelProps.value, { "style": textColorStyles.value }), { default: () => [label()] }),
					hasLabel.value && _createVNode$104(VFieldLabel, _mergeProps$64({
						"key": "label",
						"ref": labelRef,
						"id": props.labelId
					}, mainLabelProps.value), { default: () => [label()] }),
					slots.default?.({
						...slotProps.value,
						props: {
							id: id.value,
							class: "v-field__input",
							"aria-describedby": messagesId.value
						},
						focus,
						blur
					}) ?? _createElementVNode$92("div", {
						"id": id.value,
						"class": "v-field__input",
						"aria-describedby": messagesId.value
					}, null)
				]),
				hasClear && _createVNode$104(VExpandXTransition, { "key": "clear" }, { default: () => [_withDirectives$15(_createElementVNode$92("div", {
					"class": "v-field__clearable",
					"onMousedown": (e) => {
						e.preventDefault();
						e.stopPropagation();
					}
				}, [_createVNode$104(VDefaultsProvider, { "defaults": { VIcon: { icon: props.clearIcon } } }, { default: () => [slots.clear ? slots.clear({
					...slotProps.value,
					props: {
						onFocus: focus,
						onBlur: blur,
						onClick: props["onClick:clear"],
						tabindex: -1
					}
				}) : _createVNode$104(InputIcon, {
					"name": "clear",
					"onFocus": focus,
					"onBlur": blur,
					"tabindex": -1
				}, null)] })]), [[_vShow$5, props.dirty]])] }),
				hasAppend && _createElementVNode$92("div", {
					"key": "append",
					"class": "v-field__append-inner"
				}, [slots["append-inner"] ? slots["append-inner"](slotProps.value) : props.appendInnerIcon && _createVNode$104(InputIcon, {
					"key": "append-icon",
					"name": "appendInner",
					"color": iconColor.value
				}, null)]),
				_createElementVNode$92("div", {
					"class": _normalizeClass$73(["v-field__outline", textColorClasses.value]),
					"style": _normalizeStyle$61(textColorStyles.value)
				}, [isOutlined && _createElementVNode$92(_Fragment$40, null, [
					_createElementVNode$92("div", { "class": "v-field__outline__start" }, null),
					hasFloatingLabel.value && _createElementVNode$92("div", { "class": "v-field__outline__notch" }, [_createVNode$104(VFieldLabel, _mergeProps$64({
						"ref": floatingLabelRef,
						"floating": true
					}, floatingLabelProps.value), { default: () => [label()] })]),
					_createElementVNode$92("div", { "class": "v-field__outline__end" }, null)
				]), isPlainOrUnderlined.value && hasFloatingLabel.value && _createVNode$104(VFieldLabel, _mergeProps$64({
					"ref": floatingLabelRef,
					"floating": true
				}, floatingLabelProps.value), { default: () => [label()] })])
			]);
		});
		return {
			controlRef,
			fieldIconColor: iconColor
		};
	}
});
var { shallowRef: shallowRef$33, toRef: toRef$39, useId: useId$7 } = await importShared("vue");
const makeAutocompleteProps = propsFactory({ autocomplete: String }, "autocomplete");
function useAutocomplete(props) {
	const uniqueId = useId$7();
	const reloadTrigger = shallowRef$33(0);
	const isSuppressing = toRef$39(() => props.autocomplete === "suppress");
	const fieldName = toRef$39(() => {
		if (!props.name) return void 0;
		return isSuppressing.value ? `${props.name}-${uniqueId}-${reloadTrigger.value}` : props.name;
	});
	return {
		isSuppressing,
		fieldAutocomplete: toRef$39(() => {
			return isSuppressing.value ? "off" : props.autocomplete;
		}),
		fieldName,
		update: () => reloadTrigger.value = (/* @__PURE__ */ new Date()).getTime()
	};
}
function useAutofocus(props) {
	function onIntersect(isIntersecting, entries) {
		if (!props.autofocus || !isIntersecting) return;
		const el = entries[0].target;
		(el.matches("input,textarea") ? el : el.querySelector("input,textarea"))?.focus();
	}
	return { onIntersect };
}
var { mergeProps: _mergeProps$63, createElementVNode: _createElementVNode$91, Fragment: _Fragment$39, normalizeClass: _normalizeClass$72, createVNode: _createVNode$103 } = await importShared("vue");
var { cloneVNode, computed: computed$89, nextTick: nextTick$20, ref: ref$47, withDirectives } = await importShared("vue");
var activeTypes = [
	"color",
	"file",
	"time",
	"date",
	"datetime-local",
	"week",
	"month"
];
const makeVTextFieldProps = propsFactory({
	autofocus: Boolean,
	counter: [
		Boolean,
		Number,
		String
	],
	counterValue: [Number, Function],
	prefix: String,
	placeholder: String,
	persistentPlaceholder: Boolean,
	persistentCounter: Boolean,
	suffix: String,
	role: String,
	type: {
		type: String,
		default: "text"
	},
	modelModifiers: Object,
	...makeAutocompleteProps(),
	...omit(makeVInputProps(), ["direction"]),
	...makeVFieldProps()
}, "VTextField");
const VTextField = genericComponent()({
	name: "VTextField",
	directives: { vIntersect: intersect_default },
	inheritAttrs: false,
	props: makeVTextFieldProps(),
	emits: {
		"click:control": (e) => true,
		"mousedown:control": (e) => true,
		"update:focused": (focused) => true,
		"update:modelValue": (val) => true
	},
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const { isFocused, focus, blur } = useFocus(props);
		const { onIntersect } = useAutofocus(props);
		const counterValue = computed$89(() => {
			return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : (model.value ?? "").toString().length;
		});
		const max = computed$89(() => {
			if (attrs.maxlength) return attrs.maxlength;
			if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
			return props.counter;
		});
		const isPlainOrUnderlined = computed$89(() => ["plain", "underlined"].includes(props.variant));
		const vInputRef = ref$47();
		const vFieldRef = ref$47();
		const inputRef = ref$47();
		const autocomplete = useAutocomplete(props);
		const isActive = computed$89(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
		function onFocus() {
			if (autocomplete.isSuppressing.value) autocomplete.update();
			if (!isFocused.value) focus();
			nextTick$20(() => {
				if (inputRef.value !== document.activeElement) inputRef.value?.focus();
			});
		}
		function onControlMousedown(e) {
			emit("mousedown:control", e);
			if (e.target === inputRef.value) return;
			onFocus();
			e.preventDefault();
		}
		function onControlClick(e) {
			emit("click:control", e);
		}
		function onClear(e, reset) {
			e.stopPropagation();
			onFocus();
			nextTick$20(() => {
				reset();
				callEvent(props["onClick:clear"], e);
			});
		}
		function onInput(e) {
			const el = e.target;
			if (!(props.modelModifiers?.trim && [
				"text",
				"search",
				"password",
				"tel",
				"url"
			].includes(props.type))) {
				model.value = el.value;
				return;
			}
			const value = el.value;
			const start = el.selectionStart;
			const end = el.selectionEnd;
			model.value = value;
			nextTick$20(() => {
				let offset = 0;
				if (value.trimStart().length === el.value.length) offset = value.length - el.value.length;
				if (start != null) el.selectionStart = start - offset;
				if (end != null) el.selectionEnd = end - offset;
			});
		}
		useRender(() => {
			const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
			const hasDetails = !!(hasCounter || slots.details);
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			const { modelValue: _, ...inputProps } = VInput.filterProps(props);
			const fieldProps = VField.filterProps(props);
			return _createVNode$103(VInput, _mergeProps$63({
				"ref": vInputRef,
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": [
					"v-text-field",
					{
						"v-text-field--prefixed": props.prefix,
						"v-text-field--suffixed": props.suffix,
						"v-input--plain-underlined": isPlainOrUnderlined.value
					},
					props.class
				],
				"style": props.style
			}, rootAttrs, inputProps, {
				"centerAffix": !isPlainOrUnderlined.value,
				"focused": isFocused.value
			}), {
				...slots,
				default: (_ref2) => {
					let { id, isDisabled, isDirty, isReadonly, isValid, hasDetails: hasDetails$1, reset } = _ref2;
					return _createVNode$103(VField, _mergeProps$63({
						"ref": vFieldRef,
						"onMousedown": onControlMousedown,
						"onClick": onControlClick,
						"onClick:clear": (e) => onClear(e, reset),
						"role": props.role
					}, omit(fieldProps, ["onClick:clear"]), {
						"id": id.value,
						"labelId": `${id.value}-label`,
						"active": isActive.value || isDirty.value,
						"dirty": isDirty.value || props.dirty,
						"disabled": isDisabled.value,
						"focused": isFocused.value,
						"details": hasDetails$1.value,
						"error": isValid.value === false
					}), {
						...slots,
						default: (_ref3) => {
							let { props: { class: fieldClass, ...slotProps }, controlRef } = _ref3;
							const inputNode = _createElementVNode$91("input", _mergeProps$63({
								"ref": (val) => inputRef.value = controlRef.value = val,
								"value": model.value,
								"onInput": onInput,
								"autofocus": props.autofocus,
								"readonly": isReadonly.value,
								"disabled": isDisabled.value,
								"name": autocomplete.fieldName.value,
								"autocomplete": autocomplete.fieldAutocomplete.value,
								"placeholder": props.placeholder,
								"size": 1,
								"role": props.role,
								"type": props.type,
								"onFocus": focus,
								"onBlur": blur,
								"aria-labelledby": `${id.value}-label`
							}, slotProps, inputAttrs), null);
							return _createElementVNode$91(_Fragment$39, null, [
								props.prefix && _createElementVNode$91("span", { "class": "v-text-field__prefix" }, [_createElementVNode$91("span", { "class": "v-text-field__prefix__text" }, [props.prefix])]),
								withDirectives(slots.default ? _createElementVNode$91("div", {
									"class": _normalizeClass$72(fieldClass),
									"data-no-activator": ""
								}, [slots.default({ id }), inputNode]) : cloneVNode(inputNode, { class: fieldClass }), [[
									intersect_default,
									onIntersect,
									null,
									{ once: true }
								]]),
								props.suffix && _createElementVNode$91("span", { "class": "v-text-field__suffix" }, [_createElementVNode$91("span", { "class": "v-text-field__suffix__text" }, [props.suffix])])
							]);
						}
					});
				},
				details: hasDetails ? (slotProps) => _createElementVNode$91(_Fragment$39, null, [slots.details?.(slotProps), hasCounter && _createElementVNode$91(_Fragment$39, null, [_createElementVNode$91("span", null, null), _createVNode$103(VCounter, {
					"active": props.persistentCounter || isFocused.value,
					"value": counterValue.value,
					"max": max.value,
					"disabled": props.disabled
				}, slots.counter)])]) : void 0
			});
		});
		return forwardRefs({}, vInputRef, vFieldRef, inputRef);
	}
});
var { Fragment: _Fragment$38, createElementVNode: _createElementVNode$90, mergeProps: _mergeProps$62 } = await importShared("vue");
var { watch: watch$32 } = await importShared("vue");
const makeVVirtualScrollItemProps = propsFactory({
	renderless: Boolean,
	...makeComponentProps()
}, "VVirtualScrollItem");
const VVirtualScrollItem = genericComponent()({
	name: "VVirtualScrollItem",
	inheritAttrs: false,
	props: makeVVirtualScrollItemProps(),
	emits: { "update:height": (height) => true },
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const { resizeRef, contentRect } = useResizeObserver(void 0, "border");
		watch$32(() => contentRect.value?.height, (height) => {
			if (height != null) emit("update:height", height);
		});
		useRender(() => props.renderless ? _createElementVNode$90(_Fragment$38, null, [slots.default?.({ itemRef: resizeRef })]) : _createElementVNode$90("div", _mergeProps$62({
			"ref": resizeRef,
			"class": ["v-virtual-scroll__item", props.class],
			"style": props.style
		}, attrs), [slots.default?.()]));
	}
});
var { computed: computed$88, nextTick: nextTick$19, onScopeDispose: onScopeDispose$6, ref: ref$46, shallowRef: shallowRef$32, watch: watch$31, watchEffect: watchEffect$12 } = await importShared("vue");
var UP = -1;
var DOWN = 1;
var BUFFER_PX = 100;
const makeVirtualProps = propsFactory({
	itemHeight: {
		type: [Number, String],
		default: null
	},
	itemKey: {
		type: [
			String,
			Array,
			Function
		],
		default: null
	},
	height: [Number, String]
}, "virtual");
function useVirtual(props, items) {
	const display = useDisplay();
	const itemHeight = shallowRef$32(0);
	watchEffect$12(() => {
		itemHeight.value = parseFloat(props.itemHeight || 0);
	});
	const first = shallowRef$32(0);
	const last = shallowRef$32(Math.ceil((parseInt(props.height) || display.height.value) / (itemHeight.value || 16)) || 1);
	const paddingTop = shallowRef$32(0);
	const paddingBottom = shallowRef$32(0);
	const containerRef = ref$46();
	const markerRef = ref$46();
	let markerOffset = 0;
	const { resizeRef, contentRect } = useResizeObserver();
	watchEffect$12(() => {
		resizeRef.value = containerRef.value;
	});
	const viewportHeight = computed$88(() => {
		return containerRef.value === document.documentElement ? display.height.value : contentRect.value?.height || parseInt(props.height) || 0;
	});
	const hasInitialRender = computed$88(() => {
		return !!(containerRef.value && markerRef.value && viewportHeight.value && itemHeight.value);
	});
	let sizes = Array.from({ length: items.value.length });
	let offsets = Array.from({ length: items.value.length });
	const updateTime = shallowRef$32(0);
	let targetScrollIndex = -1;
	function getSize(index) {
		return sizes[index] || itemHeight.value;
	}
	const updateOffsets = debounce(() => {
		const start = performance.now();
		offsets[0] = 0;
		const length = items.value.length;
		for (let i = 1; i <= length; i++) offsets[i] = (offsets[i - 1] || 0) + getSize(i - 1);
		updateTime.value = Math.max(updateTime.value, performance.now() - start);
	}, updateTime);
	const unwatch = watch$31(hasInitialRender, (v) => {
		if (!v) return;
		unwatch();
		markerOffset = markerRef.value.offsetTop;
		updateOffsets.immediate();
		calculateVisibleItems();
		if (!~targetScrollIndex) return;
		nextTick$19(() => {
			IN_BROWSER && window.requestAnimationFrame(() => {
				scrollToIndex(targetScrollIndex);
				targetScrollIndex = -1;
			});
		});
	});
	onScopeDispose$6(() => {
		updateOffsets.clear();
	});
	function handleItemResize(index, height) {
		const prevHeight = sizes[index];
		const prevMinHeight = itemHeight.value;
		itemHeight.value = prevMinHeight ? Math.min(itemHeight.value, height) : height;
		if (prevHeight !== height || prevMinHeight !== itemHeight.value) {
			sizes[index] = height;
			updateOffsets();
		}
	}
	function calculateOffset(index) {
		index = clamp(index, 0, items.value.length);
		const whole = Math.floor(index);
		const fraction = index % 1;
		const next = whole + 1;
		const wholeOffset = offsets[whole] || 0;
		return wholeOffset + ((offsets[next] || wholeOffset) - wholeOffset) * fraction;
	}
	function calculateIndex(scrollTop) {
		return binaryClosest(offsets, scrollTop);
	}
	let lastScrollTop = 0;
	let scrollVelocity = 0;
	let lastScrollTime = 0;
	watch$31(viewportHeight, (val, oldVal) => {
		calculateVisibleItems();
		if (val < oldVal) requestAnimationFrame(() => {
			scrollVelocity = 0;
			calculateVisibleItems();
		});
	});
	let scrollTimeout = -1;
	function handleScroll() {
		if (!containerRef.value || !markerRef.value) return;
		const scrollTop = containerRef.value.scrollTop;
		const scrollTime = performance.now();
		if (scrollTime - lastScrollTime > 500) {
			scrollVelocity = Math.sign(scrollTop - lastScrollTop);
			markerOffset = markerRef.value.offsetTop;
		} else scrollVelocity = scrollTop - lastScrollTop;
		lastScrollTop = scrollTop;
		lastScrollTime = scrollTime;
		window.clearTimeout(scrollTimeout);
		scrollTimeout = window.setTimeout(handleScrollend, 500);
		calculateVisibleItems();
	}
	function handleScrollend() {
		if (!containerRef.value || !markerRef.value) return;
		scrollVelocity = 0;
		lastScrollTime = 0;
		window.clearTimeout(scrollTimeout);
		calculateVisibleItems();
	}
	let raf$1 = -1;
	function calculateVisibleItems() {
		cancelAnimationFrame(raf$1);
		raf$1 = requestAnimationFrame(_calculateVisibleItems);
	}
	function _calculateVisibleItems() {
		if (!containerRef.value || !viewportHeight.value || !itemHeight.value) return;
		const scrollTop = lastScrollTop - markerOffset;
		const direction = Math.sign(scrollVelocity);
		const start = clamp(calculateIndex(Math.max(0, scrollTop - BUFFER_PX)), 0, items.value.length);
		const end = clamp(calculateIndex(scrollTop + viewportHeight.value + BUFFER_PX) + 1, start + 1, items.value.length);
		if ((direction !== UP || start < first.value) && (direction !== DOWN || end > last.value)) {
			const topOverflow = calculateOffset(first.value) - calculateOffset(start);
			const bottomOverflow = calculateOffset(end) - calculateOffset(last.value);
			if (Math.max(topOverflow, bottomOverflow) > BUFFER_PX) {
				first.value = start;
				last.value = end;
			} else {
				if (start <= 0) first.value = start;
				if (end >= items.value.length) last.value = end;
			}
		}
		paddingTop.value = calculateOffset(first.value);
		paddingBottom.value = calculateOffset(items.value.length) - calculateOffset(last.value);
	}
	function scrollToIndex(index) {
		const offset = calculateOffset(index);
		if (!containerRef.value || index && !offset) targetScrollIndex = index;
		else containerRef.value.scrollTop = offset;
	}
	const computedItems = computed$88(() => {
		return items.value.slice(first.value, last.value).map((item, index) => {
			const _index = index + first.value;
			return {
				raw: item,
				index: _index,
				key: getPropertyFromItem(item, props.itemKey, _index)
			};
		});
	});
	watch$31(items, () => {
		sizes = Array.from({ length: items.value.length });
		offsets = Array.from({ length: items.value.length });
		updateOffsets.immediate();
		calculateVisibleItems();
	}, { deep: 1 });
	return {
		calculateVisibleItems,
		containerRef,
		markerRef,
		computedItems,
		paddingTop,
		paddingBottom,
		scrollToIndex,
		handleScroll,
		handleScrollend,
		handleItemResize
	};
}
function binaryClosest(arr, val) {
	let high = arr.length - 1;
	let low = 0;
	let mid = 0;
	let item = null;
	let target = -1;
	if (arr[high] < val) return high;
	while (low <= high) {
		mid = low + high >> 1;
		item = arr[mid];
		if (item > val) high = mid - 1;
		else if (item < val) {
			target = mid;
			low = mid + 1;
		} else if (item === val) return mid;
		else return low;
	}
	return target;
}
var { createVNode: _createVNode$102, Fragment: _Fragment$37, createElementVNode: _createElementVNode$89, normalizeClass: _normalizeClass$71, normalizeStyle: _normalizeStyle$60 } = await importShared("vue");
var { onMounted: onMounted$11, onScopeDispose: onScopeDispose$5, toRef: toRef$38 } = await importShared("vue");
const makeVVirtualScrollProps = propsFactory({
	items: {
		type: Array,
		default: () => []
	},
	renderless: Boolean,
	...makeVirtualProps(),
	...makeComponentProps(),
	...makeDimensionProps()
}, "VVirtualScroll");
const VVirtualScroll = genericComponent()({
	name: "VVirtualScroll",
	props: makeVVirtualScrollProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const vm = getCurrentInstance("VVirtualScroll");
		const { dimensionStyles } = useDimension(props);
		const { calculateVisibleItems, containerRef, markerRef, handleScroll, handleScrollend, handleItemResize, scrollToIndex, paddingTop, paddingBottom, computedItems } = useVirtual(props, toRef$38(() => props.items));
		useToggleScope(() => props.renderless, () => {
			function handleListeners() {
				const method = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
				if (containerRef.value === document.documentElement) {
					document[method]("scroll", handleScroll, { passive: true });
					document[method]("scrollend", handleScrollend);
				} else {
					containerRef.value?.[method]("scroll", handleScroll, { passive: true });
					containerRef.value?.[method]("scrollend", handleScrollend);
				}
			}
			onMounted$11(() => {
				containerRef.value = getScrollParent(vm.vnode.el, true);
				handleListeners(true);
			});
			onScopeDispose$5(handleListeners);
		});
		useRender(() => {
			const children = computedItems.value.map((item) => _createVNode$102(VVirtualScrollItem, {
				"key": item.key,
				"renderless": props.renderless,
				"onUpdate:height": (height) => handleItemResize(item.index, height)
			}, { default: (slotProps) => slots.default?.({
				item: item.raw,
				index: item.index,
				...slotProps
			}) }));
			return props.renderless ? _createElementVNode$89(_Fragment$37, null, [
				_createElementVNode$89("div", {
					"ref": markerRef,
					"class": "v-virtual-scroll__spacer",
					"style": { paddingTop: convertToUnit(paddingTop.value) }
				}, null),
				children,
				_createElementVNode$89("div", {
					"class": "v-virtual-scroll__spacer",
					"style": { paddingBottom: convertToUnit(paddingBottom.value) }
				}, null)
			]) : _createElementVNode$89("div", {
				"ref": containerRef,
				"class": _normalizeClass$71(["v-virtual-scroll", props.class]),
				"onScrollPassive": handleScroll,
				"onScrollend": handleScrollend,
				"style": _normalizeStyle$60([dimensionStyles.value, props.style])
			}, [_createElementVNode$89("div", {
				"ref": markerRef,
				"class": "v-virtual-scroll__container",
				"style": {
					paddingTop: convertToUnit(paddingTop.value),
					paddingBottom: convertToUnit(paddingBottom.value)
				}
			}, [children])]);
		});
		return {
			calculateVisibleItems,
			scrollToIndex
		};
	}
});
var { shallowRef: shallowRef$31, watch: watch$30 } = await importShared("vue");
function useScrolling(listRef, textFieldRef) {
	const isScrolling = shallowRef$31(false);
	let scrollTimeout;
	function onListScroll(e) {
		cancelAnimationFrame(scrollTimeout);
		isScrolling.value = true;
		scrollTimeout = requestAnimationFrame(() => {
			scrollTimeout = requestAnimationFrame(() => {
				isScrolling.value = false;
			});
		});
	}
	async function finishScrolling() {
		await new Promise((resolve) => requestAnimationFrame(resolve));
		await new Promise((resolve) => requestAnimationFrame(resolve));
		await new Promise((resolve) => requestAnimationFrame(resolve));
		await new Promise((resolve) => {
			if (isScrolling.value) {
				const stop = watch$30(isScrolling, () => {
					stop();
					resolve();
				});
			} else resolve();
		});
	}
	async function onListKeydown(e) {
		if (e.key === "Tab") textFieldRef.value?.focus();
		if (![
			"PageDown",
			"PageUp",
			"Home",
			"End"
		].includes(e.key)) return;
		const el = listRef.value?.$el;
		if (!el) return;
		if (e.key === "Home" || e.key === "End") el.scrollTo({
			top: e.key === "Home" ? 0 : el.scrollHeight,
			behavior: "smooth"
		});
		await finishScrolling();
		const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
		if (e.key === "PageDown" || e.key === "Home") {
			const top = el.getBoundingClientRect().top;
			for (const child of children) if (child.getBoundingClientRect().top >= top) {
				child.focus();
				break;
			}
		} else {
			const bottom = el.getBoundingClientRect().bottom;
			for (const child of [...children].reverse()) if (child.getBoundingClientRect().bottom <= bottom) {
				child.focus();
				break;
			}
		}
	}
	return {
		onScrollPassive: onListScroll,
		onKeydown: onListKeydown
	};
}
var { computed: computed$87, toRef: toRef$37, toValue: toValue$1, useId: useId$6 } = await importShared("vue");
const makeMenuActivatorProps = propsFactory({
	closeText: {
		type: String,
		default: "$vuetify.close"
	},
	openText: {
		type: String,
		default: "$vuetify.open"
	}
}, "autocomplete");
function useMenuActivator(props, isOpen) {
	const uid = useId$6();
	const menuId = computed$87(() => `menu-${uid}`);
	return {
		menuId,
		ariaExpanded: toRef$37(() => toValue$1(isOpen)),
		ariaControls: toRef$37(() => menuId.value)
	};
}
var { Fragment: _Fragment$36, createElementVNode: _createElementVNode$88, createVNode: _createVNode$101, mergeProps: _mergeProps$61, createTextVNode: _createTextVNode$9 } = await importShared("vue");
var { computed: computed$86, mergeProps: mergeProps$8, nextTick: nextTick$18, ref: ref$45, shallowRef: shallowRef$30, toRef: toRef$36, watch: watch$29 } = await importShared("vue");
const makeSelectProps = propsFactory({
	chips: Boolean,
	closableChips: Boolean,
	eager: Boolean,
	hideNoData: Boolean,
	hideSelected: Boolean,
	listProps: { type: Object },
	menu: Boolean,
	menuIcon: {
		type: IconValue,
		default: "$dropdown"
	},
	menuProps: { type: Object },
	multiple: Boolean,
	noDataText: {
		type: String,
		default: "$vuetify.noDataText"
	},
	openOnClear: Boolean,
	itemColor: String,
	noAutoScroll: Boolean,
	...makeMenuActivatorProps(),
	...makeItemsProps({ itemChildren: false })
}, "Select");
const makeVSelectProps = propsFactory({
	...makeSelectProps(),
	...omit(makeVTextFieldProps({
		modelValue: null,
		role: "combobox"
	}), ["validationValue", "dirty"]),
	...makeTransitionProps({ transition: { component: VDialogTransition } })
}, "VSelect");
const VSelect = genericComponent()({
	name: "VSelect",
	props: makeVSelectProps(),
	emits: {
		"update:focused": (focused) => true,
		"update:modelValue": (value) => true,
		"update:menu": (ue) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const { t } = useLocale();
		const vTextFieldRef = ref$45();
		const vMenuRef = ref$45();
		const vVirtualScrollRef = ref$45();
		const { items, transformIn, transformOut } = useItems(props);
		const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
			const transformed = transformOut(v);
			return props.multiple ? transformed : transformed[0] ?? null;
		});
		const counterValue = computed$86(() => {
			return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
		});
		const form = useForm(props);
		const autocomplete = useAutocomplete(props);
		const selectedValues = computed$86(() => model.value.map((selection) => selection.value));
		const isFocused = shallowRef$30(false);
		const closableChips = toRef$36(() => props.closableChips && !form.isReadonly.value && !form.isDisabled.value);
		const { InputIcon } = useInputIcon(props);
		let keyboardLookupPrefix = "";
		let keyboardLookupIndex = 0;
		let keyboardLookupLastTime;
		const displayItems = computed$86(() => {
			if (props.hideSelected) return items.value.filter((item) => !model.value.some((s) => (props.valueComparator || deepEqual)(s, item)));
			return items.value;
		});
		const menuDisabled = computed$86(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
		const _menu = useProxiedModel(props, "menu");
		const menu = computed$86({
			get: () => _menu.value,
			set: (v) => {
				if (_menu.value && !v && vMenuRef.value?.ΨopenChildren.size) return;
				if (v && menuDisabled.value) return;
				_menu.value = v;
			}
		});
		const { menuId, ariaExpanded, ariaControls } = useMenuActivator(props, menu);
		const computedMenuProps = computed$86(() => {
			return {
				...props.menuProps,
				activatorProps: {
					...props.menuProps?.activatorProps || {},
					"aria-haspopup": "listbox"
				}
			};
		});
		const listRef = ref$45();
		const listEvents = useScrolling(listRef, vTextFieldRef);
		function onClear(e) {
			if (props.openOnClear) menu.value = true;
		}
		function onMousedownControl() {
			if (menuDisabled.value) return;
			menu.value = !menu.value;
		}
		function onListKeydown(e) {
			if (checkPrintable(e)) onKeydown$1(e);
		}
		function onKeydown$1(e) {
			if (!e.key || form.isReadonly.value) return;
			if ([
				"Enter",
				" ",
				"ArrowDown",
				"ArrowUp",
				"Home",
				"End"
			].includes(e.key)) e.preventDefault();
			if ([
				"Enter",
				"ArrowDown",
				" "
			].includes(e.key)) menu.value = true;
			if (["Escape", "Tab"].includes(e.key)) menu.value = false;
			if (props.clearable && e.key === "Backspace") {
				e.preventDefault();
				model.value = [];
				onClear(e);
				return;
			}
			if (e.key === "Home") listRef.value?.focus("first");
			else if (e.key === "End") listRef.value?.focus("last");
			const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
			if (!checkPrintable(e)) return;
			const now = performance.now();
			if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
				keyboardLookupPrefix = "";
				keyboardLookupIndex = 0;
			}
			keyboardLookupPrefix += e.key.toLowerCase();
			keyboardLookupLastTime = now;
			const items$1 = displayItems.value;
			function findItem() {
				let result$1 = findItemBase();
				if (result$1) return result$1;
				if (keyboardLookupPrefix.at(-1) === keyboardLookupPrefix.at(-2)) {
					keyboardLookupPrefix = keyboardLookupPrefix.slice(0, -1);
					keyboardLookupIndex++;
					result$1 = findItemBase();
					if (result$1) return result$1;
				}
				keyboardLookupIndex = 0;
				result$1 = findItemBase();
				if (result$1) return result$1;
				keyboardLookupPrefix = e.key.toLowerCase();
				return findItemBase();
			}
			function findItemBase() {
				for (let i = keyboardLookupIndex; i < items$1.length; i++) {
					const _item = items$1[i];
					if (_item.title.toLowerCase().startsWith(keyboardLookupPrefix)) return [_item, i];
				}
			}
			const result = findItem();
			if (!result) return;
			const [item, index] = result;
			keyboardLookupIndex = index;
			listRef.value?.focus(index);
			if (!props.multiple) model.value = [item];
		}
		function select(item) {
			let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
			if (item.props.disabled) return;
			if (props.multiple) {
				const index = model.value.findIndex((selection) => (props.valueComparator || deepEqual)(selection.value, item.value));
				const add = set == null ? !~index : set;
				if (~index) {
					const value = add ? [...model.value, item] : [...model.value];
					value.splice(index, 1);
					model.value = value;
				} else if (add) model.value = [...model.value, item];
			} else {
				model.value = set !== false ? [item] : [];
				nextTick$18(() => {
					menu.value = false;
				});
			}
		}
		function onBlur(e) {
			if (!listRef.value?.$el.contains(e.relatedTarget)) menu.value = false;
		}
		function onAfterEnter() {
			if (props.eager) vVirtualScrollRef.value?.calculateVisibleItems();
		}
		function onAfterLeave() {
			if (isFocused.value) vTextFieldRef.value?.focus();
		}
		function onFocusin(e) {
			isFocused.value = true;
		}
		function onModelUpdate(v) {
			if (v == null) model.value = [];
			else if (matchesSelector(vTextFieldRef.value, ":autofill") || matchesSelector(vTextFieldRef.value, ":-webkit-autofill")) {
				const item = items.value.find((item$1) => item$1.title === v);
				if (item) select(item);
			} else if (vTextFieldRef.value) vTextFieldRef.value.value = "";
		}
		watch$29(menu, () => {
			if (!props.hideSelected && menu.value && model.value.length) {
				const index = displayItems.value.findIndex((item) => model.value.some((s) => (props.valueComparator || deepEqual)(s.value, item.value)));
				IN_BROWSER && !props.noAutoScroll && window.requestAnimationFrame(() => {
					index >= 0 && vVirtualScrollRef.value?.scrollToIndex(index);
				});
			}
		});
		watch$29(items, (newVal, oldVal) => {
			if (menu.value) return;
			if (isFocused.value && props.hideNoData && !oldVal.length && newVal.length) menu.value = true;
		});
		useRender(() => {
			const hasChips = !!(props.chips || slots.chip);
			const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
			const isDirty = model.value.length > 0;
			const textFieldProps = VTextField.filterProps(props);
			const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
			return _createVNode$101(VTextField, _mergeProps$61({ "ref": vTextFieldRef }, textFieldProps, {
				"modelValue": model.value.map((v) => v.props.title).join(", "),
				"name": void 0,
				"onUpdate:modelValue": onModelUpdate,
				"focused": isFocused.value,
				"onUpdate:focused": ($event) => isFocused.value = $event,
				"validationValue": model.externalValue,
				"counterValue": counterValue.value,
				"dirty": isDirty,
				"class": [
					"v-select",
					{
						"v-select--active-menu": menu.value,
						"v-select--chips": !!props.chips,
						[`v-select--${props.multiple ? "multiple" : "single"}`]: true,
						"v-select--selected": model.value.length,
						"v-select--selection-slot": !!slots.selection
					},
					props.class
				],
				"style": props.style,
				"inputmode": "none",
				"placeholder": placeholder,
				"onClick:clear": onClear,
				"onMousedown:control": onMousedownControl,
				"onBlur": onBlur,
				"onKeydown": onKeydown$1,
				"aria-expanded": ariaExpanded.value,
				"aria-controls": ariaControls.value
			}), {
				...slots,
				default: (_ref2) => {
					let { id } = _ref2;
					return _createElementVNode$88(_Fragment$36, null, [
						_createElementVNode$88("select", {
							"hidden": true,
							"multiple": props.multiple,
							"name": autocomplete.fieldName.value
						}, [items.value.map((item) => _createElementVNode$88("option", {
							"key": item.value,
							"value": item.value,
							"selected": selectedValues.value.includes(item.value)
						}, null))]),
						_createVNode$101(VMenu, _mergeProps$61({
							"id": menuId.value,
							"ref": vMenuRef,
							"modelValue": menu.value,
							"onUpdate:modelValue": ($event) => menu.value = $event,
							"activator": "parent",
							"contentClass": "v-select__content",
							"disabled": menuDisabled.value,
							"eager": props.eager,
							"maxHeight": 310,
							"openOnClick": false,
							"closeOnContentClick": false,
							"transition": props.transition,
							"onAfterEnter": onAfterEnter,
							"onAfterLeave": onAfterLeave
						}, computedMenuProps.value), { default: () => [hasList && _createVNode$101(VList, _mergeProps$61({
							"ref": listRef,
							"selected": selectedValues.value,
							"selectStrategy": props.multiple ? "independent" : "single-independent",
							"onMousedown": (e) => e.preventDefault(),
							"onKeydown": onListKeydown,
							"onFocusin": onFocusin,
							"tabindex": "-1",
							"selectable": !!displayItems.value.length,
							"aria-live": "polite",
							"aria-labelledby": `${id.value}-label`,
							"aria-multiselectable": props.multiple,
							"color": props.itemColor ?? props.color
						}, listEvents, props.listProps), { default: () => [
							slots["prepend-item"]?.(),
							!displayItems.value.length && !props.hideNoData && (slots["no-data"]?.() ?? _createVNode$101(VListItem, {
								"key": "no-data",
								"title": t(props.noDataText)
							}, null)),
							_createVNode$101(VVirtualScroll, {
								"ref": vVirtualScrollRef,
								"renderless": true,
								"items": displayItems.value,
								"itemKey": "value"
							}, { default: (_ref3) => {
								let { item, index, itemRef } = _ref3;
								const camelizedProps = camelizeProps(item.props);
								const itemProps = mergeProps$8(item.props, {
									ref: itemRef,
									key: item.value,
									onClick: () => select(item, null),
									"aria-posinset": index + 1,
									"aria-setsize": displayItems.value.length
								});
								if (item.type === "divider") return slots.divider?.({
									props: item.raw,
									index
								}) ?? _createVNode$101(VDivider, _mergeProps$61(item.props, { "key": `divider-${index}` }), null);
								if (item.type === "subheader") return slots.subheader?.({
									props: item.raw,
									index
								}) ?? _createVNode$101(VListSubheader, _mergeProps$61(item.props, { "key": `subheader-${index}` }), null);
								return slots.item?.({
									item,
									index,
									props: itemProps
								}) ?? _createVNode$101(VListItem, _mergeProps$61(itemProps, { "role": "option" }), { prepend: (_ref4) => {
									let { isSelected } = _ref4;
									return _createElementVNode$88(_Fragment$36, null, [
										props.multiple && !props.hideSelected ? _createVNode$101(VCheckboxBtn, {
											"key": item.value,
											"modelValue": isSelected,
											"ripple": false,
											"tabindex": "-1",
											"aria-hidden": true,
											"onClick": (event) => event.preventDefault()
										}, null) : void 0,
										camelizedProps.prependAvatar && _createVNode$101(VAvatar, { "image": camelizedProps.prependAvatar }, null),
										camelizedProps.prependIcon && _createVNode$101(VIcon, { "icon": camelizedProps.prependIcon }, null)
									]);
								} });
							} }),
							slots["append-item"]?.()
						] })] }),
						model.value.map((item, index) => {
							function onChipClose(e) {
								e.stopPropagation();
								e.preventDefault();
								select(item, false);
							}
							const slotProps = mergeProps$8(VChip.filterProps(item.props), {
								"onClick:close": onChipClose,
								onKeydown(e) {
									if (e.key !== "Enter" && e.key !== " ") return;
									e.preventDefault();
									e.stopPropagation();
									onChipClose(e);
								},
								onMousedown(e) {
									e.preventDefault();
									e.stopPropagation();
								},
								modelValue: true,
								"onUpdate:modelValue": void 0
							});
							const hasSlot = hasChips ? !!slots.chip : !!slots.selection;
							const slotContent = hasSlot ? ensureValidVNode(hasChips ? slots.chip({
								item,
								index,
								props: slotProps
							}) : slots.selection({
								item,
								index
							})) : void 0;
							if (hasSlot && !slotContent) return void 0;
							return _createElementVNode$88("div", {
								"key": item.value,
								"class": "v-select__selection"
							}, [hasChips ? !slots.chip ? _createVNode$101(VChip, _mergeProps$61({
								"key": "chip",
								"closable": closableChips.value,
								"size": "small",
								"text": item.title,
								"disabled": item.props.disabled
							}, slotProps), null) : _createVNode$101(VDefaultsProvider, {
								"key": "chip-defaults",
								"defaults": { VChip: {
									closable: closableChips.value,
									size: "small",
									text: item.title
								} }
							}, { default: () => [slotContent] }) : slotContent ?? _createElementVNode$88("span", { "class": "v-select__selection-text" }, [item.title, props.multiple && index < model.value.length - 1 && _createElementVNode$88("span", { "class": "v-select__selection-comma" }, [_createTextVNode$9(",")])])]);
						})
					]);
				},
				"append-inner": function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return _createElementVNode$88(_Fragment$36, null, [
						slots["append-inner"]?.(...args),
						props.menuIcon ? _createVNode$101(VIcon, {
							"class": "v-select__menu-icon",
							"color": vTextFieldRef.value?.fieldIconColor,
							"icon": props.menuIcon,
							"aria-hidden": true
						}, null) : void 0,
						props.appendInnerIcon && _createVNode$101(InputIcon, {
							"key": "append-icon",
							"name": "appendInner",
							"color": args[0].iconColor.value
						}, null)
					]);
				}
			});
		});
		return forwardRefs({
			isFocused,
			menu,
			select
		}, vTextFieldRef);
	}
});
var { computed: computed$85, shallowRef: shallowRef$29, unref, watchEffect: watchEffect$11, normalizeClass: _normalizeClass$70, createElementVNode: _createElementVNode$87, Fragment: _Fragment$35 } = await importShared("vue");
const defaultFilter = (value, query, item) => {
	if (value == null || query == null) return -1;
	if (!query.length) return 0;
	value = value.toString().toLocaleLowerCase();
	query = query.toString().toLocaleLowerCase();
	const result = [];
	let idx = value.indexOf(query);
	while (~idx) {
		result.push([idx, idx + query.length]);
		idx = value.indexOf(query, idx + query.length);
	}
	return result.length ? result : -1;
};
function normaliseMatch(match, query) {
	if (match == null || typeof match === "boolean" || match === -1) return;
	if (typeof match === "number") return [[match, match + query.length]];
	if (Array.isArray(match[0])) return match;
	return [match];
}
const makeFilterProps = propsFactory({
	customFilter: Function,
	customKeyFilter: Object,
	filterKeys: [Array, String],
	filterMode: {
		type: String,
		default: "intersection"
	},
	noFilter: Boolean
}, "filter");
function filterItems(items, query, options) {
	const array = [];
	const filter = options?.default ?? defaultFilter;
	const keys$1 = options?.filterKeys ? wrapInArray(options.filterKeys) : false;
	const customFiltersLength = Object.keys(options?.customKeyFilter ?? {}).length;
	if (!items?.length) return array;
	let lookAheadItem = null;
	loop: for (let i = 0; i < items.length; i++) {
		const [item, transformed = item] = wrapInArray(items[i]);
		const customMatches = {};
		const defaultMatches = {};
		let match = -1;
		if ((query || customFiltersLength > 0) && !options?.noFilter) {
			let hasOnlyCustomFilters = false;
			if (typeof item === "object") {
				if (item.type === "divider" || item.type === "subheader") {
					if (lookAheadItem?.type === "divider" && item.type === "subheader") array.push(lookAheadItem);
					lookAheadItem = {
						index: i,
						matches: {},
						type: item.type
					};
					continue;
				}
				const filterKeys = keys$1 || Object.keys(transformed);
				hasOnlyCustomFilters = filterKeys.length === customFiltersLength;
				for (const key of filterKeys) {
					const value = getPropertyFromItem(transformed, key);
					const keyFilter = options?.customKeyFilter?.[key];
					match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
					if (match !== -1 && match !== false) if (keyFilter) customMatches[key] = normaliseMatch(match, query);
					else defaultMatches[key] = normaliseMatch(match, query);
					else if (options?.filterMode === "every") continue loop;
				}
			} else {
				match = filter(item, query, item);
				if (match !== -1 && match !== false) defaultMatches.title = normaliseMatch(match, query);
			}
			const defaultMatchesLength = Object.keys(defaultMatches).length;
			const customMatchesLength = Object.keys(customMatches).length;
			if (!defaultMatchesLength && !customMatchesLength) continue;
			if (options?.filterMode === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength) continue;
			if (options?.filterMode === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength && customFiltersLength > 0 && !hasOnlyCustomFilters)) continue;
		}
		if (lookAheadItem) {
			array.push(lookAheadItem);
			lookAheadItem = null;
		}
		array.push({
			index: i,
			matches: {
				...defaultMatches,
				...customMatches
			}
		});
	}
	return array;
}
function useFilter(props, items, query, options) {
	const filteredItems = shallowRef$29([]);
	const filteredMatches = shallowRef$29(/* @__PURE__ */ new Map());
	const transformedItems = computed$85(() => options?.transform ? unref(items).map((item) => [item, options.transform(item)]) : unref(items));
	watchEffect$11(() => {
		const _query = typeof query === "function" ? query() : unref(query);
		const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
		const results = filterItems(transformedItems.value, strQuery, {
			customKeyFilter: {
				...props.customKeyFilter,
				...unref(options?.customKeyFilter)
			},
			default: props.customFilter,
			filterKeys: props.filterKeys,
			filterMode: props.filterMode,
			noFilter: props.noFilter
		});
		const originalItems = unref(items);
		const _filteredItems = [];
		const _filteredMatches = /* @__PURE__ */ new Map();
		results.forEach((_ref) => {
			let { index, matches } = _ref;
			const item = originalItems[index];
			_filteredItems.push(item);
			_filteredMatches.set(item.value, matches);
		});
		filteredItems.value = _filteredItems;
		filteredMatches.value = _filteredMatches;
	});
	function getMatches(item) {
		return filteredMatches.value.get(item.value);
	}
	return {
		filteredItems,
		filteredMatches,
		getMatches
	};
}
function highlightResult(name, text, matches) {
	if (matches == null || !matches.length) return text;
	return matches.map((match, i) => {
		const start = i === 0 ? 0 : matches[i - 1][1];
		const result = [_createElementVNode$87("span", { "class": _normalizeClass$70(`${name}__unmask`) }, [text.slice(start, match[0])]), _createElementVNode$87("span", { "class": _normalizeClass$70(`${name}__mask`) }, [text.slice(match[0], match[1])])];
		if (i === matches.length - 1) result.push(_createElementVNode$87("span", { "class": _normalizeClass$70(`${name}__unmask`) }, [text.slice(match[1])]));
		return _createElementVNode$87(_Fragment$35, null, [result]);
	});
}
var { Fragment: _Fragment$34, createVNode: _createVNode$100, mergeProps: _mergeProps$60, createElementVNode: _createElementVNode$86, createTextVNode: _createTextVNode$8, normalizeClass: _normalizeClass$69, normalizeStyle: _normalizeStyle$59 } = await importShared("vue");
var { computed: computed$84, mergeProps: mergeProps$7, nextTick: nextTick$17, ref: ref$44, shallowRef: shallowRef$28, toRef: toRef$35, watch: watch$28 } = await importShared("vue");
const makeVAutocompleteProps = propsFactory({
	autoSelectFirst: { type: [Boolean, String] },
	clearOnSelect: Boolean,
	search: String,
	...makeFilterProps({ filterKeys: ["title"] }),
	...makeSelectProps(),
	...omit(makeVTextFieldProps({
		modelValue: null,
		role: "combobox"
	}), ["validationValue", "dirty"])
}, "VAutocomplete");
const VAutocomplete = genericComponent()({
	name: "VAutocomplete",
	props: makeVAutocompleteProps(),
	emits: {
		"update:focused": (focused) => true,
		"update:search": (value) => true,
		"update:modelValue": (value) => true,
		"update:menu": (value) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const { t } = useLocale();
		const vTextFieldRef = ref$44();
		const isFocused = shallowRef$28(false);
		const isPristine = shallowRef$28(true);
		const listHasFocus = shallowRef$28(false);
		const vMenuRef = ref$44();
		const vVirtualScrollRef = ref$44();
		const selectionIndex = shallowRef$28(-1);
		const _searchLock = shallowRef$28(null);
		const { items, transformIn, transformOut } = useItems(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => vTextFieldRef.value?.color);
		const { InputIcon } = useInputIcon(props);
		const search = useProxiedModel(props, "search", "");
		const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
			const transformed = transformOut(v);
			return props.multiple ? transformed : transformed[0] ?? null;
		});
		const counterValue = computed$84(() => {
			return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
		});
		const form = useForm(props);
		const { filteredItems, getMatches } = useFilter(props, items, () => _searchLock.value ?? (isPristine.value ? "" : search.value));
		const displayItems = computed$84(() => {
			if (props.hideSelected && _searchLock.value === null) return filteredItems.value.filter((filteredItem) => !model.value.some((s) => s.value === filteredItem.value));
			return filteredItems.value;
		});
		const closableChips = toRef$35(() => props.closableChips && !form.isReadonly.value && !form.isDisabled.value);
		const hasChips = computed$84(() => !!(props.chips || slots.chip));
		const hasSelectionSlot = computed$84(() => hasChips.value || !!slots.selection);
		const selectedValues = computed$84(() => model.value.map((selection) => selection.props.value));
		const firstSelectableItem = computed$84(() => displayItems.value.find((x) => x.type === "item" && !x.props.disabled));
		const highlightFirst = computed$84(() => {
			return (props.autoSelectFirst === true || props.autoSelectFirst === "exact" && search.value === firstSelectableItem.value?.title) && displayItems.value.length > 0 && !isPristine.value && !listHasFocus.value;
		});
		const menuDisabled = computed$84(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
		const _menu = useProxiedModel(props, "menu");
		const menu = computed$84({
			get: () => _menu.value,
			set: (v) => {
				if (_menu.value && !v && vMenuRef.value?.ΨopenChildren.size) return;
				if (v && menuDisabled.value) return;
				_menu.value = v;
			}
		});
		const { menuId, ariaExpanded, ariaControls } = useMenuActivator(props, menu);
		const listRef = ref$44();
		const listEvents = useScrolling(listRef, vTextFieldRef);
		function onClear(e) {
			if (props.openOnClear) menu.value = true;
			search.value = "";
		}
		function onMousedownControl() {
			if (menuDisabled.value) return;
			menu.value = true;
		}
		function onMousedownMenuIcon(e) {
			if (menuDisabled.value) return;
			if (isFocused.value) {
				e.preventDefault();
				e.stopPropagation();
			}
			menu.value = !menu.value;
		}
		function onListKeydown(e) {
			if (checkPrintable(e) || e.key === "Backspace") vTextFieldRef.value?.focus();
		}
		function onKeydown$1(e) {
			if (form.isReadonly.value) return;
			const selectionStart = vTextFieldRef.value?.selectionStart;
			const length = model.value.length;
			if ([
				"Enter",
				"ArrowDown",
				"ArrowUp"
			].includes(e.key)) e.preventDefault();
			if (["Enter", "ArrowDown"].includes(e.key)) menu.value = true;
			if (["Escape"].includes(e.key)) menu.value = false;
			if (highlightFirst.value && ["Enter", "Tab"].includes(e.key) && firstSelectableItem.value && !model.value.some((_ref2) => {
				let { value } = _ref2;
				return value === firstSelectableItem.value.value;
			})) select(firstSelectableItem.value);
			if (e.key === "ArrowDown" && highlightFirst.value) listRef.value?.focus("next");
			if (["Backspace", "Delete"].includes(e.key)) {
				if (!props.multiple && hasSelectionSlot.value && model.value.length > 0 && !search.value) return select(model.value[0], false);
				if (~selectionIndex.value) {
					e.preventDefault();
					const originalSelectionIndex = selectionIndex.value;
					select(model.value[selectionIndex.value], false);
					selectionIndex.value = originalSelectionIndex >= length - 1 ? length - 2 : originalSelectionIndex;
				} else if (e.key === "Backspace" && !search.value) selectionIndex.value = length - 1;
				return;
			}
			if (!props.multiple) return;
			if (e.key === "ArrowLeft") {
				if (selectionIndex.value < 0 && selectionStart && selectionStart > 0) return;
				const prev = selectionIndex.value > -1 ? selectionIndex.value - 1 : length - 1;
				if (model.value[prev]) selectionIndex.value = prev;
				else {
					const searchLength = search.value?.length ?? null;
					selectionIndex.value = -1;
					vTextFieldRef.value?.setSelectionRange(searchLength, searchLength);
				}
			} else if (e.key === "ArrowRight") {
				if (selectionIndex.value < 0) return;
				const next = selectionIndex.value + 1;
				if (model.value[next]) selectionIndex.value = next;
				else {
					selectionIndex.value = -1;
					vTextFieldRef.value?.setSelectionRange(0, 0);
				}
			} else if (~selectionIndex.value && checkPrintable(e)) selectionIndex.value = -1;
		}
		function onChange(e) {
			if (matchesSelector(vTextFieldRef.value, ":autofill") || matchesSelector(vTextFieldRef.value, ":-webkit-autofill")) {
				const item = items.value.find((item$1) => item$1.title === e.target.value);
				if (item) select(item);
			}
		}
		function onAfterEnter() {
			if (props.eager) vVirtualScrollRef.value?.calculateVisibleItems();
		}
		function onAfterLeave() {
			if (isFocused.value) {
				isPristine.value = true;
				vTextFieldRef.value?.focus();
			}
			_searchLock.value = null;
		}
		function onFocusin(e) {
			isFocused.value = true;
			setTimeout(() => {
				listHasFocus.value = true;
			});
		}
		function onFocusout(e) {
			listHasFocus.value = false;
		}
		function onUpdateModelValue(v) {
			if (v == null || v === "" && !props.multiple && !hasSelectionSlot.value) model.value = [];
		}
		const isSelecting = shallowRef$28(false);
		function select(item) {
			let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
			if (!item || item.props.disabled) return;
			if (props.multiple) {
				const index = model.value.findIndex((selection) => (props.valueComparator || deepEqual)(selection.value, item.value));
				const add = set == null ? !~index : set;
				if (~index) {
					const value = add ? [...model.value, item] : [...model.value];
					value.splice(index, 1);
					model.value = value;
				} else if (add) model.value = [...model.value, item];
				if (props.clearOnSelect) search.value = "";
			} else {
				const add = set !== false;
				model.value = add ? [item] : [];
				_searchLock.value = isPristine.value ? "" : search.value ?? "";
				search.value = add && !hasSelectionSlot.value ? item.title : "";
				nextTick$17(() => {
					menu.value = false;
					isPristine.value = true;
				});
			}
		}
		watch$28(isFocused, (val, oldVal) => {
			if (val === oldVal) return;
			if (val) {
				isSelecting.value = true;
				search.value = props.multiple || hasSelectionSlot.value ? "" : String(model.value.at(-1)?.props.title ?? "");
				isPristine.value = true;
				nextTick$17(() => isSelecting.value = false);
			} else {
				if (!props.multiple && search.value == null) model.value = [];
				menu.value = false;
				if (!isPristine.value && search.value) _searchLock.value = search.value;
				search.value = "";
				selectionIndex.value = -1;
			}
		});
		watch$28(search, (val) => {
			if (!isFocused.value || isSelecting.value) return;
			if (val) menu.value = true;
			isPristine.value = !val;
		});
		watch$28(menu, (val) => {
			if (!props.hideSelected && val && model.value.length && isPristine.value) {
				const index = displayItems.value.findIndex((item) => model.value.some((s) => item.value === s.value));
				IN_BROWSER && window.requestAnimationFrame(() => {
					index >= 0 && vVirtualScrollRef.value?.scrollToIndex(index);
				});
			}
			if (val) _searchLock.value = null;
		});
		watch$28(items, (newVal, oldVal) => {
			if (menu.value) return;
			if (isFocused.value && !oldVal.length && newVal.length) menu.value = true;
		});
		useRender(() => {
			const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
			const isDirty = model.value.length > 0;
			const textFieldProps = VTextField.filterProps(props);
			return _createVNode$100(VTextField, _mergeProps$60({ "ref": vTextFieldRef }, textFieldProps, {
				"modelValue": search.value,
				"onUpdate:modelValue": [($event) => search.value = $event, onUpdateModelValue],
				"focused": isFocused.value,
				"onUpdate:focused": ($event) => isFocused.value = $event,
				"validationValue": model.externalValue,
				"counterValue": counterValue.value,
				"dirty": isDirty,
				"onChange": onChange,
				"class": [
					"v-autocomplete",
					`v-autocomplete--${props.multiple ? "multiple" : "single"}`,
					{
						"v-autocomplete--active-menu": menu.value,
						"v-autocomplete--chips": !!props.chips,
						"v-autocomplete--selection-slot": !!hasSelectionSlot.value,
						"v-autocomplete--selecting-index": selectionIndex.value > -1
					},
					props.class
				],
				"style": props.style,
				"readonly": form.isReadonly.value,
				"placeholder": isDirty ? void 0 : props.placeholder,
				"onClick:clear": onClear,
				"onMousedown:control": onMousedownControl,
				"onKeydown": onKeydown$1,
				"aria-expanded": ariaExpanded.value,
				"aria-controls": ariaControls.value
			}), {
				...slots,
				default: (_ref3) => {
					let { id } = _ref3;
					return _createElementVNode$86(_Fragment$34, null, [_createVNode$100(VMenu, _mergeProps$60({
						"id": menuId.value,
						"ref": vMenuRef,
						"modelValue": menu.value,
						"onUpdate:modelValue": ($event) => menu.value = $event,
						"activator": "parent",
						"contentClass": "v-autocomplete__content",
						"disabled": menuDisabled.value,
						"eager": props.eager,
						"maxHeight": 310,
						"openOnClick": false,
						"closeOnContentClick": false,
						"onAfterEnter": onAfterEnter,
						"onAfterLeave": onAfterLeave
					}, props.menuProps), { default: () => [hasList && _createVNode$100(VList, _mergeProps$60({
						"ref": listRef,
						"filterable": true,
						"selected": selectedValues.value,
						"selectStrategy": props.multiple ? "independent" : "single-independent",
						"onMousedown": (e) => e.preventDefault(),
						"onKeydown": onListKeydown,
						"onFocusin": onFocusin,
						"onFocusout": onFocusout,
						"tabindex": "-1",
						"selectable": !!displayItems.value.length,
						"aria-live": "polite",
						"aria-labelledby": `${id.value}-label`,
						"aria-multiselectable": props.multiple,
						"color": props.itemColor ?? props.color
					}, listEvents, props.listProps), { default: () => [
						slots["prepend-item"]?.(),
						!displayItems.value.length && !props.hideNoData && (slots["no-data"]?.() ?? _createVNode$100(VListItem, {
							"key": "no-data",
							"title": t(props.noDataText)
						}, null)),
						_createVNode$100(VVirtualScroll, {
							"ref": vVirtualScrollRef,
							"renderless": true,
							"items": displayItems.value,
							"itemKey": "value"
						}, { default: (_ref4) => {
							let { item, index, itemRef } = _ref4;
							const itemProps = mergeProps$7(item.props, {
								ref: itemRef,
								key: item.value,
								active: highlightFirst.value && item === firstSelectableItem.value ? true : void 0,
								onClick: () => select(item, null),
								"aria-posinset": index + 1,
								"aria-setsize": displayItems.value.length
							});
							if (item.type === "divider") return slots.divider?.({
								props: item.raw,
								index
							}) ?? _createVNode$100(VDivider, _mergeProps$60(item.props, { "key": `divider-${index}` }), null);
							if (item.type === "subheader") return slots.subheader?.({
								props: item.raw,
								index
							}) ?? _createVNode$100(VListSubheader, _mergeProps$60(item.props, { "key": `subheader-${index}` }), null);
							return slots.item?.({
								item,
								index,
								props: itemProps
							}) ?? _createVNode$100(VListItem, _mergeProps$60(itemProps, { "role": "option" }), {
								prepend: (_ref5) => {
									let { isSelected } = _ref5;
									return _createElementVNode$86(_Fragment$34, null, [
										props.multiple && !props.hideSelected ? _createVNode$100(VCheckboxBtn, {
											"key": item.value,
											"modelValue": isSelected,
											"ripple": false,
											"tabindex": "-1",
											"aria-hidden": true,
											"onClick": (event) => event.preventDefault()
										}, null) : void 0,
										item.props.prependAvatar && _createVNode$100(VAvatar, { "image": item.props.prependAvatar }, null),
										item.props.prependIcon && _createVNode$100(VIcon, { "icon": item.props.prependIcon }, null)
									]);
								},
								title: () => {
									return isPristine.value ? item.title : highlightResult("v-autocomplete", item.title, getMatches(item)?.title);
								}
							});
						} }),
						slots["append-item"]?.()
					] })] }), model.value.map((item, index) => {
						function onChipClose(e) {
							e.stopPropagation();
							e.preventDefault();
							select(item, false);
						}
						const slotProps = mergeProps$7(VChip.filterProps(item.props), {
							"onClick:close": onChipClose,
							onKeydown(e) {
								if (e.key !== "Enter" && e.key !== " ") return;
								e.preventDefault();
								e.stopPropagation();
								onChipClose(e);
							},
							onMousedown(e) {
								e.preventDefault();
								e.stopPropagation();
							},
							modelValue: true,
							"onUpdate:modelValue": void 0
						});
						const hasSlot = hasChips.value ? !!slots.chip : !!slots.selection;
						const slotContent = hasSlot ? ensureValidVNode(hasChips.value ? slots.chip({
							item,
							index,
							props: slotProps
						}) : slots.selection({
							item,
							index
						})) : void 0;
						if (hasSlot && !slotContent) return void 0;
						return _createElementVNode$86("div", {
							"key": item.value,
							"class": _normalizeClass$69(["v-autocomplete__selection", index === selectionIndex.value && ["v-autocomplete__selection--selected", textColorClasses.value]]),
							"style": _normalizeStyle$59(index === selectionIndex.value ? textColorStyles.value : {})
						}, [hasChips.value ? !slots.chip ? _createVNode$100(VChip, _mergeProps$60({
							"key": "chip",
							"closable": closableChips.value,
							"size": "small",
							"text": item.title,
							"disabled": item.props.disabled
						}, slotProps), null) : _createVNode$100(VDefaultsProvider, {
							"key": "chip-defaults",
							"defaults": { VChip: {
								closable: closableChips.value,
								size: "small",
								text: item.title
							} }
						}, { default: () => [slotContent] }) : slotContent ?? _createElementVNode$86("span", { "class": "v-autocomplete__selection-text" }, [item.title, props.multiple && index < model.value.length - 1 && _createElementVNode$86("span", { "class": "v-autocomplete__selection-comma" }, [_createTextVNode$8(",")])])]);
					})]);
				},
				"append-inner": function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return _createElementVNode$86(_Fragment$34, null, [
						slots["append-inner"]?.(...args),
						props.menuIcon ? _createVNode$100(VIcon, {
							"class": "v-autocomplete__menu-icon",
							"color": vTextFieldRef.value?.fieldIconColor,
							"icon": props.menuIcon,
							"onMousedown": onMousedownMenuIcon,
							"onClick": noop,
							"aria-hidden": true,
							"tabindex": "-1"
						}, null) : void 0,
						props.appendInnerIcon && _createVNode$100(InputIcon, {
							"key": "append-icon",
							"name": "appendInner",
							"color": args[0].iconColor.value
						}, null)
					]);
				}
			});
		});
		return forwardRefs({
			isFocused,
			isPristine,
			menu,
			search,
			filteredItems,
			select
		}, vTextFieldRef);
	}
});
var { createVNode: _createVNode$99, vShow: _vShow$4, mergeProps: _mergeProps$59, createElementVNode: _createElementVNode$85, withDirectives: _withDirectives$14 } = await importShared("vue");
const makeVBadgeProps = propsFactory({
	bordered: Boolean,
	color: String,
	content: [Number, String],
	dot: Boolean,
	floating: Boolean,
	icon: IconValue,
	inline: Boolean,
	label: {
		type: String,
		default: "$vuetify.badge"
	},
	max: [Number, String],
	modelValue: {
		type: Boolean,
		default: true
	},
	offsetX: [Number, String],
	offsetY: [Number, String],
	textColor: String,
	...makeComponentProps(),
	...makeLocationProps({ location: "top end" }),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeTransitionProps({ transition: "scale-rotate-transition" }),
	...makeDimensionProps()
}, "VBadge");
const VBadge = genericComponent()({
	name: "VBadge",
	inheritAttrs: false,
	props: makeVBadgeProps(),
	setup(props, ctx) {
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { roundedClasses } = useRounded(props);
		const { t } = useLocale();
		const { textColorClasses, textColorStyles } = useTextColor(() => props.textColor);
		const { themeClasses } = useTheme();
		const { locationStyles } = useLocation(props, true, (side) => {
			return (props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12) + (["top", "bottom"].includes(side) ? Number(props.offsetY ?? 0) : ["left", "right"].includes(side) ? Number(props.offsetX ?? 0) : 0);
		});
		const { dimensionStyles } = useDimension(props);
		useRender(() => {
			const value = Number(props.content);
			const content = !props.max || isNaN(value) ? props.content : value <= Number(props.max) ? value : `${props.max}+`;
			const [badgeAttrs, attrs] = pickWithRest(ctx.attrs, [
				"aria-atomic",
				"aria-label",
				"aria-live",
				"role",
				"title"
			]);
			return _createVNode$99(props.tag, _mergeProps$59({ "class": [
				"v-badge",
				{
					"v-badge--bordered": props.bordered,
					"v-badge--dot": props.dot,
					"v-badge--floating": props.floating,
					"v-badge--inline": props.inline
				},
				props.class
			] }, attrs, { "style": props.style }), { default: () => [_createElementVNode$85("div", { "class": "v-badge__wrapper" }, [ctx.slots.default?.(), _createVNode$99(MaybeTransition, { "transition": props.transition }, { default: () => [_withDirectives$14(_createElementVNode$85("span", _mergeProps$59({
				"class": [
					"v-badge__badge",
					themeClasses.value,
					backgroundColorClasses.value,
					roundedClasses.value,
					textColorClasses.value
				],
				"style": [
					backgroundColorStyles.value,
					textColorStyles.value,
					dimensionStyles.value,
					props.inline ? {} : locationStyles.value
				],
				"aria-atomic": "true",
				"aria-label": t(props.label, value),
				"aria-live": "polite",
				"role": "status"
			}, badgeAttrs), [props.dot ? void 0 : ctx.slots.badge ? ctx.slots.badge?.() : props.icon ? _createVNode$99(VIcon, { "icon": props.icon }, null) : content]), [[_vShow$4, props.modelValue]])] })])] });
		});
		return {};
	}
});
var { normalizeClass: _normalizeClass$68, normalizeStyle: _normalizeStyle$58, createElementVNode: _createElementVNode$84 } = await importShared("vue");
const makeVBannerActionsProps = propsFactory({
	color: String,
	density: String,
	...makeComponentProps()
}, "VBannerActions");
const VBannerActions = genericComponent()({
	name: "VBannerActions",
	props: makeVBannerActionsProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		provideDefaults({ VBtn: {
			color: props.color,
			density: props.density,
			slim: true,
			variant: "text"
		} });
		useRender(() => _createElementVNode$84("div", {
			"class": _normalizeClass$68(["v-banner-actions", props.class]),
			"style": _normalizeStyle$58(props.style)
		}, [slots.default?.()]));
		return {};
	}
});
const VBannerText = createSimpleFunctional("v-banner-text");
var { createVNode: _createVNode$98, createElementVNode: _createElementVNode$83, normalizeClass: _normalizeClass$67, normalizeStyle: _normalizeStyle$57 } = await importShared("vue");
var { toRef: toRef$34 } = await importShared("vue");
const makeVBannerProps = propsFactory({
	avatar: String,
	bgColor: String,
	color: String,
	icon: IconValue,
	lines: String,
	stacked: Boolean,
	sticky: Boolean,
	text: String,
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeDisplayProps({ mobile: null }),
	...makeElevationProps(),
	...makeLocationProps(),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VBanner");
const VBanner = genericComponent()({
	name: "VBanner",
	props: makeVBannerProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { borderClasses } = useBorder(props);
		const { densityClasses } = useDensity(props);
		const { displayClasses, mobile } = useDisplay(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { locationStyles } = useLocation(props);
		const { positionClasses } = usePosition(props);
		const { roundedClasses } = useRounded(props);
		const { themeClasses } = provideTheme(props);
		const color = toRef$34(() => props.color);
		const density = toRef$34(() => props.density);
		provideDefaults({ VBannerActions: {
			color,
			density
		} });
		useRender(() => {
			const hasText = !!(props.text || slots.text);
			const hasPrependMedia = !!(props.avatar || props.icon);
			const hasPrepend = !!(hasPrependMedia || slots.prepend);
			return _createVNode$98(props.tag, {
				"class": _normalizeClass$67([
					"v-banner",
					{
						"v-banner--stacked": props.stacked || mobile.value,
						"v-banner--sticky": props.sticky,
						[`v-banner--${props.lines}-line`]: !!props.lines
					},
					themeClasses.value,
					backgroundColorClasses.value,
					borderClasses.value,
					densityClasses.value,
					displayClasses.value,
					elevationClasses.value,
					positionClasses.value,
					roundedClasses.value,
					props.class
				]),
				"style": _normalizeStyle$57([
					backgroundColorStyles.value,
					dimensionStyles.value,
					locationStyles.value,
					props.style
				]),
				"role": "banner"
			}, { default: () => [
				hasPrepend && _createElementVNode$83("div", {
					"key": "prepend",
					"class": "v-banner__prepend"
				}, [!slots.prepend ? _createVNode$98(VAvatar, {
					"key": "prepend-avatar",
					"color": color.value,
					"density": density.value,
					"icon": props.icon,
					"image": props.avatar
				}, null) : _createVNode$98(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !hasPrependMedia,
					"defaults": { VAvatar: {
						color: color.value,
						density: density.value,
						icon: props.icon,
						image: props.avatar
					} }
				}, slots.prepend)]),
				_createElementVNode$83("div", { "class": "v-banner__content" }, [hasText && _createVNode$98(VBannerText, { "key": "text" }, { default: () => [slots.text?.() ?? props.text] }), slots.default?.()]),
				slots.actions && _createVNode$98(VBannerActions, { "key": "actions" }, slots.actions)
			] });
		});
	}
});
var { createElementVNode: _createElementVNode$82, normalizeClass: _normalizeClass$66, normalizeStyle: _normalizeStyle$56, createVNode: _createVNode$97 } = await importShared("vue");
var { computed: computed$83, toRef: toRef$33 } = await importShared("vue");
const makeVBottomNavigationProps = propsFactory({
	baseColor: String,
	bgColor: String,
	color: String,
	grow: Boolean,
	mode: {
		type: String,
		validator: (v) => !v || ["horizontal", "shift"].includes(v)
	},
	height: {
		type: [Number, String],
		default: 56
	},
	active: {
		type: Boolean,
		default: true
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeLayoutItemProps({ name: "bottom-navigation" }),
	...makeTagProps({ tag: "header" }),
	...makeGroupProps({ selectedClass: "v-btn--selected" }),
	...makeThemeProps()
}, "VBottomNavigation");
const VBottomNavigation = genericComponent()({
	name: "VBottomNavigation",
	props: makeVBottomNavigationProps(),
	emits: {
		"update:active": (value) => true,
		"update:modelValue": (value) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = useTheme();
		const { borderClasses } = useBorder(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { densityClasses } = useDensity(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const { ssrBootStyles } = useSsrBoot();
		const height = computed$83(() => Number(props.height) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0));
		const isActive = useProxiedModel(props, "active", props.active);
		const { layoutItemStyles } = useLayoutItem({
			id: props.name,
			order: computed$83(() => parseInt(props.order, 10)),
			position: toRef$33(() => "bottom"),
			layoutSize: toRef$33(() => isActive.value ? height.value : 0),
			elementSize: height,
			active: isActive,
			absolute: toRef$33(() => props.absolute)
		});
		useGroup(props, VBtnToggleSymbol);
		provideDefaults({ VBtn: {
			baseColor: toRef$33(() => props.baseColor),
			color: toRef$33(() => props.color),
			density: toRef$33(() => props.density),
			stacked: toRef$33(() => props.mode !== "horizontal"),
			variant: "text"
		} }, { scoped: true });
		useRender(() => {
			return _createVNode$97(props.tag, {
				"class": _normalizeClass$66([
					"v-bottom-navigation",
					{
						"v-bottom-navigation--active": isActive.value,
						"v-bottom-navigation--grow": props.grow,
						"v-bottom-navigation--shift": props.mode === "shift"
					},
					themeClasses.value,
					backgroundColorClasses.value,
					borderClasses.value,
					densityClasses.value,
					elevationClasses.value,
					roundedClasses.value,
					props.class
				]),
				"style": _normalizeStyle$56([
					backgroundColorStyles.value,
					layoutItemStyles.value,
					{ height: convertToUnit(height.value) },
					ssrBootStyles.value,
					props.style
				])
			}, { default: () => [slots.default && _createElementVNode$82("div", { "class": "v-bottom-navigation__content" }, [slots.default()])] });
		});
		return {};
	}
});
var { createVNode: _createVNode$96, mergeProps: _mergeProps$58 } = await importShared("vue");
var { mergeProps: mergeProps$6, nextTick: nextTick$16, ref: ref$43, watch: watch$27 } = await importShared("vue");
const makeVDialogProps = propsFactory({
	fullscreen: Boolean,
	scrollable: Boolean,
	...omit(makeVOverlayProps({
		captureFocus: true,
		origin: "center center",
		scrollStrategy: "block",
		transition: { component: VDialogTransition },
		zIndex: 2400,
		retainFocus: true
	}), ["disableInitialFocus"])
}, "VDialog");
const VDialog = genericComponent()({
	name: "VDialog",
	props: makeVDialogProps(),
	emits: {
		"update:modelValue": (value) => true,
		afterEnter: () => true,
		afterLeave: () => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const isActive = useProxiedModel(props, "modelValue");
		const { scopeId } = useScopeId();
		const overlay = ref$43();
		function onAfterEnter() {
			emit("afterEnter");
			if ((props.scrim || props.retainFocus) && overlay.value?.contentEl && !overlay.value.contentEl.contains(document.activeElement)) overlay.value.contentEl.focus({ preventScroll: true });
		}
		function onAfterLeave() {
			emit("afterLeave");
		}
		watch$27(isActive, async (val) => {
			if (!val) {
				await nextTick$16();
				overlay.value.activatorEl?.focus({ preventScroll: true });
			}
		});
		useRender(() => {
			const overlayProps = VOverlay.filterProps(props);
			const activatorProps = mergeProps$6({ "aria-haspopup": "dialog" }, props.activatorProps);
			const contentProps = mergeProps$6({ tabindex: -1 }, props.contentProps);
			return _createVNode$96(VOverlay, _mergeProps$58({
				"ref": overlay,
				"class": [
					"v-dialog",
					{
						"v-dialog--fullscreen": props.fullscreen,
						"v-dialog--scrollable": props.scrollable
					},
					props.class
				],
				"style": props.style
			}, overlayProps, {
				"modelValue": isActive.value,
				"onUpdate:modelValue": ($event) => isActive.value = $event,
				"aria-modal": "true",
				"activatorProps": activatorProps,
				"contentProps": contentProps,
				"height": !props.fullscreen ? props.height : void 0,
				"width": !props.fullscreen ? props.width : void 0,
				"maxHeight": !props.fullscreen ? props.maxHeight : void 0,
				"maxWidth": !props.fullscreen ? props.maxWidth : void 0,
				"role": "dialog",
				"onAfterEnter": onAfterEnter,
				"onAfterLeave": onAfterLeave
			}, scopeId), {
				activator: slots.activator,
				default: function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return _createVNode$96(VDefaultsProvider, { "root": "VDialog" }, { default: () => [slots.default?.(...args)] });
				}
			});
		});
		return forwardRefs({}, overlay);
	}
});
var { mergeProps: _mergeProps$57, createVNode: _createVNode$95 } = await importShared("vue");
const makeVBottomSheetProps = propsFactory({
	inset: Boolean,
	...makeVDialogProps({ transition: "bottom-sheet-transition" })
}, "VBottomSheet");
const VBottomSheet = genericComponent()({
	name: "VBottomSheet",
	props: makeVBottomSheetProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const isActive = useProxiedModel(props, "modelValue");
		useRender(() => {
			return _createVNode$95(VDialog, _mergeProps$57(VDialog.filterProps(props), {
				"contentClass": ["v-bottom-sheet__content", props.contentClass],
				"modelValue": isActive.value,
				"onUpdate:modelValue": ($event) => isActive.value = $event,
				"class": [
					"v-bottom-sheet",
					{ "v-bottom-sheet--inset": props.inset },
					props.class
				],
				"style": props.style
			}), slots);
		});
		return {};
	}
});
var { normalizeClass: _normalizeClass$65, normalizeStyle: _normalizeStyle$55, createElementVNode: _createElementVNode$81 } = await importShared("vue");
const makeVBreadcrumbsDividerProps = propsFactory({
	divider: [Number, String],
	...makeComponentProps()
}, "VBreadcrumbsDivider");
const VBreadcrumbsDivider = genericComponent()({
	name: "VBreadcrumbsDivider",
	props: makeVBreadcrumbsDividerProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createElementVNode$81("li", {
			"aria-hidden": "true",
			"class": _normalizeClass$65(["v-breadcrumbs-divider", props.class]),
			"style": _normalizeStyle$55(props.style)
		}, [slots?.default?.() ?? props.divider]));
		return {};
	}
});
var { mergeProps: _mergeProps$56, createElementVNode: _createElementVNode$80, normalizeClass: _normalizeClass$64, normalizeStyle: _normalizeStyle$54, createVNode: _createVNode$94 } = await importShared("vue");
var { computed: computed$82 } = await importShared("vue");
const makeVBreadcrumbsItemProps = propsFactory({
	active: Boolean,
	activeClass: String,
	activeColor: String,
	color: String,
	disabled: Boolean,
	title: String,
	...makeComponentProps(),
	...pick(makeDimensionProps(), ["width", "maxWidth"]),
	...makeRouterProps(),
	...makeTagProps({ tag: "li" })
}, "VBreadcrumbsItem");
const VBreadcrumbsItem = genericComponent()({
	name: "VBreadcrumbsItem",
	props: makeVBreadcrumbsItemProps(),
	setup(props, _ref) {
		let { slots, attrs } = _ref;
		const link = useLink(props, attrs);
		const isActive = computed$82(() => props.active || link.isActive?.value);
		const { dimensionStyles } = useDimension(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => isActive.value ? props.activeColor : props.color);
		useRender(() => {
			return _createVNode$94(props.tag, {
				"class": _normalizeClass$64([
					"v-breadcrumbs-item",
					{
						"v-breadcrumbs-item--active": isActive.value,
						"v-breadcrumbs-item--disabled": props.disabled,
						[`${props.activeClass}`]: isActive.value && props.activeClass
					},
					textColorClasses.value,
					props.class
				]),
				"style": _normalizeStyle$54([
					textColorStyles.value,
					dimensionStyles.value,
					props.style
				]),
				"aria-current": isActive.value ? "page" : void 0
			}, { default: () => [!link.isLink.value ? slots.default?.() ?? props.title : _createElementVNode$80("a", _mergeProps$56({
				"class": "v-breadcrumbs-item--link",
				"onClick": link.navigate
			}, link.linkProps), [slots.default?.() ?? props.title])] });
		});
		return {};
	}
});
var { createVNode: _createVNode$93, createElementVNode: _createElementVNode$79, Fragment: _Fragment$33, mergeProps: _mergeProps$55, normalizeClass: _normalizeClass$63, normalizeStyle: _normalizeStyle$53 } = await importShared("vue");
var { computed: computed$81, toRef: toRef$32 } = await importShared("vue");
const makeVBreadcrumbsProps = propsFactory({
	activeClass: String,
	activeColor: String,
	bgColor: String,
	color: String,
	disabled: Boolean,
	divider: {
		type: String,
		default: "/"
	},
	icon: IconValue,
	items: {
		type: Array,
		default: () => []
	},
	...makeComponentProps(),
	...makeDensityProps(),
	...makeRoundedProps(),
	...makeTagProps({ tag: "ul" })
}, "VBreadcrumbs");
const VBreadcrumbs = genericComponent()({
	name: "VBreadcrumbs",
	props: makeVBreadcrumbsProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { densityClasses } = useDensity(props);
		const { roundedClasses } = useRounded(props);
		provideDefaults({
			VBreadcrumbsDivider: { divider: toRef$32(() => props.divider) },
			VBreadcrumbsItem: {
				activeClass: toRef$32(() => props.activeClass),
				activeColor: toRef$32(() => props.activeColor),
				color: toRef$32(() => props.color),
				disabled: toRef$32(() => props.disabled)
			}
		});
		const items = computed$81(() => props.items.map((item) => {
			return typeof item === "string" ? {
				item: { title: item },
				raw: item
			} : {
				item,
				raw: item
			};
		}));
		useRender(() => {
			const hasPrepend = !!(slots.prepend || props.icon);
			return _createVNode$93(props.tag, {
				"class": _normalizeClass$63([
					"v-breadcrumbs",
					backgroundColorClasses.value,
					densityClasses.value,
					roundedClasses.value,
					props.class
				]),
				"style": _normalizeStyle$53([backgroundColorStyles.value, props.style])
			}, { default: () => [
				hasPrepend && _createElementVNode$79("li", {
					"key": "prepend",
					"class": "v-breadcrumbs__prepend"
				}, [!slots.prepend ? _createVNode$93(VIcon, {
					"key": "prepend-icon",
					"start": true,
					"icon": props.icon
				}, null) : _createVNode$93(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !props.icon,
					"defaults": { VIcon: {
						icon: props.icon,
						start: true
					} }
				}, slots.prepend)]),
				items.value.map((_ref2, index, array) => {
					let { item, raw } = _ref2;
					return _createElementVNode$79(_Fragment$33, null, [slots.item?.({
						item,
						index
					}) ?? _createVNode$93(VBreadcrumbsItem, _mergeProps$55({
						"key": index,
						"disabled": index >= array.length - 1
					}, typeof item === "string" ? { title: item } : item), { default: slots.title ? () => slots.title?.({
						item,
						index
					}) : void 0 }), index < array.length - 1 && _createVNode$93(VBreadcrumbsDivider, null, { default: slots.divider ? () => slots.divider?.({
						item: raw,
						index
					}) : void 0 })]);
				}),
				slots.default?.()
			] });
		});
		return {};
	}
});
var { mergeProps: _mergeProps$54, createVNode: _createVNode$92, createElementVNode: _createElementVNode$78, normalizeClass: _normalizeClass$62, normalizeStyle: _normalizeStyle$52 } = await importShared("vue");
var { toDisplayString: toDisplayString$2 } = await importShared("vue");
const makeVIconBtnProps = propsFactory({
	active: {
		type: Boolean,
		default: void 0
	},
	activeColor: String,
	activeIcon: [
		String,
		Function,
		Object
	],
	activeVariant: String,
	baseVariant: {
		type: String,
		default: "tonal"
	},
	disabled: Boolean,
	height: [Number, String],
	width: [Number, String],
	hideOverlay: Boolean,
	icon: [
		String,
		Function,
		Object
	],
	iconColor: String,
	loading: Boolean,
	opacity: [Number, String],
	readonly: Boolean,
	rotate: [Number, String],
	size: {
		type: [Number, String],
		default: "default"
	},
	sizes: {
		type: Array,
		default: () => [
			["x-small", 16],
			["small", 24],
			["default", 40],
			["large", 48],
			["x-large", 56]
		]
	},
	text: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeElevationProps(),
	...makeIconSizeProps(),
	...makeRoundedProps(),
	...makeTagProps({ tag: "button" }),
	...makeThemeProps(),
	...makeVariantProps({ variant: "flat" })
}, "VIconBtn");
const VIconBtn = genericComponent()({
	name: "VIconBtn",
	props: makeVIconBtnProps(),
	emits: { "update:active": (value) => true },
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const isActive = useProxiedModel(props, "active");
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const { colorClasses, colorStyles, variantClasses } = useVariant(() => ({
			color: (() => {
				if (props.disabled) return void 0;
				if (!isActive.value) return props.color;
				return props.activeColor ?? props.color ?? "surface-variant";
			})(),
			variant: (() => {
				if (isActive.value === void 0) return props.variant;
				if (isActive.value) return props.activeVariant ?? props.variant;
				return props.baseVariant ?? props.variant;
			})()
		}));
		const btnSizeMap = new Map(props.sizes);
		function onClick() {
			if (props.disabled || props.readonly || isActive.value === void 0 || props.tag === "a" && attrs.href) return;
			isActive.value = !isActive.value;
		}
		useRender(() => {
			const icon = isActive.value ? props.activeIcon ?? props.icon : props.icon;
			const _btnSize = props.size;
			const btnSize = btnSizeMap.has(_btnSize) ? btnSizeMap.get(_btnSize) : _btnSize;
			const btnHeight = props.height ?? btnSize;
			const btnWidth = props.width ?? btnSize;
			const { iconSize } = useIconSizes(props, () => new Map(props.iconSizes).get(_btnSize));
			const iconProps = {
				icon,
				size: iconSize.value,
				color: props.iconColor,
				opacity: props.opacity
			};
			return _createVNode$92(props.tag, {
				"type": props.tag === "button" ? "button" : void 0,
				"class": _normalizeClass$62([
					{
						"v-icon-btn": true,
						"v-icon-btn--active": isActive.value,
						"v-icon-btn--disabled": props.disabled,
						"v-icon-btn--loading": props.loading,
						"v-icon-btn--readonly": props.readonly,
						[`v-icon-btn--${props.size}`]: true
					},
					themeClasses.value,
					colorClasses.value,
					borderClasses.value,
					elevationClasses.value,
					roundedClasses.value,
					variantClasses.value,
					props.class
				]),
				"style": _normalizeStyle$52([
					{
						"--v-icon-btn-rotate": convertToUnit(props.rotate, "deg"),
						"--v-icon-btn-height": convertToUnit(btnHeight),
						"--v-icon-btn-width": convertToUnit(btnWidth)
					},
					colorStyles.value,
					props.style
				]),
				"tabindex": props.disabled || props.readonly ? -1 : 0,
				"onClick": onClick
			}, { default: () => [
				genOverlays(!props.hideOverlay, "v-icon-btn"),
				_createElementVNode$78("div", {
					"class": "v-icon-btn__content",
					"data-no-activator": ""
				}, [!slots.default && icon ? _createVNode$92(VIcon, _mergeProps$54({ "key": "content-icon" }, iconProps), null) : _createVNode$92(VDefaultsProvider, {
					"key": "content-defaults",
					"disabled": !icon,
					"defaults": { VIcon: { ...iconProps } }
				}, { default: () => slots.default?.() ?? toDisplayString$2(props.text) })]),
				!!props.loading && _createElementVNode$78("span", {
					"key": "loader",
					"class": "v-icon-btn__loader"
				}, [slots.loader?.() ?? _createVNode$92(VProgressCircular, {
					"color": typeof props.loading === "boolean" ? void 0 : props.loading,
					"indeterminate": "disable-shrink",
					"width": "2",
					"size": iconSize.value
				}, null)])
			] });
		});
		return {};
	}
});
function isLeapYear(year) {
	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
const PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/;
const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
const DAYS_IN_MONTH = [
	0,
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
const DAYS_IN_MONTH_LEAP = [
	0,
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
const OFFSET_YEAR = 1e4;
const OFFSET_TIME = 1e4;
function getStartOfWeek(timestamp, weekdays, today) {
	const start = copyTimestamp(timestamp);
	findWeekday(start, weekdays[0], prevDay);
	updateFormatted(start);
	if (today) updateRelative(start, today, start.hasTime);
	return start;
}
function getEndOfWeek(timestamp, weekdays, today) {
	const end = copyTimestamp(timestamp);
	findWeekday(end, weekdays[weekdays.length - 1]);
	updateFormatted(end);
	if (today) updateRelative(end, today, end.hasTime);
	return end;
}
function getStartOfMonth(timestamp) {
	const start = copyTimestamp(timestamp);
	start.day = 1;
	updateWeekday(start);
	updateFormatted(start);
	return start;
}
function getEndOfMonth(timestamp) {
	const end = copyTimestamp(timestamp);
	end.day = daysInMonth(end.year, end.month);
	updateWeekday(end);
	updateFormatted(end);
	return end;
}
function validateNumber(input) {
	return isFinite(parseInt(input));
}
function validateTime(input) {
	return typeof input === "number" && isFinite(input) || !!PARSE_TIME.exec(input) || typeof input === "object" && isFinite(input.hour) && isFinite(input.minute);
}
function parseTime(input) {
	if (typeof input === "number") return input;
	else if (typeof input === "string") {
		const parts = PARSE_TIME.exec(input);
		if (!parts) return false;
		return parseInt(parts[1]) * 60 + parseInt(parts[3] || 0);
	} else if (typeof input === "object") {
		if (typeof input.hour !== "number" || typeof input.minute !== "number") return false;
		return input.hour * 60 + input.minute;
	} else return false;
}
function validateTimestamp(input) {
	return typeof input === "number" && isFinite(input) || typeof input === "string" && !!PARSE_REGEX.exec(input) || input instanceof Date;
}
function parseTimestamp(input) {
	let required = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
	let now = arguments.length > 2 ? arguments[2] : void 0;
	if (typeof input === "number" && isFinite(input)) input = new Date(input);
	if (input instanceof Date) {
		const date = parseDate(input);
		if (now) updateRelative(date, now, date.hasTime);
		return date;
	}
	if (typeof input !== "string") {
		if (required) throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
		return null;
	}
	const parts = PARSE_REGEX.exec(input);
	if (!parts) {
		if (required) throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
		return null;
	}
	const timestamp = {
		date: input,
		time: "",
		year: parseInt(parts[1]),
		month: parseInt(parts[2]),
		day: parseInt(parts[4]) || 1,
		hour: parseInt(parts[6]) || 0,
		minute: parseInt(parts[8]) || 0,
		weekday: 0,
		hasDay: !!parts[4],
		hasTime: !!(parts[6] && parts[8]),
		past: false,
		present: false,
		future: false
	};
	updateWeekday(timestamp);
	updateFormatted(timestamp);
	if (now) updateRelative(timestamp, now, timestamp.hasTime);
	return timestamp;
}
function parseDate(date) {
	return updateFormatted({
		date: "",
		time: "",
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		weekday: date.getDay(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		hasDay: true,
		hasTime: true,
		past: false,
		present: true,
		future: false
	});
}
function getDayIdentifier(timestamp) {
	return timestamp.year * OFFSET_YEAR + timestamp.month * 100 + timestamp.day;
}
function getTimeIdentifier(timestamp) {
	return timestamp.hour * 100 + timestamp.minute;
}
function getTimestampIdentifier(timestamp) {
	return getDayIdentifier(timestamp) * OFFSET_TIME + getTimeIdentifier(timestamp);
}
function updateRelative(timestamp, now) {
	let time = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
	let a = getDayIdentifier(now);
	let b = getDayIdentifier(timestamp);
	let present = a === b;
	if (timestamp.hasTime && time && present) {
		a = getTimeIdentifier(now);
		b = getTimeIdentifier(timestamp);
		present = a === b;
	}
	timestamp.past = b < a;
	timestamp.present = present;
	timestamp.future = b > a;
	return timestamp;
}
function isTimedless(input) {
	return input instanceof Date || typeof input === "number" && isFinite(input);
}
function updateHasTime(timestamp, hasTime, now) {
	if (timestamp.hasTime !== hasTime) {
		timestamp.hasTime = hasTime;
		if (!hasTime) {
			timestamp.hour = 23;
			timestamp.minute = 59;
			timestamp.time = getTime(timestamp);
		}
		if (now) updateRelative(timestamp, now, timestamp.hasTime);
	}
	return timestamp;
}
function updateMinutes(timestamp, minutes, now) {
	timestamp.hasTime = true;
	timestamp.hour = 0;
	timestamp.minute = 0;
	nextMinutes(timestamp, minutes);
	updateFormatted(timestamp);
	if (now) updateRelative(timestamp, now, true);
	return timestamp;
}
function updateWeekday(timestamp) {
	timestamp.weekday = getWeekday(timestamp);
	return timestamp;
}
function updateFormatted(timestamp) {
	timestamp.time = getTime(timestamp);
	timestamp.date = getDate(timestamp);
	return timestamp;
}
function getWeekday(timestamp) {
	if (timestamp.hasDay) {
		const _ = Math.floor;
		const k = timestamp.day;
		const m = (timestamp.month + 9) % 12 + 1;
		const C = _(timestamp.year / 100);
		const Y = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
		return ((k + _(2.6 * m - .2) - 2 * C + Y + _(Y / 4) + _(C / 4)) % 7 + 7) % 7;
	}
	return timestamp.weekday;
}
function daysInMonth(year, month) {
	return isLeapYear(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function copyTimestamp(timestamp) {
	if (timestamp == null) return null;
	const { date, time, year, month, day, weekday, hour, minute, hasDay, hasTime, past, present, future } = timestamp;
	return {
		date,
		time,
		year,
		month,
		day,
		weekday,
		hour,
		minute,
		hasDay,
		hasTime,
		past,
		present,
		future
	};
}
function padNumber(x, length) {
	let padded = String(x);
	while (padded.length < length) padded = "0" + padded;
	return padded;
}
function getDate(timestamp) {
	let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
	if (timestamp.hasDay) str += `-${padNumber(timestamp.day, 2)}`;
	return str;
}
function getTime(timestamp) {
	if (!timestamp.hasTime) return "";
	return `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
}
function nextMinutes(timestamp, minutes) {
	timestamp.minute += minutes;
	while (timestamp.minute >= 60) {
		timestamp.minute -= 60;
		timestamp.hour++;
		if (timestamp.hour >= 24) {
			nextDay(timestamp);
			timestamp.hour = 0;
		}
	}
	return timestamp;
}
function nextDay(timestamp) {
	timestamp.day++;
	timestamp.weekday = (timestamp.weekday + 1) % 7;
	if (timestamp.day > 28 && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
		timestamp.day = 1;
		timestamp.month++;
		if (timestamp.month > 12) {
			timestamp.month = 1;
			timestamp.year++;
		}
	}
	return timestamp;
}
function prevDay(timestamp) {
	timestamp.day--;
	timestamp.weekday = (timestamp.weekday + 6) % 7;
	if (timestamp.day < 1) {
		timestamp.month--;
		if (timestamp.month < 1) {
			timestamp.year--;
			timestamp.month = 12;
		}
		timestamp.day = daysInMonth(timestamp.year, timestamp.month);
	}
	return timestamp;
}
function relativeDays(timestamp) {
	let mover = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nextDay;
	let days = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
	while (--days >= 0) mover(timestamp);
	return timestamp;
}
function diffMinutes(min, max) {
	const Y = (max.year - min.year) * 525600;
	const M = (max.month - min.month) * 43800;
	const D = (max.day - min.day) * 1440;
	const h$6 = (max.hour - min.hour) * 60;
	const m = max.minute - min.minute;
	return Y + M + D + h$6 + m;
}
function findWeekday(timestamp, weekday) {
	let mover = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nextDay;
	let maxDays = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
	while (timestamp.weekday !== weekday && --maxDays >= 0) mover(timestamp);
	return timestamp;
}
function getWeekdaySkips(weekdays) {
	const skips = [
		1,
		1,
		1,
		1,
		1,
		1,
		1
	];
	const filled = [
		0,
		0,
		0,
		0,
		0,
		0,
		0
	];
	for (let i = 0; i < weekdays.length; i++) filled[weekdays[i]] = 1;
	for (let k = 0; k < 7; k++) {
		let skip = 1;
		for (let j = 1; j < 7; j++) {
			if (filled[(k + j) % 7]) break;
			skip++;
		}
		skips[k] = filled[k] * skip;
	}
	return skips;
}
function timestampToDate(timestamp) {
	const time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
	const date = timestamp.date;
	return /* @__PURE__ */ new Date(`${date}T${time}:00+00:00`);
}
function createDayList(start, end, now, weekdaySkips) {
	let max = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42;
	let min = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
	const stop = getDayIdentifier(end);
	const days = [];
	let current = copyTimestamp(start);
	let currentIdentifier = 0;
	let stopped = currentIdentifier === stop;
	if (stop < getDayIdentifier(start)) throw new Error("End date is earlier than start date.");
	while ((!stopped || days.length < min) && days.length < max) {
		currentIdentifier = getDayIdentifier(current);
		stopped = stopped || currentIdentifier === stop;
		if (weekdaySkips[current.weekday] === 0) {
			current = nextDay(current);
			continue;
		}
		const day = copyTimestamp(current);
		updateFormatted(day);
		updateRelative(day, now);
		days.push(day);
		current = relativeDays(current, nextDay, weekdaySkips[current.weekday]);
	}
	if (!days.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
	return days;
}
function createIntervalList(timestamp, first, minutes, count, now) {
	const intervals = [];
	for (let i = 0; i < count; i++) {
		const mins = first + i * minutes;
		const int$1 = copyTimestamp(timestamp);
		intervals.push(updateMinutes(int$1, mins, now));
	}
	return intervals;
}
function createNativeLocaleFormatter(locale, getOptions) {
	const emptyFormatter = (_t, _s) => "";
	if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") return emptyFormatter;
	return (timestamp, short) => {
		try {
			return new Intl.DateTimeFormat(locale || void 0, getOptions(timestamp, short)).format(timestampToDate(timestamp));
		} catch (e) {
			return "";
		}
	};
}
function validateWeekdays(input) {
	if (typeof input === "string") input = input.split(",");
	if (Array.isArray(input)) {
		const ints = input.map((x) => parseInt(x));
		if (ints.length > 7 || ints.length === 0) return false;
		const visited = {};
		let wrapped = false;
		for (let i = 0; i < ints.length; i++) {
			const x = ints[i];
			if (!isFinite(x) || x < 0 || x >= 7) return false;
			if (i > 0) {
				const d = x - ints[i - 1];
				if (d < 0) {
					if (wrapped) return false;
					wrapped = true;
				} else if (d === 0) return false;
			}
			if (visited[x]) return false;
			visited[x] = true;
		}
		return true;
	}
	return false;
}
var { computed: computed$80, reactive: reactive$1, watch: watch$26 } = await importShared("vue");
function useTimes(props) {
	const times = reactive$1({
		now: parseTimestamp("0000-00-00 00:00", true),
		today: parseTimestamp("0000-00-00", true)
	});
	const parsedNow = computed$80(() => {
		return props.now && validateTimestamp(props.now) ? parseTimestamp(props.now, true) : null;
	});
	function setPresent() {
		times.now.present = times.today.present = true;
		times.now.past = times.today.past = false;
		times.now.future = times.today.future = false;
	}
	function getNow() {
		return parseDate(/* @__PURE__ */ new Date());
	}
	function updateDay(now, target) {
		if (now.date !== target.date) {
			target.year = now.year;
			target.month = now.month;
			target.day = now.day;
			target.weekday = now.weekday;
			target.date = now.date;
		}
	}
	function updateTime(now, target) {
		if (now.time !== target.time) {
			target.hour = now.hour;
			target.minute = now.minute;
			target.time = now.time;
		}
	}
	function updateTimes() {
		const now = parsedNow.value || getNow();
		updateDay(now, times.now);
		updateTime(now, times.now);
		updateDay(now, times.today);
	}
	watch$26(parsedNow, updateTimes);
	updateTimes();
	setPresent();
	return {
		times,
		parsedNow,
		updateTimes,
		setPresent,
		getNow,
		updateDay,
		updateTime
	};
}
var { computed: computed$79 } = await importShared("vue");
const makeCalendarBaseProps = propsFactory({
	start: {
		type: [
			String,
			Number,
			Date
		],
		validate: validateTimestamp,
		default: () => parseDate(/* @__PURE__ */ new Date()).date
	},
	end: {
		type: [
			String,
			Number,
			Date
		],
		validate: validateTimestamp
	},
	weekdays: {
		type: [Array, String],
		default: () => [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		validate: validateWeekdays
	},
	firstDayOfWeek: [Number, String],
	firstDayOfYear: [Number, String],
	weekdayFormat: {
		type: Function,
		default: null
	},
	dayFormat: {
		type: Function,
		default: null
	},
	locale: String,
	now: {
		type: String,
		validator: validateTimestamp
	},
	type: {
		type: String,
		default: "month"
	}
}, "VCalendar-base");
function useCalendarBase(props) {
	const { times, updateTimes } = useTimes({ now: props.now });
	const locale = provideLocale(props);
	const adapter = useDate();
	const parsedStart = computed$79(() => {
		if (props.type === "month") return getStartOfMonth(parseTimestamp(props.start, true));
		return parseTimestamp(props.start, true);
	});
	const parsedEnd = computed$79(() => {
		const start = parsedStart.value;
		const end = props.end ? parseTimestamp(props.end) || start : start;
		const value = getTimestampIdentifier(end) < getTimestampIdentifier(start) ? start : end;
		if (props.type === "month") return getEndOfMonth(value);
		return value;
	});
	const parsedValue = computed$79(() => {
		return validateTimestamp(props.modelValue) ? parseTimestamp(props.modelValue, true) : parsedStart.value || times.today;
	});
	const parsedWeekdays = computed$79(() => {
		const weekdays = Array.isArray(props.weekdays) ? props.weekdays : (props.weekdays || "").split(",").map((x) => parseInt(x, 10));
		const first = adapter.toJsDate(adapter.startOfWeek(adapter.date(), props.firstDayOfWeek)).getDay();
		return [...weekdays.toSorted().filter((v) => v >= first), ...weekdays.toSorted().filter((v) => v < first)];
	});
	const effectiveWeekdays = computed$79(() => {
		const start = parsedValue.value;
		const days$1 = parseInt(String(props.categoryDays)) || 1;
		switch (props.type) {
			case "day": return [start.weekday];
			case "4day": return [
				start.weekday,
				(start.weekday + 1) % 7,
				(start.weekday + 2) % 7,
				(start.weekday + 3) % 7
			];
			case "category": return Array.from({ length: days$1 }, (_, i) => (start.weekday + i) % 7);
			default: return parsedWeekdays.value;
		}
	});
	const weekdaySkips = computed$79(() => {
		return getWeekdaySkips(parsedWeekdays.value);
	});
	const days = computed$79(() => {
		return createDayList(parsedStart.value, parsedEnd.value, times.today, weekdaySkips.value);
	});
	const dayFormatter = computed$79(() => {
		if (props.dayFormat) return props.dayFormat;
		return createNativeLocaleFormatter(locale.current.value, () => ({
			timeZone: "UTC",
			day: "numeric"
		}));
	});
	const weekdayFormatter = computed$79(() => {
		if (props.weekdayFormat) return props.weekdayFormat;
		return createNativeLocaleFormatter(locale.current.value, (_tms, short) => ({
			timeZone: "UTC",
			weekday: short ? "short" : "long"
		}));
	});
	function getColorProps(colors) {
		return computeColor(colors);
	}
	function getRelativeClasses(timestamp) {
		let outside = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		return {
			"v-present": timestamp.present,
			"v-past": timestamp.past,
			"v-future": timestamp.future,
			"v-outside": outside
		};
	}
	function getWeekNumber(timestamp) {
		return adapter.getWeek(adapter.date(timestamp.date), props.firstDayOfWeek, props.firstDayOfYear);
	}
	function _getStartOfWeek(timestamp) {
		return getStartOfWeek(timestamp, parsedWeekdays.value, times.today);
	}
	function _getEndOfWeek(timestamp) {
		return getEndOfWeek(timestamp, parsedWeekdays.value, times.today);
	}
	function getFormatter(options) {
		return createNativeLocaleFormatter(locale.current.value, () => options);
	}
	return {
		times,
		locale,
		parsedValue,
		parsedWeekdays,
		effectiveWeekdays,
		weekdaySkips,
		parsedStart,
		parsedEnd,
		days,
		dayFormatter,
		weekdayFormatter,
		getColorProps,
		getRelativeClasses,
		getWeekNumber,
		getStartOfWeek: _getStartOfWeek,
		getEndOfWeek: _getEndOfWeek,
		getFormatter,
		updateTimes
	};
}
var { computed: computed$78, shallowRef: shallowRef$27 } = await importShared("vue");
const makeCalendarWithIntervalsProps = propsFactory({
	maxDays: {
		type: Number,
		default: 7
	},
	intervalHeight: {
		type: [Number, String],
		default: 48,
		validate: validateNumber
	},
	intervalWidth: {
		type: [Number, String],
		default: 60,
		validate: validateNumber
	},
	intervalMinutes: {
		type: [Number, String],
		default: 60,
		validate: validateNumber
	},
	firstInterval: {
		type: [Number, String],
		default: 0,
		validate: validateNumber
	},
	firstTime: {
		type: [
			Number,
			String,
			Object
		],
		validate: validateTime
	},
	intervalCount: {
		type: [Number, String],
		default: 24,
		validate: validateNumber
	},
	intervalFormat: {
		type: Function,
		default: null
	},
	intervalStyle: {
		type: Function,
		default: null
	},
	showIntervalLabel: {
		type: Function,
		default: null
	}
}, "VCalendar-intervals");
function useCalendarWithIntervals(props) {
	const base = useCalendarBase(props);
	const scrollAreaRef = shallowRef$27();
	const parsedFirstInterval = computed$78(() => {
		return parseInt(String(props.firstInterval || 0));
	});
	const parsedIntervalMinutes = computed$78(() => {
		return parseInt(String(props.intervalMinutes || 60));
	});
	const parsedIntervalCount = computed$78(() => {
		return parseInt(String(props.intervalCount || 24));
	});
	const parsedIntervalHeight = computed$78(() => {
		return parseFloat(String(props.intervalHeight || 48));
	});
	const parsedFirstTime = computed$78(() => {
		return parseTime(props.firstTime);
	});
	const firstMinute = computed$78(() => {
		const time = parsedFirstTime.value;
		return time !== false && time >= 0 && time <= 1440 ? time : parsedFirstInterval.value * parsedIntervalMinutes.value;
	});
	const bodyHeight = computed$78(() => {
		return parsedIntervalCount.value * parsedIntervalHeight.value;
	});
	const days = computed$78(() => {
		return createDayList(base.parsedStart.value, base.parsedEnd.value, base.times.today, base.weekdaySkips.value, props.maxDays);
	});
	const intervals = computed$78(() => {
		const daysValue = days.value;
		const first = firstMinute.value;
		const minutes = parsedIntervalMinutes.value;
		const count = parsedIntervalCount.value;
		const now = base.times.now;
		return daysValue.map((d) => createIntervalList(d, first, minutes, count, now));
	});
	const intervalFormatter = computed$78(() => {
		if (props.intervalFormat) return props.intervalFormat;
		return createNativeLocaleFormatter(base.locale.current.value, (tms, short) => !short ? {
			timeZone: "UTC",
			hour: "2-digit",
			minute: "2-digit"
		} : tms.minute === 0 ? {
			timeZone: "UTC",
			hour: "numeric"
		} : {
			timeZone: "UTC",
			hour: "numeric",
			minute: "2-digit"
		});
	});
	function showIntervalLabelDefault(interval) {
		const first = intervals.value[0][0];
		return !(first.hour === interval.hour && first.minute === interval.minute);
	}
	function intervalStyleDefault(_interval) {}
	function getTimestampAtEvent(e, day) {
		const timestamp = copyTimestamp(day);
		const bounds = e.currentTarget.getBoundingClientRect();
		const baseMinutes = firstMinute.value;
		const touchEvent = e;
		const mouseEvent = e;
		const touches = touchEvent.changedTouches || touchEvent.touches;
		const addIntervals = ((touches && touches[0] ? touches[0].clientY : mouseEvent.clientY) - bounds.top) / parsedIntervalHeight.value;
		return updateMinutes(timestamp, baseMinutes + Math.floor(addIntervals * parsedIntervalMinutes.value), base.times.now);
	}
	function getSlotScope(timestamp) {
		const scope = copyTimestamp(timestamp);
		scope.timeToY = timeToY;
		scope.timeDelta = timeDelta;
		scope.minutesToPixels = minutesToPixels;
		scope.week = days.value;
		scope.intervalRange = [firstMinute.value, firstMinute.value + parsedIntervalCount.value * parsedIntervalMinutes.value];
		return scope;
	}
	function scrollToTime(time) {
		const y = timeToY(time);
		const pane = scrollAreaRef.value;
		if (y === false || !pane) return false;
		pane.scrollTop = y;
		return true;
	}
	function minutesToPixels(minutes) {
		return minutes / parsedIntervalMinutes.value * parsedIntervalHeight.value;
	}
	function timeToY(time) {
		let targetDateOrClamp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		const clamp$1 = targetDateOrClamp !== false;
		let y = timeDelta(time, typeof targetDateOrClamp !== "boolean" ? targetDateOrClamp : void 0);
		if (y === false) return y;
		y *= bodyHeight.value;
		if (clamp$1) {
			if (y < 0) y = 0;
			else if (y > bodyHeight.value) y = bodyHeight.value;
		} else if (y < 0) y = y + bodyHeight.value;
		else if (y > bodyHeight.value) y = y - bodyHeight.value;
		return y;
	}
	function timeDelta(time, targetDate) {
		let minutes = parseTime(time);
		if (minutes === false) return false;
		const gap = parsedIntervalCount.value * parsedIntervalMinutes.value;
		if (targetDate && typeof time === "object" && "day" in time) {
			const a = getDayIdentifier(time);
			const b = getDayIdentifier(targetDate);
			minutes += (a - b) * gap;
		}
		const min = firstMinute.value;
		return (minutes - min) / gap;
	}
	return {
		...base,
		scrollAreaRef,
		parsedFirstInterval,
		parsedIntervalMinutes,
		parsedIntervalCount,
		parsedIntervalHeight,
		parsedFirstTime,
		firstMinute,
		bodyHeight,
		days,
		intervals,
		intervalFormatter,
		showIntervalLabelDefault,
		intervalStyleDefault,
		getTimestampAtEvent,
		getSlotScope,
		scrollToTime,
		minutesToPixels,
		timeToY,
		timeDelta
	};
}
function mounted$3(el, binding) {
	const handler = binding.value;
	const options = { passive: !binding.modifiers?.active };
	window.addEventListener("resize", handler, options);
	el._onResize = Object(el._onResize);
	el._onResize[binding.instance.$.uid] = {
		handler,
		options
	};
	if (!binding.modifiers?.quiet) handler();
}
function unmounted$3(el, binding) {
	if (!el._onResize?.[binding.instance.$.uid]) return;
	const { handler, options } = el._onResize[binding.instance.$.uid];
	window.removeEventListener("resize", handler, options);
	delete el._onResize[binding.instance.$.uid];
}
const Resize = {
	mounted: mounted$3,
	unmounted: unmounted$3
};
var resize_default = Resize;
var { createElementVNode: _createElementVNode$77, mergeProps: _mergeProps$53, createVNode: _createVNode$91, normalizeStyle: _normalizeStyle$51, normalizeClass: _normalizeClass$61, withDirectives: _withDirectives$13 } = await importShared("vue");
var { nextTick: nextTick$15, onMounted: onMounted$10, ref: ref$42 } = await importShared("vue");
const VCalendarDaily = defineComponent({
	name: "VCalendarDaily",
	directives: { vResize: resize_default },
	props: {
		color: String,
		shortWeekdays: {
			type: Boolean,
			default: true
		},
		shortIntervals: {
			type: Boolean,
			default: true
		},
		hideHeader: Boolean,
		...makeCalendarBaseProps(),
		...makeCalendarWithIntervalsProps()
	},
	setup(props, _ref) {
		let { slots, attrs } = _ref;
		const scrollPush = ref$42(0);
		const pane = ref$42();
		const base = useCalendarWithIntervals(props);
		function init() {
			nextTick$15(onResize);
		}
		function onResize() {
			scrollPush.value = getScrollPush();
		}
		function getScrollPush() {
			return base.scrollAreaRef.value && pane.value ? base.scrollAreaRef.value.offsetWidth - pane.value.offsetWidth : 0;
		}
		function genHead() {
			return _createElementVNode$77("div", {
				"class": "v-calendar-daily__head",
				"style": { marginRight: scrollPush.value + "px" }
			}, [genHeadIntervals(), genHeadDays()]);
		}
		function genHeadIntervals() {
			const width = convertToUnit(props.intervalWidth);
			return _createElementVNode$77("div", {
				"class": "v-calendar-daily__intervals-head",
				"style": { width }
			}, [slots["interval-header"]?.()]);
		}
		function genHeadDays() {
			return base.days.value.map(genHeadDay);
		}
		function genHeadDay(day, index) {
			const events = getPrefixedEventHandlers(attrs, ":day", (nativeEvent) => ({
				nativeEvent,
				...base.getSlotScope(day)
			}));
			return _createElementVNode$77("div", _mergeProps$53({
				"key": day.date,
				"class": ["v-calendar-daily_head-day", base.getRelativeClasses(day)]
			}, events), [
				genHeadWeekday(day),
				genHeadDayLabel(day),
				genDayHeader(day, index)
			]);
		}
		function genDayHeader(day, index) {
			return slots["day-header"]?.({
				week: base.days.value,
				...day,
				index
			}) ?? [];
		}
		function genHeadWeekday(day) {
			const color = day.present ? props.color : void 0;
			return _createElementVNode$77("div", _mergeProps$53(base.getColorProps({ text: color }), { "class": "v-calendar-daily_head-weekday" }), [base.weekdayFormatter.value(day, props.shortWeekdays)]);
		}
		function genHeadDayLabel(day) {
			return _createElementVNode$77("div", { "class": "v-calendar-daily_head-day-label" }, [slots["day-label-header"]?.(day) ?? genHeadDayButton(day)]);
		}
		function genHeadDayButton(day) {
			const events = getPrefixedEventHandlers(attrs, ":date", (nativeEvent) => ({
				nativeEvent,
				...day
			}));
			return _createVNode$91(VIconBtn, _mergeProps$53({
				"active": day.present,
				"activeColor": props.color,
				"variant": "outlined",
				"baseVariant": "text",
				"onUpdate:active": noop
			}, events), { default: () => [base.dayFormatter.value(day, false)] });
		}
		function genBody() {
			return _createElementVNode$77("div", { "class": "v-calendar-daily__body" }, [genScrollArea()]);
		}
		function genScrollArea() {
			return _createElementVNode$77("div", {
				"ref": base.scrollAreaRef,
				"class": "v-calendar-daily__scroll-area"
			}, [genPane()]);
		}
		function genPane() {
			return _createElementVNode$77("div", {
				"ref": pane,
				"class": "v-calendar-daily__pane",
				"style": { height: convertToUnit(base.bodyHeight.value) }
			}, [genDayContainer()]);
		}
		function genDayContainer() {
			return _createElementVNode$77("div", { "class": "v-calendar-daily__day-container" }, [genBodyIntervals(), slots.days?.() ?? genDays()]);
		}
		function genDays() {
			return base.days.value.map((day, index) => {
				const events = getPrefixedEventHandlers(attrs, ":time", (nativeEvent) => ({
					nativeEvent,
					...base.getSlotScope(base.getTimestampAtEvent(nativeEvent, day))
				}));
				return _createElementVNode$77("div", _mergeProps$53({
					"key": day.date,
					"class": ["v-calendar-daily__day", base.getRelativeClasses(day)]
				}, events), [genDayIntervals(index), genDayBody(day)]);
			});
		}
		function genDayBody(day) {
			return slots["day-body"]?.(base.getSlotScope(day)) ?? [];
		}
		function genDayIntervals(index) {
			return base.intervals.value[index].map(genDayInterval);
		}
		function genDayInterval(interval) {
			const height = convertToUnit(props.intervalHeight);
			const styler = props.intervalStyle || base.intervalStyleDefault;
			return _createElementVNode$77("div", {
				"class": "v-calendar-daily__day-interval",
				"key": interval.time,
				"style": _normalizeStyle$51([{ height }, styler(interval)])
			}, [slots.interval?.(base.getSlotScope(interval))]);
		}
		function genBodyIntervals() {
			const width = convertToUnit(props.intervalWidth);
			const events = getPrefixedEventHandlers(attrs, ":interval", (nativeEvent) => ({
				nativeEvent,
				...base.getTimestampAtEvent(nativeEvent, base.parsedStart.value)
			}));
			return _createElementVNode$77("div", _mergeProps$53({
				"class": "v-calendar-daily__intervals-body",
				"style": { width }
			}, events), [genIntervalLabels()]);
		}
		function genIntervalLabels() {
			if (!base.intervals.value.length) return null;
			return base.intervals.value[0].map(genIntervalLabel);
		}
		function genIntervalLabel(interval) {
			const height = convertToUnit(props.intervalHeight);
			const short = props.shortIntervals;
			const label = (props.showIntervalLabel || base.showIntervalLabelDefault)(interval) ? base.intervalFormatter.value(interval, short) : void 0;
			return _createElementVNode$77("div", {
				"key": interval.time,
				"class": "v-calendar-daily__interval",
				"style": { height }
			}, [_createElementVNode$77("div", { "class": "v-calendar-daily__interval-text" }, [label])]);
		}
		onMounted$10(init);
		useRender(() => _withDirectives$13(_createElementVNode$77("div", {
			"class": _normalizeClass$61(["v-calendar-daily", attrs.class]),
			"onDragstart": (e) => e.preventDefault()
		}, [!props.hideHeader ? genHead() : void 0, genBody()]), [[
			resize_default,
			onResize,
			void 0,
			{ quiet: true }
		]]));
		return {
			...base,
			scrollPush,
			pane,
			init,
			onResize,
			getScrollPush
		};
	}
});
function parsedCategoryText(category, categoryText) {
	return typeof categoryText === "function" ? categoryText(category) : typeof categoryText === "string" && typeof category === "object" && category ? category[categoryText] : typeof category === "string" ? category : "";
}
function getParsedCategories(categories, categoryText) {
	if (typeof categories === "string") return categories.split(/\s*,\s/);
	if (Array.isArray(categories)) return categories.map((category) => {
		if (typeof category === "string") return category;
		const categoryName = typeof category.categoryName === "string" ? category.categoryName : parsedCategoryText(category, categoryText);
		return {
			...category,
			categoryName
		};
	});
	return [];
}
var { createElementVNode: _createElementVNode$76, mergeProps: _mergeProps$52, normalizeStyle: _normalizeStyle$50, createVNode: _createVNode$90 } = await importShared("vue");
var { computed: computed$77 } = await importShared("vue");
const VCalendarCategory = defineComponent({
	name: "VCalendarCategory",
	props: {
		categories: {
			type: [Array, String],
			default: ""
		},
		categoryText: [String, Function],
		categoryForInvalid: {
			type: String,
			default: ""
		},
		...makeCalendarBaseProps(),
		...makeCalendarWithIntervalsProps()
	},
	setup(props, _ref) {
		let { slots, attrs } = _ref;
		const base = useCalendarWithIntervals(props);
		const parsedCategories = computed$77(() => {
			return getParsedCategories(props.categories, props.categoryText);
		});
		function getCategoryScope(scope, category) {
			const cat = typeof category === "object" && category && category.categoryName === props.categoryForInvalid ? null : category;
			return {
				...scope,
				category: cat
			};
		}
		function genDayHeader(scope) {
			return _createElementVNode$76("div", { "class": "v-calendar-category__columns" }, [parsedCategories.value.map((category) => {
				return genDayHeaderCategory(scope, getCategoryScope(scope, category));
			})]);
		}
		function genDayHeaderCategory(day, scope) {
			const headerTitle = typeof scope.category === "object" ? scope.category.categoryName : scope.category;
			const events = getPrefixedEventHandlers(attrs, ":dayCategory", () => {
				return getCategoryScope(base.getSlotScope(day) || day, scope.category);
			});
			return _createElementVNode$76("div", _mergeProps$52({ "class": "v-calendar-category__column-header" }, events), [slots.category?.(scope) ?? genDayHeaderCategoryTitle(headerTitle), slots["day-header"]?.(scope)]);
		}
		function genDayHeaderCategoryTitle(categoryName) {
			return _createElementVNode$76("div", { "class": "v-calendar-category__category" }, [categoryName === null ? props.categoryForInvalid : categoryName]);
		}
		function genDays() {
			const days = [];
			base.days.value.forEach((d, j) => {
				const day = new Array(parsedCategories.value.length || 1);
				day.fill(d);
				days.push(...day.map((v, i) => genDay(v, j, i)));
			});
			return days;
		}
		function genDay(day, index, categoryIndex) {
			const category = parsedCategories.value[categoryIndex];
			const events = getPrefixedEventHandlers(attrs, ":time", (e) => {
				return base.getSlotScope(base.getTimestampAtEvent(e, day));
			});
			return _createElementVNode$76("div", _mergeProps$52({
				"key": day.date + "-" + categoryIndex,
				"class": ["v-calendar-daily__day", base.getRelativeClasses(day)]
			}, events), [genDayIntervals(index, category), genDayBody(day, category)]);
		}
		function genDayIntervals(index, category) {
			return base.intervals.value[index].map((v) => genDayInterval(v, category));
		}
		function genDayInterval(interval, category) {
			const height = convertToUnit(props.intervalHeight);
			const styler = props.intervalStyle || base.intervalStyleDefault;
			return _createElementVNode$76("div", {
				"key": interval.time,
				"class": "v-calendar-daily__day-interval",
				"style": _normalizeStyle$50([{ height }, styler({
					...interval,
					category
				})])
			}, [slots.interval?.(getCategoryScope(base.getSlotScope(interval), category))]);
		}
		function genDayBody(day, category) {
			return _createElementVNode$76("div", { "class": "v-calendar-category__columns" }, [genDayBodyCategory(day, category)]);
		}
		function genDayBodyCategory(day, category) {
			const events = getPrefixedEventHandlers(attrs, ":timeCategory", (e) => {
				return getCategoryScope(base.getSlotScope(base.getTimestampAtEvent(e, day)), category);
			});
			return _createElementVNode$76("div", _mergeProps$52({ "class": "v-calendar-category__column" }, events), [slots["day-body"]?.(getCategoryScope(base.getSlotScope(day), category))]);
		}
		useRender(() => _createVNode$90(VCalendarDaily, _mergeProps$52({ "class": ["v-calendar-daily", "v-calendar-category"] }, props), {
			...slots,
			days: genDays,
			"day-header": genDayHeader
		}));
		return {
			...base,
			parsedCategories
		};
	}
});
var { createElementVNode: _createElementVNode$75, mergeProps: _mergeProps$51, createVNode: _createVNode$89, normalizeClass: _normalizeClass$60 } = await importShared("vue");
var { computed: computed$76 } = await importShared("vue");
const VCalendarWeekly = defineComponent({
	name: "VCalendarWeekly",
	props: {
		minWeeks: {
			validate: validateNumber,
			default: 1
		},
		monthFormat: Function,
		showWeek: Boolean,
		color: String,
		shortWeekdays: {
			type: Boolean,
			default: true
		},
		showMonthOnFirst: {
			type: Boolean,
			default: true
		},
		shortMonths: {
			type: Boolean,
			default: true
		},
		hideHeader: Boolean,
		...makeCalendarBaseProps()
	},
	setup(props, _ref) {
		let { slots, attrs } = _ref;
		const base = useCalendarBase(props);
		const theme = useTheme();
		const parsedMinWeeks = computed$76(() => {
			return parseInt(String(props.minWeeks));
		});
		const days = computed$76(() => {
			const minDays = parsedMinWeeks.value * base.parsedWeekdays.value.length;
			return createDayList(base.getStartOfWeek(base.parsedStart.value), base.getEndOfWeek(base.parsedEnd.value), base.times.today, base.weekdaySkips.value, Number.MAX_SAFE_INTEGER, minDays);
		});
		const todayWeek = computed$76(() => {
			const today = base.times.today;
			return createDayList(base.getStartOfWeek(today), base.getEndOfWeek(today), today, base.weekdaySkips.value, base.parsedWeekdays.value.length, base.parsedWeekdays.value.length);
		});
		const monthFormatter = computed$76(() => {
			if (props.monthFormat) return props.monthFormat;
			return createNativeLocaleFormatter(base.locale.current.value, (_tms, short) => ({
				timeZone: "UTC",
				month: short ? "short" : "long"
			}));
		});
		function isOutside(day) {
			const dayIdentifier = getDayIdentifier(day);
			return dayIdentifier < getDayIdentifier(base.parsedStart.value) || dayIdentifier > getDayIdentifier(base.parsedEnd.value);
		}
		function genHead() {
			return _createElementVNode$75("div", {
				"class": "v-calendar-weekly__head",
				"role": "row"
			}, [genHeadDays()]);
		}
		function genHeadDays() {
			const header = todayWeek.value.map(genHeadDay);
			if (props.showWeek) header.unshift(_createElementVNode$75("div", { "class": "v-calendar-weekly__head-weeknumber" }, null));
			return header;
		}
		function genHeadDay(day, index) {
			const outside = isOutside(days.value[index]);
			const color = day.present ? props.color : void 0;
			return _createElementVNode$75("div", _mergeProps$51(base.getColorProps({ text: color }), {
				"key": day.date,
				"class": ["v-calendar-weekly__head-weekday", base.getRelativeClasses(day, outside)],
				"role": "columnheader"
			}), [base.weekdayFormatter.value(day, props.shortWeekdays)]);
		}
		function genWeeks() {
			const daysValue = days.value;
			const weekDays = base.parsedWeekdays.value.length;
			const weeks = [];
			for (let i = 0; i < daysValue.length; i += weekDays) weeks.push(genWeek(daysValue.slice(i, i + weekDays), getWeekNumber(daysValue[i])));
			return weeks;
		}
		function genWeek(week, weekNumber) {
			const weekNodes = week.map((day, index) => genDay(day, index, week));
			if (props.showWeek) weekNodes.unshift(genWeekNumber(weekNumber));
			return _createElementVNode$75("div", {
				"key": week[0].date,
				"class": "v-calendar-weekly__week",
				"role": "row"
			}, [weekNodes]);
		}
		function getWeekNumber(determineDay) {
			return base.getWeekNumber(determineDay);
		}
		function genWeekNumber(weekNumber) {
			return _createElementVNode$75("div", { "class": "v-calendar-weekly__weeknumber" }, [_createElementVNode$75("small", null, [String(weekNumber)])]);
		}
		function genDay(day, index, week) {
			const outside = isOutside(day);
			const events = getPrefixedEventHandlers(attrs, ":day", (nativeEvent) => {
				return {
					nativeEvent,
					...day
				};
			});
			return _createElementVNode$75("div", _mergeProps$51({
				"key": day.date,
				"class": ["v-calendar-weekly__day", base.getRelativeClasses(day, outside)],
				"role": "cell"
			}, events), [genDayLabel(day), slots.day?.({
				outside,
				index,
				week,
				...day
			})]);
		}
		function genDayLabel(day) {
			return _createElementVNode$75("div", { "class": "v-calendar-weekly__day-label" }, [slots["day-label"]?.(day) ?? genDayLabelButton(day)]);
		}
		function genDayLabelButton(day) {
			const hasMonth = day.day === 1 && props.showMonthOnFirst;
			const events = getPrefixedEventHandlers(attrs, ":date", (nativeEvent) => ({
				nativeEvent,
				...day
			}));
			return _createVNode$89(VIconBtn, _mergeProps$51({
				"active": day.present,
				"activeColor": props.color,
				"variant": "outlined",
				"baseVariant": "text",
				"onUpdate:active": noop
			}, events), { default: () => [hasMonth ? monthFormatter.value(day, props.shortMonths) + " " + base.dayFormatter.value(day, false) : base.dayFormatter.value(day, false)] });
		}
		useRender(() => _createElementVNode$75("div", {
			"class": _normalizeClass$60(["v-calendar-weekly", theme.themeClasses.value]),
			"onDragstart": (e) => e.preventDefault()
		}, [!props.hideHeader ? genHead() : void 0, genWeeks()]));
		return {
			...base,
			days,
			todayWeek,
			monthFormatter,
			isOutside
		};
	}
});
var MILLIS_IN_DAY = 864e5;
function getVisuals(events) {
	let minStart = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	const visuals = events.map((event) => ({
		event,
		columnCount: 0,
		column: 0,
		left: 0,
		width: 100
	}));
	visuals.sort((a, b) => {
		return Math.max(minStart, a.event.startTimestampIdentifier) - Math.max(minStart, b.event.startTimestampIdentifier) || b.event.endTimestampIdentifier - a.event.endTimestampIdentifier;
	});
	return visuals;
}
function hasOverlap(s0, e0, s1, e1) {
	return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(s0 >= e1 || e0 <= s1) : !(s0 > e1 || e0 < s1);
}
function setColumnCount(groups) {
	groups.forEach((group) => {
		group.visuals.forEach((groupVisual) => {
			groupVisual.columnCount = groups.length;
		});
	});
}
function getRange(event) {
	return [event.startTimestampIdentifier, event.endTimestampIdentifier];
}
function getDayRange(event) {
	return [event.startIdentifier, event.endIdentifier];
}
function getNormalizedRange(event, dayStart) {
	return [Math.max(dayStart, event.startTimestampIdentifier), Math.min(dayStart + MILLIS_IN_DAY, event.endTimestampIdentifier)];
}
function getOpenGroup(groups, start, end, timed) {
	for (let i = 0; i < groups.length; i++) {
		const group = groups[i];
		let intersected = false;
		if (hasOverlap(start, end, group.start, group.end, timed)) for (let k = 0; k < group.visuals.length; k++) {
			const groupVisual = group.visuals[k];
			const [groupStart, groupEnd] = timed ? getRange(groupVisual.event) : getDayRange(groupVisual.event);
			if (hasOverlap(start, end, groupStart, groupEnd, timed)) {
				intersected = true;
				break;
			}
		}
		if (!intersected) return i;
	}
	return -1;
}
function getOverlapGroupHandler(firstWeekday) {
	const handler = {
		groups: [],
		min: -1,
		max: -1,
		reset: () => {
			handler.groups = [];
			handler.min = handler.max = -1;
		},
		getVisuals: function(day, dayEvents, timed) {
			let reset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
			if (day.weekday === firstWeekday || reset) handler.reset();
			const visuals = getVisuals(dayEvents, getTimestampIdentifier(day));
			visuals.forEach((visual) => {
				const [start, end] = timed ? getRange(visual.event) : getDayRange(visual.event);
				if (handler.groups.length > 0 && !hasOverlap(start, end, handler.min, handler.max, timed)) {
					setColumnCount(handler.groups);
					handler.reset();
				}
				let targetGroup = getOpenGroup(handler.groups, start, end, timed);
				if (targetGroup === -1) {
					targetGroup = handler.groups.length;
					handler.groups.push({
						start,
						end,
						visuals: []
					});
				}
				const target = handler.groups[targetGroup];
				target.visuals.push(visual);
				target.start = Math.min(target.start, start);
				target.end = Math.max(target.end, end);
				visual.column = targetGroup;
				if (handler.min === -1) {
					handler.min = start;
					handler.max = end;
				} else {
					handler.min = Math.min(handler.min, start);
					handler.max = Math.max(handler.max, end);
				}
			});
			setColumnCount(handler.groups);
			if (timed) handler.reset();
			return visuals;
		}
	};
	return handler;
}
var FULL_WIDTH$1 = 100;
const column = (events, firstWeekday, overlapThreshold) => {
	const handler = getOverlapGroupHandler(firstWeekday);
	return (day, dayEvents, timed, reset) => {
		const visuals = handler.getVisuals(day, dayEvents, timed, reset);
		if (timed) visuals.forEach((visual) => {
			visual.left = visual.column * FULL_WIDTH$1 / visual.columnCount;
			visual.width = FULL_WIDTH$1 / visual.columnCount;
		});
		return visuals;
	};
};
var FULL_WIDTH = 100;
var DEFAULT_OFFSET = 5;
var WIDTH_MULTIPLIER = 1.7;
const stack = (events, firstWeekday, overlapThreshold) => {
	const handler = getOverlapGroupHandler(firstWeekday);
	return (day, dayEvents, timed, reset) => {
		if (!timed) return handler.getVisuals(day, dayEvents, timed, reset);
		const dayStart = getTimestampIdentifier(day);
		const visuals = getVisuals(dayEvents, dayStart);
		const groups = getGroups(visuals, dayStart);
		for (const group of groups) {
			const nodes = [];
			for (const visual of group.visuals) {
				const child = getNode(visual, dayStart);
				const index = getNextIndex(child, nodes);
				if (index === false) {
					const parent = getParent(child, nodes);
					if (parent) {
						child.parent = parent;
						child.sibling = hasOverlap(child.start, child.end, parent.start, addTime(parent.start, overlapThreshold));
						child.index = parent.index + 1;
						parent.children.push(child);
					}
				} else {
					const [parent] = getOverlappingRange(child, nodes, index - 1, index - 1);
					const children = getOverlappingRange(child, nodes, index + 1, index + nodes.length, true);
					child.children = children;
					child.index = index;
					if (parent) {
						child.parent = parent;
						child.sibling = hasOverlap(child.start, child.end, parent.start, addTime(parent.start, overlapThreshold));
						parent.children.push(child);
					}
					for (const grand of children) {
						if (grand.parent === parent) grand.parent = child;
						if (grand.index - child.index <= 1 && child.sibling && hasOverlap(child.start, addTime(child.start, overlapThreshold), grand.start, grand.end)) grand.sibling = true;
					}
				}
				nodes.push(child);
			}
			calculateBounds(nodes, overlapThreshold);
		}
		visuals.sort((a, b) => a.left - b.left || a.event.startTimestampIdentifier - b.event.startTimestampIdentifier);
		return visuals;
	};
};
function calculateBounds(nodes, overlapThreshold) {
	for (const node of nodes) {
		const { visual, parent } = node;
		const columns = getMaxChildIndex(node) + 1;
		const spaceLeft = parent ? parent.visual.left : 0;
		const spaceWidth = FULL_WIDTH - spaceLeft;
		const offset = Math.min(DEFAULT_OFFSET, FULL_WIDTH / columns);
		const columnWidthMultiplier = getColumnWidthMultiplier(node, nodes);
		const columnOffset = spaceWidth / (columns - node.index + 1);
		const columnWidth = spaceWidth / (columns - node.index + (node.sibling ? 1 : 0)) * columnWidthMultiplier;
		if (parent) visual.left = node.sibling ? spaceLeft + columnOffset : spaceLeft + offset;
		visual.width = hasFullWidth(node, nodes, overlapThreshold) ? FULL_WIDTH - visual.left : Math.min(FULL_WIDTH - visual.left, columnWidth * WIDTH_MULTIPLIER);
	}
}
function getColumnWidthMultiplier(node, nodes) {
	if (!node.children.length) return 1;
	const maxColumn = node.index + nodes.length;
	return node.children.reduce((min, c) => Math.min(min, c.index), maxColumn) - node.index;
}
function getOverlappingIndices(node, nodes) {
	const indices = [];
	for (const other of nodes) if (hasOverlap(node.start, node.end, other.start, other.end)) indices.push(other.index);
	return indices;
}
function getNextIndex(node, nodes) {
	const indices = getOverlappingIndices(node, nodes);
	indices.sort();
	for (let i = 0; i < indices.length; i++) if (i < indices[i]) return i;
	return false;
}
function getOverlappingRange(node, nodes, indexMin, indexMax) {
	let returnFirstColumn = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
	const overlapping = [];
	for (const other of nodes) if (other.index >= indexMin && other.index <= indexMax && hasOverlap(node.start, node.end, other.start, other.end)) overlapping.push(other);
	if (returnFirstColumn && overlapping.length > 0) {
		const first = overlapping.reduce((min, n) => Math.min(min, n.index), overlapping[0].index);
		return overlapping.filter((n) => n.index === first);
	}
	return overlapping;
}
function getParent(node, nodes) {
	let parent = null;
	for (const other of nodes) if (hasOverlap(node.start, node.end, other.start, other.end) && (parent === null || other.index > parent.index)) parent = other;
	return parent;
}
function hasFullWidth(node, nodes, overlapThreshold) {
	for (const other of nodes) if (other !== node && other.index > node.index && hasOverlap(node.start, addTime(node.start, overlapThreshold), other.start, other.end)) return false;
	return true;
}
function getGroups(visuals, dayStart) {
	const groups = [];
	for (const visual of visuals) {
		const [start, end] = getNormalizedRange(visual.event, dayStart);
		let added = false;
		for (const group of groups) if (hasOverlap(start, end, group.start, group.end)) {
			group.visuals.push(visual);
			group.end = Math.max(group.end, end);
			added = true;
			break;
		}
		if (!added) groups.push({
			start,
			end,
			visuals: [visual]
		});
	}
	return groups;
}
function getNode(visual, dayStart) {
	const [start, end] = getNormalizedRange(visual.event, dayStart);
	return {
		parent: null,
		sibling: true,
		index: 0,
		visual,
		start,
		end,
		children: []
	};
}
function getMaxChildIndex(node) {
	let max = node.index;
	for (const child of node.children) {
		const childMax = getMaxChildIndex(child);
		if (childMax > max) max = childMax;
	}
	return max;
}
function addTime(identifier, minutes) {
	const removeMinutes = identifier % 100;
	const totalMinutes = removeMinutes + minutes;
	const addHours = Math.floor(totalMinutes / 60);
	const addMinutes = totalMinutes % 60;
	return identifier - removeMinutes + addHours * 100 + addMinutes;
}
const CalendarEventOverlapModes = {
	stack,
	column
};
function parseEvent(input, index, startProperty, endProperty) {
	let timed = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
	let category = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
	const startInput = input[startProperty];
	const endInput = input[endProperty];
	const startParsed = parseTimestamp(startInput, true);
	const endParsed = endInput ? parseTimestamp(endInput, true) : startParsed;
	const start = isTimedless(startInput) ? updateHasTime(startParsed, timed) : startParsed;
	const end = isTimedless(endInput) ? updateHasTime(endParsed, timed) : endParsed;
	const startIdentifier = getDayIdentifier(start);
	const startTimestampIdentifier = getTimestampIdentifier(start);
	const endIdentifier = getDayIdentifier(end);
	const endOffset = start.hasTime ? 0 : 2359;
	return {
		input,
		start,
		startIdentifier,
		startTimestampIdentifier,
		end,
		endIdentifier,
		endTimestampIdentifier: getTimestampIdentifier(end) + endOffset,
		allDay: !start.hasTime,
		index,
		category
	};
}
function isEventOn(event, dayIdentifier) {
	return dayIdentifier >= event.startIdentifier && dayIdentifier <= event.endIdentifier;
}
function isEventOnDay(event, day, inRange) {
	if (inRange) {
		const dayStart = nextMinutes(copyTimestamp(day), inRange[0]);
		const dayEnd = nextMinutes(copyTimestamp(day), inRange[1]);
		const starts = event.startTimestampIdentifier < getTimestampIdentifier(dayEnd);
		const ends = event.endTimestampIdentifier > getTimestampIdentifier(dayStart);
		return starts && ends;
	}
	return isEventOn(event, getDayIdentifier(day));
}
function isEventHiddenOn(event, day) {
	return event.end.time === "00:00" && event.end.date === day.date && event.start.date !== day.date;
}
function isEventStart(event, day, dayIdentifier, firstWeekday) {
	return dayIdentifier === event.startIdentifier || firstWeekday === day.weekday && isEventOn(event, dayIdentifier);
}
function isEventOverlapping(event, startIdentifier, endIdentifier) {
	return startIdentifier <= event.endIdentifier && endIdentifier >= event.startIdentifier;
}
var { createElementVNode: _createElementVNode$74, createTextVNode: _createTextVNode$7, mergeProps: _mergeProps$50, withDirectives: _withDirectives$12 } = await importShared("vue");
var { computed: computed$75, ref: ref$41 } = await importShared("vue");
var WIDTH_FULL = 100;
var WIDTH_START = 95;
const makeCalendarWithEventsProps = propsFactory({
	events: {
		type: Array,
		default: () => []
	},
	eventStart: {
		type: String,
		default: "start"
	},
	eventEnd: {
		type: String,
		default: "end"
	},
	eventTimed: {
		type: [String, Function],
		default: "timed"
	},
	eventCategory: {
		type: [String, Function],
		default: "category"
	},
	eventHeight: {
		type: Number,
		default: 20
	},
	eventColor: {
		type: [String, Function],
		default: "primary"
	},
	eventTextColor: { type: [String, Function] },
	eventName: {
		type: [String, Function],
		default: "name"
	},
	eventOverlapThreshold: {
		type: [String, Number],
		default: 60
	},
	eventOverlapMode: {
		type: [String, Function],
		default: "stack",
		validate: (mode) => mode in CalendarEventOverlapModes || typeof mode === "function"
	},
	eventMore: {
		type: Boolean,
		default: true
	},
	eventMoreText: {
		type: String,
		default: "$vuetify.calendar.moreEvents"
	},
	eventRipple: {
		type: [Boolean, Object],
		default: null
	},
	eventMarginBottom: {
		type: Number,
		default: 1
	}
}, "VCalendar-events");
function useCalendarWithEvents(props, slots, attrs) {
	const base = useCalendarBase(props);
	const noEvents = computed$75(() => {
		return !Array.isArray(props.events) || props.events.length === 0;
	});
	const categoryMode = computed$75(() => {
		return props.type === "category";
	});
	const eventTimedFunction = computed$75(() => {
		return typeof props.eventTimed === "function" ? props.eventTimed : (event) => !!event[props.eventTimed];
	});
	const eventCategoryFunction = computed$75(() => {
		return typeof props.eventCategory === "function" ? props.eventCategory : (event) => event[props.eventCategory];
	});
	const parsedEvents = computed$75(() => {
		if (!props.events) return [];
		return props.events.map((event, index) => parseEvent(event, index, props.eventStart || "", props.eventEnd || "", eventTimedFunction.value(event), categoryMode.value ? eventCategoryFunction.value(event) : false));
	});
	const parsedEventOverlapThreshold = computed$75(() => {
		return parseInt(String(props.eventOverlapThreshold || 0));
	});
	const eventTextColorFunction = computed$75(() => {
		return typeof props.eventTextColor === "function" ? props.eventTextColor : () => props.eventTextColor;
	});
	const eventNameFunction = computed$75(() => {
		return typeof props.eventName === "function" ? props.eventName : (event, timedEvent) => event.input[props.eventName] || "";
	});
	const eventModeFunction = computed$75(() => {
		return typeof props.eventOverlapMode === "function" ? props.eventOverlapMode : CalendarEventOverlapModes[props.eventOverlapMode];
	});
	const eventWeekdays = computed$75(() => {
		return base.effectiveWeekdays.value;
	});
	function eventColorFunction(e) {
		return typeof props.eventColor === "function" ? props.eventColor(e) : e.color || props.eventColor;
	}
	const eventsRef = ref$41([]);
	function updateEventVisibility() {
		if (noEvents.value || !props.eventMore) return;
		const eventHeight = props.eventHeight || 0;
		const eventsMap = getEventsMap();
		for (const date in eventsMap) {
			const { parent, events, more } = eventsMap[date];
			if (!more) break;
			const parentBounds = parent.getBoundingClientRect();
			const last = events.length - 1;
			const eventsSorted = events.map((event) => ({
				event,
				bottom: event.getBoundingClientRect().bottom
			})).sort((a, b) => a.bottom - b.bottom);
			let hidden = 0;
			for (let i = 0; i <= last; i++) {
				const bottom = eventsSorted[i].bottom;
				if (i === last ? bottom > parentBounds.bottom : bottom + eventHeight > parentBounds.bottom) {
					eventsSorted[i].event.style.display = "none";
					hidden++;
				}
			}
			if (hidden) {
				more.style.display = "";
				more.innerHTML = base.locale.t(props.eventMoreText, hidden);
			} else more.style.display = "none";
		}
	}
	function getEventsMap() {
		const eventsMap = {};
		const elements = eventsRef.value;
		if (!elements || !elements.length) return eventsMap;
		elements.forEach((el) => {
			const date = el.getAttribute("data-date");
			if (el.parentElement && date) {
				if (!(date in eventsMap)) eventsMap[date] = {
					parent: el.parentElement,
					more: null,
					events: []
				};
				if (el.getAttribute("data-more")) eventsMap[date].more = el;
				else {
					eventsMap[date].events.push(el);
					el.style.display = "";
				}
			}
		});
		return eventsMap;
	}
	function genDayEvent(_ref, day) {
		let { event } = _ref;
		const eventHeight = props.eventHeight || 0;
		const eventMarginBottom = props.eventMarginBottom || 0;
		const dayIdentifier = getDayIdentifier(day);
		const week = day.week;
		const start = dayIdentifier === event.startIdentifier;
		let end = dayIdentifier === event.endIdentifier;
		let width = WIDTH_START;
		if (!categoryMode.value) for (let i = day.index + 1; i < week.length; i++) {
			const weekdayIdentifier = getDayIdentifier(week[i]);
			if (event.endIdentifier >= weekdayIdentifier) {
				width += WIDTH_FULL;
				end = end || weekdayIdentifier === event.endIdentifier;
			} else {
				end = true;
				break;
			}
		}
		return genEvent(event, {
			eventParsed: event,
			day,
			start,
			end,
			timed: false
		}, false, {
			class: ["v-event", {
				"v-event-start": start,
				"v-event-end": end
			}],
			style: {
				height: `${eventHeight}px`,
				width: `${width}%`,
				marginBottom: `${eventMarginBottom}px`
			},
			"data-date": day.date
		});
	}
	function genTimedEvent(_ref2, day) {
		let { event, left, width } = _ref2;
		const startDelta = day.timeDelta(event.start, day);
		const endDelta = day.timeDelta(event.end, day);
		if (endDelta === false || startDelta === false || endDelta < 0 || startDelta >= 1 || isEventHiddenOn(event, day)) return false;
		const dayIdentifier = getDayIdentifier(day);
		const start = event.startIdentifier >= dayIdentifier;
		const end = event.endIdentifier > dayIdentifier;
		const top = day.timeToY(event.start, day);
		const bottom = day.timeToY(event.end, day);
		const height = Math.max(props.eventHeight || 0, bottom - top);
		return genEvent(event, {
			eventParsed: event,
			day,
			start,
			end,
			timed: true
		}, true, {
			class: "v-event-timed",
			style: {
				top: `${top}px`,
				height: `${height}px`,
				left: `${left}%`,
				width: `${width}%`
			}
		});
	}
	function genEvent(event, scopeInput, timedEvent, data) {
		const slot = slots.event;
		const text = eventTextColorFunction.value(event.input);
		const background = eventColorFunction(event.input);
		const overlapsNoon = event.start.hour < 12 && event.end.hour >= 12;
		const singline = diffMinutes(event.start, event.end) <= parsedEventOverlapThreshold.value;
		const formatTime = (withTime, ampm) => {
			return base.getFormatter({
				timeZone: "UTC",
				hour: "numeric",
				minute: withTime.minute > 0 ? "numeric" : void 0
			})(withTime, true);
		};
		const timeSummary = () => formatTime(event.start, overlapsNoon) + " - " + formatTime(event.end, true);
		const eventSummary = () => {
			const name = eventNameFunction.value(event, timedEvent);
			if (event.start.hasTime) if (timedEvent) {
				const time = timeSummary();
				const delimiter = singline ? ", " : _createElementVNode$74("br", null, null);
				return _createElementVNode$74("span", { "class": "v-event-summary" }, [
					_createElementVNode$74("strong", null, [name]),
					delimiter,
					time
				]);
			} else {
				const time = formatTime(event.start, true);
				return _createElementVNode$74("span", { "class": "v-event-summary" }, [
					_createElementVNode$74("strong", null, [time]),
					_createTextVNode$7(" "),
					name
				]);
			}
			return _createElementVNode$74("span", { "class": "v-event-summary" }, [name]);
		};
		const scope = {
			...scopeInput,
			event: event.input,
			outside: scopeInput.day.outside,
			singline,
			overlapsNoon,
			formatTime,
			timeSummary,
			eventSummary
		};
		const events = getPrefixedEventHandlers(attrs, ":event", (nativeEvent) => ({
			...scope,
			nativeEvent
		}));
		return _withDirectives$12(_createElementVNode$74("div", _mergeProps$50(base.getColorProps({
			text,
			background
		}), events, data, {
			"ref_for": true,
			"ref": eventsRef
		}), [slot?.(scope) ?? genName(eventSummary)]), [[ripple_default, props.eventRipple ?? true]]);
	}
	function genName(eventSummary) {
		return _createElementVNode$74("div", { "class": "pl-1" }, [eventSummary()]);
	}
	function genPlaceholder(day) {
		const height = (props.eventHeight || 0) + (props.eventMarginBottom || 0);
		return _createElementVNode$74("div", {
			"style": { height: `${height}px` },
			"data-date": day.date,
			"ref_for": true,
			"ref": eventsRef
		}, null);
	}
	function genMore(day) {
		const eventHeight = props.eventHeight || 0;
		const eventMarginBottom = props.eventMarginBottom || 0;
		const events = getPrefixedEventHandlers(attrs, ":more", (nativeEvent) => ({
			nativeEvent,
			...day
		}));
		return _withDirectives$12(_createElementVNode$74("div", _mergeProps$50({
			"class": ["v-event-more pl-1", { "v-outside": day.outside }],
			"data-date": day.date,
			"data-more": "1",
			"style": {
				display: "none",
				height: `${eventHeight}px`,
				marginBottom: `${eventMarginBottom}px`
			},
			"ref_for": true,
			"ref": eventsRef
		}, events), null), [[ripple_default, props.eventRipple ?? true]]);
	}
	function getVisibleEvents() {
		const days = base.days.value;
		const start = getDayIdentifier(days[0]);
		const end = getDayIdentifier(days[days.length - 1]);
		return parsedEvents.value.filter((event) => isEventOverlapping(event, start, end));
	}
	function isEventForCategory(event, category) {
		return !categoryMode.value || typeof category === "object" && category.categoryName && category.categoryName === event.category || typeof event.category === "string" && category === event.category || typeof event.category !== "string" && category === null;
	}
	function getEventsForDay(day) {
		const identifier = getDayIdentifier(day);
		const firstWeekday = eventWeekdays.value[0];
		return parsedEvents.value.filter((event) => isEventStart(event, day, identifier, firstWeekday));
	}
	function getEventsForDayAll(day) {
		const identifier = getDayIdentifier(day);
		const firstWeekday = eventWeekdays.value[0];
		return parsedEvents.value.filter((event) => event.allDay && (categoryMode.value ? isEventOn(event, identifier) : isEventStart(event, day, identifier, firstWeekday)) && isEventForCategory(event, day.category));
	}
	function getEventsForDayTimed(day) {
		return parsedEvents.value.filter((event) => !event.allDay && isEventOnDay(event, day, day.intervalRange) && isEventForCategory(event, day.category));
	}
	function getScopedSlots() {
		if (noEvents.value) return { ...slots };
		const mode = eventModeFunction.value(parsedEvents.value, eventWeekdays.value[0], parsedEventOverlapThreshold.value);
		const isNode = (input) => !!input;
		const getSlotChildren = (day, getter, mapper, timed) => {
			const visuals = mode(day, getter(day), timed, categoryMode.value);
			if (timed) return visuals.map((visual) => mapper(visual, day)).filter(isNode);
			const children = [];
			visuals.forEach((visual, index) => {
				while (children.length < visual.column) children.push(genPlaceholder(day));
				const mapped = mapper(visual, day);
				if (mapped) children.push(mapped);
			});
			return children;
		};
		return {
			...slots,
			day: (day) => {
				let children = getSlotChildren(day, getEventsForDay, genDayEvent, false);
				if (children && children.length > 0 && props.eventMore) children.push(genMore(day));
				if (slots.day) {
					const slot = slots.day(day);
					if (slot) children = children ? children.concat(slot) : slot;
				}
				return children;
			},
			"day-header": (day) => {
				let children = getSlotChildren(day, getEventsForDayAll, genDayEvent, false);
				if (slots["day-header"]) {
					const slot = slots["day-header"](day);
					if (slot) children = children ? children.concat(slot) : slot;
				}
				return children;
			},
			"day-body": (day) => {
				const events = getSlotChildren(day, getEventsForDayTimed, genTimedEvent, true);
				let children = [_createElementVNode$74("div", { "class": "v-event-timed-container" }, [events])];
				if (slots["day-body"]) {
					const slot = slots["day-body"](day);
					if (slot) children = children.concat(slot);
				}
				return children;
			}
		};
	}
	return {
		...base,
		noEvents,
		parsedEvents,
		parsedEventOverlapThreshold,
		eventTimedFunction,
		eventCategoryFunction,
		eventTextColorFunction,
		eventNameFunction,
		eventModeFunction,
		eventWeekdays,
		categoryMode,
		eventColorFunction,
		eventsRef,
		updateEventVisibility,
		getEventsMap,
		genDayEvent,
		genTimedEvent,
		genEvent,
		genName,
		genPlaceholder,
		genMore,
		getVisibleEvents,
		isEventForCategory,
		getEventsForDay,
		getEventsForDayAll,
		getEventsForDayTimed,
		getScopedSlots
	};
}
var { mergeProps: _mergeProps$49, createVNode: _createVNode$88, withDirectives: _withDirectives$11 } = await importShared("vue");
var { computed: computed$74, onMounted: onMounted$9, onUpdated, ref: ref$40, watch: watch$25 } = await importShared("vue");
const VCalendar = genericComponent()({
	name: "VCalendar",
	directives: { vResize: resize_default },
	props: {
		modelValue: {
			type: [
				String,
				Number,
				Date
			],
			validate: validateTimestamp
		},
		categoryDays: {
			type: [Number, String],
			default: 1,
			validate: (x) => isFinite(parseInt(x)) && parseInt(x) > 0
		},
		categories: {
			type: [Array, String],
			default: ""
		},
		categoryText: { type: [String, Function] },
		maxDays: {
			type: Number,
			default: 7
		},
		categoryHideDynamic: { type: Boolean },
		categoryShowAll: { type: Boolean },
		categoryForInvalid: {
			type: String,
			default: ""
		},
		...makeCalendarBaseProps(),
		...makeCalendarWithEventsProps()
	},
	setup(props, _ref) {
		let { slots, attrs, emit } = _ref;
		const root = ref$40();
		const base = useCalendarWithEvents(props, slots, attrs);
		const lastStart = ref$40(null);
		const lastEnd = ref$40(null);
		const parsedCategoryDays = computed$74(() => {
			return parseInt(String(props.categoryDays)) || 1;
		});
		const parsedCategories = computed$74(() => {
			return getParsedCategories(props.categories, props.categoryText);
		});
		const renderProps = computed$74(() => {
			const around = base.parsedValue.value;
			let component = null;
			let maxDays = props.maxDays;
			let categories = parsedCategories.value;
			let start = around;
			let end = around;
			switch (props.type) {
				case "month":
					component = VCalendarWeekly;
					start = getStartOfMonth(around);
					end = getEndOfMonth(around);
					break;
				case "week":
					component = VCalendarDaily;
					start = base.getStartOfWeek(around);
					end = base.getEndOfWeek(around);
					maxDays = 7;
					break;
				case "day":
					component = VCalendarDaily;
					maxDays = 1;
					break;
				case "4day":
					component = VCalendarDaily;
					end = relativeDays(copyTimestamp(end), nextDay, 3);
					updateFormatted(end);
					maxDays = 4;
					break;
				case "custom-weekly":
					component = VCalendarWeekly;
					start = base.parsedStart.value || around;
					end = base.parsedEnd.value;
					break;
				case "custom-daily":
					component = VCalendarDaily;
					start = base.parsedStart.value || around;
					end = base.parsedEnd.value;
					break;
				case "category":
					const days = parsedCategoryDays.value;
					component = VCalendarCategory;
					end = relativeDays(copyTimestamp(end), nextDay, days);
					updateFormatted(end);
					maxDays = days;
					categories = getCategoryList(categories);
					break;
				default:
					const type = props.type;
					throw new Error(`${type} is not a valid Calendar type`);
			}
			return {
				component,
				start,
				end,
				maxDays,
				categories
			};
		});
		const eventWeekdays = computed$74(() => {
			return base.effectiveWeekdays.value;
		});
		const categoryMode = computed$74(() => {
			return props.type === "category";
		});
		const monthLongFormatter = computed$74(() => {
			return base.getFormatter({
				timeZone: "UTC",
				month: "long"
			});
		});
		const monthShortFormatter = computed$74(() => {
			return base.getFormatter({
				timeZone: "UTC",
				month: "short"
			});
		});
		const title = computed$74(() => {
			const { start, end } = renderProps.value;
			const spanYears = start.year !== end.year;
			const spanMonths = spanYears || start.month !== end.month;
			if (spanYears) return monthShortFormatter.value(start, true) + " " + start.year + " - " + monthShortFormatter.value(end, true) + " " + end.year;
			if (spanMonths) return monthShortFormatter.value(start, true) + " - " + monthShortFormatter.value(end, true) + " " + end.year;
			else return monthLongFormatter.value(start, false) + " " + start.year;
		});
		function checkChange() {
			const { start, end } = renderProps.value;
			if (!lastStart.value || !lastEnd.value || start.date !== lastStart.value.date || end.date !== lastEnd.value.date) {
				lastStart.value = start;
				lastEnd.value = end;
				emit("change", {
					start,
					end
				});
			}
		}
		function move() {
			let amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
			const moved = copyTimestamp(base.parsedValue.value);
			const forward = amount > 0;
			const mover = forward ? nextDay : prevDay;
			const limit = forward ? 31 : 1;
			let times = forward ? amount : -amount;
			while (--times >= 0) switch (props.type) {
				case "month":
					moved.day = limit;
					mover(moved);
					break;
				case "week":
					relativeDays(moved, mover, 7);
					break;
				case "day":
					relativeDays(moved, mover, 1);
					break;
				case "4day":
					relativeDays(moved, mover, 4);
					break;
				case "category":
					relativeDays(moved, mover, parsedCategoryDays.value);
					break;
			}
			updateWeekday(moved);
			updateFormatted(moved);
			updateRelative(moved, base.times.now);
			if (props.modelValue instanceof Date) emit("update:modelValue", timestampToDate(moved));
			else if (typeof props.modelValue === "number") emit("update:modelValue", timestampToDate(moved).getTime());
			else emit("update:modelValue", moved.date);
			emit("moved", moved);
		}
		function next() {
			move(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1);
		}
		function prev() {
			move(-(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1));
		}
		function getCategoryList(categories) {
			if (!base.noEvents.value) {
				const categoryMap = categories.reduce((map, category, index) => {
					if (typeof category === "object" && category.categoryName) map[category.categoryName] = {
						index,
						count: 0
					};
					else if (typeof category === "string") map[category] = {
						index,
						count: 0
					};
					return map;
				}, {});
				if (!props.categoryHideDynamic || !props.categoryShowAll) {
					let categoryLength = categories.length;
					base.parsedEvents.value.forEach((ev) => {
						let category = ev.category;
						if (typeof category !== "string") category = props.categoryForInvalid;
						if (!category) return;
						if (category in categoryMap) categoryMap[category].count++;
						else if (!props.categoryHideDynamic) categoryMap[category] = {
							index: categoryLength++,
							count: 1
						};
					});
				}
				if (!props.categoryShowAll) {
					for (const category in categoryMap) if (categoryMap[category].count === 0) delete categoryMap[category];
				}
				categories = categories.filter((category) => {
					if (typeof category === "object" && category.categoryName) return categoryMap.hasOwnProperty(category.categoryName);
					else if (typeof category === "string") return categoryMap.hasOwnProperty(category);
					return false;
				});
			}
			return categories;
		}
		watch$25(renderProps, checkChange);
		onMounted$9(() => {
			base.updateEventVisibility();
			checkChange();
		});
		onUpdated(() => {
			window.requestAnimationFrame(base.updateEventVisibility);
		});
		useRender(() => {
			const { start, end, maxDays, component: Component, categories } = renderProps.value;
			return _withDirectives$11(_createVNode$88(Component, _mergeProps$49({
				"ref": root,
				"class": ["v-calendar", { "v-calendar-events": !base.noEvents.value }],
				"role": "grid"
			}, Component.filterProps(props), {
				"start": start.date,
				"end": end.date,
				"maxDays": maxDays,
				"weekdays": base.effectiveWeekdays.value,
				"categories": categories,
				"onClick:date": (e, day) => {
					if (attrs["onUpdate:modelValue"]) emit("update:modelValue", day.date);
				}
			}), base.getScopedSlots()), [[
				resize_default,
				base.updateEventVisibility,
				void 0,
				{ quiet: true }
			]]);
		});
		return forwardRefs({
			...base,
			lastStart,
			lastEnd,
			parsedCategoryDays,
			renderProps,
			eventWeekdays,
			categoryMode,
			title,
			monthLongFormatter,
			monthShortFormatter,
			parsedCategories,
			checkChange,
			move,
			next,
			prev,
			getCategoryList
		}, root);
	}
});
var { normalizeClass: _normalizeClass$59, normalizeStyle: _normalizeStyle$49, createVNode: _createVNode$87 } = await importShared("vue");
const makeVCardActionsProps = propsFactory({
	...makeComponentProps(),
	...makeTagProps()
}, "VCardActions");
const VCardActions = genericComponent()({
	name: "VCardActions",
	props: makeVCardActionsProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		provideDefaults({ VBtn: {
			slim: true,
			variant: "text"
		} });
		useRender(() => _createVNode$87(props.tag, {
			"class": _normalizeClass$59(["v-card-actions", props.class]),
			"style": _normalizeStyle$49(props.style)
		}, slots));
		return {};
	}
});
var { normalizeClass: _normalizeClass$58, normalizeStyle: _normalizeStyle$48, createVNode: _createVNode$86 } = await importShared("vue");
const makeVCardSubtitleProps = propsFactory({
	opacity: [Number, String],
	...makeComponentProps(),
	...makeTagProps()
}, "VCardSubtitle");
const VCardSubtitle = genericComponent()({
	name: "VCardSubtitle",
	props: makeVCardSubtitleProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createVNode$86(props.tag, {
			"class": _normalizeClass$58(["v-card-subtitle", props.class]),
			"style": _normalizeStyle$48([{ "--v-card-subtitle-opacity": props.opacity }, props.style])
		}, slots));
		return {};
	}
});
const VCardTitle = createSimpleFunctional("v-card-title");
var { Fragment: _Fragment$32, createVNode: _createVNode$85, createElementVNode: _createElementVNode$73, normalizeClass: _normalizeClass$57, normalizeStyle: _normalizeStyle$47 } = await importShared("vue");
var { toDisplayString: toDisplayString$1 } = await importShared("vue");
const makeCardItemProps = propsFactory({
	appendAvatar: String,
	appendIcon: IconValue,
	prependAvatar: String,
	prependIcon: IconValue,
	subtitle: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	title: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	...makeComponentProps(),
	...makeDensityProps(),
	...makeTagProps()
}, "VCardItem");
const VCardItem = genericComponent()({
	name: "VCardItem",
	props: makeCardItemProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => {
			const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
			const hasPrepend = !!(hasPrependMedia || slots.prepend);
			const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
			const hasAppend = !!(hasAppendMedia || slots.append);
			const hasTitle = !!(props.title != null || slots.title);
			const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
			return _createVNode$85(props.tag, {
				"class": _normalizeClass$57(["v-card-item", props.class]),
				"style": _normalizeStyle$47(props.style)
			}, { default: () => [
				hasPrepend && _createElementVNode$73("div", {
					"key": "prepend",
					"class": "v-card-item__prepend"
				}, [!slots.prepend ? _createElementVNode$73(_Fragment$32, null, [props.prependAvatar && _createVNode$85(VAvatar, {
					"key": "prepend-avatar",
					"density": props.density,
					"image": props.prependAvatar
				}, null), props.prependIcon && _createVNode$85(VIcon, {
					"key": "prepend-icon",
					"density": props.density,
					"icon": props.prependIcon
				}, null)]) : _createVNode$85(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !hasPrependMedia,
					"defaults": {
						VAvatar: {
							density: props.density,
							image: props.prependAvatar
						},
						VIcon: {
							density: props.density,
							icon: props.prependIcon
						}
					}
				}, slots.prepend)]),
				_createElementVNode$73("div", { "class": "v-card-item__content" }, [
					hasTitle && _createVNode$85(VCardTitle, { "key": "title" }, { default: () => [slots.title?.() ?? toDisplayString$1(props.title)] }),
					hasSubtitle && _createVNode$85(VCardSubtitle, { "key": "subtitle" }, { default: () => [slots.subtitle?.() ?? toDisplayString$1(props.subtitle)] }),
					slots.default?.()
				]),
				hasAppend && _createElementVNode$73("div", {
					"key": "append",
					"class": "v-card-item__append"
				}, [!slots.append ? _createElementVNode$73(_Fragment$32, null, [props.appendIcon && _createVNode$85(VIcon, {
					"key": "append-icon",
					"density": props.density,
					"icon": props.appendIcon
				}, null), props.appendAvatar && _createVNode$85(VAvatar, {
					"key": "append-avatar",
					"density": props.density,
					"image": props.appendAvatar
				}, null)]) : _createVNode$85(VDefaultsProvider, {
					"key": "append-defaults",
					"disabled": !hasAppendMedia,
					"defaults": {
						VAvatar: {
							density: props.density,
							image: props.appendAvatar
						},
						VIcon: {
							density: props.density,
							icon: props.appendIcon
						}
					}
				}, slots.append)])
			] });
		});
		return {};
	}
});
var { normalizeClass: _normalizeClass$56, normalizeStyle: _normalizeStyle$46, createVNode: _createVNode$84 } = await importShared("vue");
const makeVCardTextProps = propsFactory({
	opacity: [Number, String],
	...makeComponentProps(),
	...makeTagProps()
}, "VCardText");
const VCardText = genericComponent()({
	name: "VCardText",
	props: makeVCardTextProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => _createVNode$84(props.tag, {
			"class": _normalizeClass$56(["v-card-text", props.class]),
			"style": _normalizeStyle$46([{ "--v-card-text-opacity": props.opacity }, props.style])
		}, slots));
		return {};
	}
});
var { createVNode: _createVNode$83, createElementVNode: _createElementVNode$72, mergeProps: _mergeProps$48, withDirectives: _withDirectives$10 } = await importShared("vue");
var { shallowRef: shallowRef$26, watch: watch$24 } = await importShared("vue");
const makeVCardProps = propsFactory({
	appendAvatar: String,
	appendIcon: IconValue,
	disabled: Boolean,
	flat: Boolean,
	hover: Boolean,
	image: String,
	link: {
		type: Boolean,
		default: void 0
	},
	prependAvatar: String,
	prependIcon: IconValue,
	ripple: {
		type: [Boolean, Object],
		default: true
	},
	subtitle: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	text: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	title: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeLoaderProps(),
	...makeLocationProps(),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeRouterProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps({ variant: "elevated" })
}, "VCard");
const VCard = genericComponent()({
	name: "VCard",
	directives: { vRipple: ripple_default },
	props: makeVCardProps(),
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { colorClasses, colorStyles, variantClasses } = useVariant(props);
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { loaderClasses } = useLoader(props);
		const { locationStyles } = useLocation(props);
		const { positionClasses } = usePosition(props);
		const { roundedClasses } = useRounded(props);
		const link = useLink(props, attrs);
		const loadingColor = shallowRef$26(void 0);
		watch$24(() => props.loading, (val, old) => {
			loadingColor.value = !val && typeof old === "string" ? old : typeof val === "boolean" ? void 0 : val;
		}, { immediate: true });
		useRender(() => {
			const isLink = props.link !== false && link.isLink.value;
			const isClickable = !props.disabled && props.link !== false && (props.link || link.isClickable.value);
			const Tag = isLink ? "a" : props.tag;
			const hasTitle = !!(slots.title || props.title != null);
			const hasSubtitle = !!(slots.subtitle || props.subtitle != null);
			const hasHeader = hasTitle || hasSubtitle;
			const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
			const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
			const hasImage = !!(slots.image || props.image);
			const hasCardItem = hasHeader || hasPrepend || hasAppend;
			const hasText = !!(slots.text || props.text != null);
			return _withDirectives$10(_createVNode$83(Tag, _mergeProps$48(link.linkProps, {
				"class": [
					"v-card",
					{
						"v-card--disabled": props.disabled,
						"v-card--flat": props.flat,
						"v-card--hover": props.hover && !(props.disabled || props.flat),
						"v-card--link": isClickable
					},
					themeClasses.value,
					borderClasses.value,
					colorClasses.value,
					densityClasses.value,
					elevationClasses.value,
					loaderClasses.value,
					positionClasses.value,
					roundedClasses.value,
					variantClasses.value,
					props.class
				],
				"style": [
					colorStyles.value,
					dimensionStyles.value,
					locationStyles.value,
					props.style
				],
				"onClick": isClickable && link.navigate,
				"tabindex": props.disabled ? -1 : void 0
			}), { default: () => [
				hasImage && _createElementVNode$72("div", {
					"key": "image",
					"class": "v-card__image"
				}, [!slots.image ? _createVNode$83(VImg, {
					"key": "image-img",
					"cover": true,
					"src": props.image
				}, null) : _createVNode$83(VDefaultsProvider, {
					"key": "image-defaults",
					"disabled": !props.image,
					"defaults": { VImg: {
						cover: true,
						src: props.image
					} }
				}, slots.image)]),
				_createVNode$83(LoaderSlot, {
					"name": "v-card",
					"active": !!props.loading,
					"color": loadingColor.value
				}, { default: slots.loader }),
				hasCardItem && _createVNode$83(VCardItem, {
					"key": "item",
					"prependAvatar": props.prependAvatar,
					"prependIcon": props.prependIcon,
					"title": props.title,
					"subtitle": props.subtitle,
					"appendAvatar": props.appendAvatar,
					"appendIcon": props.appendIcon
				}, {
					default: slots.item,
					prepend: slots.prepend,
					title: slots.title,
					subtitle: slots.subtitle,
					append: slots.append
				}),
				hasText && _createVNode$83(VCardText, { "key": "text" }, { default: () => [slots.text?.() ?? props.text] }),
				slots.default?.(),
				slots.actions && _createVNode$83(VCardActions, null, { default: slots.actions }),
				genOverlays(isClickable, "v-card")
			] }), [[ripple_default, isClickable && props.ripple]]);
		});
		return {};
	}
});
var handleGesture = (wrapper) => {
	const { touchstartX, touchendX, touchstartY, touchendY } = wrapper;
	const dirRatio = .5;
	const minDistance = 16;
	wrapper.offsetX = touchendX - touchstartX;
	wrapper.offsetY = touchendY - touchstartY;
	if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
		wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
		wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
	}
	if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
		wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
		wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
	}
};
function touchstart(event, wrapper) {
	const touch = event.changedTouches[0];
	wrapper.touchstartX = touch.clientX;
	wrapper.touchstartY = touch.clientY;
	wrapper.start?.({
		originalEvent: event,
		...wrapper
	});
}
function touchend(event, wrapper) {
	const touch = event.changedTouches[0];
	wrapper.touchendX = touch.clientX;
	wrapper.touchendY = touch.clientY;
	wrapper.end?.({
		originalEvent: event,
		...wrapper
	});
	handleGesture(wrapper);
}
function touchmove(event, wrapper) {
	const touch = event.changedTouches[0];
	wrapper.touchmoveX = touch.clientX;
	wrapper.touchmoveY = touch.clientY;
	wrapper.move?.({
		originalEvent: event,
		...wrapper
	});
}
function createHandlers() {
	let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	const wrapper = {
		touchstartX: 0,
		touchstartY: 0,
		touchendX: 0,
		touchendY: 0,
		touchmoveX: 0,
		touchmoveY: 0,
		offsetX: 0,
		offsetY: 0,
		left: value.left,
		right: value.right,
		up: value.up,
		down: value.down,
		start: value.start,
		move: value.move,
		end: value.end
	};
	return {
		touchstart: (e) => touchstart(e, wrapper),
		touchend: (e) => touchend(e, wrapper),
		touchmove: (e) => touchmove(e, wrapper)
	};
}
function mounted$2(el, binding) {
	const value = binding.value;
	const target = value?.parent ? el.parentElement : el;
	const options = value?.options ?? { passive: true };
	const uid = binding.instance?.$.uid;
	if (!target || uid === void 0) return;
	const handlers$1 = createHandlers(binding.value);
	target._touchHandlers = target._touchHandlers ?? Object.create(null);
	target._touchHandlers[uid] = handlers$1;
	keys(handlers$1).forEach((eventName$1) => {
		target.addEventListener(eventName$1, handlers$1[eventName$1], options);
	});
}
function unmounted$2(el, binding) {
	const target = binding.value?.parent ? el.parentElement : el;
	const uid = binding.instance?.$.uid;
	if (!target?._touchHandlers || uid === void 0) return;
	const handlers$1 = target._touchHandlers[uid];
	keys(handlers$1).forEach((eventName$1) => {
		target.removeEventListener(eventName$1, handlers$1[eventName$1]);
	});
	delete target._touchHandlers[uid];
}
const Touch = {
	mounted: mounted$2,
	unmounted: unmounted$2
};
var touch_default = Touch;
var { createVNode: _createVNode$82, createElementVNode: _createElementVNode$71, normalizeClass: _normalizeClass$55, normalizeStyle: _normalizeStyle$45, withDirectives: _withDirectives$9 } = await importShared("vue");
var { computed: computed$73, nextTick: nextTick$14, provide: provide$10, ref: ref$39, shallowRef: shallowRef$25, toRef: toRef$31, watch: watch$23 } = await importShared("vue");
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
	continuous: Boolean,
	nextIcon: {
		type: [
			Boolean,
			String,
			Function,
			Object
		],
		default: "$next"
	},
	prevIcon: {
		type: [
			Boolean,
			String,
			Function,
			Object
		],
		default: "$prev"
	},
	reverse: Boolean,
	showArrows: {
		type: [Boolean, String],
		validator: (v) => typeof v === "boolean" || v === "hover"
	},
	verticalArrows: [Boolean, String],
	touch: {
		type: [Object, Boolean],
		default: void 0
	},
	direction: {
		type: String,
		default: "horizontal"
	},
	modelValue: null,
	disabled: Boolean,
	selectedClass: {
		type: String,
		default: "v-window-item--active"
	},
	mandatory: {
		type: [Boolean, String],
		default: "force"
	},
	crossfade: Boolean,
	transitionDuration: Number,
	...makeComponentProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
	name: "VWindow",
	directives: { vTouch: touch_default },
	props: makeVWindowProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { isRtl } = useRtl();
		const { t } = useLocale();
		const group = useGroup(props, VWindowGroupSymbol);
		const rootRef = ref$39();
		const isRtlReverse = computed$73(() => isRtl.value ? !props.reverse : props.reverse);
		const isReversed = shallowRef$25(false);
		const transition = computed$73(() => {
			if (props.crossfade) return "v-window-crossfade-transition";
			return `v-window-${props.direction === "vertical" ? "y" : "x"}${(isRtlReverse.value ? !isReversed.value : isReversed.value) ? "-reverse" : ""}-transition`;
		});
		const transitionCount = shallowRef$25(0);
		const transitionHeight = ref$39(void 0);
		const activeIndex = computed$73(() => {
			return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
		});
		watch$23(activeIndex, (newVal, oldVal) => {
			let scrollableParent;
			const savedScrollPosition = {
				left: 0,
				top: 0
			};
			if (IN_BROWSER && oldVal >= 0) {
				scrollableParent = getScrollParent(rootRef.value);
				savedScrollPosition.left = scrollableParent?.scrollLeft;
				savedScrollPosition.top = scrollableParent?.scrollTop;
			}
			const itemsLength = group.items.value.length;
			const lastIndex = itemsLength - 1;
			if (itemsLength <= 2) isReversed.value = newVal < oldVal;
			else if (newVal === lastIndex && oldVal === 0) isReversed.value = false;
			else if (newVal === 0 && oldVal === lastIndex) isReversed.value = true;
			else isReversed.value = newVal < oldVal;
			nextTick$14(() => {
				if (!IN_BROWSER || !scrollableParent) return;
				if (scrollableParent.scrollTop !== savedScrollPosition.top) scrollableParent.scrollTo({
					...savedScrollPosition,
					behavior: "instant"
				});
				requestAnimationFrame(() => {
					if (!scrollableParent) return;
					if (scrollableParent.scrollTop !== savedScrollPosition.top) scrollableParent.scrollTo({
						...savedScrollPosition,
						behavior: "instant"
					});
				});
			});
		}, { flush: "sync" });
		provide$10(VWindowSymbol, {
			transition,
			isReversed,
			transitionCount,
			transitionHeight,
			rootRef
		});
		const canMoveBack = toRef$31(() => props.continuous || activeIndex.value !== 0);
		const canMoveForward = toRef$31(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
		function prev() {
			canMoveBack.value && group.prev();
		}
		function next() {
			canMoveForward.value && group.next();
		}
		const arrows = computed$73(() => {
			const arrows$1 = [];
			const prevProps = {
				icon: isRtl.value ? props.nextIcon : props.prevIcon,
				class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
				onClick: group.prev,
				"aria-label": t("$vuetify.carousel.prev")
			};
			arrows$1.push(canMoveBack.value ? slots.prev ? slots.prev({ props: prevProps }) : _createVNode$82(VBtn, prevProps, null) : _createElementVNode$71("div", null, null));
			const nextProps = {
				icon: isRtl.value ? props.prevIcon : props.nextIcon,
				class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
				onClick: group.next,
				"aria-label": t("$vuetify.carousel.next")
			};
			arrows$1.push(canMoveForward.value ? slots.next ? slots.next({ props: nextProps }) : _createVNode$82(VBtn, nextProps, null) : _createElementVNode$71("div", null, null));
			return arrows$1;
		});
		const touchOptions = computed$73(() => {
			if (props.touch === false) return props.touch;
			return {
				left: () => {
					isRtlReverse.value ? prev() : next();
				},
				right: () => {
					isRtlReverse.value ? next() : prev();
				},
				start: (_ref2) => {
					let { originalEvent } = _ref2;
					originalEvent.stopPropagation();
				},
				...props.touch === true ? {} : props.touch
			};
		});
		useRender(() => _withDirectives$9(_createVNode$82(props.tag, {
			"ref": rootRef,
			"class": _normalizeClass$55([
				"v-window",
				{
					"v-window--show-arrows-on-hover": props.showArrows === "hover",
					"v-window--vertical-arrows": !!props.verticalArrows,
					"v-window--crossfade": !!props.crossfade
				},
				themeClasses.value,
				props.class
			]),
			"style": _normalizeStyle$45([props.style, { "--v-window-transition-duration": !PREFERS_REDUCED_MOTION() ? convertToUnit(props.transitionDuration, "ms") : null }])
		}, { default: () => [_createElementVNode$71("div", {
			"class": "v-window__container",
			"style": { height: transitionHeight.value }
		}, [slots.default?.({ group }), props.showArrows !== false && _createElementVNode$71("div", { "class": _normalizeClass$55([
			"v-window__controls",
			{ "v-window__controls--left": props.verticalArrows === "left" || props.verticalArrows === true },
			{ "v-window__controls--right": props.verticalArrows === "right" }
		]) }, [arrows.value])]), slots.additional?.({ group })] }), [[touch_default, touchOptions.value]]));
		return { group };
	}
});
var { Fragment: _Fragment$31, mergeProps: _mergeProps$47, createVNode: _createVNode$81, createElementVNode: _createElementVNode$70 } = await importShared("vue");
var { onMounted: onMounted$8, ref: ref$38, watch: watch$22 } = await importShared("vue");
const makeVCarouselProps = propsFactory({
	color: String,
	cycle: Boolean,
	delimiterIcon: {
		type: IconValue,
		default: "$delimiter"
	},
	height: {
		type: [Number, String],
		default: 500
	},
	hideDelimiters: Boolean,
	hideDelimiterBackground: Boolean,
	interval: {
		type: [Number, String],
		default: 6e3,
		validator: (value) => Number(value) > 0
	},
	progress: [Boolean, String],
	verticalDelimiters: [Boolean, String],
	...makeVWindowProps({
		continuous: true,
		mandatory: "force",
		showArrows: true
	})
}, "VCarousel");
const VCarousel = genericComponent()({
	name: "VCarousel",
	props: makeVCarouselProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const { t } = useLocale();
		const windowRef = ref$38();
		let slideTimeout = -1;
		watch$22(model, restartTimeout);
		watch$22(() => props.interval, restartTimeout);
		watch$22(() => props.cycle, (val) => {
			if (val) restartTimeout();
			else window.clearTimeout(slideTimeout);
		});
		onMounted$8(startTimeout);
		function startTimeout() {
			if (!props.cycle || !windowRef.value) return;
			slideTimeout = window.setTimeout(windowRef.value.group.next, Number(props.interval) > 0 ? Number(props.interval) : 6e3);
		}
		function restartTimeout() {
			window.clearTimeout(slideTimeout);
			window.requestAnimationFrame(startTimeout);
		}
		useRender(() => {
			const windowProps = VWindow.filterProps(props);
			return _createVNode$81(VWindow, _mergeProps$47({ "ref": windowRef }, windowProps, {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": [
					"v-carousel",
					{
						"v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
						"v-carousel--vertical-delimiters": props.verticalDelimiters
					},
					props.class
				],
				"style": [{ height: convertToUnit(props.height) }, props.style]
			}), {
				default: slots.default,
				additional: (_ref2) => {
					let { group } = _ref2;
					return _createElementVNode$70(_Fragment$31, null, [!props.hideDelimiters && _createElementVNode$70("div", {
						"class": "v-carousel__controls",
						"style": {
							left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
							right: props.verticalDelimiters === "right" ? 0 : "auto"
						}
					}, [group.items.value.length > 0 && _createVNode$81(VDefaultsProvider, {
						"defaults": { VBtn: {
							color: props.color,
							icon: props.delimiterIcon,
							size: "x-small",
							variant: "text"
						} },
						"scoped": true
					}, { default: () => [group.items.value.map((item, index) => {
						const props$1 = {
							id: `carousel-item-${item.id}`,
							"aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index + 1, group.items.value.length),
							class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
							onClick: () => group.select(item.id, true)
						};
						return slots.item ? slots.item({
							props: props$1,
							item
						}) : _createVNode$81(VBtn, _mergeProps$47(item, props$1), null);
					})] })]), props.progress && _createVNode$81(VProgressLinear, {
						"absolute": true,
						"class": "v-carousel__progress",
						"color": typeof props.progress === "string" ? props.progress : void 0,
						"modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
					}, null)]);
				},
				prev: slots.prev,
				next: slots.next
			});
		});
		return {};
	}
});
var { vShow: _vShow$3, normalizeClass: _normalizeClass$54, normalizeStyle: _normalizeStyle$44, createElementVNode: _createElementVNode$69, withDirectives: _withDirectives$8, createVNode: _createVNode$80 } = await importShared("vue");
var { computed: computed$72, inject: inject$14, nextTick: nextTick$13, shallowRef: shallowRef$24 } = await importShared("vue");
const makeVWindowItemProps = propsFactory({
	reverseTransition: {
		type: [Boolean, String],
		default: void 0
	},
	transition: {
		type: [Boolean, String],
		default: void 0
	},
	...makeComponentProps(),
	...makeGroupItemProps(),
	...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
	name: "VWindowItem",
	directives: { vTouch: touch_default },
	props: makeVWindowItemProps(),
	emits: { "group:selected": (val) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const window$1 = inject$14(VWindowSymbol);
		const groupItem = useGroupItem(props, VWindowGroupSymbol);
		const { isBooted } = useSsrBoot();
		if (!window$1 || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
		const isTransitioning = shallowRef$24(false);
		const hasTransition = computed$72(() => isBooted.value && (window$1.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
		function onAfterTransition() {
			if (!isTransitioning.value || !window$1) return;
			isTransitioning.value = false;
			if (window$1.transitionCount.value > 0) {
				window$1.transitionCount.value -= 1;
				if (window$1.transitionCount.value === 0) window$1.transitionHeight.value = void 0;
			}
		}
		function onBeforeTransition() {
			if (isTransitioning.value || !window$1) return;
			isTransitioning.value = true;
			if (window$1.transitionCount.value === 0) window$1.transitionHeight.value = convertToUnit(window$1.rootRef.value?.clientHeight);
			window$1.transitionCount.value += 1;
		}
		function onTransitionCancelled() {
			onAfterTransition();
		}
		function onEnterTransition(el) {
			if (!isTransitioning.value) return;
			nextTick$13(() => {
				if (!hasTransition.value || !isTransitioning.value || !window$1) return;
				window$1.transitionHeight.value = convertToUnit(el.clientHeight);
			});
		}
		const transition = computed$72(() => {
			const name = window$1.isReversed.value ? props.reverseTransition : props.transition;
			return !hasTransition.value ? false : {
				name: typeof name !== "string" ? window$1.transition.value : name,
				onBeforeEnter: onBeforeTransition,
				onAfterEnter: onAfterTransition,
				onEnterCancelled: onTransitionCancelled,
				onBeforeLeave: onBeforeTransition,
				onAfterLeave: onAfterTransition,
				onLeaveCancelled: onTransitionCancelled,
				onEnter: onEnterTransition
			};
		});
		const { hasContent } = useLazy(props, groupItem.isSelected);
		useRender(() => _createVNode$80(MaybeTransition, {
			"transition": transition.value,
			"disabled": !isBooted.value
		}, { default: () => [_withDirectives$8(_createElementVNode$69("div", {
			"class": _normalizeClass$54([
				"v-window-item",
				groupItem.selectedClass.value,
				props.class
			]),
			"style": _normalizeStyle$44(props.style)
		}, [hasContent.value && slots.default?.()]), [[_vShow$3, groupItem.isSelected.value]])] }));
		return { groupItem };
	}
});
var { mergeProps: _mergeProps$46, createVNode: _createVNode$79 } = await importShared("vue");
const makeVCarouselItemProps = propsFactory({
	...makeVImgProps(),
	...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
	name: "VCarouselItem",
	inheritAttrs: false,
	props: makeVCarouselItemProps(),
	setup(props, _ref) {
		let { slots, attrs } = _ref;
		useRender(() => {
			const imgProps = VImg.filterProps(props);
			const windowItemProps = VWindowItem.filterProps(props);
			return _createVNode$79(VWindowItem, _mergeProps$46({ "class": ["v-carousel-item", props.class] }, windowItemProps), { default: () => [_createVNode$79(VImg, _mergeProps$46(attrs, imgProps), slots)] });
		});
	}
});
const VCode = createSimpleFunctional("v-code", "code");
var { createElementVNode: _createElementVNode$68, normalizeClass: _normalizeClass$53, normalizeStyle: _normalizeStyle$43 } = await importShared("vue");
var { computed: computed$71, onMounted: onMounted$7, ref: ref$37, shallowRef: shallowRef$23, watch: watch$21 } = await importShared("vue");
const VColorPickerCanvas = defineComponent({
	name: "VColorPickerCanvas",
	props: propsFactory({
		color: { type: Object },
		disabled: Boolean,
		dotSize: {
			type: [Number, String],
			default: 10
		},
		height: {
			type: [Number, String],
			default: 150
		},
		width: {
			type: [Number, String],
			default: 300
		},
		...makeComponentProps()
	}, "VColorPickerCanvas")(),
	emits: {
		"update:color": (color) => true,
		"update:position": (hue) => true
	},
	setup(props, _ref) {
		let { emit } = _ref;
		const isInteracting = shallowRef$23(false);
		const canvasRef = ref$37();
		const canvasWidth = shallowRef$23(parseFloat(props.width));
		const canvasHeight = shallowRef$23(parseFloat(props.height));
		const _dotPosition = ref$37({
			x: 0,
			y: 0
		});
		const dotPosition = computed$71({
			get: () => _dotPosition.value,
			set(val) {
				if (!canvasRef.value) return;
				const { x, y } = val;
				_dotPosition.value = val;
				emit("update:color", {
					h: props.color?.h ?? 0,
					s: clamp(x, 0, canvasWidth.value) / canvasWidth.value,
					v: 1 - clamp(y, 0, canvasHeight.value) / canvasHeight.value,
					a: props.color?.a ?? 1
				});
			}
		});
		const dotStyles = computed$71(() => {
			const { x, y } = dotPosition.value;
			const radius = parseInt(props.dotSize, 10) / 2;
			return {
				width: convertToUnit(props.dotSize),
				height: convertToUnit(props.dotSize),
				transform: `translate(${convertToUnit(x - radius)}, ${convertToUnit(y - radius)})`
			};
		});
		const { resizeRef } = useResizeObserver((entries) => {
			if (!resizeRef.el?.offsetParent) return;
			const { width, height } = entries[0].contentRect;
			canvasWidth.value = Math.round(width);
			canvasHeight.value = Math.round(height);
		});
		function updateDotPosition(x, y, rect) {
			const { left, top, width, height } = rect;
			dotPosition.value = {
				x: clamp(x - left, 0, width),
				y: clamp(y - top, 0, height)
			};
		}
		function handleMouseDown(e) {
			if (e.type === "mousedown") e.preventDefault();
			if (props.disabled) return;
			handleMouseMove(e);
			window.addEventListener("mousemove", handleMouseMove);
			window.addEventListener("mouseup", handleMouseUp);
			window.addEventListener("touchmove", handleMouseMove);
			window.addEventListener("touchend", handleMouseUp);
		}
		function handleMouseMove(e) {
			if (props.disabled || !canvasRef.value) return;
			isInteracting.value = true;
			const coords = getEventCoordinates(e);
			updateDotPosition(coords.clientX, coords.clientY, canvasRef.value.getBoundingClientRect());
		}
		function handleMouseUp() {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("touchmove", handleMouseMove);
			window.removeEventListener("touchend", handleMouseUp);
		}
		function updateCanvas() {
			if (!canvasRef.value) return;
			const canvas = canvasRef.value;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			const saturationGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
			saturationGradient.addColorStop(0, "hsla(0, 0%, 100%, 1)");
			saturationGradient.addColorStop(1, `hsla(${props.color?.h ?? 0}, 100%, 50%, 1)`);
			ctx.fillStyle = saturationGradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			const valueGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
			valueGradient.addColorStop(0, "hsla(0, 0%, 0%, 0)");
			valueGradient.addColorStop(1, "hsla(0, 0%, 0%, 1)");
			ctx.fillStyle = valueGradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}
		watch$21(() => props.color?.h, updateCanvas, { immediate: true });
		watch$21(() => [canvasWidth.value, canvasHeight.value], (newVal, oldVal) => {
			updateCanvas();
			_dotPosition.value = {
				x: dotPosition.value.x * newVal[0] / oldVal[0],
				y: dotPosition.value.y * newVal[1] / oldVal[1]
			};
		}, { flush: "post" });
		watch$21(() => props.color, () => {
			if (isInteracting.value) {
				isInteracting.value = false;
				return;
			}
			_dotPosition.value = props.color ? {
				x: props.color.s * canvasWidth.value,
				y: (1 - props.color.v) * canvasHeight.value
			} : {
				x: 0,
				y: 0
			};
		}, {
			deep: true,
			immediate: true
		});
		onMounted$7(() => updateCanvas());
		useRender(() => _createElementVNode$68("div", {
			"ref": resizeRef,
			"class": _normalizeClass$53(["v-color-picker-canvas", props.class]),
			"style": _normalizeStyle$43(props.style),
			"onMousedown": handleMouseDown,
			"onTouchstartPassive": handleMouseDown
		}, [_createElementVNode$68("canvas", {
			"ref": canvasRef,
			"width": canvasWidth.value,
			"height": canvasHeight.value
		}, null), props.color && _createElementVNode$68("div", {
			"class": _normalizeClass$53(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": props.disabled }]),
			"style": _normalizeStyle$43(dotStyles.value)
		}, null)]));
		return {};
	}
});
function stripAlpha(color, stripAlpha$1) {
	if (stripAlpha$1) {
		const { a, ...rest } = color;
		return rest;
	}
	return color;
}
function extractColor(color, input) {
	if (input == null || typeof input === "string") {
		const hasA = color.a !== 1;
		if (input?.startsWith("rgb(")) {
			const { r, g, b, a } = HSVtoRGB(color);
			return `rgb(${r} ${g} ${b}` + (hasA ? ` / ${a})` : ")");
		} else if (input?.startsWith("hsl(")) {
			const { h: h$6, s, l, a } = HSVtoHSL(color);
			return `hsl(${h$6} ${Math.round(s * 100)} ${Math.round(l * 100)}` + (hasA ? ` / ${a})` : ")");
		}
		const hex$1 = HSVtoHex(color);
		if (color.a === 1) return hex$1.slice(0, 7);
		else return hex$1;
	}
	if (typeof input === "object") {
		let converted;
		if (has(input, [
			"r",
			"g",
			"b"
		])) converted = HSVtoRGB(color);
		else if (has(input, [
			"h",
			"s",
			"l"
		])) converted = HSVtoHSL(color);
		else if (has(input, [
			"h",
			"s",
			"v"
		])) converted = color;
		return stripAlpha(converted, !has(input, ["a"]) && color.a === 1);
	}
	return color;
}
const nullColor = {
	h: 0,
	s: 0,
	v: 0,
	a: 1
};
var rgba = {
	inputProps: {
		type: "number",
		min: 0
	},
	inputs: [
		{
			label: "R",
			max: 255,
			step: 1,
			getValue: (c) => Math.round(c.r),
			getColor: (c, v) => ({
				...c,
				r: Number(v)
			}),
			localeKey: "redInput"
		},
		{
			label: "G",
			max: 255,
			step: 1,
			getValue: (c) => Math.round(c.g),
			getColor: (c, v) => ({
				...c,
				g: Number(v)
			}),
			localeKey: "greenInput"
		},
		{
			label: "B",
			max: 255,
			step: 1,
			getValue: (c) => Math.round(c.b),
			getColor: (c, v) => ({
				...c,
				b: Number(v)
			}),
			localeKey: "blueInput"
		},
		{
			label: "A",
			max: 1,
			step: .01,
			getValue: (_ref) => {
				let { a } = _ref;
				return a != null ? Math.round(a * 100) / 100 : 1;
			},
			getColor: (c, v) => ({
				...c,
				a: Number(v)
			}),
			localeKey: "alphaInput"
		}
	],
	to: HSVtoRGB,
	from: RGBtoHSV
};
var rgb = {
	...rgba,
	inputs: rgba.inputs?.slice(0, 3)
};
var hsla = {
	inputProps: {
		type: "number",
		min: 0
	},
	inputs: [
		{
			label: "H",
			max: 360,
			step: 1,
			getValue: (c) => Math.round(c.h),
			getColor: (c, v) => ({
				...c,
				h: Number(v)
			}),
			localeKey: "hueInput"
		},
		{
			label: "S",
			max: 1,
			step: .01,
			getValue: (c) => Math.round(c.s * 100) / 100,
			getColor: (c, v) => ({
				...c,
				s: Number(v)
			}),
			localeKey: "saturationInput"
		},
		{
			label: "L",
			max: 1,
			step: .01,
			getValue: (c) => Math.round(c.l * 100) / 100,
			getColor: (c, v) => ({
				...c,
				l: Number(v)
			}),
			localeKey: "lightnessInput"
		},
		{
			label: "A",
			max: 1,
			step: .01,
			getValue: (_ref2) => {
				let { a } = _ref2;
				return a != null ? Math.round(a * 100) / 100 : 1;
			},
			getColor: (c, v) => ({
				...c,
				a: Number(v)
			}),
			localeKey: "alphaInput"
		}
	],
	to: HSVtoHSL,
	from: HSLtoHSV
};
var hsl = {
	...hsla,
	inputs: hsla.inputs.slice(0, 3)
};
var hexa = {
	inputProps: { type: "text" },
	inputs: [{
		label: "HEXA",
		getValue: (c) => c,
		getColor: (c, v) => v,
		localeKey: "hexaInput"
	}],
	to: HSVtoHex,
	from: HexToHSV
};
const modes = {
	rgb,
	rgba,
	hsl,
	hsla,
	hex: {
		...hexa,
		inputs: [{
			label: "HEX",
			getValue: (c) => c.slice(0, 7),
			getColor: (c, v) => v,
			localeKey: "hexInput"
		}]
	},
	hexa
};
var { normalizeProps: _normalizeProps, guardReactiveProps: _guardReactiveProps, createElementVNode: _createElementVNode$67, createVNode: _createVNode$78, normalizeClass: _normalizeClass$52, normalizeStyle: _normalizeStyle$42 } = await importShared("vue");
var { computed: computed$70 } = await importShared("vue");
var VColorPickerInput = (_ref) => {
	let { label, ...rest } = _ref;
	return _createElementVNode$67("div", { "class": "v-color-picker-edit__input" }, [_createElementVNode$67("input", _normalizeProps(_guardReactiveProps(rest)), null), _createElementVNode$67("span", null, [label])]);
};
const VColorPickerEdit = defineComponent({
	name: "VColorPickerEdit",
	props: propsFactory({
		color: Object,
		disabled: Boolean,
		mode: {
			type: String,
			default: "rgba",
			validator: (v) => Object.keys(modes).includes(v)
		},
		modes: {
			type: Array,
			default: () => Object.keys(modes),
			validator: (v) => Array.isArray(v) && v.every((m) => Object.keys(modes).includes(m))
		},
		...makeComponentProps()
	}, "VColorPickerEdit")(),
	emits: {
		"update:color": (color) => true,
		"update:mode": (mode) => true
	},
	setup(props, _ref2) {
		let { emit } = _ref2;
		const { t } = useLocale();
		const enabledModes = computed$70(() => {
			return props.modes.map((key) => ({
				...modes[key],
				name: key
			}));
		});
		const inputs = computed$70(() => {
			const mode = enabledModes.value.find((m) => m.name === props.mode);
			if (!mode) return [];
			const color = props.color ? mode.to(props.color) : null;
			return mode.inputs?.map((_ref3) => {
				let { getValue, getColor, localeKey, ...inputProps } = _ref3;
				return {
					...mode.inputProps,
					...inputProps,
					ariaLabel: t(`$vuetify.colorPicker.ariaLabel.${localeKey}`),
					disabled: props.disabled,
					value: color && getValue(color),
					onChange: (e) => {
						const target = e.target;
						if (!target) return;
						emit("update:color", mode.from(getColor(color ?? mode.to(nullColor), target.value)));
					}
				};
			});
		});
		useRender(() => _createElementVNode$67("div", {
			"class": _normalizeClass$52(["v-color-picker-edit", props.class]),
			"style": _normalizeStyle$42(props.style)
		}, [inputs.value?.map((props$1) => _createVNode$78(VColorPickerInput, props$1, null)), enabledModes.value.length > 1 && _createVNode$78(VBtn, {
			"icon": "$unfold",
			"size": "x-small",
			"variant": "plain",
			"aria-label": t("$vuetify.colorPicker.ariaLabel.changeFormat"),
			"onClick": () => {
				const mi = enabledModes.value.findIndex((m) => m.name === props.mode);
				emit("update:mode", enabledModes.value[(mi + 1) % enabledModes.value.length].name);
			}
		}, null)]));
		return {};
	}
});
var { computed: computed$69, nextTick: nextTick$12, onScopeDispose: onScopeDispose$4, provide: provide$9, ref: ref$36, shallowRef: shallowRef$22, toRef: toRef$30 } = await importShared("vue");
const VSliderSymbol = Symbol.for("vuetify:v-slider");
function getOffset(e, el, direction) {
	const vertical = direction === "vertical";
	const rect = el.getBoundingClientRect();
	const touch = "touches" in e ? e.touches[0] : e;
	return vertical ? touch.clientY - (rect.top + rect.height / 2) : touch.clientX - (rect.left + rect.width / 2);
}
function getPosition(e, position) {
	if ("touches" in e && e.touches.length) return e.touches[0][position];
	else if ("changedTouches" in e && e.changedTouches.length) return e.changedTouches[0][position];
	else return e[position];
}
const makeSliderProps = propsFactory({
	disabled: {
		type: Boolean,
		default: null
	},
	error: Boolean,
	readonly: {
		type: Boolean,
		default: null
	},
	max: {
		type: [Number, String],
		default: 100
	},
	min: {
		type: [Number, String],
		default: 0
	},
	step: {
		type: [Number, String],
		default: 0
	},
	thumbColor: String,
	thumbLabel: {
		type: [Boolean, String],
		default: void 0,
		validator: (v) => typeof v === "boolean" || v === "always"
	},
	thumbSize: {
		type: [Number, String],
		default: 20
	},
	showTicks: {
		type: [Boolean, String],
		default: false,
		validator: (v) => typeof v === "boolean" || v === "always"
	},
	ticks: { type: [Array, Object] },
	tickSize: {
		type: [Number, String],
		default: 2
	},
	color: String,
	trackColor: String,
	trackFillColor: String,
	trackSize: {
		type: [Number, String],
		default: 4
	},
	direction: {
		type: String,
		default: "horizontal",
		validator: (v) => ["vertical", "horizontal"].includes(v)
	},
	reverse: Boolean,
	noKeyboard: Boolean,
	...makeRoundedProps(),
	...makeElevationProps({ elevation: 2 }),
	ripple: {
		type: Boolean,
		default: true
	}
}, "Slider");
const useSteps = (props) => {
	const min = computed$69(() => parseFloat(props.min));
	const max = computed$69(() => parseFloat(props.max));
	const step = computed$69(() => Number(props.step) > 0 ? parseFloat(props.step) : 0);
	const decimals = computed$69(() => Math.max(getDecimals(step.value), getDecimals(min.value)));
	function roundValue(value) {
		value = parseFloat(value);
		if (step.value <= 0) return value;
		const clamped = clamp(value, min.value, max.value);
		const offset = min.value % step.value;
		let newValue = Math.round((clamped - offset) / step.value) * step.value + offset;
		if (clamped > newValue && newValue + step.value > max.value) newValue = max.value;
		return parseFloat(Math.min(newValue, max.value).toFixed(decimals.value));
	}
	return {
		min,
		max,
		step,
		decimals,
		roundValue
	};
};
const useSlider = (_ref) => {
	let { props, steps, onSliderStart, onSliderMove, onSliderEnd, getActiveThumb } = _ref;
	const form = useForm(props);
	const { isRtl } = useRtl();
	const isReversed = toRef$30(() => props.reverse);
	const vertical = computed$69(() => props.direction === "vertical");
	const indexFromEnd = computed$69(() => vertical.value !== isReversed.value);
	const { min, max, step, decimals, roundValue } = steps;
	const thumbSize = computed$69(() => parseInt(props.thumbSize, 10));
	const tickSize = computed$69(() => parseInt(props.tickSize, 10));
	const trackSize = computed$69(() => parseInt(props.trackSize, 10));
	const numTicks = computed$69(() => (max.value - min.value) / step.value);
	const thumbColor = computed$69(() => props.error || form.isDisabled.value ? void 0 : props.thumbColor ?? props.color);
	const thumbLabelColor = computed$69(() => props.error || form.isDisabled.value ? void 0 : props.thumbColor);
	const trackColor = computed$69(() => props.error || form.isDisabled.value ? void 0 : props.trackColor ?? props.color);
	const trackFillColor = computed$69(() => props.error || form.isDisabled.value ? void 0 : props.trackFillColor ?? props.color);
	const mousePressed = shallowRef$22(false);
	const startOffset = shallowRef$22(0);
	const trackContainerRef = ref$36();
	const activeThumbRef = ref$36();
	function parseMouseMove(e) {
		const el = trackContainerRef.value?.$el;
		if (!el) return;
		const vertical$1 = props.direction === "vertical";
		const start = vertical$1 ? "top" : "left";
		const length = vertical$1 ? "height" : "width";
		const position$1 = vertical$1 ? "clientY" : "clientX";
		const { [start]: trackStart, [length]: trackLength } = el.getBoundingClientRect();
		let clickPos = clamp((getPosition(e, position$1) - trackStart - startOffset.value) / trackLength) || 0;
		if (vertical$1 ? indexFromEnd.value : indexFromEnd.value !== isRtl.value) clickPos = 1 - clickPos;
		return roundValue(min.value + clickPos * (max.value - min.value));
	}
	const handleStop = (e) => {
		const value = parseMouseMove(e);
		if (value != null) onSliderEnd({ value });
		mousePressed.value = false;
		startOffset.value = 0;
	};
	const handleStart = (e) => {
		const value = parseMouseMove(e);
		activeThumbRef.value = getActiveThumb(e);
		if (!activeThumbRef.value) return;
		mousePressed.value = true;
		if (activeThumbRef.value.contains(e.target)) startOffset.value = getOffset(e, activeThumbRef.value, props.direction);
		else {
			startOffset.value = 0;
			if (value != null) onSliderMove({ value });
		}
		if (value != null) onSliderStart({ value });
		nextTick$12(() => activeThumbRef.value?.focus());
	};
	const moveListenerOptions = {
		passive: true,
		capture: true
	};
	function onMouseMove(e) {
		const value = parseMouseMove(e);
		if (value != null) onSliderMove({ value });
	}
	function onSliderMouseUp(e) {
		e.stopPropagation();
		e.preventDefault();
		handleStop(e);
		window.removeEventListener("mousemove", onMouseMove, moveListenerOptions);
		window.removeEventListener("mouseup", onSliderMouseUp);
	}
	function onSliderTouchend(e) {
		handleStop(e);
		window.removeEventListener("touchmove", onMouseMove, moveListenerOptions);
		e.target?.removeEventListener("touchend", onSliderTouchend);
	}
	function onSliderTouchstart(e) {
		handleStart(e);
		window.addEventListener("touchmove", onMouseMove, moveListenerOptions);
		e.target?.addEventListener("touchend", onSliderTouchend, { passive: false });
	}
	function onSliderMousedown(e) {
		if (e.button !== 0) return;
		e.preventDefault();
		handleStart(e);
		window.addEventListener("mousemove", onMouseMove, moveListenerOptions);
		window.addEventListener("mouseup", onSliderMouseUp, { passive: false });
	}
	onScopeDispose$4(() => {
		window.removeEventListener("touchmove", onMouseMove);
		window.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("mouseup", onSliderMouseUp);
	});
	const position = (val) => {
		const percentage = (val - min.value) / (max.value - min.value) * 100;
		return clamp(isNaN(percentage) ? 0 : percentage, 0, 100);
	};
	const showTicks = toRef$30(() => props.showTicks);
	const parsedTicks = computed$69(() => {
		if (!showTicks.value) return [];
		if (!props.ticks) return numTicks.value !== Infinity ? createRange(numTicks.value + 1).map((t) => {
			const value = min.value + t * step.value;
			return {
				value,
				position: position(value)
			};
		}) : [];
		if (Array.isArray(props.ticks)) return props.ticks.map((t) => ({
			value: t,
			position: position(t),
			label: t.toString()
		}));
		return Object.keys(props.ticks).map((key) => ({
			value: parseFloat(key),
			position: position(parseFloat(key)),
			label: props.ticks[key]
		}));
	});
	const hasLabels = computed$69(() => parsedTicks.value.some((_ref2) => {
		let { label } = _ref2;
		return !!label;
	}));
	const data = {
		activeThumbRef,
		color: toRef$30(() => props.color),
		decimals,
		disabled: form.isDisabled,
		direction: toRef$30(() => props.direction),
		elevation: toRef$30(() => props.elevation),
		hasLabels,
		isReversed,
		indexFromEnd,
		min,
		max,
		mousePressed,
		noKeyboard: toRef$30(() => props.noKeyboard),
		numTicks,
		onSliderMousedown,
		onSliderTouchstart,
		parsedTicks,
		parseMouseMove,
		position,
		readonly: form.isReadonly,
		rounded: toRef$30(() => props.rounded),
		roundValue,
		showTicks,
		startOffset,
		step,
		thumbSize,
		thumbColor,
		thumbLabelColor,
		thumbLabel: toRef$30(() => props.thumbLabel),
		ticks: toRef$30(() => props.ticks),
		tickSize,
		trackColor,
		trackContainerRef,
		trackFillColor,
		trackSize,
		vertical
	};
	provide$9(VSliderSymbol, data);
	return data;
};
var { normalizeClass: _normalizeClass$51, normalizeStyle: _normalizeStyle$41, createElementVNode: _createElementVNode$66, withDirectives: _withDirectives$7, vShow: _vShow$2, createVNode: _createVNode$77 } = await importShared("vue");
var { computed: computed$68, inject: inject$13 } = await importShared("vue");
const makeVSliderThumbProps = propsFactory({
	focused: Boolean,
	max: {
		type: Number,
		required: true
	},
	min: {
		type: Number,
		required: true
	},
	modelValue: {
		type: Number,
		required: true
	},
	position: {
		type: Number,
		required: true
	},
	ripple: {
		type: [Boolean, Object],
		default: true
	},
	name: String,
	noKeyboard: Boolean,
	...makeComponentProps()
}, "VSliderThumb");
const VSliderThumb = genericComponent()({
	name: "VSliderThumb",
	directives: { vRipple: ripple_default },
	props: makeVSliderThumbProps(),
	emits: { "update:modelValue": (v) => true },
	setup(props, _ref) {
		let { slots, emit } = _ref;
		const slider = inject$13(VSliderSymbol);
		const { isRtl, rtlClasses } = useRtl();
		if (!slider) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
		const { min, max, thumbColor, thumbLabelColor, step, disabled, thumbSize, thumbLabel, direction, isReversed, vertical, readonly: readonly$3, elevation, mousePressed, decimals, indexFromEnd } = slider;
		const { elevationClasses } = useElevation(computed$68(() => !disabled.value ? elevation.value : void 0));
		const { textColorClasses, textColorStyles } = useTextColor(thumbColor);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(thumbLabelColor);
		const { pageup, pagedown, end, home, left, right, down, up } = keyValues;
		const relevantKeys = [
			pageup,
			pagedown,
			end,
			home,
			left,
			right,
			down,
			up
		];
		const multipliers = computed$68(() => {
			if (step.value) return [
				1,
				2,
				3
			];
			else return [
				1,
				5,
				10
			];
		});
		function parseKeydown(e, value) {
			if (props.noKeyboard || disabled.value) return;
			if (!relevantKeys.includes(e.key)) return;
			e.preventDefault();
			const _step = step.value || .1;
			const steps = (max.value - min.value) / _step;
			if ([
				left,
				right,
				down,
				up
			].includes(e.key)) {
				const direction$1 = (vertical.value ? [isRtl.value ? left : right, isReversed.value ? down : up] : indexFromEnd.value !== isRtl.value ? [left, up] : [right, up]).includes(e.key) ? 1 : -1;
				const multiplier = e.shiftKey ? 2 : e.ctrlKey ? 1 : 0;
				if (direction$1 === -1 && value === max.value && !multiplier && !Number.isInteger(steps)) value = value - steps % 1 * _step;
				else value = value + direction$1 * _step * multipliers.value[multiplier];
			} else if (e.key === home) value = min.value;
			else if (e.key === end) value = max.value;
			else {
				const direction$1 = e.key === pagedown ? 1 : -1;
				value = value - direction$1 * _step * (steps > 100 ? steps / 10 : 10);
			}
			return Math.max(props.min, Math.min(props.max, value));
		}
		function onKeydown$1(e) {
			const newValue = parseKeydown(e, props.modelValue);
			newValue != null && emit("update:modelValue", newValue);
		}
		useRender(() => {
			const positionPercentage = convertToUnit(indexFromEnd.value ? 100 - props.position : props.position, "%");
			return _createElementVNode$66("div", {
				"class": _normalizeClass$51([
					"v-slider-thumb",
					{
						"v-slider-thumb--focused": props.focused,
						"v-slider-thumb--pressed": props.focused && mousePressed.value
					},
					props.class,
					rtlClasses.value
				]),
				"style": _normalizeStyle$41([{
					"--v-slider-thumb-position": positionPercentage,
					"--v-slider-thumb-size": convertToUnit(thumbSize.value)
				}, props.style]),
				"role": "slider",
				"tabindex": disabled.value ? -1 : 0,
				"aria-label": props.name,
				"aria-valuemin": min.value,
				"aria-valuemax": max.value,
				"aria-valuenow": props.modelValue,
				"aria-readonly": !!readonly$3.value,
				"aria-orientation": direction.value,
				"onKeydown": !readonly$3.value ? onKeydown$1 : void 0
			}, [
				_createElementVNode$66("div", {
					"class": _normalizeClass$51([
						"v-slider-thumb__surface",
						textColorClasses.value,
						elevationClasses.value
					]),
					"style": _normalizeStyle$41(textColorStyles.value)
				}, null),
				_withDirectives$7(_createElementVNode$66("div", {
					"class": _normalizeClass$51(["v-slider-thumb__ripple", textColorClasses.value]),
					"style": _normalizeStyle$41(textColorStyles.value)
				}, null), [[
					ripple_default,
					props.ripple,
					null,
					{
						circle: true,
						center: true
					}
				]]),
				_createVNode$77(VScaleTransition, { "origin": "bottom center" }, { default: () => [_withDirectives$7(_createElementVNode$66("div", { "class": "v-slider-thumb__label-container" }, [_createElementVNode$66("div", {
					"class": _normalizeClass$51(["v-slider-thumb__label", backgroundColorClasses.value]),
					"style": _normalizeStyle$41(backgroundColorStyles.value)
				}, [_createElementVNode$66("div", null, [slots["thumb-label"]?.({ modelValue: props.modelValue }) ?? props.modelValue.toFixed(step.value ? decimals.value : 1)]), _createElementVNode$66("div", { "class": "v-slider-thumb__label-wedge" }, null)])]), [[_vShow$2, thumbLabel.value && props.focused || thumbLabel.value === "always"]])] })
			]);
		});
		return {};
	}
});
var { createElementVNode: _createElementVNode$65, normalizeClass: _normalizeClass$50, normalizeStyle: _normalizeStyle$40 } = await importShared("vue");
var { computed: computed$67, inject: inject$12 } = await importShared("vue");
const makeVSliderTrackProps = propsFactory({
	start: {
		type: Number,
		required: true
	},
	stop: {
		type: Number,
		required: true
	},
	...makeComponentProps()
}, "VSliderTrack");
const VSliderTrack = genericComponent()({
	name: "VSliderTrack",
	props: makeVSliderTrackProps(),
	emits: {},
	setup(props, _ref) {
		let { slots } = _ref;
		const slider = inject$12(VSliderSymbol);
		if (!slider) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
		const { color, parsedTicks, rounded, showTicks, tickSize, trackColor, trackFillColor, trackSize, vertical, min, max, indexFromEnd } = slider;
		const { roundedClasses } = useRounded(rounded);
		const { backgroundColorClasses: trackFillColorClasses, backgroundColorStyles: trackFillColorStyles } = useBackgroundColor(trackFillColor);
		const { backgroundColorClasses: trackColorClasses, backgroundColorStyles: trackColorStyles } = useBackgroundColor(trackColor);
		const startDir = computed$67(() => `inset-${vertical.value ? "block" : "inline"}-${indexFromEnd.value ? "end" : "start"}`);
		const endDir = computed$67(() => vertical.value ? "height" : "width");
		const backgroundStyles = computed$67(() => {
			return {
				[startDir.value]: "0%",
				[endDir.value]: "100%"
			};
		});
		const trackFillWidth = computed$67(() => props.stop - props.start);
		const trackFillStyles = computed$67(() => {
			return {
				[startDir.value]: convertToUnit(props.start, "%"),
				[endDir.value]: convertToUnit(trackFillWidth.value, "%")
			};
		});
		const computedTicks = computed$67(() => {
			if (!showTicks.value) return [];
			return (vertical.value ? parsedTicks.value.slice().reverse() : parsedTicks.value).map((tick, index) => {
				const directionValue = tick.value !== min.value && tick.value !== max.value ? convertToUnit(tick.position, "%") : void 0;
				return _createElementVNode$65("div", {
					"key": tick.value,
					"class": _normalizeClass$50(["v-slider-track__tick", {
						"v-slider-track__tick--filled": tick.position >= props.start && tick.position <= props.stop,
						"v-slider-track__tick--first": tick.value === min.value,
						"v-slider-track__tick--last": tick.value === max.value
					}]),
					"style": { [startDir.value]: directionValue }
				}, [(tick.label || slots["tick-label"]) && _createElementVNode$65("div", { "class": "v-slider-track__tick-label" }, [slots["tick-label"]?.({
					tick,
					index
				}) ?? tick.label])]);
			});
		});
		useRender(() => {
			return _createElementVNode$65("div", {
				"class": _normalizeClass$50([
					"v-slider-track",
					roundedClasses.value,
					props.class
				]),
				"style": _normalizeStyle$40([{
					"--v-slider-track-size": convertToUnit(trackSize.value),
					"--v-slider-tick-size": convertToUnit(tickSize.value)
				}, props.style])
			}, [
				_createElementVNode$65("div", {
					"class": _normalizeClass$50([
						"v-slider-track__background",
						trackColorClasses.value,
						{ "v-slider-track__background--opacity": !!color.value || !trackFillColor.value }
					]),
					"style": {
						...backgroundStyles.value,
						...trackColorStyles.value
					}
				}, null),
				_createElementVNode$65("div", {
					"class": _normalizeClass$50(["v-slider-track__fill", trackFillColorClasses.value]),
					"style": {
						...trackFillStyles.value,
						...trackFillColorStyles.value
					}
				}, null),
				showTicks.value && _createElementVNode$65("div", { "class": _normalizeClass$50(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": showTicks.value === "always" }]) }, [computedTicks.value])
			]);
		});
		return {};
	}
});
var { Fragment: _Fragment$30, createVNode: _createVNode$76, createElementVNode: _createElementVNode$64, mergeProps: _mergeProps$45 } = await importShared("vue");
var { computed: computed$66, ref: ref$35 } = await importShared("vue");
const makeVSliderProps = propsFactory({
	...makeFocusProps(),
	...makeSliderProps(),
	...makeVInputProps(),
	modelValue: {
		type: [Number, String],
		default: 0
	}
}, "VSlider");
const VSlider = genericComponent()({
	name: "VSlider",
	inheritAttrs: false,
	props: makeVSliderProps(),
	emits: {
		"update:focused": (value) => true,
		"update:modelValue": (v) => true,
		start: (value) => true,
		end: (value) => true
	},
	setup(props, _ref) {
		let { slots, emit, attrs } = _ref;
		const thumbContainerRef = ref$35();
		const inputRef = ref$35();
		const { rtlClasses } = useRtl();
		const steps = useSteps(props);
		const model = useProxiedModel(props, "modelValue", void 0, (value) => {
			return steps.roundValue(value == null ? steps.min.value : value);
		});
		const { min, max, mousePressed, roundValue, onSliderMousedown, onSliderTouchstart, trackContainerRef, position, hasLabels, disabled, readonly: readonly$3, noKeyboard } = useSlider({
			props,
			steps,
			onSliderStart: () => {
				if (!disabled.value && !readonly$3.value) emit("start", model.value);
			},
			onSliderEnd: (_ref2) => {
				let { value } = _ref2;
				const roundedValue = roundValue(value);
				if (!disabled.value && !readonly$3.value) model.value = roundedValue;
				emit("end", roundedValue);
			},
			onSliderMove: (_ref3) => {
				let { value } = _ref3;
				if (!disabled.value && !readonly$3.value) model.value = roundValue(value);
			},
			getActiveThumb: () => thumbContainerRef.value?.$el
		});
		const { isFocused, focus, blur } = useFocus(props);
		const trackStop = computed$66(() => position(model.value));
		useRender(() => {
			const inputProps = VInput.filterProps(props);
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			const hasPrepend = !!(props.label || slots.label || slots.prepend);
			return _createVNode$76(VInput, _mergeProps$45({
				"ref": inputRef,
				"class": [
					"v-slider",
					{
						"v-slider--has-labels": !!slots["tick-label"] || hasLabels.value,
						"v-slider--focused": isFocused.value,
						"v-slider--pressed": mousePressed.value,
						"v-slider--disabled": disabled.value
					},
					rtlClasses.value,
					props.class
				],
				"style": props.style
			}, inputProps, rootAttrs, { "focused": isFocused.value }), {
				...slots,
				prepend: hasPrepend ? (slotProps) => _createElementVNode$64(_Fragment$30, null, [slots.label?.(slotProps) ?? (props.label ? _createVNode$76(VLabel, {
					"id": slotProps.id.value,
					"class": "v-slider__label",
					"text": props.label
				}, null) : void 0), slots.prepend?.(slotProps)]) : void 0,
				default: (_ref4) => {
					let { id, messagesId } = _ref4;
					return _createElementVNode$64("div", {
						"class": "v-slider__container",
						"onMousedown": !readonly$3.value ? onSliderMousedown : void 0,
						"onTouchstartPassive": !readonly$3.value ? onSliderTouchstart : void 0
					}, [
						_createElementVNode$64("input", {
							"id": id.value,
							"name": props.name || id.value,
							"disabled": disabled.value,
							"readonly": readonly$3.value,
							"tabindex": "-1",
							"value": model.value
						}, null),
						_createVNode$76(VSliderTrack, {
							"ref": trackContainerRef,
							"start": 0,
							"stop": trackStop.value
						}, { "tick-label": slots["tick-label"] }),
						_createVNode$76(VSliderThumb, _mergeProps$45({
							"ref": thumbContainerRef,
							"aria-describedby": messagesId.value,
							"focused": isFocused.value,
							"noKeyboard": noKeyboard.value,
							"min": min.value,
							"max": max.value,
							"modelValue": model.value,
							"onUpdate:modelValue": (v) => model.value = v,
							"position": trackStop.value,
							"elevation": props.elevation,
							"onFocus": focus,
							"onBlur": blur,
							"ripple": props.ripple,
							"name": props.name
						}, inputAttrs), { "thumb-label": slots["thumb-label"] })
					]);
				}
			});
		});
		return forwardRefs({ focus: () => thumbContainerRef.value?.$el.focus() }, inputRef);
	}
});
var { createVNode: _createVNode$75, createElementVNode: _createElementVNode$63, normalizeClass: _normalizeClass$49, normalizeStyle: _normalizeStyle$39 } = await importShared("vue");
var { onUnmounted } = await importShared("vue");
const makeVColorPickerPreviewProps = propsFactory({
	color: { type: Object },
	disabled: Boolean,
	hideAlpha: Boolean,
	hideEyeDropper: Boolean,
	eyeDropperIcon: {
		type: IconValue,
		default: "$eyeDropper"
	},
	...makeComponentProps()
}, "VColorPickerPreview");
const VColorPickerPreview = defineComponent({
	name: "VColorPickerPreview",
	props: makeVColorPickerPreviewProps(),
	emits: { "update:color": (color) => true },
	setup(props, _ref) {
		let { emit } = _ref;
		const { t } = useLocale();
		const abortController = new AbortController();
		onUnmounted(() => abortController.abort());
		async function openEyeDropper() {
			if (!SUPPORTS_EYE_DROPPER || props.disabled) return;
			const eyeDropper = new window.EyeDropper();
			try {
				const colorHexValue = RGBtoHSV(parseColor((await eyeDropper.open({ signal: abortController.signal })).sRGBHex));
				emit("update:color", {
					...props.color ?? nullColor,
					...colorHexValue
				});
			} catch (e) {}
		}
		useRender(() => _createElementVNode$63("div", {
			"class": _normalizeClass$49([
				"v-color-picker-preview",
				{ "v-color-picker-preview--hide-alpha": props.hideAlpha },
				props.class
			]),
			"style": _normalizeStyle$39(props.style)
		}, [
			SUPPORTS_EYE_DROPPER && !props.hideEyeDropper && _createElementVNode$63("div", {
				"class": "v-color-picker-preview__eye-dropper",
				"key": "eyeDropper"
			}, [_createVNode$75(VBtn, {
				"aria-label": t("$vuetify.colorPicker.ariaLabel.eyedropper"),
				"density": "comfortable",
				"disabled": props.disabled,
				"icon": props.eyeDropperIcon,
				"variant": "plain",
				"onClick": openEyeDropper
			}, null)]),
			_createElementVNode$63("div", { "class": "v-color-picker-preview__dot" }, [_createElementVNode$63("div", { "style": { background: HSVtoCSS(props.color ?? nullColor) } }, null)]),
			_createElementVNode$63("div", { "class": "v-color-picker-preview__sliders" }, [_createVNode$75(VSlider, {
				"class": "v-color-picker-preview__track v-color-picker-preview__hue",
				"aria-label": t("$vuetify.colorPicker.ariaLabel.hueSlider"),
				"modelValue": props.color?.h,
				"onUpdate:modelValue": (h$6) => emit("update:color", {
					...props.color ?? nullColor,
					h: h$6
				}),
				"step": 1,
				"min": 0,
				"max": 360,
				"disabled": props.disabled,
				"thumbSize": 14,
				"trackSize": 8,
				"trackFillColor": "white",
				"hideDetails": true
			}, null), !props.hideAlpha && _createVNode$75(VSlider, {
				"class": "v-color-picker-preview__track v-color-picker-preview__alpha",
				"aria-label": t("$vuetify.colorPicker.ariaLabel.alphaSlider"),
				"modelValue": props.color?.a ?? 1,
				"onUpdate:modelValue": (a) => emit("update:color", {
					...props.color ?? nullColor,
					a
				}),
				"step": .01,
				"min": 0,
				"max": 1,
				"disabled": props.disabled,
				"thumbSize": 14,
				"trackSize": 8,
				"trackFillColor": "white",
				"hideDetails": true
			}, null)])
		]));
		return {};
	}
});
var colors_default = {
	red: {
		base: "#f44336",
		lighten5: "#ffebee",
		lighten4: "#ffcdd2",
		lighten3: "#ef9a9a",
		lighten2: "#e57373",
		lighten1: "#ef5350",
		darken1: "#e53935",
		darken2: "#d32f2f",
		darken3: "#c62828",
		darken4: "#b71c1c",
		accent1: "#ff8a80",
		accent2: "#ff5252",
		accent3: "#ff1744",
		accent4: "#d50000"
	},
	pink: {
		base: "#e91e63",
		lighten5: "#fce4ec",
		lighten4: "#f8bbd0",
		lighten3: "#f48fb1",
		lighten2: "#f06292",
		lighten1: "#ec407a",
		darken1: "#d81b60",
		darken2: "#c2185b",
		darken3: "#ad1457",
		darken4: "#880e4f",
		accent1: "#ff80ab",
		accent2: "#ff4081",
		accent3: "#f50057",
		accent4: "#c51162"
	},
	purple: {
		base: "#9c27b0",
		lighten5: "#f3e5f5",
		lighten4: "#e1bee7",
		lighten3: "#ce93d8",
		lighten2: "#ba68c8",
		lighten1: "#ab47bc",
		darken1: "#8e24aa",
		darken2: "#7b1fa2",
		darken3: "#6a1b9a",
		darken4: "#4a148c",
		accent1: "#ea80fc",
		accent2: "#e040fb",
		accent3: "#d500f9",
		accent4: "#aa00ff"
	},
	deepPurple: {
		base: "#673ab7",
		lighten5: "#ede7f6",
		lighten4: "#d1c4e9",
		lighten3: "#b39ddb",
		lighten2: "#9575cd",
		lighten1: "#7e57c2",
		darken1: "#5e35b1",
		darken2: "#512da8",
		darken3: "#4527a0",
		darken4: "#311b92",
		accent1: "#b388ff",
		accent2: "#7c4dff",
		accent3: "#651fff",
		accent4: "#6200ea"
	},
	indigo: {
		base: "#3f51b5",
		lighten5: "#e8eaf6",
		lighten4: "#c5cae9",
		lighten3: "#9fa8da",
		lighten2: "#7986cb",
		lighten1: "#5c6bc0",
		darken1: "#3949ab",
		darken2: "#303f9f",
		darken3: "#283593",
		darken4: "#1a237e",
		accent1: "#8c9eff",
		accent2: "#536dfe",
		accent3: "#3d5afe",
		accent4: "#304ffe"
	},
	blue: {
		base: "#2196f3",
		lighten5: "#e3f2fd",
		lighten4: "#bbdefb",
		lighten3: "#90caf9",
		lighten2: "#64b5f6",
		lighten1: "#42a5f5",
		darken1: "#1e88e5",
		darken2: "#1976d2",
		darken3: "#1565c0",
		darken4: "#0d47a1",
		accent1: "#82b1ff",
		accent2: "#448aff",
		accent3: "#2979ff",
		accent4: "#2962ff"
	},
	lightBlue: {
		base: "#03a9f4",
		lighten5: "#e1f5fe",
		lighten4: "#b3e5fc",
		lighten3: "#81d4fa",
		lighten2: "#4fc3f7",
		lighten1: "#29b6f6",
		darken1: "#039be5",
		darken2: "#0288d1",
		darken3: "#0277bd",
		darken4: "#01579b",
		accent1: "#80d8ff",
		accent2: "#40c4ff",
		accent3: "#00b0ff",
		accent4: "#0091ea"
	},
	cyan: {
		base: "#00bcd4",
		lighten5: "#e0f7fa",
		lighten4: "#b2ebf2",
		lighten3: "#80deea",
		lighten2: "#4dd0e1",
		lighten1: "#26c6da",
		darken1: "#00acc1",
		darken2: "#0097a7",
		darken3: "#00838f",
		darken4: "#006064",
		accent1: "#84ffff",
		accent2: "#18ffff",
		accent3: "#00e5ff",
		accent4: "#00b8d4"
	},
	teal: {
		base: "#009688",
		lighten5: "#e0f2f1",
		lighten4: "#b2dfdb",
		lighten3: "#80cbc4",
		lighten2: "#4db6ac",
		lighten1: "#26a69a",
		darken1: "#00897b",
		darken2: "#00796b",
		darken3: "#00695c",
		darken4: "#004d40",
		accent1: "#a7ffeb",
		accent2: "#64ffda",
		accent3: "#1de9b6",
		accent4: "#00bfa5"
	},
	green: {
		base: "#4caf50",
		lighten5: "#e8f5e9",
		lighten4: "#c8e6c9",
		lighten3: "#a5d6a7",
		lighten2: "#81c784",
		lighten1: "#66bb6a",
		darken1: "#43a047",
		darken2: "#388e3c",
		darken3: "#2e7d32",
		darken4: "#1b5e20",
		accent1: "#b9f6ca",
		accent2: "#69f0ae",
		accent3: "#00e676",
		accent4: "#00c853"
	},
	lightGreen: {
		base: "#8bc34a",
		lighten5: "#f1f8e9",
		lighten4: "#dcedc8",
		lighten3: "#c5e1a5",
		lighten2: "#aed581",
		lighten1: "#9ccc65",
		darken1: "#7cb342",
		darken2: "#689f38",
		darken3: "#558b2f",
		darken4: "#33691e",
		accent1: "#ccff90",
		accent2: "#b2ff59",
		accent3: "#76ff03",
		accent4: "#64dd17"
	},
	lime: {
		base: "#cddc39",
		lighten5: "#f9fbe7",
		lighten4: "#f0f4c3",
		lighten3: "#e6ee9c",
		lighten2: "#dce775",
		lighten1: "#d4e157",
		darken1: "#c0ca33",
		darken2: "#afb42b",
		darken3: "#9e9d24",
		darken4: "#827717",
		accent1: "#f4ff81",
		accent2: "#eeff41",
		accent3: "#c6ff00",
		accent4: "#aeea00"
	},
	yellow: {
		base: "#ffeb3b",
		lighten5: "#fffde7",
		lighten4: "#fff9c4",
		lighten3: "#fff59d",
		lighten2: "#fff176",
		lighten1: "#ffee58",
		darken1: "#fdd835",
		darken2: "#fbc02d",
		darken3: "#f9a825",
		darken4: "#f57f17",
		accent1: "#ffff8d",
		accent2: "#ffff00",
		accent3: "#ffea00",
		accent4: "#ffd600"
	},
	amber: {
		base: "#ffc107",
		lighten5: "#fff8e1",
		lighten4: "#ffecb3",
		lighten3: "#ffe082",
		lighten2: "#ffd54f",
		lighten1: "#ffca28",
		darken1: "#ffb300",
		darken2: "#ffa000",
		darken3: "#ff8f00",
		darken4: "#ff6f00",
		accent1: "#ffe57f",
		accent2: "#ffd740",
		accent3: "#ffc400",
		accent4: "#ffab00"
	},
	orange: {
		base: "#ff9800",
		lighten5: "#fff3e0",
		lighten4: "#ffe0b2",
		lighten3: "#ffcc80",
		lighten2: "#ffb74d",
		lighten1: "#ffa726",
		darken1: "#fb8c00",
		darken2: "#f57c00",
		darken3: "#ef6c00",
		darken4: "#e65100",
		accent1: "#ffd180",
		accent2: "#ffab40",
		accent3: "#ff9100",
		accent4: "#ff6d00"
	},
	deepOrange: {
		base: "#ff5722",
		lighten5: "#fbe9e7",
		lighten4: "#ffccbc",
		lighten3: "#ffab91",
		lighten2: "#ff8a65",
		lighten1: "#ff7043",
		darken1: "#f4511e",
		darken2: "#e64a19",
		darken3: "#d84315",
		darken4: "#bf360c",
		accent1: "#ff9e80",
		accent2: "#ff6e40",
		accent3: "#ff3d00",
		accent4: "#dd2c00"
	},
	brown: {
		base: "#795548",
		lighten5: "#efebe9",
		lighten4: "#d7ccc8",
		lighten3: "#bcaaa4",
		lighten2: "#a1887f",
		lighten1: "#8d6e63",
		darken1: "#6d4c41",
		darken2: "#5d4037",
		darken3: "#4e342e",
		darken4: "#3e2723"
	},
	blueGrey: {
		base: "#607d8b",
		lighten5: "#eceff1",
		lighten4: "#cfd8dc",
		lighten3: "#b0bec5",
		lighten2: "#90a4ae",
		lighten1: "#78909c",
		darken1: "#546e7a",
		darken2: "#455a64",
		darken3: "#37474f",
		darken4: "#263238"
	},
	grey: {
		base: "#9e9e9e",
		lighten5: "#fafafa",
		lighten4: "#f5f5f5",
		lighten3: "#eeeeee",
		lighten2: "#e0e0e0",
		lighten1: "#bdbdbd",
		darken1: "#757575",
		darken2: "#616161",
		darken3: "#424242",
		darken4: "#212121"
	},
	shades: {
		black: "#000000",
		white: "#ffffff",
		transparent: "#ffffff00"
	}
};
var { createVNode: _createVNode$74, createElementVNode: _createElementVNode$62, normalizeClass: _normalizeClass$48, normalizeStyle: _normalizeStyle$38 } = await importShared("vue");
const makeVColorPickerSwatchesProps = propsFactory({
	swatches: {
		type: Array,
		default: () => parseDefaultColors(colors_default)
	},
	disabled: Boolean,
	color: Object,
	maxHeight: [Number, String],
	...makeComponentProps()
}, "VColorPickerSwatches");
function parseDefaultColors(colors) {
	return Object.keys(colors).map((key) => {
		const color = colors[key];
		return color.base ? [
			color.base,
			color.darken4,
			color.darken3,
			color.darken2,
			color.darken1,
			color.lighten1,
			color.lighten2,
			color.lighten3,
			color.lighten4,
			color.lighten5
		] : [
			color.black,
			color.white,
			color.transparent
		];
	});
}
const VColorPickerSwatches = defineComponent({
	name: "VColorPickerSwatches",
	props: makeVColorPickerSwatchesProps(),
	emits: { "update:color": (color) => true },
	setup(props, _ref) {
		let { emit } = _ref;
		function onSwatchClick(hsva) {
			if (props.disabled || !hsva) return;
			emit("update:color", hsva);
		}
		useRender(() => _createElementVNode$62("div", {
			"class": _normalizeClass$48(["v-color-picker-swatches", props.class]),
			"style": _normalizeStyle$38([{ maxHeight: convertToUnit(props.maxHeight) }, props.style])
		}, [_createElementVNode$62("div", null, [props.swatches.map((swatch) => _createElementVNode$62("div", { "class": "v-color-picker-swatches__swatch" }, [swatch.map((color) => {
			const rgba$1 = parseColor(color);
			const hsva = RGBtoHSV(rgba$1);
			const background = RGBtoCSS(rgba$1);
			return _createElementVNode$62("div", {
				"class": _normalizeClass$48(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": props.disabled }]),
				"onClick": () => onSwatchClick(hsva)
			}, [_createElementVNode$62("div", { "style": { background } }, [props.color && deepEqual(props.color, hsva) ? _createVNode$74(VIcon, {
				"size": "x-small",
				"icon": "$success",
				"color": getContrast(color, "#FFFFFF") > 2 ? "white" : "black"
			}, null) : void 0])]);
		})]))])]));
		return {};
	}
});
const VPickerTitle = createSimpleFunctional("v-picker-title");
var { normalizeClass: _normalizeClass$47, normalizeStyle: _normalizeStyle$37, createVNode: _createVNode$73 } = await importShared("vue");
const makeVSheetProps = propsFactory({
	color: String,
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeLocationProps(),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
	name: "VSheet",
	props: makeVSheetProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { borderClasses } = useBorder(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { locationStyles } = useLocation(props);
		const { positionClasses } = usePosition(props);
		const { roundedClasses } = useRounded(props);
		useRender(() => _createVNode$73(props.tag, {
			"class": _normalizeClass$47([
				"v-sheet",
				themeClasses.value,
				backgroundColorClasses.value,
				borderClasses.value,
				elevationClasses.value,
				positionClasses.value,
				roundedClasses.value,
				props.class
			]),
			"style": _normalizeStyle$37([
				backgroundColorStyles.value,
				dimensionStyles.value,
				locationStyles.value,
				props.style
			])
		}, slots));
		return {};
	}
});
var { createVNode: _createVNode$72, createElementVNode: _createElementVNode$61, normalizeClass: _normalizeClass$46, normalizeStyle: _normalizeStyle$36, mergeProps: _mergeProps$44 } = await importShared("vue");
const makeVPickerProps = propsFactory({
	bgColor: String,
	divided: Boolean,
	landscape: Boolean,
	title: String,
	hideHeader: Boolean,
	hideTitle: Boolean,
	...makeVSheetProps()
}, "VPicker");
const VPicker = genericComponent()({
	name: "VPicker",
	props: makeVPickerProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		useRender(() => {
			const sheetProps = VSheet.filterProps(props);
			const hasTitle = !props.hideTitle && !!(props.title || slots.title);
			return _createVNode$72(VSheet, _mergeProps$44(sheetProps, {
				"color": props.bgColor,
				"class": [
					"v-picker",
					{
						"v-picker--divided": props.divided,
						"v-picker--landscape": props.landscape,
						"v-picker--with-actions": !!slots.actions
					},
					props.class
				],
				"style": props.style
			}), { default: () => [
				!props.hideHeader && _createElementVNode$61("div", {
					"key": "header",
					"class": _normalizeClass$46(["v-picker__header-wrapper", backgroundColorClasses.value]),
					"style": _normalizeStyle$36([backgroundColorStyles.value])
				}, [hasTitle && _createVNode$72(VPickerTitle, { "key": "picker-title" }, { default: () => [slots.title?.() ?? props.title] }), slots.header && _createElementVNode$61("div", { "class": "v-picker__header" }, [slots.header()])]),
				_createElementVNode$61("div", { "class": "v-picker__body" }, [slots.default?.()]),
				slots.actions && _createVNode$72(VDefaultsProvider, { "defaults": { VBtn: {
					slim: true,
					variant: "text"
				} } }, { default: () => [_createElementVNode$61("div", { "class": "v-picker__actions" }, [slots.actions()])] })
			] });
		});
		return {};
	}
});
var { Fragment: _Fragment$29, createVNode: _createVNode$71, createElementVNode: _createElementVNode$60, mergeProps: _mergeProps$43 } = await importShared("vue");
var { computed: computed$65, onBeforeMount, ref: ref$34, watch: watch$20 } = await importShared("vue");
const VColorPicker = defineComponent({
	name: "VColorPicker",
	props: propsFactory({
		canvasHeight: {
			type: [String, Number],
			default: 150
		},
		disabled: Boolean,
		dotSize: {
			type: [Number, String],
			default: 10
		},
		hideCanvas: Boolean,
		hideSliders: Boolean,
		hideInputs: Boolean,
		mode: {
			type: String,
			default: "rgba",
			validator: (v) => Object.keys(modes).includes(v)
		},
		modes: {
			type: Array,
			default: () => Object.keys(modes),
			validator: (v) => Array.isArray(v) && v.every((m) => Object.keys(modes).includes(m))
		},
		showSwatches: Boolean,
		swatches: Array,
		swatchesMaxHeight: {
			type: [Number, String],
			default: 150
		},
		modelValue: { type: [Object, String] },
		...makeVPickerProps({ hideHeader: true }),
		...pick(makeVColorPickerPreviewProps(), ["hideEyeDropper", "eyeDropperIcon"])
	}, "VColorPicker")(),
	emits: {
		"update:modelValue": (color) => true,
		"update:mode": (mode) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const mode = useProxiedModel(props, "mode");
		const hue = ref$34(null);
		const model = useProxiedModel(props, "modelValue", void 0, (v) => {
			if (v == null || v === "") return null;
			let c;
			try {
				c = RGBtoHSV(parseColor(v));
			} catch (err) {
				consoleWarn(err);
				return null;
			}
			return c;
		}, (v) => {
			if (!v) return null;
			return extractColor(v, props.modelValue);
		});
		const currentColor = computed$65(() => {
			return model.value ? {
				...model.value,
				h: hue.value ?? model.value.h
			} : null;
		});
		const { rtlClasses } = useRtl();
		let externalChange = true;
		watch$20(model, (v) => {
			if (!externalChange) {
				externalChange = true;
				return;
			}
			if (!v) return;
			hue.value = v.h;
		}, { immediate: true });
		const updateColor = (hsva) => {
			externalChange = false;
			hue.value = hsva.h;
			model.value = hsva;
		};
		onBeforeMount(() => {
			if (!props.modes.includes(mode.value)) mode.value = props.modes[0];
		});
		provideDefaults({ VSlider: {
			color: void 0,
			trackColor: void 0,
			trackFillColor: void 0
		} });
		useRender(() => {
			return _createVNode$71(VPicker, _mergeProps$43(VPicker.filterProps(props), {
				"class": [
					"v-color-picker",
					rtlClasses.value,
					props.class
				],
				"style": [{ "--v-color-picker-color-hsv": HSVtoCSS({
					...currentColor.value ?? nullColor,
					a: 1
				}) }, props.style]
			}), {
				...slots,
				default: () => _createElementVNode$60(_Fragment$29, null, [
					!props.hideCanvas && _createVNode$71(VColorPickerCanvas, {
						"key": "canvas",
						"color": currentColor.value,
						"onUpdate:color": updateColor,
						"disabled": props.disabled,
						"dotSize": props.dotSize,
						"width": props.width,
						"height": props.canvasHeight
					}, null),
					(!props.hideSliders || !props.hideInputs) && _createElementVNode$60("div", {
						"key": "controls",
						"class": "v-color-picker__controls"
					}, [!props.hideSliders && _createVNode$71(VColorPickerPreview, {
						"key": "preview",
						"color": currentColor.value,
						"onUpdate:color": updateColor,
						"hideAlpha": !mode.value.endsWith("a"),
						"disabled": props.disabled,
						"hideEyeDropper": props.hideEyeDropper,
						"eyeDropperIcon": props.eyeDropperIcon
					}, null), !props.hideInputs && _createVNode$71(VColorPickerEdit, {
						"key": "edit",
						"modes": props.modes,
						"mode": mode.value,
						"onUpdate:mode": (m) => mode.value = m,
						"color": currentColor.value,
						"onUpdate:color": updateColor,
						"disabled": props.disabled
					}, null)]),
					props.showSwatches && _createVNode$71(VColorPickerSwatches, {
						"key": "swatches",
						"color": currentColor.value,
						"onUpdate:color": updateColor,
						"maxHeight": props.swatchesMaxHeight,
						"swatches": props.swatches,
						"disabled": props.disabled
					}, null)
				])
			});
		});
		return {};
	}
});
var { Fragment: _Fragment$28, createVNode: _createVNode$70, mergeProps: _mergeProps$42, createElementVNode: _createElementVNode$59, createTextVNode: _createTextVNode$6, normalizeClass: _normalizeClass$45, normalizeStyle: _normalizeStyle$35 } = await importShared("vue");
var { computed: computed$64, mergeProps: mergeProps$5, nextTick: nextTick$11, ref: ref$33, shallowRef: shallowRef$21, toRef: toRef$29, watch: watch$19 } = await importShared("vue");
const makeVComboboxProps = propsFactory({
	alwaysFilter: Boolean,
	autoSelectFirst: { type: [Boolean, String] },
	clearOnSelect: {
		type: Boolean,
		default: true
	},
	delimiters: Array,
	...makeFilterProps({ filterKeys: ["title"] }),
	...makeSelectProps({
		hideNoData: true,
		returnObject: true
	}),
	...omit(makeVTextFieldProps({
		modelValue: null,
		role: "combobox"
	}), ["validationValue", "dirty"])
}, "VCombobox");
const VCombobox = genericComponent()({
	name: "VCombobox",
	props: makeVComboboxProps(),
	emits: {
		"update:focused": (focused) => true,
		"update:modelValue": (value) => true,
		"update:search": (value) => true,
		"update:menu": (value) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { t } = useLocale();
		const vTextFieldRef = ref$33();
		const isFocused = shallowRef$21(false);
		const isPristine = shallowRef$21(true);
		const listHasFocus = shallowRef$21(false);
		const vMenuRef = ref$33();
		const vVirtualScrollRef = ref$33();
		const selectionIndex = shallowRef$21(-1);
		let cleared = false;
		const { items, transformIn, transformOut } = useItems(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => vTextFieldRef.value?.color);
		const { InputIcon } = useInputIcon(props);
		const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(wrapInArray(v)), (v) => {
			const transformed = transformOut(v);
			return props.multiple ? transformed : transformed[0] ?? null;
		});
		const form = useForm(props);
		const closableChips = toRef$29(() => props.closableChips && !form.isReadonly.value && !form.isDisabled.value);
		const hasChips = computed$64(() => !!(props.chips || slots.chip));
		const hasSelectionSlot = computed$64(() => hasChips.value || !!slots.selection);
		const _search = shallowRef$21(!props.multiple && !hasSelectionSlot.value ? model.value[0]?.title ?? "" : "");
		const _searchLock = shallowRef$21(null);
		const search = computed$64({
			get: () => {
				return _search.value;
			},
			set: async (val) => {
				_search.value = val ?? "";
				if (val === null || val === "" && !props.multiple && !hasSelectionSlot.value) model.value = [];
				else if (!props.multiple && !hasSelectionSlot.value) {
					model.value = [transformItem$2(props, val)];
					nextTick$11(() => vVirtualScrollRef.value?.scrollToIndex(0));
				}
				if (val && props.multiple && props.delimiters?.length) {
					const values = splitByDelimiters(val);
					if (values.length > 1) {
						selectMultiple(values);
						_search.value = "";
					}
				}
				if (!val) selectionIndex.value = -1;
				isPristine.value = !val;
			}
		});
		const counterValue = computed$64(() => {
			return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : props.multiple ? model.value.length : search.value.length;
		});
		const { filteredItems, getMatches } = useFilter(props, items, () => _searchLock.value ?? (props.alwaysFilter || !isPristine.value ? search.value : ""));
		const displayItems = computed$64(() => {
			if (props.hideSelected && _searchLock.value === null) return filteredItems.value.filter((filteredItem) => !model.value.some((s) => s.value === filteredItem.value));
			return filteredItems.value;
		});
		const menuDisabled = computed$64(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
		const _menu = useProxiedModel(props, "menu");
		const menu = computed$64({
			get: () => _menu.value,
			set: (v) => {
				if (_menu.value && !v && vMenuRef.value?.ΨopenChildren.size) return;
				if (v && menuDisabled.value) return;
				_menu.value = v;
			}
		});
		const { menuId, ariaExpanded, ariaControls } = useMenuActivator(props, menu);
		watch$19(_search, (value) => {
			if (cleared) nextTick$11(() => cleared = false);
			else if (isFocused.value && !menu.value) menu.value = true;
			emit("update:search", value);
		});
		watch$19(model, (value) => {
			if (!props.multiple && !hasSelectionSlot.value) _search.value = value[0]?.title ?? "";
		});
		const selectedValues = computed$64(() => model.value.map((selection) => selection.value));
		const firstSelectableItem = computed$64(() => displayItems.value.find((x) => x.type === "item" && !x.props.disabled));
		const highlightFirst = computed$64(() => {
			return (props.autoSelectFirst === true || props.autoSelectFirst === "exact" && search.value === firstSelectableItem.value?.title) && displayItems.value.length > 0 && !isPristine.value && !listHasFocus.value;
		});
		const listRef = ref$33();
		const listEvents = useScrolling(listRef, vTextFieldRef);
		function onClear(e) {
			cleared = true;
			nextTick$11(() => cleared = false);
			if (props.openOnClear) menu.value = true;
		}
		function onMousedownControl() {
			if (menuDisabled.value) return;
			menu.value = true;
		}
		function onMousedownMenuIcon(e) {
			if (menuDisabled.value) return;
			if (isFocused.value) {
				e.preventDefault();
				e.stopPropagation();
			}
			menu.value = !menu.value;
		}
		function onListKeydown(e) {
			if (checkPrintable(e) || e.key === "Backspace") vTextFieldRef.value?.focus();
		}
		function onKeydown$1(e) {
			if (isComposingIgnoreKey(e) || form.isReadonly.value) return;
			const selectionStart = vTextFieldRef.value?.selectionStart;
			const length = model.value.length;
			if ([
				"Enter",
				"ArrowDown",
				"ArrowUp"
			].includes(e.key)) e.preventDefault();
			if (["Enter", "ArrowDown"].includes(e.key)) menu.value = true;
			if (["Escape"].includes(e.key)) menu.value = false;
			if (highlightFirst.value && ["Enter", "Tab"].includes(e.key) && firstSelectableItem.value && !model.value.some((_ref2) => {
				let { value } = _ref2;
				return value === firstSelectableItem.value.value;
			})) select(firstSelectableItem.value);
			if (e.key === "ArrowDown" && highlightFirst.value) listRef.value?.focus("next");
			if (e.key === "Enter" && search.value) {
				select(transformItem$2(props, search.value), true, true);
				if (hasSelectionSlot.value) _search.value = "";
			}
			if (["Backspace", "Delete"].includes(e.key)) {
				if (!props.multiple && hasSelectionSlot.value && model.value.length > 0 && !search.value) return select(model.value[0], false);
				if (~selectionIndex.value) {
					e.preventDefault();
					const originalSelectionIndex = selectionIndex.value;
					select(model.value[selectionIndex.value], false);
					selectionIndex.value = originalSelectionIndex >= length - 1 ? length - 2 : originalSelectionIndex;
				} else if (e.key === "Backspace" && !search.value) selectionIndex.value = length - 1;
				return;
			}
			if (!props.multiple) return;
			if (e.key === "ArrowLeft") {
				if (selectionIndex.value < 0 && selectionStart && selectionStart > 0) return;
				const prev = selectionIndex.value > -1 ? selectionIndex.value - 1 : length - 1;
				if (model.value[prev]) selectionIndex.value = prev;
				else {
					selectionIndex.value = -1;
					vTextFieldRef.value?.setSelectionRange(search.value.length, search.value.length);
				}
			} else if (e.key === "ArrowRight") {
				if (selectionIndex.value < 0) return;
				const next = selectionIndex.value + 1;
				if (model.value[next]) selectionIndex.value = next;
				else {
					selectionIndex.value = -1;
					vTextFieldRef.value?.setSelectionRange(0, 0);
				}
			} else if (~selectionIndex.value && checkPrintable(e)) selectionIndex.value = -1;
		}
		function onPaste(e) {
			const values = splitByDelimiters(e?.clipboardData?.getData("Text") ?? "");
			if (values.length > 1 && props.multiple) {
				e.preventDefault();
				selectMultiple(values);
			}
		}
		function onAfterEnter() {
			if (props.eager) vVirtualScrollRef.value?.calculateVisibleItems();
		}
		function onAfterLeave() {
			if (isFocused.value) vTextFieldRef.value?.focus();
			isPristine.value = true;
			_searchLock.value = null;
		}
		function select(item) {
			let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
			let keepMenu = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
			if (!item || item.props.disabled) return;
			if (props.multiple) {
				const index = model.value.findIndex((selection) => (props.valueComparator || deepEqual)(selection.value, item.value));
				const add = set == null ? !~index : set;
				if (~index) {
					const value = add ? [...model.value, item] : [...model.value];
					value.splice(index, 1);
					model.value = value;
				} else if (add) model.value = [...model.value, item];
				if (props.clearOnSelect) search.value = "";
			} else {
				const add = set !== false;
				model.value = add ? [item] : [];
				if ((!isPristine.value || props.alwaysFilter) && _search.value) _searchLock.value = _search.value;
				_search.value = add && !hasSelectionSlot.value ? item.title : "";
				nextTick$11(() => {
					menu.value = keepMenu;
					isPristine.value = true;
				});
			}
		}
		function splitByDelimiters(val) {
			const signsToMatch = ["\n", ...props.delimiters ?? []].map(escapeForRegex).join("|");
			return val.split(/* @__PURE__ */ new RegExp(`(?:${signsToMatch})+`));
		}
		async function selectMultiple(values) {
			for (let value of values) {
				value = value.trim();
				if (value) {
					select(transformItem$2(props, value));
					await nextTick$11();
				}
			}
		}
		function onFocusin(e) {
			isFocused.value = true;
			setTimeout(() => {
				listHasFocus.value = true;
			});
		}
		function onFocusout(e) {
			listHasFocus.value = false;
		}
		watch$19(isFocused, (val, oldVal) => {
			if (val || val === oldVal) return;
			selectionIndex.value = -1;
			menu.value = false;
			if (search.value) {
				if (props.multiple) {
					select(transformItem$2(props, search.value));
					return;
				}
				if (!hasSelectionSlot.value) return;
				if (model.value.some((_ref3) => {
					let { title } = _ref3;
					return title === search.value;
				})) _search.value = "";
				else select(transformItem$2(props, search.value));
			}
		});
		watch$19(menu, (val) => {
			if (!props.hideSelected && val && model.value.length && isPristine.value) {
				const index = displayItems.value.findIndex((item) => model.value.some((s) => (props.valueComparator || deepEqual)(s.value, item.value)));
				IN_BROWSER && window.requestAnimationFrame(() => {
					index >= 0 && vVirtualScrollRef.value?.scrollToIndex(index);
				});
			}
			if (val) _searchLock.value = null;
		});
		watch$19(items, (newVal, oldVal) => {
			if (menu.value) return;
			if (isFocused.value && !oldVal.length && newVal.length) menu.value = true;
		});
		useRender(() => {
			const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
			const isDirty = model.value.length > 0;
			const textFieldProps = VTextField.filterProps(props);
			return _createVNode$70(VTextField, _mergeProps$42({ "ref": vTextFieldRef }, textFieldProps, {
				"modelValue": search.value,
				"onUpdate:modelValue": ($event) => search.value = $event,
				"focused": isFocused.value,
				"onUpdate:focused": ($event) => isFocused.value = $event,
				"validationValue": model.externalValue,
				"counterValue": counterValue.value,
				"dirty": isDirty,
				"class": [
					"v-combobox",
					{
						"v-combobox--active-menu": menu.value,
						"v-combobox--chips": !!props.chips,
						"v-combobox--selection-slot": !!hasSelectionSlot.value,
						"v-combobox--selecting-index": selectionIndex.value > -1,
						[`v-combobox--${props.multiple ? "multiple" : "single"}`]: true
					},
					props.class
				],
				"style": props.style,
				"readonly": form.isReadonly.value,
				"placeholder": isDirty ? void 0 : props.placeholder,
				"onClick:clear": onClear,
				"onMousedown:control": onMousedownControl,
				"onKeydown": onKeydown$1,
				"onPaste": onPaste,
				"aria-expanded": ariaExpanded.value,
				"aria-controls": ariaControls.value
			}), {
				...slots,
				default: (_ref4) => {
					let { id } = _ref4;
					return _createElementVNode$59(_Fragment$28, null, [_createVNode$70(VMenu, _mergeProps$42({
						"id": menuId.value,
						"ref": vMenuRef,
						"modelValue": menu.value,
						"onUpdate:modelValue": ($event) => menu.value = $event,
						"activator": "parent",
						"contentClass": "v-combobox__content",
						"disabled": menuDisabled.value,
						"eager": props.eager,
						"maxHeight": 310,
						"openOnClick": false,
						"closeOnContentClick": false,
						"onAfterEnter": onAfterEnter,
						"onAfterLeave": onAfterLeave
					}, props.menuProps), { default: () => [hasList && _createVNode$70(VList, _mergeProps$42({
						"ref": listRef,
						"filterable": true,
						"selected": selectedValues.value,
						"selectStrategy": props.multiple ? "independent" : "single-independent",
						"onMousedown": (e) => e.preventDefault(),
						"selectable": !!displayItems.value.length,
						"onKeydown": onListKeydown,
						"onFocusin": onFocusin,
						"onFocusout": onFocusout,
						"tabindex": "-1",
						"aria-live": "polite",
						"aria-labelledby": `${id.value}-label`,
						"aria-multiselectable": props.multiple,
						"color": props.itemColor ?? props.color
					}, listEvents, props.listProps), { default: () => [
						slots["prepend-item"]?.(),
						!displayItems.value.length && !props.hideNoData && (slots["no-data"]?.() ?? _createVNode$70(VListItem, {
							"key": "no-data",
							"title": t(props.noDataText)
						}, null)),
						_createVNode$70(VVirtualScroll, {
							"ref": vVirtualScrollRef,
							"renderless": true,
							"items": displayItems.value,
							"itemKey": "value"
						}, { default: (_ref5) => {
							let { item, index, itemRef } = _ref5;
							const itemProps = mergeProps$5(item.props, {
								ref: itemRef,
								key: item.value,
								active: highlightFirst.value && item === firstSelectableItem.value ? true : void 0,
								onClick: () => select(item, null),
								"aria-posinset": index + 1,
								"aria-setsize": displayItems.value.length
							});
							if (item.type === "divider") return slots.divider?.({
								props: item.raw,
								index
							}) ?? _createVNode$70(VDivider, _mergeProps$42(item.props, { "key": `divider-${index}` }), null);
							if (item.type === "subheader") return slots.subheader?.({
								props: item.raw,
								index
							}) ?? _createVNode$70(VListSubheader, _mergeProps$42(item.props, { "key": `subheader-${index}` }), null);
							return slots.item?.({
								item,
								index,
								props: itemProps
							}) ?? _createVNode$70(VListItem, _mergeProps$42(itemProps, { "role": "option" }), {
								prepend: (_ref6) => {
									let { isSelected } = _ref6;
									return _createElementVNode$59(_Fragment$28, null, [
										props.multiple && !props.hideSelected ? _createVNode$70(VCheckboxBtn, {
											"key": item.value,
											"modelValue": isSelected,
											"ripple": false,
											"tabindex": "-1",
											"aria-hidden": true,
											"onClick": (event) => event.preventDefault()
										}, null) : void 0,
										item.props.prependAvatar && _createVNode$70(VAvatar, { "image": item.props.prependAvatar }, null),
										item.props.prependIcon && _createVNode$70(VIcon, { "icon": item.props.prependIcon }, null)
									]);
								},
								title: () => {
									return isPristine.value ? item.title : highlightResult("v-combobox", item.title, getMatches(item)?.title);
								}
							});
						} }),
						slots["append-item"]?.()
					] })] }), model.value.map((item, index) => {
						function onChipClose(e) {
							e.stopPropagation();
							e.preventDefault();
							select(item, false);
						}
						const slotProps = mergeProps$5(VChip.filterProps(item.props), {
							"onClick:close": onChipClose,
							onKeydown(e) {
								if (e.key !== "Enter" && e.key !== " ") return;
								e.preventDefault();
								e.stopPropagation();
								onChipClose(e);
							},
							onMousedown(e) {
								e.preventDefault();
								e.stopPropagation();
							},
							modelValue: true,
							"onUpdate:modelValue": void 0
						});
						const hasSlot = hasChips.value ? !!slots.chip : !!slots.selection;
						const slotContent = hasSlot ? ensureValidVNode(hasChips.value ? slots.chip({
							item,
							index,
							props: slotProps
						}) : slots.selection({
							item,
							index
						})) : void 0;
						if (hasSlot && !slotContent) return void 0;
						return _createElementVNode$59("div", {
							"key": item.value,
							"class": _normalizeClass$45(["v-combobox__selection", index === selectionIndex.value && ["v-combobox__selection--selected", textColorClasses.value]]),
							"style": _normalizeStyle$35(index === selectionIndex.value ? textColorStyles.value : {})
						}, [hasChips.value ? !slots.chip ? _createVNode$70(VChip, _mergeProps$42({
							"key": "chip",
							"closable": closableChips.value,
							"size": "small",
							"text": item.title,
							"disabled": item.props.disabled
						}, slotProps), null) : _createVNode$70(VDefaultsProvider, {
							"key": "chip-defaults",
							"defaults": { VChip: {
								closable: closableChips.value,
								size: "small",
								text: item.title
							} }
						}, { default: () => [slotContent] }) : slotContent ?? _createElementVNode$59("span", { "class": "v-combobox__selection-text" }, [item.title, props.multiple && index < model.value.length - 1 && _createElementVNode$59("span", { "class": "v-combobox__selection-comma" }, [_createTextVNode$6(",")])])]);
					})]);
				},
				"append-inner": function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return _createElementVNode$59(_Fragment$28, null, [
						slots["append-inner"]?.(...args),
						(!props.hideNoData || props.items.length) && props.menuIcon ? _createVNode$70(VIcon, {
							"class": "v-combobox__menu-icon",
							"color": vTextFieldRef.value?.fieldIconColor,
							"icon": props.menuIcon,
							"onMousedown": onMousedownMenuIcon,
							"onClick": noop,
							"aria-hidden": true,
							"tabindex": "-1"
						}, null) : void 0,
						props.appendInnerIcon && _createVNode$70(InputIcon, {
							"key": "append-icon",
							"name": "appendInner",
							"color": args[0].iconColor.value
						}, null)
					]);
				}
			});
		});
		return forwardRefs({
			isFocused,
			isPristine,
			menu,
			search,
			selectionIndex,
			filteredItems,
			select
		}, vTextFieldRef);
	}
});
var { Fragment: _Fragment$27, mergeProps: _mergeProps$41, createVNode: _createVNode$69, createElementVNode: _createElementVNode$58 } = await importShared("vue");
var { computed: computed$63, ref: ref$32, watchEffect: watchEffect$10 } = await importShared("vue");
const makeVConfirmEditProps = propsFactory({
	modelValue: null,
	color: String,
	cancelText: {
		type: String,
		default: "$vuetify.confirmEdit.cancel"
	},
	okText: {
		type: String,
		default: "$vuetify.confirmEdit.ok"
	},
	disabled: {
		type: [Boolean, Array],
		default: void 0
	},
	hideActions: Boolean
}, "VConfirmEdit");
const VConfirmEdit = genericComponent()({
	name: "VConfirmEdit",
	props: makeVConfirmEditProps(),
	emits: {
		cancel: () => true,
		save: (value) => true,
		"update:modelValue": (value) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const internalModel = ref$32();
		watchEffect$10(() => {
			internalModel.value = structuredClone(deepToRaw(model.value));
		});
		const { t } = useLocale();
		const isPristine = computed$63(() => {
			return deepEqual(model.value, internalModel.value);
		});
		function isActionDisabled(action) {
			if (typeof props.disabled === "boolean") return props.disabled;
			if (Array.isArray(props.disabled)) return props.disabled.includes(action);
			return isPristine.value;
		}
		const isSaveDisabled = computed$63(() => isActionDisabled("save"));
		const isCancelDisabled = computed$63(() => isActionDisabled("cancel"));
		function save() {
			model.value = internalModel.value;
			emit("save", internalModel.value);
		}
		function cancel() {
			internalModel.value = structuredClone(deepToRaw(model.value));
			emit("cancel");
		}
		function actions(actionsProps) {
			return _createElementVNode$58(_Fragment$27, null, [_createVNode$69(VBtn, _mergeProps$41({
				"disabled": isCancelDisabled.value,
				"variant": "text",
				"color": props.color,
				"onClick": cancel,
				"text": t(props.cancelText)
			}, actionsProps), null), _createVNode$69(VBtn, _mergeProps$41({
				"disabled": isSaveDisabled.value,
				"variant": "text",
				"color": props.color,
				"onClick": save,
				"text": t(props.okText)
			}, actionsProps), null)]);
		}
		let actionsUsed = false;
		useRender(() => {
			return _createElementVNode$58(_Fragment$27, null, [slots.default?.({
				model: internalModel,
				save,
				cancel,
				isPristine: isPristine.value,
				get actions() {
					actionsUsed = true;
					return actions;
				}
			}), !props.hideActions && !actionsUsed && actions()]);
		});
		return {
			save,
			cancel,
			isPristine
		};
	}
});
var { inject: inject$11, provide: provide$8, toRaw: toRaw$3, toRef: toRef$28 } = await importShared("vue");
const makeDataTableExpandProps = propsFactory({
	expandOnClick: Boolean,
	showExpand: Boolean,
	expanded: {
		type: Array,
		default: () => []
	}
}, "DataTable-expand");
const VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
function provideExpanded(props) {
	const expandOnClick = toRef$28(() => props.expandOnClick);
	const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
		return new Set(v);
	}, (v) => {
		return [...v.values()];
	});
	function expand(item, value) {
		const newExpanded = new Set(expanded.value);
		const rawValue = toRaw$3(item.value);
		if (!value) {
			const item$1 = [...expanded.value].find((x) => toRaw$3(x) === rawValue);
			newExpanded.delete(item$1);
		} else newExpanded.add(rawValue);
		expanded.value = newExpanded;
	}
	function isExpanded(item) {
		const rawValue = toRaw$3(item.value);
		return [...expanded.value].some((x) => toRaw$3(x) === rawValue);
	}
	function toggleExpand(item) {
		expand(item, !isExpanded(item));
	}
	const data = {
		expand,
		expanded,
		expandOnClick,
		isExpanded,
		toggleExpand
	};
	provide$8(VDataTableExpandedKey, data);
	return data;
}
function useExpanded() {
	const data = inject$11(VDataTableExpandedKey);
	if (!data) throw new Error("foo");
	return data;
}
var { computed: computed$62, inject: inject$10, provide: provide$7, ref: ref$31, toValue } = await importShared("vue");
const makeDataTableGroupProps = propsFactory({ groupBy: {
	type: Array,
	default: () => []
} }, "DataTable-group");
var VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
function createGroupBy(props) {
	return { groupBy: useProxiedModel(props, "groupBy") };
}
function provideGroupBy(options) {
	const { disableSort, groupBy, sortBy } = options;
	const opened = ref$31(/* @__PURE__ */ new Set());
	const sortByWithGroups = computed$62(() => {
		return groupBy.value.map((val) => ({
			...val,
			order: val.order ?? false
		})).concat(disableSort?.value ? [] : sortBy.value);
	});
	function isGroupOpen(group) {
		return opened.value.has(group.id);
	}
	function toggleGroup(group) {
		const newOpened = new Set(opened.value);
		if (!isGroupOpen(group)) newOpened.add(group.id);
		else newOpened.delete(group.id);
		opened.value = newOpened;
	}
	function extractRows(items) {
		function dive(group) {
			const arr = [];
			for (const item of group.items) if ("type" in item && item.type === "group") arr.push(...dive(item));
			else arr.push(item);
			return [...new Set(arr)];
		}
		return dive({
			type: "group",
			items,
			id: "dummy",
			key: "dummy",
			value: "dummy",
			depth: 0
		});
	}
	const data = {
		sortByWithGroups,
		toggleGroup,
		opened,
		groupBy,
		extractRows,
		isGroupOpen
	};
	provide$7(VDataTableGroupSymbol, data);
	return data;
}
function useGroupBy() {
	const data = inject$10(VDataTableGroupSymbol);
	if (!data) throw new Error("Missing group!");
	return data;
}
function groupItemsByProperty(items, groupBy) {
	if (!items.length) return [];
	const groups = /* @__PURE__ */ new Map();
	for (const item of items) {
		const value = getObjectValueByPath(item.raw, groupBy);
		if (!groups.has(value)) groups.set(value, []);
		groups.get(value).push(item);
	}
	return groups;
}
function groupItems(items, groupBy) {
	let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
	let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
	if (!groupBy.length) return [];
	const groupedItems = groupItemsByProperty(items, groupBy[0]);
	const groups = [];
	const rest = groupBy.slice(1);
	groupedItems.forEach((items$1, value) => {
		const key = groupBy[0];
		const id = `${prefix}_${key}_${value}`;
		groups.push({
			depth,
			id,
			key,
			value,
			items: rest.length ? groupItems(items$1, rest, depth + 1, id) : items$1,
			type: "group"
		});
	});
	return groups;
}
function flattenItems(items, opened, hasSummary) {
	const flatItems = [];
	for (const item of items) if ("type" in item && item.type === "group") {
		if (item.value != null) flatItems.push(item);
		if (opened.has(item.id) || item.value == null) {
			flatItems.push(...flattenItems(item.items, opened, hasSummary));
			if (hasSummary) flatItems.push({
				...item,
				type: "group-summary"
			});
		}
	} else flatItems.push(item);
	return flatItems;
}
function useGroupedItems(items, groupBy, opened, hasSummary) {
	return { flatItems: computed$62(() => {
		if (!groupBy.value.length) return items.value;
		return flattenItems(groupItems(items.value, groupBy.value.map((item) => item.key)), opened.value, toValue(hasSummary));
	}) };
}
var { watch: watch$18 } = await importShared("vue");
function useOptions(_ref) {
	let { page, itemsPerPage, sortBy, groupBy, search } = _ref;
	const vm = getCurrentInstance("VDataTable");
	const options = () => ({
		page: page.value,
		itemsPerPage: itemsPerPage.value,
		sortBy: sortBy.value,
		groupBy: groupBy.value,
		search: search.value
	});
	let oldOptions = null;
	watch$18(options, (value) => {
		if (deepEqual(oldOptions, value)) return;
		if (oldOptions && oldOptions.search !== value.search) page.value = 1;
		vm.emit("update:options", value);
		oldOptions = value;
	}, {
		deep: true,
		immediate: true
	});
}
var { computed: computed$61, inject: inject$9, provide: provide$6, watch: watch$17 } = await importShared("vue");
const makeDataTablePaginateProps = propsFactory({
	page: {
		type: [Number, String],
		default: 1
	},
	itemsPerPage: {
		type: [Number, String],
		default: 10
	}
}, "DataTable-paginate");
var VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
function createPagination(props) {
	return {
		page: useProxiedModel(props, "page", void 0, (value) => Number(value ?? 1)),
		itemsPerPage: useProxiedModel(props, "itemsPerPage", void 0, (value) => Number(value ?? 10))
	};
}
function providePagination(options) {
	const { page, itemsPerPage, itemsLength } = options;
	const startIndex = computed$61(() => {
		if (itemsPerPage.value === -1) return 0;
		return itemsPerPage.value * (page.value - 1);
	});
	const stopIndex = computed$61(() => {
		if (itemsPerPage.value === -1) return itemsLength.value;
		return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
	});
	const pageCount = computed$61(() => {
		if (itemsPerPage.value === -1 || itemsLength.value === 0) return 1;
		return Math.ceil(itemsLength.value / itemsPerPage.value);
	});
	watch$17([page, pageCount], () => {
		if (page.value > pageCount.value) page.value = pageCount.value;
	});
	function setItemsPerPage(value) {
		itemsPerPage.value = value;
		page.value = 1;
	}
	function nextPage() {
		page.value = clamp(page.value + 1, 1, pageCount.value);
	}
	function prevPage() {
		page.value = clamp(page.value - 1, 1, pageCount.value);
	}
	function setPage(value) {
		page.value = clamp(value, 1, pageCount.value);
	}
	const data = {
		page,
		itemsPerPage,
		startIndex,
		stopIndex,
		pageCount,
		itemsLength,
		nextPage,
		prevPage,
		setPage,
		setItemsPerPage
	};
	provide$6(VDataTablePaginationSymbol, data);
	return data;
}
function usePagination() {
	const data = inject$9(VDataTablePaginationSymbol);
	if (!data) throw new Error("Missing pagination!");
	return data;
}
function usePaginatedItems(options) {
	const vm = getCurrentInstance("usePaginatedItems");
	const { items, startIndex, stopIndex, itemsPerPage } = options;
	const paginatedItems = computed$61(() => {
		if (itemsPerPage.value <= 0) return items.value;
		return items.value.slice(startIndex.value, stopIndex.value);
	});
	watch$17(paginatedItems, (val) => {
		vm.emit("update:currentItems", val);
	}, { immediate: true });
	return { paginatedItems };
}
var { computed: computed$60, inject: inject$8, provide: provide$5, shallowRef: shallowRef$20, toRef: toRef$27 } = await importShared("vue");
var singleSelectStrategy = {
	showSelectAll: false,
	allSelected: () => [],
	select: (_ref) => {
		let { items, value } = _ref;
		return new Set(value ? [items[0]?.value] : []);
	},
	selectAll: (_ref2) => {
		let { selected } = _ref2;
		return selected;
	}
};
var pageSelectStrategy = {
	showSelectAll: true,
	allSelected: (_ref3) => {
		let { currentPage } = _ref3;
		return currentPage;
	},
	select: (_ref4) => {
		let { items, value, selected } = _ref4;
		for (const item of items) if (value) selected.add(item.value);
		else selected.delete(item.value);
		return selected;
	},
	selectAll: (_ref5) => {
		let { value, currentPage, selected } = _ref5;
		return pageSelectStrategy.select({
			items: currentPage,
			value,
			selected
		});
	}
};
var allSelectStrategy = {
	showSelectAll: true,
	allSelected: (_ref6) => {
		let { allItems } = _ref6;
		return allItems;
	},
	select: (_ref7) => {
		let { items, value, selected } = _ref7;
		for (const item of items) if (value) selected.add(item.value);
		else selected.delete(item.value);
		return selected;
	},
	selectAll: (_ref8) => {
		let { value, allItems } = _ref8;
		return new Set(value ? allItems.map((item) => item.value) : []);
	}
};
const makeDataTableSelectProps = propsFactory({
	showSelect: Boolean,
	selectStrategy: {
		type: [String, Object],
		default: "page"
	},
	modelValue: {
		type: Array,
		default: () => []
	},
	valueComparator: Function
}, "DataTable-select");
const VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
function provideSelection(props, _ref9) {
	let { allItems, currentPage } = _ref9;
	const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
		const customComparator = props.valueComparator;
		if (customComparator) return new Set(wrapInArray(v).map((v$1) => {
			return allItems.value.find((item) => customComparator(v$1, item.value))?.value ?? v$1;
		}));
		return new Set(wrapInArray(v).map((v$1) => {
			return isPrimitive(v$1) ? allItems.value.find((item) => v$1 === item.value)?.value ?? v$1 : allItems.value.find((item) => deepEqual(v$1, item.value))?.value ?? v$1;
		}));
	}, (v) => {
		return [...v.values()];
	});
	const allSelectable = computed$60(() => allItems.value.filter((item) => item.selectable));
	const currentPageSelectable = computed$60(() => currentPage.value.filter((item) => item.selectable));
	const selectStrategy = computed$60(() => {
		if (typeof props.selectStrategy === "object") return props.selectStrategy;
		switch (props.selectStrategy) {
			case "single": return singleSelectStrategy;
			case "all": return allSelectStrategy;
			case "page":
			default: return pageSelectStrategy;
		}
	});
	const lastSelectedIndex = shallowRef$20(null);
	function isSelected(items) {
		return wrapInArray(items).every((item) => selected.value.has(item.value));
	}
	function isSomeSelected(items) {
		return wrapInArray(items).some((item) => selected.value.has(item.value));
	}
	function select(items, value) {
		selected.value = selectStrategy.value.select({
			items,
			value,
			selected: new Set(selected.value)
		});
	}
	function toggleSelect(item, index, event) {
		const items = [];
		index = index ?? currentPage.value.findIndex((i) => i.value === item.value);
		if (props.selectStrategy !== "single" && event?.shiftKey && lastSelectedIndex.value !== null) {
			const [start, end] = [lastSelectedIndex.value, index].sort((a, b) => a - b);
			items.push(...currentPage.value.slice(start, end + 1).filter((item$1) => item$1.selectable));
		} else {
			items.push(item);
			lastSelectedIndex.value = index;
		}
		select(items, !isSelected([item]));
	}
	function selectAll(value) {
		selected.value = selectStrategy.value.selectAll({
			value,
			allItems: allSelectable.value,
			currentPage: currentPageSelectable.value,
			selected: new Set(selected.value)
		});
	}
	const data = {
		toggleSelect,
		select,
		selectAll,
		isSelected,
		isSomeSelected,
		someSelected: computed$60(() => selected.value.size > 0),
		allSelected: computed$60(() => {
			const items = selectStrategy.value.allSelected({
				allItems: allSelectable.value,
				currentPage: currentPageSelectable.value
			});
			return !!items.length && isSelected(items);
		}),
		showSelectAll: toRef$27(() => selectStrategy.value.showSelectAll),
		lastSelectedIndex,
		selectStrategy
	};
	provide$5(VDataTableSelectionSymbol, data);
	return data;
}
function useSelection() {
	const data = inject$8(VDataTableSelectionSymbol);
	if (!data) throw new Error("Missing selection!");
	return data;
}
var { computed: computed$59, inject: inject$7, provide: provide$4, toRef: toRef$26 } = await importShared("vue");
const makeDataTableSortProps = propsFactory({
	initialSortOrder: {
		type: String,
		default: "asc",
		validator: (v) => !v || ["asc", "desc"].includes(v)
	},
	sortBy: {
		type: Array,
		default: () => []
	},
	customKeySort: Object,
	multiSort: {
		type: [Boolean, Object],
		default: false
	},
	mustSort: Boolean
}, "DataTable-sort");
var VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
function createSort(props) {
	const initialSortOrder = toRef$26(() => props.initialSortOrder);
	const sortBy = useProxiedModel(props, "sortBy");
	const mustSort = toRef$26(() => props.mustSort);
	return {
		initialSortOrder,
		sortBy,
		multiSort: toRef$26(() => props.multiSort),
		mustSort
	};
}
function resolveMultiSort(multiSort, event) {
	if (!isObject(multiSort)) return { active: !!multiSort };
	const { key, mode, modifier } = multiSort;
	const reverseMode = modifier === "alt" && event?.altKey || modifier === "shift" && event?.shiftKey;
	return {
		active: !key || event?.ctrlKey || event?.metaKey || false,
		mode: reverseMode ? mode === "append" ? "prepend" : "append" : mode
	};
}
function provideSort(options) {
	const { initialSortOrder, sortBy, mustSort, multiSort, page } = options;
	const toggleSort = (column$1, event) => {
		if (column$1.key == null) return;
		let newSortBy = sortBy.value.map((x) => ({ ...x })) ?? [];
		const item = newSortBy.find((x) => x.key === column$1.key);
		const initialOrder = initialSortOrder.value;
		const secondaryOrder = initialSortOrder.value === "desc" ? "asc" : "desc";
		if (!item) {
			const { active, mode } = resolveMultiSort(multiSort.value, event);
			if (active) if (mode === "prepend") newSortBy.unshift({
				key: column$1.key,
				order: initialOrder
			});
			else newSortBy.push({
				key: column$1.key,
				order: initialOrder
			});
			else newSortBy = [{
				key: column$1.key,
				order: initialOrder
			}];
		} else if (item.order === secondaryOrder) if (mustSort.value && newSortBy.length === 1) item.order = initialSortOrder.value;
		else newSortBy = newSortBy.filter((x) => x.key !== column$1.key);
		else item.order = secondaryOrder;
		sortBy.value = newSortBy;
		if (page) page.value = 1;
	};
	function isSorted(column$1) {
		return !!sortBy.value.find((item) => item.key === column$1.key);
	}
	const data = {
		sortBy,
		toggleSort,
		isSorted
	};
	provide$4(VDataTableSortSymbol, data);
	return data;
}
function useSort() {
	const data = inject$7(VDataTableSortSymbol);
	if (!data) throw new Error("Missing sort!");
	return data;
}
function useSortedItems(props, items, sortBy, options) {
	const locale = useLocale();
	return { sortedItems: computed$59(() => {
		if (!sortBy.value.length) return items.value;
		return sortItems(items.value, sortBy.value, locale.current.value, {
			transform: options?.transform,
			sortFunctions: {
				...props.customKeySort,
				...options?.sortFunctions?.value
			},
			sortRawFunctions: options?.sortRawFunctions?.value
		});
	}) };
}
function sortItems(items, sortByItems, locale, options) {
	const stringCollator = new Intl.Collator(locale, {
		sensitivity: "accent",
		usage: "sort"
	});
	return items.map((item) => [item, options?.transform ? options.transform(item) : item]).sort((a, b) => {
		for (let i = 0; i < sortByItems.length; i++) {
			let hasCustomResult = false;
			const sortKey = sortByItems[i].key;
			const sortOrder = sortByItems[i].order ?? "asc";
			if (sortOrder === false) continue;
			let sortA = getObjectValueByPath(a[1], sortKey);
			let sortB = getObjectValueByPath(b[1], sortKey);
			let sortARaw = a[0].raw;
			let sortBRaw = b[0].raw;
			if (sortOrder === "desc") {
				[sortA, sortB] = [sortB, sortA];
				[sortARaw, sortBRaw] = [sortBRaw, sortARaw];
			}
			if (options?.sortRawFunctions?.[sortKey]) {
				const customResult = options.sortRawFunctions[sortKey](sortARaw, sortBRaw);
				if (customResult == null) continue;
				hasCustomResult = true;
				if (customResult) return customResult;
			}
			if (options?.sortFunctions?.[sortKey]) {
				const customResult = options.sortFunctions[sortKey](sortA, sortB);
				if (customResult == null) continue;
				hasCustomResult = true;
				if (customResult) return customResult;
			}
			if (hasCustomResult) continue;
			if (sortA instanceof Date && sortB instanceof Date) {
				sortA = sortA.getTime();
				sortB = sortB.getTime();
			}
			[sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
			if (sortA !== sortB) {
				if (isEmpty(sortA) && isEmpty(sortB)) return 0;
				if (isEmpty(sortA)) return -1;
				if (isEmpty(sortB)) return 1;
				if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
				return stringCollator.compare(sortA, sortB);
			}
		}
		return 0;
	}).map((_ref) => {
		let [item] = _ref;
		return item;
	});
}
var { computed: computed$58 } = await importShared("vue");
const makeDataIteratorItemsProps = propsFactory({
	items: {
		type: Array,
		default: () => []
	},
	itemValue: {
		type: [
			String,
			Array,
			Function
		],
		default: "id"
	},
	itemSelectable: {
		type: [
			String,
			Array,
			Function
		],
		default: null
	},
	returnObject: Boolean
}, "DataIterator-items");
function transformItem$1(props, item) {
	return {
		type: "item",
		value: props.returnObject ? item : getPropertyFromItem(item, props.itemValue),
		selectable: getPropertyFromItem(item, props.itemSelectable, true),
		raw: item
	};
}
function transformItems$1(props, items) {
	const array = [];
	for (const item of items) array.push(transformItem$1(props, item));
	return array;
}
function useDataIteratorItems(props) {
	return { items: computed$58(() => transformItems$1(props, props.items)) };
}
var { createVNode: _createVNode$68, createElementVNode: _createElementVNode$57, normalizeClass: _normalizeClass$44, normalizeStyle: _normalizeStyle$34 } = await importShared("vue");
var { computed: computed$57, toRef: toRef$25 } = await importShared("vue");
const makeVDataIteratorProps = propsFactory({
	search: String,
	loading: Boolean,
	...makeComponentProps(),
	...makeDataIteratorItemsProps(),
	...makeDataTableSelectProps(),
	...makeDataTableSortProps(),
	...makeDataTablePaginateProps({ itemsPerPage: 5 }),
	...makeDataTableExpandProps(),
	...makeDataTableGroupProps(),
	...makeFilterProps(),
	...makeTagProps(),
	...makeTransitionProps({ transition: {
		component: VFadeTransition,
		hideOnLeave: true
	} })
}, "VDataIterator");
const VDataIterator = genericComponent()({
	name: "VDataIterator",
	props: makeVDataIteratorProps(),
	emits: {
		"update:modelValue": (value) => true,
		"update:groupBy": (value) => true,
		"update:page": (value) => true,
		"update:itemsPerPage": (value) => true,
		"update:sortBy": (value) => true,
		"update:options": (value) => true,
		"update:expanded": (value) => true,
		"update:currentItems": (value) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const groupBy = useProxiedModel(props, "groupBy");
		const search = toRef$25(() => props.search);
		const { items } = useDataIteratorItems(props);
		const { filteredItems } = useFilter(props, items, search, { transform: (item) => item.raw });
		const { initialSortOrder, sortBy, multiSort, mustSort } = createSort(props);
		const { page, itemsPerPage } = createPagination(props);
		const { toggleSort } = provideSort({
			initialSortOrder,
			sortBy,
			multiSort,
			mustSort,
			page
		});
		const { sortByWithGroups, opened, extractRows, isGroupOpen, toggleGroup } = provideGroupBy({
			groupBy,
			sortBy
		});
		const { sortedItems } = useSortedItems(props, filteredItems, sortByWithGroups, { transform: (item) => item.raw });
		const { flatItems } = useGroupedItems(sortedItems, groupBy, opened, false);
		const { startIndex, stopIndex, pageCount, prevPage, nextPage, setItemsPerPage, setPage } = providePagination({
			page,
			itemsPerPage,
			itemsLength: toRef$25(() => flatItems.value.length)
		});
		const { paginatedItems } = usePaginatedItems({
			items: flatItems,
			startIndex,
			stopIndex,
			itemsPerPage
		});
		const paginatedItemsWithoutGroups = computed$57(() => extractRows(paginatedItems.value));
		const { isSelected, select, selectAll, toggleSelect } = provideSelection(props, {
			allItems: items,
			currentPage: paginatedItemsWithoutGroups
		});
		const { isExpanded, toggleExpand } = provideExpanded(props);
		useOptions({
			page,
			itemsPerPage,
			sortBy,
			groupBy,
			search
		});
		const slotProps = computed$57(() => ({
			page: page.value,
			itemsPerPage: itemsPerPage.value,
			sortBy: sortBy.value,
			pageCount: pageCount.value,
			toggleSort,
			prevPage,
			nextPage,
			setPage,
			setItemsPerPage,
			isSelected,
			select,
			selectAll,
			toggleSelect,
			isExpanded,
			toggleExpand,
			isGroupOpen,
			toggleGroup,
			items: paginatedItemsWithoutGroups.value,
			itemsCount: filteredItems.value.length,
			groupedItems: paginatedItems.value
		}));
		useRender(() => _createVNode$68(props.tag, {
			"class": _normalizeClass$44([
				"v-data-iterator",
				{ "v-data-iterator--loading": props.loading },
				props.class
			]),
			"style": _normalizeStyle$34(props.style)
		}, { default: () => [
			slots.header?.(slotProps.value),
			_createVNode$68(MaybeTransition, { "transition": props.transition }, { default: () => [props.loading ? _createVNode$68(LoaderSlot, {
				"key": "loader",
				"name": "v-data-iterator",
				"active": true
			}, { default: (slotProps$1) => slots.loader?.(slotProps$1) }) : _createElementVNode$57("div", { "key": "items" }, [!paginatedItems.value.length ? slots["no-data"]?.() : slots.default?.(slotProps.value)])] }),
			slots.footer?.(slotProps.value)
		] }));
		return {};
	}
});
var { onBeforeUpdate, ref: ref$30 } = await importShared("vue");
function useRefs() {
	const refs = ref$30([]);
	onBeforeUpdate(() => refs.value = []);
	function updateRef(e, i) {
		refs.value[i] = e;
	}
	return {
		refs,
		updateRef
	};
}
var { mergeProps: _mergeProps$40, createVNode: _createVNode$67, createElementVNode: _createElementVNode$56, normalizeClass: _normalizeClass$43, normalizeStyle: _normalizeStyle$33 } = await importShared("vue");
var { computed: computed$56, nextTick: nextTick$10, shallowRef: shallowRef$19, toRef: toRef$24 } = await importShared("vue");
const makeVPaginationProps = propsFactory({
	activeColor: String,
	start: {
		type: [Number, String],
		default: 1
	},
	modelValue: {
		type: Number,
		default: (props) => props.start
	},
	disabled: Boolean,
	length: {
		type: [Number, String],
		default: 1,
		validator: (val) => val % 1 === 0
	},
	totalVisible: [Number, String],
	firstIcon: {
		type: IconValue,
		default: "$first"
	},
	prevIcon: {
		type: IconValue,
		default: "$prev"
	},
	nextIcon: {
		type: IconValue,
		default: "$next"
	},
	lastIcon: {
		type: IconValue,
		default: "$last"
	},
	ariaLabel: {
		type: String,
		default: "$vuetify.pagination.ariaLabel.root"
	},
	pageAriaLabel: {
		type: String,
		default: "$vuetify.pagination.ariaLabel.page"
	},
	currentPageAriaLabel: {
		type: String,
		default: "$vuetify.pagination.ariaLabel.currentPage"
	},
	firstAriaLabel: {
		type: String,
		default: "$vuetify.pagination.ariaLabel.first"
	},
	previousAriaLabel: {
		type: String,
		default: "$vuetify.pagination.ariaLabel.previous"
	},
	nextAriaLabel: {
		type: String,
		default: "$vuetify.pagination.ariaLabel.next"
	},
	lastAriaLabel: {
		type: String,
		default: "$vuetify.pagination.ariaLabel.last"
	},
	ellipsis: {
		type: String,
		default: "..."
	},
	showFirstLastPage: Boolean,
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "nav" }),
	...makeThemeProps(),
	...makeVariantProps({ variant: "text" })
}, "VPagination");
const VPagination = genericComponent()({
	name: "VPagination",
	props: makeVPaginationProps(),
	emits: {
		"update:modelValue": (value) => true,
		first: (value) => true,
		prev: (value) => true,
		next: (value) => true,
		last: (value) => true
	},
	setup(props, _ref) {
		let { slots, emit } = _ref;
		const page = useProxiedModel(props, "modelValue");
		const { t, n } = useLocale();
		const { isRtl } = useRtl();
		const { themeClasses } = provideTheme(props);
		const { width } = useDisplay();
		const maxButtons = shallowRef$19(-1);
		provideDefaults(void 0, { scoped: true });
		const { resizeRef } = useResizeObserver((entries) => {
			if (!entries.length) return;
			const { target, contentRect } = entries[0];
			const firstItem = target.querySelector(".v-pagination__list > *");
			if (!firstItem) return;
			const totalWidth = contentRect.width;
			maxButtons.value = getMax(totalWidth, firstItem.offsetWidth + parseFloat(getComputedStyle(firstItem).marginRight) * 2);
		});
		const length = computed$56(() => parseInt(props.length, 10));
		const start = computed$56(() => parseInt(props.start, 10));
		const totalVisible = computed$56(() => {
			if (props.totalVisible != null) return parseInt(props.totalVisible, 10);
			else if (maxButtons.value >= 0) return maxButtons.value;
			return getMax(width.value, 58);
		});
		function getMax(totalWidth, itemWidth) {
			const minButtons = props.showFirstLastPage ? 5 : 3;
			return Math.max(0, Math.floor(Number(((totalWidth - itemWidth * minButtons) / itemWidth).toFixed(2))));
		}
		const range = computed$56(() => {
			if (length.value <= 0 || isNaN(length.value) || length.value > Number.MAX_SAFE_INTEGER) return [];
			if (totalVisible.value <= 0) return [];
			else if (totalVisible.value === 1) return [page.value];
			if (length.value <= totalVisible.value) return createRange(length.value, start.value);
			const even = totalVisible.value % 2 === 0;
			const middle = even ? totalVisible.value / 2 : Math.floor(totalVisible.value / 2);
			const left = even ? middle : middle + 1;
			const right = length.value - middle;
			if (left - page.value >= 0) return [
				...createRange(Math.max(1, totalVisible.value - 1), start.value),
				props.ellipsis,
				length.value
			];
			else if (page.value - right >= (even ? 1 : 0)) {
				const rangeLength = totalVisible.value - 1;
				const rangeStart = length.value - rangeLength + start.value;
				return [
					start.value,
					props.ellipsis,
					...createRange(rangeLength, rangeStart)
				];
			} else {
				const rangeLength = Math.max(1, totalVisible.value - 2);
				const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + start.value;
				return [
					start.value,
					props.ellipsis,
					...createRange(rangeLength, rangeStart),
					props.ellipsis,
					length.value
				];
			}
		});
		function setValue(e, value, event) {
			e.preventDefault();
			page.value = value;
			event && emit(event, value);
		}
		const { refs, updateRef } = useRefs();
		provideDefaults({ VPaginationBtn: {
			color: toRef$24(() => props.color),
			border: toRef$24(() => props.border),
			density: toRef$24(() => props.density),
			size: toRef$24(() => props.size),
			variant: toRef$24(() => props.variant),
			rounded: toRef$24(() => props.rounded),
			elevation: toRef$24(() => props.elevation)
		} });
		const items = computed$56(() => {
			return range.value.map((item, index) => {
				const ref$65 = (e) => updateRef(e, index);
				if (typeof item === "string") return {
					isActive: false,
					key: `ellipsis-${index}`,
					page: item,
					props: {
						ref: ref$65,
						ellipsis: true,
						icon: true,
						disabled: true
					}
				};
				else {
					const isActive = item === page.value;
					return {
						isActive,
						key: item,
						page: n(item),
						props: {
							ref: ref$65,
							ellipsis: false,
							icon: true,
							disabled: !!props.disabled || Number(props.length) < 2,
							color: isActive ? props.activeColor : props.color,
							"aria-current": isActive,
							"aria-label": t(isActive ? props.currentPageAriaLabel : props.pageAriaLabel, item),
							onClick: (e) => setValue(e, item)
						}
					};
				}
			});
		});
		const controls = computed$56(() => {
			const prevDisabled = !!props.disabled || page.value <= start.value;
			const nextDisabled = !!props.disabled || page.value >= start.value + length.value - 1;
			return {
				first: props.showFirstLastPage ? {
					icon: isRtl.value ? props.lastIcon : props.firstIcon,
					onClick: (e) => setValue(e, start.value, "first"),
					disabled: prevDisabled,
					"aria-label": t(props.firstAriaLabel),
					"aria-disabled": prevDisabled
				} : void 0,
				prev: {
					icon: isRtl.value ? props.nextIcon : props.prevIcon,
					onClick: (e) => setValue(e, page.value - 1, "prev"),
					disabled: prevDisabled,
					"aria-label": t(props.previousAriaLabel),
					"aria-disabled": prevDisabled
				},
				next: {
					icon: isRtl.value ? props.prevIcon : props.nextIcon,
					onClick: (e) => setValue(e, page.value + 1, "next"),
					disabled: nextDisabled,
					"aria-label": t(props.nextAriaLabel),
					"aria-disabled": nextDisabled
				},
				last: props.showFirstLastPage ? {
					icon: isRtl.value ? props.firstIcon : props.lastIcon,
					onClick: (e) => setValue(e, start.value + length.value - 1, "last"),
					disabled: nextDisabled,
					"aria-label": t(props.lastAriaLabel),
					"aria-disabled": nextDisabled
				} : void 0
			};
		});
		function updateFocus() {
			const currentIndex = page.value - start.value;
			refs.value[currentIndex]?.$el.focus();
		}
		function onKeydown$1(e) {
			if (e.key === keyValues.left && !props.disabled && page.value > Number(props.start)) {
				page.value = page.value - 1;
				nextTick$10(updateFocus);
			} else if (e.key === keyValues.right && !props.disabled && page.value < start.value + length.value - 1) {
				page.value = page.value + 1;
				nextTick$10(updateFocus);
			}
		}
		useRender(() => _createVNode$67(props.tag, {
			"ref": resizeRef,
			"class": _normalizeClass$43([
				"v-pagination",
				themeClasses.value,
				props.class
			]),
			"style": _normalizeStyle$33(props.style),
			"role": "navigation",
			"aria-label": t(props.ariaLabel),
			"onKeydown": onKeydown$1,
			"data-test": "v-pagination-root"
		}, { default: () => [_createElementVNode$56("ul", { "class": "v-pagination__list" }, [
			props.showFirstLastPage && _createElementVNode$56("li", {
				"key": "first",
				"class": "v-pagination__first",
				"data-test": "v-pagination-first"
			}, [slots.first ? slots.first(controls.value.first) : _createVNode$67(VBtn, _mergeProps$40({ "_as": "VPaginationBtn" }, controls.value.first), null)]),
			_createElementVNode$56("li", {
				"key": "prev",
				"class": "v-pagination__prev",
				"data-test": "v-pagination-prev"
			}, [slots.prev ? slots.prev(controls.value.prev) : _createVNode$67(VBtn, _mergeProps$40({ "_as": "VPaginationBtn" }, controls.value.prev), null)]),
			items.value.map((item, index) => _createElementVNode$56("li", {
				"key": item.key,
				"class": _normalizeClass$43(["v-pagination__item", { "v-pagination__item--is-active": item.isActive }]),
				"data-test": "v-pagination-item"
			}, [slots.item ? slots.item(item) : _createVNode$67(VBtn, _mergeProps$40({ "_as": "VPaginationBtn" }, item.props), { default: () => [item.page] })])),
			_createElementVNode$56("li", {
				"key": "next",
				"class": "v-pagination__next",
				"data-test": "v-pagination-next"
			}, [slots.next ? slots.next(controls.value.next) : _createVNode$67(VBtn, _mergeProps$40({ "_as": "VPaginationBtn" }, controls.value.next), null)]),
			props.showFirstLastPage && _createElementVNode$56("li", {
				"key": "last",
				"class": "v-pagination__last",
				"data-test": "v-pagination-last"
			}, [slots.last ? slots.last(controls.value.last) : _createVNode$67(VBtn, _mergeProps$40({ "_as": "VPaginationBtn" }, controls.value.last), null)])
		])] }));
		return {};
	}
});
var { createElementVNode: _createElementVNode$55, createVNode: _createVNode$66, mergeProps: _mergeProps$39 } = await importShared("vue");
var { computed: computed$55 } = await importShared("vue");
const makeVDataTableFooterProps = propsFactory({
	color: String,
	prevIcon: {
		type: IconValue,
		default: "$prev"
	},
	nextIcon: {
		type: IconValue,
		default: "$next"
	},
	firstIcon: {
		type: IconValue,
		default: "$first"
	},
	lastIcon: {
		type: IconValue,
		default: "$last"
	},
	itemsPerPageText: {
		type: String,
		default: "$vuetify.dataFooter.itemsPerPageText"
	},
	pageText: {
		type: String,
		default: "$vuetify.dataFooter.pageText"
	},
	firstPageLabel: {
		type: String,
		default: "$vuetify.dataFooter.firstPage"
	},
	prevPageLabel: {
		type: String,
		default: "$vuetify.dataFooter.prevPage"
	},
	nextPageLabel: {
		type: String,
		default: "$vuetify.dataFooter.nextPage"
	},
	lastPageLabel: {
		type: String,
		default: "$vuetify.dataFooter.lastPage"
	},
	itemsPerPageOptions: {
		type: Array,
		default: () => [
			{
				value: 10,
				title: "10"
			},
			{
				value: 25,
				title: "25"
			},
			{
				value: 50,
				title: "50"
			},
			{
				value: 100,
				title: "100"
			},
			{
				value: -1,
				title: "$vuetify.dataFooter.itemsPerPageAll"
			}
		]
	},
	showCurrentPage: Boolean
}, "VDataTableFooter");
const VDataTableFooter = genericComponent()({
	name: "VDataTableFooter",
	props: makeVDataTableFooterProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { t } = useLocale();
		const { page, pageCount, startIndex, stopIndex, itemsLength, itemsPerPage, setItemsPerPage } = usePagination();
		const itemsPerPageOptions = computed$55(() => props.itemsPerPageOptions.map((option) => {
			if (typeof option === "number") return {
				value: option,
				title: option === -1 ? t("$vuetify.dataFooter.itemsPerPageAll") : String(option)
			};
			return {
				...option,
				title: !isNaN(Number(option.title)) ? option.title : t(option.title)
			};
		}));
		useRender(() => {
			const paginationProps = VPagination.filterProps(props);
			return _createElementVNode$55("div", { "class": "v-data-table-footer" }, [
				slots.prepend?.(),
				_createElementVNode$55("div", { "class": "v-data-table-footer__items-per-page" }, [_createElementVNode$55("span", null, [t(props.itemsPerPageText)]), _createVNode$66(VSelect, {
					"items": itemsPerPageOptions.value,
					"itemColor": props.color,
					"modelValue": itemsPerPage.value,
					"onUpdate:modelValue": (v) => setItemsPerPage(Number(v)),
					"density": "compact",
					"variant": "outlined",
					"aria-label": t(props.itemsPerPageText),
					"hideDetails": true
				}, null)]),
				_createElementVNode$55("div", { "class": "v-data-table-footer__info" }, [_createElementVNode$55("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]),
				_createElementVNode$55("div", { "class": "v-data-table-footer__pagination" }, [_createVNode$66(VPagination, _mergeProps$39({
					"modelValue": page.value,
					"onUpdate:modelValue": ($event) => page.value = $event,
					"density": "comfortable",
					"firstAriaLabel": props.firstPageLabel,
					"lastAriaLabel": props.lastPageLabel,
					"length": pageCount.value,
					"nextAriaLabel": props.nextPageLabel,
					"previousAriaLabel": props.prevPageLabel,
					"rounded": true,
					"showFirstLastPage": true,
					"totalVisible": props.showCurrentPage ? 1 : 0,
					"variant": "plain"
				}, omit(paginationProps, ["color"])), null)])
			]);
		});
		return {};
	}
});
var { normalizeClass: _normalizeClass$42, createVNode: _createVNode$65 } = await importShared("vue");
const VDataTableColumn = defineFunctionalComponent({
	align: {
		type: String,
		default: "start"
	},
	fixed: {
		type: [Boolean, String],
		default: false
	},
	fixedOffset: [Number, String],
	fixedEndOffset: [Number, String],
	height: [Number, String],
	lastFixed: Boolean,
	firstFixedEnd: Boolean,
	noPadding: Boolean,
	indent: [Number, String],
	empty: Boolean,
	tag: String,
	width: [Number, String],
	maxWidth: [Number, String],
	nowrap: Boolean
}, (props, _ref) => {
	let { slots } = _ref;
	const Tag = props.tag ?? "td";
	const fixedSide = typeof props.fixed === "string" ? props.fixed : props.fixed ? "start" : "none";
	return _createVNode$65(Tag, {
		"class": _normalizeClass$42([
			"v-data-table__td",
			{
				"v-data-table-column--fixed": fixedSide === "start",
				"v-data-table-column--fixed-end": fixedSide === "end",
				"v-data-table-column--last-fixed": props.lastFixed,
				"v-data-table-column--first-fixed-end": props.firstFixedEnd,
				"v-data-table-column--no-padding": props.noPadding,
				"v-data-table-column--nowrap": props.nowrap,
				"v-data-table-column--empty": props.empty
			},
			`v-data-table-column--align-${props.align}`
		]),
		"style": {
			height: convertToUnit(props.height),
			width: convertToUnit(props.width),
			maxWidth: convertToUnit(props.maxWidth),
			left: fixedSide === "start" ? convertToUnit(props.fixedOffset || null) : void 0,
			right: fixedSide === "end" ? convertToUnit(props.fixedEndOffset || null) : void 0,
			paddingInlineStart: props.indent ? convertToUnit(props.indent) : void 0
		}
	}, { default: () => [slots.default?.()] });
});
var { capitalize: capitalize$2, inject: inject$6, provide: provide$3, ref: ref$29, watchEffect: watchEffect$9 } = await importShared("vue");
const makeDataTableHeaderProps = propsFactory({ headers: Array }, "DataTable-header");
const VDataTableHeadersSymbol = Symbol.for("vuetify:data-table-headers");
var defaultHeader = {
	title: "",
	sortable: false
};
var defaultActionHeader = {
	...defaultHeader,
	width: 48
};
function priorityQueue() {
	const queue = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((element) => ({
		element,
		priority: 0
	}));
	return {
		enqueue: (element, priority) => {
			let added = false;
			for (let i = 0; i < queue.length; i++) if (queue[i].priority > priority) {
				queue.splice(i, 0, {
					element,
					priority
				});
				added = true;
				break;
			}
			if (!added) queue.push({
				element,
				priority
			});
		},
		size: () => queue.length,
		count: () => {
			let count = 0;
			if (!queue.length) return 0;
			const whole = Math.floor(queue[0].priority);
			for (let i = 0; i < queue.length; i++) if (Math.floor(queue[i].priority) === whole) count += 1;
			return count;
		},
		dequeue: () => {
			return queue.shift();
		}
	};
}
function extractLeaves(item) {
	let columns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	if (!item.children) columns.push(item);
	else for (const child of item.children) extractLeaves(child, columns);
	return columns;
}
function extractKeys(headers) {
	let keys$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
	for (const item of headers) {
		if (item.key) keys$1.add(item.key);
		if (item.children) extractKeys(item.children, keys$1);
	}
	return keys$1;
}
function getDefaultItem(item) {
	if (!item.key) return void 0;
	if (item.key === "data-table-group") return defaultHeader;
	if (["data-table-expand", "data-table-select"].includes(item.key)) return defaultActionHeader;
}
function getDepth(item) {
	let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	if (!item.children) return depth;
	return Math.max(depth, ...item.children.map((child) => getDepth(child, depth + 1)));
}
function parseFixedColumns(items) {
	let seenFixed = false;
	function setFixed(item, side) {
		let parentFixedSide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
		if (!item) return;
		if (parentFixedSide !== "none") item.fixed = parentFixedSide;
		if (item.fixed === true) item.fixed = "start";
		if (item.fixed === side) if (item.children) if (side === "start") for (let i = item.children.length - 1; i >= 0; i--) setFixed(item.children[i], side, side);
		else for (let i = 0; i < item.children.length; i++) setFixed(item.children[i], side, side);
		else {
			if (!seenFixed && side === "start") item.lastFixed = true;
			else if (!seenFixed && side === "end") item.firstFixedEnd = true;
			else if (isNaN(Number(item.width))) consoleError(`Multiple fixed columns should have a static width (key: ${item.key})`);
			else item.minWidth = Math.max(Number(item.width) || 0, Number(item.minWidth) || 0);
			seenFixed = true;
		}
		else if (item.children) if (side === "start") for (let i = item.children.length - 1; i >= 0; i--) setFixed(item.children[i], side);
		else for (let i = 0; i < item.children.length; i++) setFixed(item.children[i], side);
		else seenFixed = false;
	}
	for (let i = items.length - 1; i >= 0; i--) setFixed(items[i], "start");
	for (let i = 0; i < items.length; i++) setFixed(items[i], "end");
	let fixedOffset = 0;
	for (let i = 0; i < items.length; i++) fixedOffset = setFixedOffset(items[i], fixedOffset);
	let fixedEndOffset = 0;
	for (let i = items.length - 1; i >= 0; i--) fixedEndOffset = setFixedEndOffset(items[i], fixedEndOffset);
}
function setFixedOffset(item) {
	let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	if (!item) return offset;
	if (item.children) {
		item.fixedOffset = offset;
		for (const child of item.children) offset = setFixedOffset(child, offset);
	} else if (item.fixed && item.fixed !== "end") {
		item.fixedOffset = offset;
		offset += parseFloat(item.width || "0") || 0;
	}
	return offset;
}
function setFixedEndOffset(item) {
	let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	if (!item) return offset;
	if (item.children) {
		item.fixedEndOffset = offset;
		for (const child of item.children) offset = setFixedEndOffset(child, offset);
	} else if (item.fixed === "end") {
		item.fixedEndOffset = offset;
		offset += parseFloat(item.width || "0") || 0;
	}
	return offset;
}
function parse(items, maxDepth) {
	const headers = [];
	let currentDepth = 0;
	const queue = priorityQueue(items);
	while (queue.size() > 0) {
		let rowSize = queue.count();
		const row = [];
		let fraction = 1;
		while (rowSize > 0) {
			const { element: item, priority } = queue.dequeue();
			const diff = maxDepth - currentDepth - getDepth(item);
			row.push({
				...item,
				rowspan: diff ?? 1,
				colspan: item.children ? extractLeaves(item).length : 1
			});
			if (item.children) for (const child of item.children) {
				const sort = priority % 1 + fraction / Math.pow(10, currentDepth + 2);
				queue.enqueue(child, currentDepth + diff + sort);
			}
			fraction += 1;
			rowSize -= 1;
		}
		currentDepth += 1;
		headers.push(row);
	}
	return {
		columns: items.map((item) => extractLeaves(item)).flat(),
		headers
	};
}
function convertToInternalHeaders(items) {
	const internalHeaders = [];
	for (const item of items) {
		const defaultItem = {
			...getDefaultItem(item),
			...item
		};
		const key = defaultItem.key ?? (typeof defaultItem.value === "string" ? defaultItem.value : null);
		const value = defaultItem.value ?? key ?? null;
		const internalItem = {
			...defaultItem,
			key,
			value,
			sortable: defaultItem.sortable ?? (defaultItem.key != null || !!defaultItem.sort),
			children: defaultItem.children ? convertToInternalHeaders(defaultItem.children) : void 0
		};
		internalHeaders.push(internalItem);
	}
	return internalHeaders;
}
function createHeaders(props, options) {
	const headers = ref$29([]);
	const columns = ref$29([]);
	const sortFunctions = ref$29({});
	const sortRawFunctions = ref$29({});
	const filterFunctions = ref$29({});
	watchEffect$9(() => {
		const items = (props.headers || Object.keys(props.items[0] ?? {}).map((key) => ({
			key,
			title: capitalize$2(key)
		}))).slice();
		const keys$1 = extractKeys(items);
		if (options?.groupBy?.value.length && !keys$1.has("data-table-group")) items.unshift({
			key: "data-table-group",
			title: "Group"
		});
		if (options?.showSelect?.value && !keys$1.has("data-table-select")) items.unshift({ key: "data-table-select" });
		if (options?.showExpand?.value && !keys$1.has("data-table-expand")) items.push({ key: "data-table-expand" });
		const internalHeaders = convertToInternalHeaders(items);
		parseFixedColumns(internalHeaders);
		const parsed = parse(internalHeaders, Math.max(...internalHeaders.map((item) => getDepth(item))) + 1);
		headers.value = parsed.headers;
		columns.value = parsed.columns;
		const flatHeaders = parsed.headers.flat(1);
		for (const header of flatHeaders) {
			if (!header.key) continue;
			if (header.sortable) {
				if (header.sort) sortFunctions.value[header.key] = header.sort;
				if (header.sortRaw) sortRawFunctions.value[header.key] = header.sortRaw;
			}
			if (header.filter) filterFunctions.value[header.key] = header.filter;
		}
	});
	const data = {
		headers,
		columns,
		sortFunctions,
		sortRawFunctions,
		filterFunctions
	};
	provide$3(VDataTableHeadersSymbol, data);
	return data;
}
function useHeaders() {
	const data = inject$6(VDataTableHeadersSymbol);
	if (!data) throw new Error("Missing headers!");
	return data;
}
var { createVNode: _createVNode$64, createElementVNode: _createElementVNode$54, normalizeClass: _normalizeClass$41, normalizeStyle: _normalizeStyle$32, mergeProps: _mergeProps$38, Fragment: _Fragment$26 } = await importShared("vue");
var { computed: computed$54, mergeProps: mergeProps$4 } = await importShared("vue");
const makeVDataTableHeadersProps = propsFactory({
	color: String,
	disableSort: Boolean,
	fixedHeader: Boolean,
	multiSort: Boolean,
	initialSortOrder: String,
	sortAscIcon: {
		type: IconValue,
		default: "$sortAsc"
	},
	sortDescIcon: {
		type: IconValue,
		default: "$sortDesc"
	},
	headerProps: { type: Object },
	sticky: Boolean,
	...makeDensityProps(),
	...makeDisplayProps(),
	...makeLoaderProps()
}, "VDataTableHeaders");
const VDataTableHeaders = genericComponent()({
	name: "VDataTableHeaders",
	props: makeVDataTableHeadersProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { t } = useLocale();
		const { toggleSort, sortBy, isSorted } = useSort();
		const { someSelected, allSelected, selectAll, showSelectAll } = useSelection();
		const { columns, headers } = useHeaders();
		const { loaderClasses } = useLoader(props);
		function getFixedStyles(column$1, y) {
			if (!(props.sticky || props.fixedHeader) && !column$1.fixed) return void 0;
			const fixedSide = typeof column$1.fixed === "string" ? column$1.fixed : column$1.fixed ? "start" : "none";
			return {
				position: "sticky",
				left: fixedSide === "start" ? convertToUnit(column$1.fixedOffset) : void 0,
				right: fixedSide === "end" ? convertToUnit(column$1.fixedEndOffset) : void 0,
				top: props.sticky || props.fixedHeader ? `calc(var(--v-table-header-height) * ${y})` : void 0
			};
		}
		function handleEnterKeyPress(event, column$1) {
			if (event.key === "Enter" && !props.disableSort) toggleSort(column$1, event);
		}
		function getSortIcon(column$1) {
			const item = sortBy.value.find((item$1) => item$1.key === column$1.key);
			return !item && props.initialSortOrder === "asc" || item?.order === "asc" ? props.sortAscIcon : props.sortDescIcon;
		}
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { displayClasses, mobile } = useDisplay(props);
		const slotProps = computed$54(() => ({
			headers: headers.value,
			columns: columns.value,
			toggleSort,
			isSorted,
			sortBy: sortBy.value,
			someSelected: someSelected.value,
			allSelected: allSelected.value,
			selectAll,
			getSortIcon
		}));
		const headerCellClasses = computed$54(() => [
			"v-data-table__th",
			{ "v-data-table__th--sticky": props.sticky || props.fixedHeader },
			displayClasses.value,
			loaderClasses.value
		]);
		const VDataTableHeaderCell = (_ref2) => {
			let { column: column$1, x, y } = _ref2;
			const noPadding = column$1.key === "data-table-select" || column$1.key === "data-table-expand";
			const isEmpty$1 = column$1.key === "data-table-group" && column$1.width === 0 && !column$1.title;
			const headerProps = mergeProps$4(props.headerProps ?? {}, column$1.headerProps ?? {});
			return _createVNode$64(VDataTableColumn, _mergeProps$38({
				"tag": "th",
				"align": column$1.align,
				"class": [{
					"v-data-table__th--sortable": column$1.sortable && !props.disableSort,
					"v-data-table__th--sorted": isSorted(column$1),
					"v-data-table__th--fixed": column$1.fixed
				}, ...headerCellClasses.value],
				"style": {
					width: convertToUnit(column$1.width),
					minWidth: convertToUnit(column$1.minWidth),
					maxWidth: convertToUnit(column$1.maxWidth),
					...getFixedStyles(column$1, y)
				},
				"colspan": column$1.colspan,
				"rowspan": column$1.rowspan,
				"fixed": column$1.fixed,
				"nowrap": column$1.nowrap,
				"lastFixed": column$1.lastFixed,
				"firstFixedEnd": column$1.firstFixedEnd,
				"noPadding": noPadding,
				"empty": isEmpty$1,
				"tabindex": column$1.sortable ? 0 : void 0,
				"onClick": column$1.sortable ? (event) => toggleSort(column$1, event) : void 0,
				"onKeydown": column$1.sortable ? (event) => handleEnterKeyPress(event, column$1) : void 0
			}, headerProps), { default: () => {
				const columnSlotName = `header.${column$1.key}`;
				const columnSlotProps = {
					column: column$1,
					selectAll,
					isSorted,
					toggleSort,
					sortBy: sortBy.value,
					someSelected: someSelected.value,
					allSelected: allSelected.value,
					getSortIcon
				};
				if (slots[columnSlotName]) return slots[columnSlotName](columnSlotProps);
				if (isEmpty$1) return "";
				if (column$1.key === "data-table-select") return slots["header.data-table-select"]?.(columnSlotProps) ?? (showSelectAll.value && _createVNode$64(VCheckboxBtn, {
					"color": props.color,
					"density": props.density,
					"modelValue": allSelected.value,
					"indeterminate": someSelected.value && !allSelected.value,
					"onUpdate:modelValue": selectAll
				}, null));
				return _createElementVNode$54("div", { "class": "v-data-table-header__content" }, [
					_createElementVNode$54("span", null, [column$1.title]),
					column$1.sortable && !props.disableSort && _createVNode$64(VIcon, {
						"key": "icon",
						"class": "v-data-table-header__sort-icon",
						"icon": getSortIcon(column$1)
					}, null),
					props.multiSort && isSorted(column$1) && _createElementVNode$54("div", {
						"key": "badge",
						"class": _normalizeClass$41(["v-data-table-header__sort-badge", ...backgroundColorClasses.value]),
						"style": _normalizeStyle$32(backgroundColorStyles.value)
					}, [sortBy.value.findIndex((x$1) => x$1.key === column$1.key) + 1])
				]);
			} });
		};
		const VDataTableMobileHeaderCell = () => {
			const displayItems = computed$54(() => {
				return columns.value.filter((column$1) => column$1?.sortable && !props.disableSort);
			});
			const showSelectColumn = columns.value.find((column$1) => column$1.key === "data-table-select");
			return _createVNode$64(VDataTableColumn, _mergeProps$38({
				"tag": "th",
				"class": [...headerCellClasses.value],
				"colspan": headers.value.length + 1
			}, props.headerProps), { default: () => [_createElementVNode$54("div", { "class": "v-data-table-header__content" }, [_createVNode$64(VSelect, {
				"chips": true,
				"color": props.color,
				"class": "v-data-table__td-sort-select",
				"clearable": true,
				"density": "default",
				"items": displayItems.value,
				"label": t("$vuetify.dataTable.sortBy"),
				"multiple": props.multiSort,
				"variant": "underlined",
				"onClick:clear": () => sortBy.value = []
			}, {
				append: showSelectColumn ? () => _createVNode$64(VCheckboxBtn, {
					"color": props.color,
					"density": "compact",
					"modelValue": allSelected.value,
					"indeterminate": someSelected.value && !allSelected.value,
					"onUpdate:modelValue": () => selectAll(!allSelected.value)
				}, null) : void 0,
				chip: (props$1) => _createVNode$64(VChip, {
					"onClick": props$1.item.raw?.sortable ? () => toggleSort(props$1.item.raw) : void 0,
					"onMousedown": (e) => {
						e.preventDefault();
						e.stopPropagation();
					}
				}, { default: () => [props$1.item.title, _createVNode$64(VIcon, {
					"class": _normalizeClass$41(["v-data-table__td-sort-icon", isSorted(props$1.item.raw) && "v-data-table__td-sort-icon-active"]),
					"icon": getSortIcon(props$1.item.raw),
					"size": "small"
				}, null)] })
			})])] });
		};
		useRender(() => {
			return mobile.value ? _createElementVNode$54("tr", null, [_createVNode$64(VDataTableMobileHeaderCell, null, null)]) : _createElementVNode$54(_Fragment$26, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => _createElementVNode$54("tr", null, [row.map((column$1, x) => _createVNode$64(VDataTableHeaderCell, {
				"column": column$1,
				"x": x,
				"y": y
			}, null))])), props.loading && _createElementVNode$54("tr", { "class": "v-data-table-progress" }, [_createElementVNode$54("th", { "colspan": columns.value.length }, [_createVNode$64(LoaderSlot, {
				"name": "v-data-table-progress",
				"absolute": true,
				"active": true,
				"color": typeof props.loading === "boolean" || props.loading === "true" ? props.color : props.loading,
				"indeterminate": true
			}, { default: slots.loader })])])]);
		});
	}
});
var { createVNode: _createVNode$63, createElementVNode: _createElementVNode$53, createTextVNode: _createTextVNode$5 } = await importShared("vue");
var { computed: computed$53, toRef: toRef$23 } = await importShared("vue");
const makeVDataTableGroupHeaderRowProps = propsFactory({
	item: {
		type: Object,
		required: true
	},
	groupCollapseIcon: {
		type: IconValue,
		default: "$tableGroupCollapse"
	},
	groupExpandIcon: {
		type: IconValue,
		default: "$tableGroupExpand"
	},
	...makeDensityProps()
}, "VDataTableGroupHeaderRow");
const VDataTableGroupHeaderRow = genericComponent()({
	name: "VDataTableGroupHeaderRow",
	props: makeVDataTableGroupHeaderRowProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { isGroupOpen, toggleGroup, extractRows } = useGroupBy();
		const { isSelected, isSomeSelected, select } = useSelection();
		const { columns } = useHeaders();
		const rows = computed$53(() => {
			return extractRows([props.item]);
		});
		const colspan = toRef$23(() => columns.value.length - (columns.value.some((c) => c.key === "data-table-select") ? 1 : 0));
		return () => _createElementVNode$53("tr", {
			"class": "v-data-table-group-header-row",
			"style": { "--v-data-table-group-header-row-depth": props.item.depth }
		}, [columns.value.map((column$1) => {
			if (column$1.key === "data-table-group") {
				const icon = isGroupOpen(props.item) ? props.groupCollapseIcon : props.groupExpandIcon;
				const onClick = () => toggleGroup(props.item);
				return slots["data-table-group"]?.({
					item: props.item,
					count: rows.value.length,
					props: {
						icon,
						onClick
					}
				}) ?? _createVNode$63(VDataTableColumn, {
					"class": "v-data-table-group-header-row__column",
					"colspan": colspan.value
				}, { default: () => [
					_createVNode$63(VBtn, {
						"size": "small",
						"variant": "text",
						"icon": icon,
						"onClick": onClick
					}, null),
					_createElementVNode$53("span", null, [props.item.value]),
					_createElementVNode$53("span", null, [
						_createTextVNode$5("("),
						rows.value.length,
						_createTextVNode$5(")")
					])
				] });
			} else if (column$1.key === "data-table-select") {
				const selectableRows = rows.value.filter((x) => x.selectable);
				const modelValue = selectableRows.length > 0 && isSelected(selectableRows);
				const indeterminate = isSomeSelected(selectableRows) && !modelValue;
				const selectGroup = (v) => select(selectableRows, v);
				return slots["data-table-select"]?.({ props: {
					modelValue,
					indeterminate,
					"onUpdate:modelValue": selectGroup
				} }) ?? _createVNode$63(VDataTableColumn, {
					"class": "v-data-table__td--select-row",
					"noPadding": true
				}, { default: () => [_createVNode$63(VCheckboxBtn, {
					"density": props.density,
					"disabled": selectableRows.length === 0,
					"modelValue": modelValue,
					"indeterminate": indeterminate,
					"onUpdate:modelValue": selectGroup
				}, null)] });
			}
			return "";
		})]);
	}
});
var { createVNode: _createVNode$62, Fragment: _Fragment$25, createElementVNode: _createElementVNode$52, mergeProps: _mergeProps$37, normalizeClass: _normalizeClass$40 } = await importShared("vue");
var { toDisplayString, withModifiers } = await importShared("vue");
const makeVDataTableRowProps = propsFactory({
	color: String,
	index: Number,
	item: Object,
	cellProps: [Object, Function],
	collapseIcon: {
		type: IconValue,
		default: "$collapse"
	},
	expandIcon: {
		type: IconValue,
		default: "$expand"
	},
	onClick: EventProp(),
	onContextmenu: EventProp(),
	onDblclick: EventProp(),
	...makeDensityProps(),
	...makeDisplayProps()
}, "VDataTableRow");
const VDataTableRow = genericComponent()({
	name: "VDataTableRow",
	props: makeVDataTableRowProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { displayClasses, mobile } = useDisplay(props, "v-data-table__tr");
		const { isSelected, toggleSelect, someSelected, allSelected, selectAll } = useSelection();
		const { isExpanded, toggleExpand } = useExpanded();
		const { toggleSort, sortBy, isSorted } = useSort();
		const { columns } = useHeaders();
		useRender(() => _createElementVNode$52("tr", {
			"class": _normalizeClass$40([
				"v-data-table__tr",
				{ "v-data-table__tr--clickable": !!(props.onClick || props.onContextmenu || props.onDblclick) },
				displayClasses.value
			]),
			"onClick": props.onClick,
			"onContextmenu": props.onContextmenu,
			"onDblclick": props.onDblclick
		}, [props.item && columns.value.map((column$1, i) => {
			const item = props.item;
			const slotName = `item.${column$1.key}`;
			const headerSlotName = `header.${column$1.key}`;
			const slotProps = {
				index: props.index,
				item: item.raw,
				internalItem: item,
				value: getObjectValueByPath(item.columns, column$1.key),
				column: column$1,
				isSelected,
				toggleSelect,
				isExpanded,
				toggleExpand
			};
			const columnSlotProps = {
				column: column$1,
				selectAll,
				isSorted,
				toggleSort,
				sortBy: sortBy.value,
				someSelected: someSelected.value,
				allSelected: allSelected.value,
				getSortIcon: () => ""
			};
			const cellProps = typeof props.cellProps === "function" ? props.cellProps({
				index: slotProps.index,
				item: slotProps.item,
				internalItem: slotProps.internalItem,
				value: slotProps.value,
				column: column$1
			}) : props.cellProps;
			const columnCellProps = typeof column$1.cellProps === "function" ? column$1.cellProps({
				index: slotProps.index,
				item: slotProps.item,
				internalItem: slotProps.internalItem,
				value: slotProps.value
			}) : column$1.cellProps;
			const noPadding = column$1.key === "data-table-select" || column$1.key === "data-table-expand";
			const isEmpty$1 = column$1.key === "data-table-group" && column$1.width === 0 && !column$1.title;
			return _createVNode$62(VDataTableColumn, _mergeProps$37({
				"align": column$1.align,
				"indent": column$1.indent,
				"class": {
					"v-data-table__td--expanded-row": column$1.key === "data-table-expand",
					"v-data-table__td--select-row": column$1.key === "data-table-select"
				},
				"fixed": column$1.fixed,
				"fixedOffset": column$1.fixedOffset,
				"fixedEndOffset": column$1.fixedEndOffset,
				"lastFixed": column$1.lastFixed,
				"firstFixedEnd": column$1.firstFixedEnd,
				"maxWidth": !mobile.value ? column$1.maxWidth : void 0,
				"noPadding": noPadding,
				"empty": isEmpty$1,
				"nowrap": column$1.nowrap,
				"width": !mobile.value ? column$1.width : void 0
			}, cellProps, columnCellProps), { default: () => {
				if (column$1.key === "data-table-select") return slots["item.data-table-select"]?.({
					...slotProps,
					props: {
						color: props.color,
						disabled: !item.selectable,
						modelValue: isSelected([item]),
						onClick: withModifiers(() => toggleSelect(item), ["stop"])
					}
				}) ?? _createVNode$62(VCheckboxBtn, {
					"color": props.color,
					"disabled": !item.selectable,
					"density": props.density,
					"modelValue": isSelected([item]),
					"onClick": withModifiers((event) => toggleSelect(item, props.index, event), ["stop"])
				}, null);
				if (column$1.key === "data-table-expand") return slots["item.data-table-expand"]?.({
					...slotProps,
					props: {
						icon: isExpanded(item) ? props.collapseIcon : props.expandIcon,
						size: "small",
						variant: "text",
						onClick: withModifiers(() => toggleExpand(item), ["stop"])
					}
				}) ?? _createVNode$62(VBtn, {
					"icon": isExpanded(item) ? props.collapseIcon : props.expandIcon,
					"size": "small",
					"variant": "text",
					"onClick": withModifiers(() => toggleExpand(item), ["stop"])
				}, null);
				if (slots[slotName] && !mobile.value) return slots[slotName](slotProps);
				const displayValue = toDisplayString(slotProps.value);
				return !mobile.value ? displayValue : _createElementVNode$52(_Fragment$25, null, [_createElementVNode$52("div", { "class": "v-data-table__td-title" }, [slots[headerSlotName]?.(columnSlotProps) ?? column$1.title]), _createElementVNode$52("div", { "class": "v-data-table__td-value" }, [slots[slotName]?.(slotProps) ?? displayValue])]);
			} });
		})]));
	}
});
var { createElementVNode: _createElementVNode$51, Fragment: _Fragment$24, mergeProps: _mergeProps$36, createVNode: _createVNode$61 } = await importShared("vue");
var { Fragment, mergeProps: mergeProps$3 } = await importShared("vue");
const makeVDataTableRowsProps = propsFactory({
	color: String,
	loading: [Boolean, String],
	loadingText: {
		type: String,
		default: "$vuetify.dataIterator.loadingText"
	},
	hideNoData: Boolean,
	items: {
		type: Array,
		default: () => []
	},
	noDataText: {
		type: String,
		default: "$vuetify.noDataText"
	},
	rowProps: [Object, Function],
	cellProps: [Object, Function],
	...pick(makeVDataTableRowProps(), [
		"collapseIcon",
		"expandIcon",
		"density"
	]),
	...pick(makeVDataTableGroupHeaderRowProps(), [
		"groupCollapseIcon",
		"groupExpandIcon",
		"density"
	]),
	...makeDisplayProps()
}, "VDataTableRows");
const VDataTableRows = genericComponent()({
	name: "VDataTableRows",
	inheritAttrs: false,
	props: makeVDataTableRowsProps(),
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { columns } = useHeaders();
		const { expandOnClick, toggleExpand, isExpanded } = useExpanded();
		const { isSelected, toggleSelect } = useSelection();
		const { toggleGroup, isGroupOpen } = useGroupBy();
		const { t } = useLocale();
		const { mobile } = useDisplay(props);
		useRender(() => {
			const groupHeaderRowProps = pick(props, [
				"groupCollapseIcon",
				"groupExpandIcon",
				"density"
			]);
			if (props.loading && (!props.items.length || slots.loading)) return _createElementVNode$51("tr", {
				"class": "v-data-table-rows-loading",
				"key": "loading"
			}, [_createElementVNode$51("td", { "colspan": columns.value.length }, [slots.loading?.() ?? t(props.loadingText)])]);
			if (!props.loading && !props.items.length && !props.hideNoData) return _createElementVNode$51("tr", {
				"class": "v-data-table-rows-no-data",
				"key": "no-data"
			}, [_createElementVNode$51("td", { "colspan": columns.value.length }, [slots["no-data"]?.() ?? t(props.noDataText)])]);
			return _createElementVNode$51(_Fragment$24, null, [props.items.map((item, index) => {
				if (item.type === "group") {
					const slotProps$1 = {
						index,
						item,
						columns: columns.value,
						isExpanded,
						toggleExpand,
						isSelected,
						toggleSelect,
						toggleGroup,
						isGroupOpen
					};
					return slots["group-header"] ? slots["group-header"](slotProps$1) : _createVNode$61(VDataTableGroupHeaderRow, _mergeProps$36({
						"key": `group-header_${item.id}`,
						"item": item
					}, getPrefixedEventHandlers(attrs, ":groupHeader", () => slotProps$1), groupHeaderRowProps), slots);
				}
				if (item.type === "group-summary") {
					const slotProps$1 = {
						index,
						item,
						columns: columns.value,
						toggleGroup
					};
					return slots["group-summary"]?.(slotProps$1) ?? "";
				}
				const slotProps = {
					index: item.virtualIndex ?? index,
					item: item.raw,
					internalItem: item,
					columns: columns.value,
					isExpanded,
					toggleExpand,
					isSelected,
					toggleSelect
				};
				const itemSlotProps = {
					...slotProps,
					props: mergeProps$3({
						key: `item_${item.key ?? item.index}`,
						onClick: expandOnClick.value ? () => {
							toggleExpand(item);
						} : void 0,
						index,
						item,
						color: props.color,
						cellProps: props.cellProps,
						collapseIcon: props.collapseIcon,
						expandIcon: props.expandIcon,
						density: props.density,
						mobile: mobile.value
					}, getPrefixedEventHandlers(attrs, ":row", () => slotProps), typeof props.rowProps === "function" ? props.rowProps({
						item: slotProps.item,
						index: slotProps.index,
						internalItem: slotProps.internalItem
					}) : props.rowProps)
				};
				return _createElementVNode$51(_Fragment$24, { "key": itemSlotProps.props.key }, [slots.item ? slots.item(itemSlotProps) : _createVNode$61(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && slots["expanded-row"]?.(slotProps)]);
			})]);
		});
		return {};
	}
});
var { createElementVNode: _createElementVNode$50, normalizeClass: _normalizeClass$39, normalizeStyle: _normalizeStyle$31, createVNode: _createVNode$60 } = await importShared("vue");
const makeVTableProps = propsFactory({
	fixedHeader: Boolean,
	fixedFooter: Boolean,
	height: [Number, String],
	hover: Boolean,
	striped: {
		type: String,
		default: null,
		validator: (v) => ["even", "odd"].includes(v)
	},
	...makeComponentProps(),
	...makeDensityProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VTable");
const VTable = genericComponent()({
	name: "VTable",
	props: makeVTableProps(),
	setup(props, _ref) {
		let { slots, emit } = _ref;
		const { themeClasses } = provideTheme(props);
		const { densityClasses } = useDensity(props);
		useRender(() => _createVNode$60(props.tag, {
			"class": _normalizeClass$39([
				"v-table",
				{
					"v-table--fixed-height": !!props.height,
					"v-table--fixed-header": props.fixedHeader,
					"v-table--fixed-footer": props.fixedFooter,
					"v-table--has-top": !!slots.top,
					"v-table--has-bottom": !!slots.bottom,
					"v-table--hover": props.hover,
					"v-table--striped-even": props.striped === "even",
					"v-table--striped-odd": props.striped === "odd"
				},
				themeClasses.value,
				densityClasses.value,
				props.class
			]),
			"style": _normalizeStyle$31(props.style)
		}, { default: () => [
			slots.top?.(),
			slots.default ? _createElementVNode$50("div", {
				"class": "v-table__wrapper",
				"style": { height: convertToUnit(props.height) }
			}, [_createElementVNode$50("table", null, [slots.default()])]) : slots.wrapper?.(),
			slots.bottom?.()
		] }));
		return {};
	}
});
var { computed: computed$52 } = await importShared("vue");
const makeDataTableItemsProps = propsFactory({
	items: {
		type: Array,
		default: () => []
	},
	itemValue: {
		type: [
			String,
			Array,
			Function
		],
		default: "id"
	},
	itemSelectable: {
		type: [
			String,
			Array,
			Function
		],
		default: null
	},
	rowProps: [Object, Function],
	cellProps: [Object, Function],
	returnObject: Boolean
}, "DataTable-items");
function transformItem(props, item, index, columns) {
	const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
	const selectable = getPropertyFromItem(item, props.itemSelectable, true);
	const itemColumns = columns.reduce((obj, column$1) => {
		if (column$1.key != null) obj[column$1.key] = getPropertyFromItem(item, column$1.value);
		return obj;
	}, {});
	return {
		type: "item",
		key: props.returnObject ? getPropertyFromItem(item, props.itemValue) : value,
		index,
		value,
		selectable,
		columns: itemColumns,
		raw: item
	};
}
function transformItems(props, items, columns) {
	return items.map((item, index) => transformItem(props, item, index, columns));
}
function useDataTableItems(props, columns) {
	return { items: computed$52(() => transformItems(props, props.items, columns.value)) };
}
var { Fragment: _Fragment$23, mergeProps: _mergeProps$35, createVNode: _createVNode$59, createElementVNode: _createElementVNode$49 } = await importShared("vue");
var { computed: computed$51, toRef: toRef$22, toRefs: toRefs$3 } = await importShared("vue");
const makeDataTableProps = propsFactory({
	...makeVDataTableRowsProps(),
	hideDefaultBody: Boolean,
	hideDefaultFooter: Boolean,
	hideDefaultHeader: Boolean,
	width: [String, Number],
	search: String,
	...makeDataTableExpandProps(),
	...makeDataTableGroupProps(),
	...makeDataTableHeaderProps(),
	...makeDataTableItemsProps(),
	...makeDataTableSelectProps(),
	...makeDataTableSortProps(),
	...omit(makeVDataTableHeadersProps(), ["multiSort", "initialSortOrder"]),
	...makeVTableProps()
}, "DataTable");
const makeVDataTableProps = propsFactory({
	...makeDataTablePaginateProps(),
	...makeDataTableProps(),
	...makeFilterProps(),
	...makeVDataTableFooterProps()
}, "VDataTable");
const VDataTable = genericComponent()({
	name: "VDataTable",
	props: makeVDataTableProps(),
	emits: {
		"update:modelValue": (value) => true,
		"update:page": (value) => true,
		"update:itemsPerPage": (value) => true,
		"update:sortBy": (value) => true,
		"update:options": (value) => true,
		"update:groupBy": (value) => true,
		"update:expanded": (value) => true,
		"update:currentItems": (value) => true
	},
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { groupBy } = createGroupBy(props);
		const { initialSortOrder, sortBy, multiSort, mustSort } = createSort(props);
		const { page, itemsPerPage } = createPagination(props);
		const { disableSort } = toRefs$3(props);
		const { columns, headers, sortFunctions, sortRawFunctions, filterFunctions } = createHeaders(props, {
			groupBy,
			showSelect: toRef$22(() => props.showSelect),
			showExpand: toRef$22(() => props.showExpand)
		});
		const { items } = useDataTableItems(props, columns);
		const search = toRef$22(() => props.search);
		const { filteredItems } = useFilter(props, items, search, {
			transform: (item) => item.columns,
			customKeyFilter: filterFunctions
		});
		const { toggleSort } = provideSort({
			initialSortOrder,
			sortBy,
			multiSort,
			mustSort,
			page
		});
		const { sortByWithGroups, opened, extractRows, isGroupOpen, toggleGroup } = provideGroupBy({
			groupBy,
			sortBy,
			disableSort
		});
		const { sortedItems } = useSortedItems(props, filteredItems, sortByWithGroups, {
			transform: (item) => ({
				...item.raw,
				...item.columns
			}),
			sortFunctions,
			sortRawFunctions
		});
		const { flatItems } = useGroupedItems(sortedItems, groupBy, opened, () => !!slots["group-summary"]);
		const { startIndex, stopIndex, pageCount, setItemsPerPage } = providePagination({
			page,
			itemsPerPage,
			itemsLength: computed$51(() => flatItems.value.length)
		});
		const { paginatedItems } = usePaginatedItems({
			items: flatItems,
			startIndex,
			stopIndex,
			itemsPerPage
		});
		const paginatedItemsWithoutGroups = computed$51(() => extractRows(paginatedItems.value));
		const { isSelected, select, selectAll, toggleSelect, someSelected, allSelected } = provideSelection(props, {
			allItems: items,
			currentPage: paginatedItemsWithoutGroups
		});
		const { isExpanded, toggleExpand } = provideExpanded(props);
		useOptions({
			page,
			itemsPerPage,
			sortBy,
			groupBy,
			search
		});
		provideDefaults({ VDataTableRows: {
			hideNoData: toRef$22(() => props.hideNoData),
			noDataText: toRef$22(() => props.noDataText),
			loading: toRef$22(() => props.loading),
			loadingText: toRef$22(() => props.loadingText)
		} });
		const slotProps = computed$51(() => ({
			page: page.value,
			itemsPerPage: itemsPerPage.value,
			sortBy: sortBy.value,
			pageCount: pageCount.value,
			toggleSort,
			setItemsPerPage,
			someSelected: someSelected.value,
			allSelected: allSelected.value,
			isSelected,
			select,
			selectAll,
			toggleSelect,
			isExpanded,
			toggleExpand,
			isGroupOpen,
			toggleGroup,
			items: paginatedItemsWithoutGroups.value.map((item) => item.raw),
			internalItems: paginatedItemsWithoutGroups.value,
			groupedItems: paginatedItems.value,
			columns: columns.value,
			headers: headers.value
		}));
		useRender(() => {
			const dataTableFooterProps = VDataTableFooter.filterProps(props);
			const dataTableHeadersProps = VDataTableHeaders.filterProps(omit(props, ["multiSort"]));
			const dataTableRowsProps = VDataTableRows.filterProps(props);
			const tableProps = VTable.filterProps(props);
			return _createVNode$59(VTable, _mergeProps$35({
				"class": [
					"v-data-table",
					{
						"v-data-table--show-select": props.showSelect,
						"v-data-table--loading": props.loading
					},
					props.class
				],
				"style": props.style
			}, tableProps, { "fixedHeader": props.fixedHeader || props.sticky }), {
				top: () => slots.top?.(slotProps.value),
				default: () => slots.default ? slots.default(slotProps.value) : _createElementVNode$49(_Fragment$23, null, [
					slots.colgroup?.(slotProps.value),
					!props.hideDefaultHeader && _createElementVNode$49("thead", { "key": "thead" }, [_createVNode$59(VDataTableHeaders, _mergeProps$35(dataTableHeadersProps, { "multiSort": !!props.multiSort }), slots)]),
					slots.thead?.(slotProps.value),
					!props.hideDefaultBody && _createElementVNode$49("tbody", null, [
						slots["body.prepend"]?.(slotProps.value),
						slots.body ? slots.body(slotProps.value) : _createVNode$59(VDataTableRows, _mergeProps$35(attrs, dataTableRowsProps, { "items": paginatedItems.value }), slots),
						slots["body.append"]?.(slotProps.value)
					]),
					slots.tbody?.(slotProps.value),
					slots.tfoot?.(slotProps.value)
				]),
				bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && _createElementVNode$49(_Fragment$23, null, [_createVNode$59(VDivider, null, null), _createVNode$59(VDataTableFooter, dataTableFooterProps, { prepend: slots["footer.prepend"] })])
			});
		});
		return {};
	}
});
var { mergeProps: _mergeProps$34, createVNode: _createVNode$58, createElementVNode: _createElementVNode$48 } = await importShared("vue");
var { computed: computed$50, shallowRef: shallowRef$18, toRef: toRef$21, toRefs: toRefs$2 } = await importShared("vue");
const makeVDataTableVirtualProps = propsFactory({
	...omit(makeDataTableProps(), ["hideDefaultFooter"]),
	...makeDataTableGroupProps(),
	...makeVirtualProps(),
	...makeFilterProps()
}, "VDataTableVirtual");
const VDataTableVirtual = genericComponent()({
	name: "VDataTableVirtual",
	props: makeVDataTableVirtualProps(),
	emits: {
		"update:modelValue": (value) => true,
		"update:sortBy": (value) => true,
		"update:options": (value) => true,
		"update:groupBy": (value) => true,
		"update:expanded": (value) => true
	},
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { groupBy } = createGroupBy(props);
		const { initialSortOrder, sortBy, multiSort, mustSort } = createSort(props);
		const { disableSort } = toRefs$2(props);
		const { columns, headers, filterFunctions, sortFunctions, sortRawFunctions } = createHeaders(props, {
			groupBy,
			showSelect: toRef$21(() => props.showSelect),
			showExpand: toRef$21(() => props.showExpand)
		});
		const { items } = useDataTableItems(props, columns);
		const search = toRef$21(() => props.search);
		const { filteredItems } = useFilter(props, items, search, {
			transform: (item) => item.columns,
			customKeyFilter: filterFunctions
		});
		const { toggleSort } = provideSort({
			initialSortOrder,
			sortBy,
			multiSort,
			mustSort
		});
		const { sortByWithGroups, opened, extractRows, isGroupOpen, toggleGroup } = provideGroupBy({
			groupBy,
			sortBy,
			disableSort
		});
		const { sortedItems } = useSortedItems(props, filteredItems, sortByWithGroups, {
			transform: (item) => ({
				...item.raw,
				...item.columns
			}),
			sortFunctions,
			sortRawFunctions
		});
		const { flatItems } = useGroupedItems(sortedItems, groupBy, opened, () => !!slots["group-summary"]);
		const allItems = computed$50(() => extractRows(flatItems.value));
		const { isSelected, select, selectAll, toggleSelect, someSelected, allSelected } = provideSelection(props, {
			allItems,
			currentPage: allItems
		});
		const { isExpanded, toggleExpand } = provideExpanded(props);
		const { containerRef, markerRef, paddingTop, paddingBottom, computedItems, handleItemResize, handleScroll, handleScrollend, calculateVisibleItems, scrollToIndex } = useVirtual(props, flatItems);
		const displayItems = computed$50(() => computedItems.value.map((item) => ({
			...item.raw,
			virtualIndex: item.index
		})));
		useOptions({
			sortBy,
			page: shallowRef$18(1),
			itemsPerPage: shallowRef$18(-1),
			groupBy,
			search
		});
		provideDefaults({ VDataTableRows: {
			hideNoData: toRef$21(() => props.hideNoData),
			noDataText: toRef$21(() => props.noDataText),
			loading: toRef$21(() => props.loading),
			loadingText: toRef$21(() => props.loadingText)
		} });
		const slotProps = computed$50(() => ({
			sortBy: sortBy.value,
			toggleSort,
			someSelected: someSelected.value,
			allSelected: allSelected.value,
			isSelected,
			select,
			selectAll,
			toggleSelect,
			isExpanded,
			toggleExpand,
			isGroupOpen,
			toggleGroup,
			items: allItems.value.map((item) => item.raw),
			internalItems: allItems.value,
			groupedItems: flatItems.value,
			columns: columns.value,
			headers: headers.value
		}));
		useRender(() => {
			const dataTableHeadersProps = VDataTableHeaders.filterProps(omit(props, ["multiSort"]));
			const dataTableRowsProps = VDataTableRows.filterProps(props);
			const tableProps = VTable.filterProps(props);
			return _createVNode$58(VTable, _mergeProps$34({
				"class": [
					"v-data-table",
					{ "v-data-table--loading": props.loading },
					props.class
				],
				"style": props.style
			}, tableProps, { "fixedHeader": props.fixedHeader || props.sticky }), {
				top: () => slots.top?.(slotProps.value),
				wrapper: () => _createElementVNode$48("div", {
					"ref": containerRef,
					"onScrollPassive": handleScroll,
					"onScrollend": handleScrollend,
					"class": "v-table__wrapper",
					"style": { height: convertToUnit(props.height) }
				}, [_createElementVNode$48("table", null, [
					slots.colgroup?.(slotProps.value),
					!props.hideDefaultHeader && _createElementVNode$48("thead", { "key": "thead" }, [_createVNode$58(VDataTableHeaders, _mergeProps$34(dataTableHeadersProps, { "multiSort": !!props.multiSort }), slots)]),
					slots.thead?.(slotProps.value),
					!props.hideDefaultBody && _createElementVNode$48("tbody", { "key": "tbody" }, [
						_createElementVNode$48("tr", {
							"ref": markerRef,
							"style": {
								height: convertToUnit(paddingTop.value),
								border: 0
							}
						}, [_createElementVNode$48("td", {
							"colspan": columns.value.length,
							"style": {
								height: 0,
								border: 0
							}
						}, null)]),
						slots["body.prepend"]?.(slotProps.value),
						_createVNode$58(VDataTableRows, _mergeProps$34(attrs, dataTableRowsProps, { "items": displayItems.value }), {
							...slots,
							item: (itemSlotProps) => _createVNode$58(VVirtualScrollItem, {
								"key": itemSlotProps.internalItem.index,
								"renderless": true,
								"onUpdate:height": (height) => handleItemResize(itemSlotProps.internalItem.index, height)
							}, { default: (_ref2) => {
								let { itemRef } = _ref2;
								return slots.item?.({
									...itemSlotProps,
									itemRef
								}) ?? _createVNode$58(VDataTableRow, _mergeProps$34(itemSlotProps.props, {
									"ref": itemRef,
									"key": itemSlotProps.internalItem.index,
									"index": itemSlotProps.index
								}), slots);
							} })
						}),
						slots["body.append"]?.(slotProps.value),
						_createElementVNode$48("tr", { "style": {
							height: convertToUnit(paddingBottom.value),
							border: 0
						} }, [_createElementVNode$48("td", {
							"colspan": columns.value.length,
							"style": {
								height: 0,
								border: 0
							}
						}, null)])
					]),
					slots.tbody?.(slotProps.value),
					slots.tfoot?.(slotProps.value)
				])]),
				bottom: () => slots.bottom?.(slotProps.value)
			});
		});
		return {
			calculateVisibleItems,
			scrollToIndex
		};
	}
});
var { Fragment: _Fragment$22, mergeProps: _mergeProps$33, createVNode: _createVNode$57, createElementVNode: _createElementVNode$47 } = await importShared("vue");
var { computed: computed$49, provide: provide$2, toRef: toRef$20, toRefs: toRefs$1 } = await importShared("vue");
const makeVDataTableServerProps = propsFactory({
	itemsLength: {
		type: [Number, String],
		required: true
	},
	...makeDataTablePaginateProps(),
	...makeDataTableProps(),
	...makeVDataTableFooterProps()
}, "VDataTableServer");
const VDataTableServer = genericComponent()({
	name: "VDataTableServer",
	props: makeVDataTableServerProps(),
	emits: {
		"update:modelValue": (value) => true,
		"update:page": (page) => true,
		"update:itemsPerPage": (page) => true,
		"update:sortBy": (sortBy) => true,
		"update:options": (options) => true,
		"update:expanded": (options) => true,
		"update:groupBy": (value) => true
	},
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { groupBy } = createGroupBy(props);
		const { initialSortOrder, sortBy, multiSort, mustSort } = createSort(props);
		const { page, itemsPerPage } = createPagination(props);
		const { disableSort } = toRefs$1(props);
		const itemsLength = computed$49(() => parseInt(props.itemsLength, 10));
		const { columns, headers } = createHeaders(props, {
			groupBy,
			showSelect: toRef$20(() => props.showSelect),
			showExpand: toRef$20(() => props.showExpand)
		});
		const { items } = useDataTableItems(props, columns);
		const { toggleSort } = provideSort({
			initialSortOrder,
			sortBy,
			multiSort,
			mustSort,
			page
		});
		const { opened, isGroupOpen, toggleGroup, extractRows } = provideGroupBy({
			groupBy,
			sortBy,
			disableSort
		});
		const { pageCount, setItemsPerPage } = providePagination({
			page,
			itemsPerPage,
			itemsLength
		});
		const { flatItems } = useGroupedItems(items, groupBy, opened, () => !!slots["group-summary"]);
		const { isSelected, select, selectAll, toggleSelect, someSelected, allSelected } = provideSelection(props, {
			allItems: items,
			currentPage: items
		});
		const { isExpanded, toggleExpand } = provideExpanded(props);
		const itemsWithoutGroups = computed$49(() => extractRows(items.value));
		useOptions({
			page,
			itemsPerPage,
			sortBy,
			groupBy,
			search: toRef$20(() => props.search)
		});
		provide$2("v-data-table", {
			toggleSort,
			sortBy
		});
		provideDefaults({ VDataTableRows: {
			hideNoData: toRef$20(() => props.hideNoData),
			noDataText: toRef$20(() => props.noDataText),
			loading: toRef$20(() => props.loading),
			loadingText: toRef$20(() => props.loadingText)
		} });
		const slotProps = computed$49(() => ({
			page: page.value,
			itemsPerPage: itemsPerPage.value,
			sortBy: sortBy.value,
			pageCount: pageCount.value,
			toggleSort,
			setItemsPerPage,
			someSelected: someSelected.value,
			allSelected: allSelected.value,
			isSelected,
			select,
			selectAll,
			toggleSelect,
			isExpanded,
			toggleExpand,
			isGroupOpen,
			toggleGroup,
			items: itemsWithoutGroups.value.map((item) => item.raw),
			internalItems: itemsWithoutGroups.value,
			groupedItems: flatItems.value,
			columns: columns.value,
			headers: headers.value
		}));
		useRender(() => {
			const dataTableFooterProps = VDataTableFooter.filterProps(props);
			const dataTableHeadersProps = VDataTableHeaders.filterProps(omit(props, ["multiSort"]));
			const dataTableRowsProps = VDataTableRows.filterProps(props);
			const tableProps = VTable.filterProps(props);
			return _createVNode$57(VTable, _mergeProps$33({
				"class": [
					"v-data-table",
					{ "v-data-table--loading": props.loading },
					props.class
				],
				"style": props.style
			}, tableProps, { "fixedHeader": props.fixedHeader || props.sticky }), {
				top: () => slots.top?.(slotProps.value),
				default: () => slots.default ? slots.default(slotProps.value) : _createElementVNode$47(_Fragment$22, null, [
					slots.colgroup?.(slotProps.value),
					!props.hideDefaultHeader && _createElementVNode$47("thead", {
						"key": "thead",
						"class": "v-data-table__thead",
						"role": "rowgroup"
					}, [_createVNode$57(VDataTableHeaders, _mergeProps$33(dataTableHeadersProps, { "multiSort": !!props.multiSort }), slots)]),
					slots.thead?.(slotProps.value),
					!props.hideDefaultBody && _createElementVNode$47("tbody", {
						"class": "v-data-table__tbody",
						"role": "rowgroup"
					}, [
						slots["body.prepend"]?.(slotProps.value),
						slots.body ? slots.body(slotProps.value) : _createVNode$57(VDataTableRows, _mergeProps$33(attrs, dataTableRowsProps, { "items": flatItems.value }), slots),
						slots["body.append"]?.(slotProps.value)
					]),
					slots.tbody?.(slotProps.value),
					slots.tfoot?.(slotProps.value)
				]),
				bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && _createElementVNode$47(_Fragment$22, null, [_createVNode$57(VDivider, null, null), _createVNode$57(VDataTableFooter, dataTableFooterProps, { prepend: slots["footer.prepend"] })])
			});
		});
	}
});
var { normalizeClass: _normalizeClass$38, normalizeStyle: _normalizeStyle$30, createVNode: _createVNode$56 } = await importShared("vue");
const makeVContainerProps = propsFactory({
	fluid: {
		type: Boolean,
		default: false
	},
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
	name: "VContainer",
	props: makeVContainerProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { rtlClasses } = useRtl();
		const { dimensionStyles } = useDimension(props);
		useRender(() => _createVNode$56(props.tag, {
			"class": _normalizeClass$38([
				"v-container",
				{ "v-container--fluid": props.fluid },
				rtlClasses.value,
				props.class
			]),
			"style": _normalizeStyle$30([dimensionStyles.value, props.style])
		}, slots));
		return {};
	}
});
var { capitalize: capitalize$1, computed: computed$48, h: h$2 } = await importShared("vue");
var breakpointProps = (() => {
	return breakpoints.reduce((props, val) => {
		props[val] = {
			type: [
				Boolean,
				String,
				Number
			],
			default: false
		};
		return props;
	}, {});
})();
var offsetProps = (() => {
	return breakpoints.reduce((props, val) => {
		const offsetKey = "offset" + capitalize$1(val);
		props[offsetKey] = {
			type: [String, Number],
			default: null
		};
		return props;
	}, {});
})();
var orderProps = (() => {
	return breakpoints.reduce((props, val) => {
		const orderKey = "order" + capitalize$1(val);
		props[orderKey] = {
			type: [String, Number],
			default: null
		};
		return props;
	}, {});
})();
var propMap$1 = {
	col: Object.keys(breakpointProps),
	offset: Object.keys(offsetProps),
	order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
	let className = type;
	if (val == null || val === false) return;
	if (prop) {
		const breakpoint = prop.replace(type, "");
		className += `-${breakpoint}`;
	}
	if (type === "col") className = "v-" + className;
	if (type === "col" && (val === "" || val === true)) return className.toLowerCase();
	className += `-${val}`;
	return className.toLowerCase();
}
var ALIGN_SELF_VALUES = [
	"auto",
	"start",
	"end",
	"center",
	"baseline",
	"stretch"
];
const makeVColProps = propsFactory({
	cols: {
		type: [
			Boolean,
			String,
			Number
		],
		default: false
	},
	...breakpointProps,
	offset: {
		type: [String, Number],
		default: null
	},
	...offsetProps,
	order: {
		type: [String, Number],
		default: null
	},
	...orderProps,
	alignSelf: {
		type: String,
		default: null,
		validator: (str) => ALIGN_SELF_VALUES.includes(str)
	},
	...makeComponentProps(),
	...makeTagProps()
}, "VCol");
const VCol = genericComponent()({
	name: "VCol",
	props: makeVColProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const classes = computed$48(() => {
			const classList = [];
			let type;
			for (type in propMap$1) propMap$1[type].forEach((prop) => {
				const value = props[prop];
				const className = breakpointClass$1(type, prop, value);
				if (className) classList.push(className);
			});
			const hasColClasses = classList.some((className) => className.startsWith("v-col-"));
			classList.push({
				"v-col": !hasColClasses || !props.cols,
				[`v-col-${props.cols}`]: props.cols,
				[`offset-${props.offset}`]: props.offset,
				[`order-${props.order}`]: props.order,
				[`align-self-${props.alignSelf}`]: props.alignSelf
			});
			return classList;
		});
		return () => h$2(props.tag, {
			class: [classes.value, props.class],
			style: props.style
		}, slots.default?.());
	}
});
var { capitalize, computed: computed$47, h: h$1 } = await importShared("vue");
var ALIGNMENT = [
	"start",
	"end",
	"center"
];
var SPACE = [
	"space-between",
	"space-around",
	"space-evenly"
];
function makeRowProps(prefix, def) {
	return breakpoints.reduce((props, val) => {
		const prefixKey = prefix + capitalize(val);
		props[prefixKey] = def();
		return props;
	}, {});
}
var ALIGN_VALUES = [
	...ALIGNMENT,
	"baseline",
	"stretch"
];
var alignValidator = (str) => ALIGN_VALUES.includes(str);
var alignProps = makeRowProps("align", () => ({
	type: String,
	default: null,
	validator: alignValidator
}));
var JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
var justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
var justifyProps = makeRowProps("justify", () => ({
	type: String,
	default: null,
	validator: justifyValidator
}));
var ALIGN_CONTENT_VALUES = [
	...ALIGNMENT,
	...SPACE,
	"stretch"
];
var alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
var alignContentProps = makeRowProps("alignContent", () => ({
	type: String,
	default: null,
	validator: alignContentValidator
}));
var propMap = {
	align: Object.keys(alignProps),
	justify: Object.keys(justifyProps),
	alignContent: Object.keys(alignContentProps)
};
var classMap = {
	align: "align",
	justify: "justify",
	alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
	let className = classMap[type];
	if (val == null) return;
	if (prop) {
		const breakpoint = prop.replace(type, "");
		className += `-${breakpoint}`;
	}
	className += `-${val}`;
	return className.toLowerCase();
}
const makeVRowProps = propsFactory({
	dense: Boolean,
	noGutters: Boolean,
	align: {
		type: String,
		default: null,
		validator: alignValidator
	},
	...alignProps,
	justify: {
		type: String,
		default: null,
		validator: justifyValidator
	},
	...justifyProps,
	alignContent: {
		type: String,
		default: null,
		validator: alignContentValidator
	},
	...alignContentProps,
	...makeComponentProps(),
	...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
	name: "VRow",
	props: makeVRowProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const classes = computed$47(() => {
			const classList = [];
			let type;
			for (type in propMap) propMap[type].forEach((prop) => {
				const value = props[prop];
				const className = breakpointClass(type, prop, value);
				if (className) classList.push(className);
			});
			classList.push({
				"v-row--no-gutters": props.noGutters,
				"v-row--dense": props.dense,
				[`align-${props.align}`]: props.align,
				[`justify-${props.justify}`]: props.justify,
				[`align-content-${props.alignContent}`]: props.alignContent
			});
			return classList;
		});
		return () => h$1(props.tag, {
			class: [
				"v-row",
				classes.value,
				props.class
			],
			style: props.style
		}, slots.default?.());
	}
});
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
var { createVNode: _createVNode$55, Fragment: _Fragment$21, createElementVNode: _createElementVNode$46, normalizeClass: _normalizeClass$37 } = await importShared("vue");
var { computed: computed$46 } = await importShared("vue");
const makeVDatePickerControlsProps = propsFactory({
	active: {
		type: [String, Array],
		default: void 0
	},
	controlHeight: [Number, String],
	controlVariant: {
		type: String,
		default: "docked"
	},
	noMonthPicker: Boolean,
	disabled: {
		type: [
			Boolean,
			String,
			Array
		],
		default: null
	},
	nextIcon: {
		type: IconValue,
		default: "$next"
	},
	prevIcon: {
		type: IconValue,
		default: "$prev"
	},
	modeIcon: {
		type: IconValue,
		default: "$subgroup"
	},
	text: String,
	monthText: String,
	yearText: String,
	viewMode: {
		type: String,
		default: "month"
	}
}, "VDatePickerControls");
const VDatePickerControls = genericComponent()({
	name: "VDatePickerControls",
	props: makeVDatePickerControlsProps(),
	emits: {
		"click:year": () => true,
		"click:month": () => true,
		"click:prev": () => true,
		"click:next": () => true,
		"click:prev-year": () => true,
		"click:next-year": () => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { t } = useLocale();
		const disableMonth = computed$46(() => {
			return Array.isArray(props.disabled) ? props.disabled.includes("text") : !!props.disabled;
		});
		const disableYear = computed$46(() => {
			return Array.isArray(props.disabled) ? props.disabled.includes("mode") : !!props.disabled;
		});
		const disablePrevMonth = computed$46(() => {
			return Array.isArray(props.disabled) ? props.disabled.includes("prev-month") : !!props.disabled;
		});
		const disableNextMonth = computed$46(() => {
			return Array.isArray(props.disabled) ? props.disabled.includes("next-month") : !!props.disabled;
		});
		const disablePrevYear = computed$46(() => {
			return Array.isArray(props.disabled) ? props.disabled.includes("prev-year") : !!props.disabled;
		});
		const disableNextYear = computed$46(() => {
			return Array.isArray(props.disabled) ? props.disabled.includes("next-year") : !!props.disabled;
		});
		function onClickPrevMonth() {
			emit("click:prev");
		}
		function onClickNextMonth() {
			emit("click:next");
		}
		function onClickPrevYear() {
			emit("click:prev-year");
		}
		function onClickNextYear() {
			emit("click:next-year");
		}
		function onClickYear() {
			emit("click:year");
		}
		function onClickMonth() {
			emit("click:month");
		}
		useRender(() => {
			const innerDefaults = { VBtn: {
				density: "comfortable",
				variant: "text"
			} };
			const prevMonth = _createVNode$55(VBtn, {
				"data-testid": "prev-month",
				"disabled": disablePrevMonth.value,
				"icon": props.prevIcon,
				"aria-label": t("$vuetify.datePicker.ariaLabel.previousMonth"),
				"onClick": onClickPrevMonth
			}, null);
			const nextMonth = _createVNode$55(VBtn, {
				"data-testid": "next-month",
				"disabled": disableNextMonth.value,
				"icon": props.nextIcon,
				"aria-label": t("$vuetify.datePicker.ariaLabel.nextMonth"),
				"onClick": onClickNextMonth
			}, null);
			const prevYear = _createVNode$55(VBtn, {
				"data-testid": "prev-year",
				"disabled": disablePrevYear.value,
				"icon": props.prevIcon,
				"aria-label": t("$vuetify.datePicker.ariaLabel.previousYear"),
				"onClick": onClickPrevYear
			}, null);
			const nextYear = _createVNode$55(VBtn, {
				"data-testid": "next-year",
				"disabled": disableNextYear.value,
				"icon": props.nextIcon,
				"aria-label": t("$vuetify.datePicker.ariaLabel.nextYear"),
				"onClick": onClickNextYear
			}, null);
			const onlyMonthBtn = _createVNode$55(VBtn, {
				"class": "v-date-picker-controls__only-month-btn",
				"data-testid": "month-btn",
				"density": "default",
				"disabled": disableMonth.value,
				"text": props.monthText,
				"appendIcon": props.modeIcon,
				"rounded": true,
				"aria-label": t("$vuetify.datePicker.ariaLabel.selectMonth"),
				"onClick": onClickMonth
			}, null);
			const onlyYearBtn = _createVNode$55(VBtn, {
				"class": "v-date-picker-controls__only-year-btn",
				"data-testid": "year-btn",
				"density": "default",
				"disabled": disableYear.value,
				"text": props.yearText,
				"appendIcon": props.modeIcon,
				"rounded": true,
				"aria-label": t("$vuetify.datePicker.ariaLabel.selectYear"),
				"onClick": onClickYear
			}, null);
			const monthYearBtn = _createVNode$55(VBtn, {
				"class": "v-date-picker-controls__year-btn",
				"data-testid": "year-btn",
				"density": "default",
				"disabled": disableYear.value,
				"text": props.text,
				"appendIcon": props.modeIcon,
				"rounded": true,
				"aria-label": t("$vuetify.datePicker.ariaLabel.selectYear"),
				"onClick": onClickYear
			}, null);
			const monthYearSplit = _createElementVNode$46(_Fragment$21, null, [_createVNode$55(VBtn, {
				"class": "v-date-picker-controls__month-btn",
				"data-testid": "month-btn",
				"height": "36",
				"disabled": disableMonth.value,
				"text": props.text,
				"rounded": true,
				"aria-label": t("$vuetify.datePicker.ariaLabel.selectMonth"),
				"onClick": onClickMonth
			}, null), _createVNode$55(VBtn, {
				"class": "v-date-picker-controls__mode-btn",
				"data-testid": "year-btn",
				"disabled": disableYear.value,
				"icon": props.modeIcon,
				"aria-label": t("$vuetify.datePicker.ariaLabel.selectYear"),
				"onClick": onClickYear
			}, null)]);
			const slotProps = {
				viewMode: props.viewMode,
				disabled: Array.isArray(props.disabled) ? props.disabled : [],
				monthYearText: props.text ?? "",
				monthText: props.monthText ?? "",
				yearText: props.yearText ?? "",
				openMonths: onClickMonth,
				openYears: onClickYear,
				prevMonth: onClickPrevMonth,
				nextMonth: onClickNextMonth,
				prevYear: onClickPrevYear,
				nextYear: onClickNextYear
			};
			const modalControls = _createElementVNode$46(_Fragment$21, null, [
				props.noMonthPicker ? monthYearBtn : monthYearSplit,
				_createVNode$55(VSpacer, null, null),
				_createElementVNode$46("div", { "class": "v-date-picker-controls__month" }, [prevMonth, nextMonth])
			]);
			const dockedControls = _createElementVNode$46(_Fragment$21, null, [
				_createElementVNode$46("div", { "class": "v-date-picker-controls__month" }, [
					prevMonth,
					onlyMonthBtn,
					nextMonth
				]),
				_createVNode$55(VSpacer, null, null),
				_createElementVNode$46("div", { "class": "v-date-picker-controls__year" }, [
					prevYear,
					onlyYearBtn,
					nextYear
				])
			]);
			return _createVNode$55(VDefaultsProvider, { "defaults": innerDefaults }, { default: () => [_createElementVNode$46("div", {
				"class": _normalizeClass$37(["v-date-picker-controls", `v-date-picker-controls--variant-${props.controlVariant}`]),
				"style": { "--v-date-picker-controls-height": convertToUnit(props.controlHeight) }
			}, [slots.default?.(slotProps) ?? _createElementVNode$46(_Fragment$21, null, [props.controlVariant === "modal" && modalControls, props.controlVariant === "docked" && dockedControls])])] });
		});
		return {};
	}
});
var { createElementVNode: _createElementVNode$45, createVNode: _createVNode$54, normalizeClass: _normalizeClass$36, normalizeStyle: _normalizeStyle$29 } = await importShared("vue");
const makeVDatePickerHeaderProps = propsFactory({
	appendIcon: IconValue,
	color: String,
	header: String,
	transition: String,
	onClick: EventProp()
}, "VDatePickerHeader");
const VDatePickerHeader = genericComponent()({
	name: "VDatePickerHeader",
	props: makeVDatePickerHeaderProps(),
	emits: {
		click: () => true,
		"click:append": () => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		function onClick() {
			emit("click");
		}
		function onClickAppend() {
			emit("click:append");
		}
		useRender(() => {
			const hasContent = !!(slots.default || props.header);
			const hasAppend = !!(slots.append || props.appendIcon);
			return _createElementVNode$45("div", {
				"class": _normalizeClass$36([
					"v-date-picker-header",
					{ "v-date-picker-header--clickable": !!props.onClick },
					backgroundColorClasses.value
				]),
				"style": _normalizeStyle$29(backgroundColorStyles.value),
				"onClick": onClick
			}, [
				slots.prepend && _createElementVNode$45("div", {
					"key": "prepend",
					"class": "v-date-picker-header__prepend"
				}, [slots.prepend()]),
				hasContent && _createVNode$54(MaybeTransition, {
					"key": "content",
					"name": props.transition
				}, { default: () => [_createElementVNode$45("div", {
					"key": props.header,
					"class": "v-date-picker-header__content"
				}, [slots.default?.() ?? props.header])] }),
				hasAppend && _createElementVNode$45("div", { "class": "v-date-picker-header__append" }, [!slots.append ? _createVNode$54(VBtn, {
					"key": "append-btn",
					"icon": props.appendIcon,
					"variant": "text",
					"onClick": onClickAppend
				}, null) : _createVNode$54(VDefaultsProvider, {
					"key": "append-defaults",
					"disabled": !props.appendIcon,
					"defaults": { VBtn: {
						icon: props.appendIcon,
						variant: "text"
					} }
				}, { default: () => [slots.append?.()] })])
			]);
		});
		return {};
	}
});
var { computed: computed$45 } = await importShared("vue");
const makeCalendarProps = propsFactory({
	allowedDates: [Array, Function],
	disabled: {
		type: Boolean,
		default: null
	},
	displayValue: null,
	modelValue: Array,
	month: [Number, String],
	max: null,
	min: null,
	showAdjacentMonths: Boolean,
	year: [Number, String],
	weekdays: {
		type: Array,
		default: () => [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		]
	},
	weeksInMonth: {
		type: String,
		default: "dynamic"
	},
	firstDayOfWeek: {
		type: [Number, String],
		default: void 0
	},
	firstDayOfYear: {
		type: [Number, String],
		default: void 0
	},
	weekdayFormat: String
}, "calendar");
function useCalendar(props) {
	const adapter = useDate();
	const model = useProxiedModel(props, "modelValue", [], (v) => wrapInArray(v).map((i) => adapter.date(i)));
	const displayValue = computed$45(() => {
		if (props.displayValue) return adapter.date(props.displayValue);
		if (model.value.length > 0) return adapter.date(model.value[0]);
		if (props.min) return adapter.date(props.min);
		if (Array.isArray(props.allowedDates)) return adapter.date(props.allowedDates[0]);
		return adapter.date();
	});
	const year = useProxiedModel(props, "year", void 0, (v) => {
		const value = v != null ? Number(v) : adapter.getYear(displayValue.value);
		return adapter.startOfYear(adapter.setYear(adapter.date(), value));
	}, (v) => adapter.getYear(v));
	const month = useProxiedModel(props, "month", void 0, (v) => {
		const value = v != null ? Number(v) : adapter.getMonth(displayValue.value);
		const date = adapter.setYear(adapter.startOfMonth(adapter.date()), adapter.getYear(year.value));
		return adapter.setMonth(date, value);
	}, (v) => adapter.getMonth(v));
	const weekdayLabels = computed$45(() => {
		const firstDayOfWeek = adapter.toJsDate(adapter.startOfWeek(adapter.date(), props.firstDayOfWeek)).getDay();
		return adapter.getWeekdays(props.firstDayOfWeek, props.weekdayFormat).filter((_, i) => props.weekdays.includes((i + firstDayOfWeek) % 7));
	});
	const weeksInMonth = computed$45(() => {
		const weeks = adapter.getWeekArray(month.value, props.firstDayOfWeek);
		const days = weeks.flat();
		const daysInMonth$2 = 42;
		if (props.weeksInMonth === "static" && days.length < daysInMonth$2) {
			const lastDay = days[days.length - 1];
			let week = [];
			for (let day = 1; day <= daysInMonth$2 - days.length; day++) {
				week.push(adapter.addDays(lastDay, day));
				if (day % 7 === 0) {
					weeks.push(week);
					week = [];
				}
			}
		}
		return weeks;
	});
	function genDays(days, today) {
		return days.filter((date) => {
			return props.weekdays.includes(adapter.toJsDate(date).getDay());
		}).map((date, index) => {
			const isoDate = adapter.toISO(date);
			const isAdjacent = !adapter.isSameMonth(date, month.value);
			const isStart = adapter.isSameDay(date, adapter.startOfMonth(month.value));
			const isEnd = adapter.isSameDay(date, adapter.endOfMonth(month.value));
			const isSame = adapter.isSameDay(date, month.value);
			const weekdaysCount = props.weekdays.length;
			return {
				date,
				formatted: adapter.format(date, "keyboardDate"),
				isAdjacent,
				isDisabled: isDisabled(date),
				isEnd,
				isHidden: isAdjacent && !props.showAdjacentMonths,
				isSame,
				isSelected: model.value.some((value) => adapter.isSameDay(date, value)),
				isStart,
				isToday: adapter.isSameDay(date, today),
				isWeekEnd: index % weekdaysCount === weekdaysCount - 1,
				isWeekStart: index % weekdaysCount === 0,
				isoDate,
				localized: adapter.format(date, "dayOfMonth"),
				month: adapter.getMonth(date),
				year: adapter.getYear(date)
			};
		});
	}
	const daysInWeek = computed$45(() => {
		const lastDay = adapter.startOfWeek(displayValue.value, props.firstDayOfWeek);
		const week = [];
		for (let day = 0; day <= 6; day++) week.push(adapter.addDays(lastDay, day));
		return genDays(week, adapter.date());
	});
	const daysInMonth$1 = computed$45(() => {
		return genDays(weeksInMonth.value.flat(), adapter.date());
	});
	const weekNumbers = computed$45(() => {
		return weeksInMonth.value.map((week) => {
			return week.length ? adapter.getWeek(week[0], props.firstDayOfWeek, props.firstDayOfYear) : null;
		});
	});
	const { minDate, maxDate } = useCalendarRange(props);
	function isDisabled(value) {
		if (props.disabled) return true;
		const date = adapter.date(value);
		if (minDate.value && adapter.isBefore(adapter.endOfDay(date), minDate.value)) return true;
		if (maxDate.value && adapter.isAfter(date, maxDate.value)) return true;
		if (Array.isArray(props.allowedDates) && props.allowedDates.length > 0) return !props.allowedDates.some((d) => adapter.isSameDay(adapter.date(d), date));
		if (typeof props.allowedDates === "function") return !props.allowedDates(date);
		return false;
	}
	return {
		displayValue,
		daysInMonth: daysInMonth$1,
		daysInWeek,
		genDays,
		model,
		weeksInMonth,
		weekdayLabels,
		weekNumbers
	};
}
function useCalendarRange(props) {
	const adapter = useDate();
	const minDate = computed$45(() => {
		if (!props.min) return null;
		const date = adapter.date(props.min);
		return adapter.isValid(date) ? date : null;
	});
	const maxDate = computed$45(() => {
		if (!props.max) return null;
		const date = adapter.date(props.max);
		return adapter.isValid(date) ? date : null;
	});
	function clampDate(date) {
		if (minDate.value && adapter.isBefore(date, minDate.value)) return minDate.value;
		if (maxDate.value && adapter.isAfter(date, maxDate.value)) return maxDate.value;
		return date;
	}
	function isInAllowedRange(date) {
		return (!minDate.value || adapter.isAfter(date, minDate.value)) && (!maxDate.value || adapter.isBefore(date, maxDate.value));
	}
	return {
		minDate,
		maxDate,
		clampDate,
		isInAllowedRange
	};
}
var { createVNode: _createVNode$53, createElementVNode: _createElementVNode$44, createTextVNode: _createTextVNode$4, normalizeClass: _normalizeClass$35 } = await importShared("vue");
var { computed: computed$44, ref: ref$28, shallowRef: shallowRef$17, toRef: toRef$19, watch: watch$16 } = await importShared("vue");
const makeVDatePickerMonthProps = propsFactory({
	color: String,
	hideWeekdays: Boolean,
	multiple: [
		Boolean,
		Number,
		String
	],
	showWeek: Boolean,
	transition: {
		type: String,
		default: "picker-transition"
	},
	reverseTransition: {
		type: String,
		default: "picker-reverse-transition"
	},
	events: {
		type: [
			Array,
			Function,
			Object
		],
		default: () => null
	},
	eventColor: {
		type: [
			Array,
			Function,
			Object,
			String
		],
		default: () => null
	},
	...omit(makeCalendarProps(), ["displayValue"])
}, "VDatePickerMonth");
const VDatePickerMonth = genericComponent()({
	name: "VDatePickerMonth",
	props: makeVDatePickerMonthProps(),
	emits: {
		"update:modelValue": (date) => true,
		"update:month": (date) => true,
		"update:year": (date) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const daysRef = ref$28();
		const { t } = useLocale();
		const { daysInMonth: daysInMonth$1, model, weekNumbers, weekdayLabels } = useCalendar(props);
		const adapter = useDate();
		const rangeStart = shallowRef$17();
		const rangeStop = shallowRef$17();
		const isReverse = shallowRef$17(false);
		const transition = toRef$19(() => {
			return !isReverse.value ? props.transition : props.reverseTransition;
		});
		if (props.multiple === "range" && model.value.length > 0) {
			rangeStart.value = model.value[0];
			if (model.value.length > 1) rangeStop.value = model.value[model.value.length - 1];
		}
		const atMax = computed$44(() => {
			const max = ["number", "string"].includes(typeof props.multiple) ? Number(props.multiple) : Infinity;
			return model.value.length >= max;
		});
		watch$16(daysInMonth$1, (val, oldVal) => {
			if (!oldVal) return;
			isReverse.value = adapter.isBefore(val[0].date, oldVal[0].date);
		});
		function onRangeClick(value) {
			const _value = adapter.startOfDay(value);
			if (model.value.length === 0) rangeStart.value = void 0;
			else if (model.value.length === 1) {
				rangeStart.value = model.value[0];
				rangeStop.value = void 0;
			}
			if (!rangeStart.value) {
				rangeStart.value = _value;
				model.value = [rangeStart.value];
			} else if (!rangeStop.value) {
				if (adapter.isSameDay(_value, rangeStart.value)) {
					rangeStart.value = void 0;
					model.value = [];
					return;
				} else if (adapter.isBefore(_value, rangeStart.value)) {
					rangeStop.value = adapter.endOfDay(rangeStart.value);
					rangeStart.value = _value;
				} else rangeStop.value = adapter.endOfDay(_value);
				model.value = createDateRange(adapter, rangeStart.value, rangeStop.value);
			} else {
				rangeStart.value = value;
				rangeStop.value = void 0;
				model.value = [rangeStart.value];
			}
		}
		function getDateAriaLabel(item) {
			const fullDate = adapter.format(item.date, "fullDateWithWeekday");
			return t(`$vuetify.datePicker.ariaLabel.${item.isToday ? "currentDate" : "selectDate"}`, fullDate);
		}
		function onMultipleClick(value) {
			const index = model.value.findIndex((selection) => adapter.isSameDay(selection, value));
			if (index === -1) model.value = [...model.value, value];
			else {
				const value$1 = [...model.value];
				value$1.splice(index, 1);
				model.value = value$1;
			}
		}
		function onClick(value) {
			if (props.multiple === "range") onRangeClick(value);
			else if (props.multiple) onMultipleClick(value);
			else model.value = [value];
		}
		function getEventColors(date) {
			const { events, eventColor } = props;
			let eventData;
			let eventColors = [];
			if (Array.isArray(events)) eventData = events.includes(date);
			else if (events instanceof Function) eventData = events(date) || false;
			else if (events) eventData = events[date] || false;
			else eventData = false;
			if (!eventData) return [];
			else if (eventData !== true) eventColors = wrapInArray(eventData);
			else if (typeof eventColor === "string") eventColors = [eventColor];
			else if (typeof eventColor === "function") eventColors = wrapInArray(eventColor(date));
			else if (Array.isArray(eventColor)) eventColors = eventColor;
			else if (typeof eventColor === "object" && eventColor !== null) eventColors = wrapInArray(eventColor[date]);
			return !eventColors.length ? ["surface-variant"] : eventColors.filter(Boolean).map((color) => typeof color === "string" ? color : "surface-variant");
		}
		function genEvents(date) {
			const eventColors = getEventColors(date);
			if (!eventColors.length) return null;
			return _createElementVNode$44("div", { "class": "v-date-picker-month__events" }, [eventColors.map((color) => _createVNode$53(VBadge, {
				"dot": true,
				"color": color
			}, null))]);
		}
		useRender(() => _createElementVNode$44("div", {
			"class": "v-date-picker-month",
			"style": { "--v-date-picker-days-in-week": props.weekdays.length }
		}, [props.showWeek && _createElementVNode$44("div", {
			"key": "weeks",
			"class": "v-date-picker-month__weeks"
		}, [!props.hideWeekdays && _createElementVNode$44("div", {
			"key": "hide-week-days",
			"class": "v-date-picker-month__day"
		}, [_createTextVNode$4("\xA0")]), weekNumbers.value.map((week) => _createElementVNode$44("div", { "class": _normalizeClass$35(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [week]))]), _createVNode$53(MaybeTransition, { "name": transition.value }, { default: () => [_createElementVNode$44("div", {
			"ref": daysRef,
			"key": daysInMonth$1.value[0].date?.toString(),
			"class": "v-date-picker-month__days"
		}, [!props.hideWeekdays && weekdayLabels.value.map((weekDay) => _createElementVNode$44("div", { "class": _normalizeClass$35(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [weekDay])), daysInMonth$1.value.map((item, i) => {
			const slotProps = {
				props: {
					class: "v-date-picker-month__day-btn",
					color: item.isSelected || item.isToday ? props.color : void 0,
					disabled: item.isDisabled,
					icon: true,
					ripple: false,
					variant: item.isSelected ? "flat" : item.isToday ? "outlined" : "text",
					"aria-label": getDateAriaLabel(item),
					"aria-current": item.isToday ? "date" : void 0,
					onClick: () => onClick(item.date)
				},
				item,
				i
			};
			if (atMax.value && !item.isSelected) item.isDisabled = true;
			return _createElementVNode$44("div", {
				"class": _normalizeClass$35(["v-date-picker-month__day", {
					"v-date-picker-month__day--adjacent": item.isAdjacent,
					"v-date-picker-month__day--hide-adjacent": item.isHidden,
					"v-date-picker-month__day--selected": item.isSelected,
					"v-date-picker-month__day--week-end": item.isWeekEnd,
					"v-date-picker-month__day--week-start": item.isWeekStart
				}]),
				"data-v-date": !item.isDisabled ? item.isoDate : void 0
			}, [(props.showAdjacentMonths || !item.isAdjacent) && (slots.day?.(slotProps) ?? _createVNode$53(VBtn, slotProps.props, { default: () => [item.localized, genEvents(item.isoDate)] }))]);
		})])] })]));
	}
});
var { mergeProps: _mergeProps$32, createVNode: _createVNode$52, createElementVNode: _createElementVNode$43 } = await importShared("vue");
var { computed: computed$43, watchEffect: watchEffect$8 } = await importShared("vue");
const makeVDatePickerMonthsProps = propsFactory({
	color: String,
	height: [String, Number],
	min: null,
	max: null,
	modelValue: Number,
	year: Number,
	allowedMonths: [Array, Function]
}, "VDatePickerMonths");
const VDatePickerMonths = genericComponent()({
	name: "VDatePickerMonths",
	props: makeVDatePickerMonthsProps(),
	emits: { "update:modelValue": (date) => true },
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const adapter = useDate();
		const model = useProxiedModel(props, "modelValue");
		const months = computed$43(() => {
			let date = adapter.startOfYear(adapter.date());
			if (props.year) date = adapter.setYear(date, props.year);
			return createRange(12).map((i) => {
				const text = adapter.format(date, "monthShort");
				const label = adapter.format(date, "month");
				const isDisabled = !!(!isMonthAllowed(i) || props.min && adapter.isAfter(adapter.startOfMonth(adapter.date(props.min)), date) || props.max && adapter.isAfter(date, adapter.startOfMonth(adapter.date(props.max))));
				date = adapter.getNextMonth(date);
				return {
					isDisabled,
					text,
					label,
					value: i
				};
			});
		});
		watchEffect$8(() => {
			model.value = model.value ?? adapter.getMonth(adapter.date());
		});
		function isMonthAllowed(month) {
			if (Array.isArray(props.allowedMonths) && props.allowedMonths.length) return props.allowedMonths.includes(month);
			if (typeof props.allowedMonths === "function") return props.allowedMonths(month);
			return true;
		}
		useRender(() => _createElementVNode$43("div", {
			"class": "v-date-picker-months",
			"style": { height: convertToUnit(props.height) }
		}, [_createElementVNode$43("div", { "class": "v-date-picker-months__content" }, [months.value.map((month, i) => {
			const btnProps = {
				active: model.value === i,
				ariaLabel: month.label,
				color: model.value === i ? props.color : void 0,
				disabled: month.isDisabled,
				rounded: true,
				text: month.text,
				variant: model.value === month.value ? "flat" : "text",
				onClick: () => onClick(i)
			};
			function onClick(i$1) {
				if (model.value === i$1) {
					emit("update:modelValue", model.value);
					return;
				}
				model.value = i$1;
			}
			return slots.month?.({
				month,
				i,
				props: btnProps
			}) ?? _createVNode$52(VBtn, _mergeProps$32({ "key": "month" }, btnProps), null);
		})])]));
		return {};
	}
});
var { mergeProps: _mergeProps$31, createVNode: _createVNode$51, createElementVNode: _createElementVNode$42, withDirectives: _withDirectives$6 } = await importShared("vue");
var { computed: computed$42, shallowRef: shallowRef$16, watchEffect: watchEffect$7 } = await importShared("vue");
const makeVDatePickerYearsProps = propsFactory({
	color: String,
	height: [String, Number],
	min: null,
	max: null,
	modelValue: Number,
	allowedYears: [Array, Function]
}, "VDatePickerYears");
const VDatePickerYears = genericComponent()({
	name: "VDatePickerYears",
	props: makeVDatePickerYearsProps(),
	directives: { vIntersect: intersect_default },
	emits: { "update:modelValue": (year) => true },
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const adapter = useDate();
		const model = useProxiedModel(props, "modelValue");
		const hasFocusedItem = shallowRef$16(false);
		const years = computed$42(() => {
			const year = adapter.getYear(adapter.date());
			let min = year - 100;
			let max = year + 52;
			if (props.min) min = adapter.getYear(adapter.date(props.min));
			if (props.max) max = adapter.getYear(adapter.date(props.max));
			let date = adapter.startOfYear(adapter.date());
			date = adapter.setYear(date, min);
			return createRange(max - min + 1, min).map((i) => {
				const text = adapter.format(date, "year");
				date = adapter.setYear(date, adapter.getYear(date) + 1);
				return {
					text,
					value: i,
					isDisabled: !isYearAllowed(i)
				};
			});
		});
		watchEffect$7(() => {
			model.value = model.value ?? adapter.getYear(adapter.date());
		});
		const yearRef = templateRef();
		function focusSelectedYear() {
			yearRef.el?.scrollIntoView({ block: "center" });
		}
		function isYearAllowed(year) {
			if (Array.isArray(props.allowedYears) && props.allowedYears.length) return props.allowedYears.includes(year);
			if (typeof props.allowedYears === "function") return props.allowedYears(year);
			return true;
		}
		useRender(() => _withDirectives$6(_createElementVNode$42("div", {
			"class": "v-date-picker-years",
			"style": { height: convertToUnit(props.height) }
		}, [_createElementVNode$42("div", {
			"class": "v-date-picker-years__content",
			"onFocus": () => yearRef.el?.focus(),
			"onFocusin": () => hasFocusedItem.value = true,
			"onFocusout": () => hasFocusedItem.value = false,
			"tabindex": hasFocusedItem.value ? -1 : 0
		}, [years.value.map((year, i) => {
			const btnProps = {
				ref: model.value === year.value ? yearRef : void 0,
				active: model.value === year.value,
				color: model.value === year.value ? props.color : void 0,
				rounded: true,
				text: year.text,
				disabled: year.isDisabled,
				variant: model.value === year.value ? "flat" : "text",
				onClick: () => {
					if (model.value === year.value) {
						emit("update:modelValue", model.value);
						return;
					}
					model.value = year.value;
				}
			};
			return slots.year?.({
				year,
				i,
				props: btnProps
			}) ?? _createVNode$51(VBtn, _mergeProps$31({ "key": "month" }, btnProps), null);
		})])]), [[
			intersect_default,
			{ handler: focusSelectedYear },
			null,
			{ once: true }
		]]));
		return {};
	}
});
var { createElementVNode: _createElementVNode$41, createVNode: _createVNode$50, mergeProps: _mergeProps$30, Fragment: _Fragment$20 } = await importShared("vue");
var { computed: computed$41, shallowRef: shallowRef$15, toRef: toRef$18, watch: watch$15 } = await importShared("vue");
const makeVDatePickerProps = propsFactory({
	header: {
		type: String,
		default: "$vuetify.datePicker.header"
	},
	headerColor: String,
	headerDateFormat: {
		type: String,
		default: "normalDateWithWeekday"
	},
	landscapeHeaderWidth: [Number, String],
	...omit(makeVDatePickerControlsProps(), [
		"active",
		"monthText",
		"yearText"
	]),
	...makeVDatePickerMonthProps({ weeksInMonth: "static" }),
	...omit(makeVDatePickerMonthsProps(), ["modelValue"]),
	...omit(makeVDatePickerYearsProps(), ["modelValue"]),
	...makeVPickerProps({ title: "$vuetify.datePicker.title" }),
	modelValue: null
}, "VDatePicker");
const VDatePicker = genericComponent()({
	name: "VDatePicker",
	props: makeVDatePickerProps(),
	emits: {
		"update:modelValue": (date) => true,
		"update:month": (date) => true,
		"update:year": (date) => true,
		"update:viewMode": (date) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const adapter = useDate();
		const { t } = useLocale();
		const { rtlClasses } = useRtl();
		const model = useProxiedModel(props, "modelValue", void 0, (v) => wrapInArray(v).map((i) => adapter.date(i)), (v) => props.multiple ? v : v[0]);
		const viewMode = useProxiedModel(props, "viewMode");
		const { minDate, maxDate, clampDate } = useCalendarRange(props);
		const internal = computed$41(() => {
			const today = adapter.date();
			const value = model.value?.[0] ? adapter.date(model.value[0]) : clampDate(today);
			return value && adapter.isValid(value) ? value : today;
		});
		const headerColor = toRef$18(() => props.headerColor ?? props.color);
		const _month = useProxiedModel(props, "month");
		const month = computed$41({
			get: () => Number(_month.value ?? adapter.getMonth(adapter.startOfMonth(internal.value))),
			set: (v) => _month.value = v
		});
		const _year = useProxiedModel(props, "year");
		const year = computed$41({
			get: () => Number(_year.value ?? adapter.getYear(adapter.startOfYear(adapter.setMonth(internal.value, month.value)))),
			set: (v) => _year.value = v
		});
		const isReversing = shallowRef$15(false);
		const header = computed$41(() => {
			if (props.multiple && model.value.length > 1) return t("$vuetify.datePicker.itemsSelected", model.value.length);
			const formattedDate = model.value[0] && adapter.isValid(model.value[0]) ? adapter.format(adapter.date(model.value[0]), props.headerDateFormat) : t(props.header);
			return props.landscape && formattedDate.split(" ").length === 3 ? formattedDate.replace(" ", "\n") : formattedDate;
		});
		const monthStart = toRef$18(() => {
			let date = adapter.date();
			date = adapter.setDate(date, 1);
			date = adapter.setMonth(date, month.value);
			date = adapter.setYear(date, year.value);
			return date;
		});
		const monthYearText = toRef$18(() => adapter.format(monthStart.value, "monthAndYear"));
		const monthText = toRef$18(() => adapter.format(monthStart.value, "monthShort"));
		const yearText = toRef$18(() => adapter.format(monthStart.value, "year"));
		const headerTransition = toRef$18(() => `date-picker-header${isReversing.value ? "-reverse" : ""}-transition`);
		const disabled = computed$41(() => {
			if (props.disabled) return true;
			const targets = [];
			if (viewMode.value !== "month") targets.push(...[
				"prev-month",
				"next-month",
				"prev-year",
				"next-year"
			]);
			else {
				let _date = adapter.date();
				_date = adapter.startOfMonth(_date);
				_date = adapter.setMonth(_date, month.value);
				_date = adapter.setYear(_date, year.value);
				if (minDate.value) {
					const prevMonthEnd = adapter.addDays(adapter.startOfMonth(_date), -1);
					const prevYearEnd = adapter.addDays(adapter.startOfYear(_date), -1);
					adapter.isAfter(minDate.value, prevMonthEnd) && targets.push("prev-month");
					adapter.isAfter(minDate.value, prevYearEnd) && targets.push("prev-year");
				}
				if (maxDate.value) {
					const nextMonthStart = adapter.addDays(adapter.endOfMonth(_date), 1);
					const nextYearStart = adapter.addDays(adapter.endOfYear(_date), 1);
					adapter.isAfter(nextMonthStart, maxDate.value) && targets.push("next-month");
					adapter.isAfter(nextYearStart, maxDate.value) && targets.push("next-year");
				}
			}
			return targets;
		});
		const allowedYears = computed$41(() => {
			return props.allowedYears || isYearAllowed;
		});
		const allowedMonths = computed$41(() => {
			return props.allowedMonths || isMonthAllowed;
		});
		function isAllowedInRange(start, end) {
			const allowedDates = props.allowedDates;
			if (typeof allowedDates !== "function") return true;
			const days = 1 + daysDiff(adapter, start, end);
			for (let i = 0; i < days; i++) if (allowedDates(adapter.addDays(start, i))) return true;
			return false;
		}
		function isYearAllowed(year$1) {
			if (typeof props.allowedDates === "function") {
				const startOfYear = adapter.parseISO(`${year$1}-01-01`);
				return isAllowedInRange(startOfYear, adapter.endOfYear(startOfYear));
			}
			if (Array.isArray(props.allowedDates) && props.allowedDates.length) {
				for (const date of props.allowedDates) if (adapter.getYear(adapter.date(date)) === year$1) return true;
				return false;
			}
			return true;
		}
		function isMonthAllowed(month$1) {
			if (typeof props.allowedDates === "function") {
				const monthTwoDigits = String(month$1 + 1).padStart(2, "0");
				const startOfMonth = adapter.parseISO(`${year.value}-${monthTwoDigits}-01`);
				return isAllowedInRange(startOfMonth, adapter.endOfMonth(startOfMonth));
			}
			if (Array.isArray(props.allowedDates) && props.allowedDates.length) {
				for (const date of props.allowedDates) if (adapter.getYear(adapter.date(date)) === year.value && adapter.getMonth(adapter.date(date)) === month$1) return true;
				return false;
			}
			return true;
		}
		function onClickNextMonth() {
			if (month.value < 11) month.value++;
			else {
				year.value++;
				month.value = 0;
				onUpdateYear();
			}
			onUpdateMonth();
		}
		function onClickPrevMonth() {
			if (month.value > 0) month.value--;
			else {
				year.value--;
				month.value = 11;
				onUpdateYear();
			}
			onUpdateMonth();
		}
		function onClickNextYear() {
			year.value++;
			if (maxDate.value) {
				const monthTwoDigits = String(month.value + 1).padStart(2, "0");
				const monthStart$1 = adapter.parseISO(`${year.value}-${monthTwoDigits}-01`);
				if (adapter.isAfter(monthStart$1, maxDate.value)) month.value = adapter.getMonth(maxDate.value);
			}
			onUpdateYear();
		}
		function onClickPrevYear() {
			year.value--;
			if (minDate.value) {
				const monthTwoDigits = String(month.value + 1).padStart(2, "0");
				const monthStart$1 = adapter.endOfMonth(adapter.parseISO(`${year.value}-${monthTwoDigits}-01`));
				if (adapter.isAfter(minDate.value, monthStart$1)) month.value = adapter.getMonth(minDate.value);
			}
			onUpdateYear();
		}
		function onClickDate() {
			viewMode.value = "month";
		}
		function onClickMonth() {
			viewMode.value = viewMode.value === "months" ? "month" : "months";
		}
		function onClickYear() {
			viewMode.value = viewMode.value === "year" ? "month" : "year";
		}
		function onUpdateMonth() {
			if (viewMode.value === "months") onClickMonth();
		}
		function onUpdateYear() {
			if (viewMode.value === "year") onClickYear();
		}
		watch$15(model, (val, oldVal) => {
			const arrBefore = wrapInArray(oldVal);
			const arrAfter = wrapInArray(val);
			if (!arrAfter.length) return;
			const before = adapter.date(arrBefore[arrBefore.length - 1]);
			const after = adapter.date(arrAfter[arrAfter.length - 1]);
			if (adapter.isSameDay(before, after)) return;
			const newMonth = adapter.getMonth(after);
			const newYear = adapter.getYear(after);
			if (newMonth !== month.value) {
				month.value = newMonth;
				onUpdateMonth();
			}
			if (newYear !== year.value) {
				year.value = newYear;
				onUpdateYear();
			}
			isReversing.value = adapter.isBefore(before, after);
		});
		useRender(() => {
			const pickerProps = VPicker.filterProps(props);
			const datePickerControlsProps = omit(VDatePickerControls.filterProps(props), ["viewMode"]);
			const datePickerHeaderProps = VDatePickerHeader.filterProps(props);
			const datePickerMonthProps = VDatePickerMonth.filterProps(props);
			const datePickerMonthsProps = omit(VDatePickerMonths.filterProps(props), ["modelValue"]);
			const datePickerYearsProps = omit(VDatePickerYears.filterProps(props), ["modelValue"]);
			const headerProps = {
				color: headerColor.value,
				header: header.value,
				transition: headerTransition.value
			};
			return _createVNode$50(VPicker, _mergeProps$30(pickerProps, {
				"color": headerColor.value,
				"class": [
					"v-date-picker",
					`v-date-picker--${viewMode.value}`,
					{ "v-date-picker--show-week": props.showWeek },
					rtlClasses.value,
					props.class
				],
				"style": [{ "--v-date-picker-landscape-header-width": convertToUnit(props.landscapeHeaderWidth) }, props.style]
			}), {
				title: () => slots.title?.() ?? _createElementVNode$41("div", { "class": "v-date-picker__title" }, [t(props.title)]),
				header: () => slots.header ? _createVNode$50(VDefaultsProvider, { "defaults": { VDatePickerHeader: { ...headerProps } } }, { default: () => [slots.header?.(headerProps)] }) : _createVNode$50(VDatePickerHeader, _mergeProps$30({ "key": "header" }, datePickerHeaderProps, headerProps, { "onClick": viewMode.value !== "month" ? onClickDate : void 0 }), {
					prepend: slots.prepend,
					append: slots.append
				}),
				default: () => _createElementVNode$41(_Fragment$20, null, [_createVNode$50(VDatePickerControls, _mergeProps$30(datePickerControlsProps, {
					"disabled": disabled.value,
					"viewMode": viewMode.value,
					"text": monthYearText.value,
					"monthText": monthText.value,
					"yearText": yearText.value,
					"onClick:next": onClickNextMonth,
					"onClick:prev": onClickPrevMonth,
					"onClick:nextYear": onClickNextYear,
					"onClick:prevYear": onClickPrevYear,
					"onClick:month": onClickMonth,
					"onClick:year": onClickYear
				}), { default: slots.controls }), _createVNode$50(VFadeTransition, { "hideOnLeave": true }, { default: () => [viewMode.value === "months" ? _createVNode$50(VDatePickerMonths, _mergeProps$30({ "key": "date-picker-months" }, datePickerMonthsProps, {
					"modelValue": month.value,
					"onUpdate:modelValue": [($event) => month.value = $event, onUpdateMonth],
					"min": minDate.value,
					"max": maxDate.value,
					"year": year.value,
					"allowedMonths": allowedMonths.value
				}), { month: slots.month }) : viewMode.value === "year" ? _createVNode$50(VDatePickerYears, _mergeProps$30({ "key": "date-picker-years" }, datePickerYearsProps, {
					"modelValue": year.value,
					"onUpdate:modelValue": [($event) => year.value = $event, onUpdateYear],
					"min": minDate.value,
					"max": maxDate.value,
					"allowedYears": allowedYears.value
				}), { year: slots.year }) : _createVNode$50(VDatePickerMonth, _mergeProps$30({ "key": "date-picker-month" }, datePickerMonthProps, {
					"modelValue": model.value,
					"onUpdate:modelValue": ($event) => model.value = $event,
					"month": month.value,
					"onUpdate:month": [($event) => month.value = $event, onUpdateMonth],
					"year": year.value,
					"onUpdate:year": [($event) => year.value = $event, onUpdateYear],
					"min": minDate.value,
					"max": maxDate.value
				}), { day: slots.day })] })]),
				actions: slots.actions
			});
		});
		return {};
	}
});
var { Fragment: _Fragment$19, createVNode: _createVNode$49, createElementVNode: _createElementVNode$40, normalizeClass: _normalizeClass$34, normalizeStyle: _normalizeStyle$28 } = await importShared("vue");
const makeVEmptyStateProps = propsFactory({
	actionText: String,
	bgColor: String,
	color: String,
	icon: IconValue,
	image: String,
	justify: {
		type: String,
		default: "center"
	},
	headline: String,
	title: String,
	text: String,
	textWidth: {
		type: [Number, String],
		default: 500
	},
	href: String,
	to: String,
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeSizeProps({ size: void 0 }),
	...makeThemeProps()
}, "VEmptyState");
const VEmptyState = genericComponent()({
	name: "VEmptyState",
	props: makeVEmptyStateProps(),
	emits: { "click:action": (e) => true },
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { dimensionStyles } = useDimension(props);
		const { displayClasses } = useDisplay();
		function onClickAction(e) {
			emit("click:action", e);
		}
		useRender(() => {
			const hasActions = !!(slots.actions || props.actionText);
			const hasHeadline = !!(slots.headline || props.headline);
			const hasTitle = !!(slots.title || props.title);
			const hasText = !!(slots.text || props.text);
			const hasMedia = !!(slots.media || props.image || props.icon);
			const size = props.size || (props.image ? 200 : 96);
			return _createElementVNode$40("div", {
				"class": _normalizeClass$34([
					"v-empty-state",
					{ [`v-empty-state--${props.justify}`]: true },
					themeClasses.value,
					backgroundColorClasses.value,
					displayClasses.value,
					props.class
				]),
				"style": _normalizeStyle$28([
					backgroundColorStyles.value,
					dimensionStyles.value,
					props.style
				])
			}, [
				hasMedia && _createElementVNode$40("div", {
					"key": "media",
					"class": "v-empty-state__media"
				}, [!slots.media ? _createElementVNode$40(_Fragment$19, null, [props.image ? _createVNode$49(VImg, {
					"key": "image",
					"src": props.image,
					"height": size
				}, null) : props.icon ? _createVNode$49(VIcon, {
					"key": "icon",
					"color": props.color,
					"size": size,
					"icon": props.icon
				}, null) : void 0]) : _createVNode$49(VDefaultsProvider, {
					"key": "media-defaults",
					"defaults": {
						VImg: {
							src: props.image,
							height: size
						},
						VIcon: {
							size,
							icon: props.icon
						}
					}
				}, { default: () => [slots.media()] })]),
				hasHeadline && _createElementVNode$40("div", {
					"key": "headline",
					"class": "v-empty-state__headline"
				}, [slots.headline?.() ?? props.headline]),
				hasTitle && _createElementVNode$40("div", {
					"key": "title",
					"class": "v-empty-state__title"
				}, [slots.title?.() ?? props.title]),
				hasText && _createElementVNode$40("div", {
					"key": "text",
					"class": "v-empty-state__text",
					"style": { maxWidth: convertToUnit(props.textWidth) }
				}, [slots.text?.() ?? props.text]),
				slots.default && _createElementVNode$40("div", {
					"key": "content",
					"class": "v-empty-state__content"
				}, [slots.default()]),
				hasActions && _createElementVNode$40("div", {
					"key": "actions",
					"class": "v-empty-state__actions"
				}, [_createVNode$49(VDefaultsProvider, { "defaults": { VBtn: {
					class: "v-empty-state__action-btn",
					color: props.color ?? "surface-variant",
					href: props.href,
					text: props.actionText,
					to: props.to
				} } }, { default: () => [slots.actions?.({ props: { onClick: onClickAction } }) ?? _createVNode$49(VBtn, { "onClick": onClickAction }, null)] })])
			]);
		});
		return {};
	}
});
const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel");
var { createElementVNode: _createElementVNode$39, vShow: _vShow$1, normalizeClass: _normalizeClass$33, normalizeStyle: _normalizeStyle$27, withDirectives: _withDirectives$5, createVNode: _createVNode$48 } = await importShared("vue");
var { inject: inject$5 } = await importShared("vue");
const makeVExpansionPanelTextProps = propsFactory({
	...makeComponentProps(),
	...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
	name: "VExpansionPanelText",
	props: makeVExpansionPanelTextProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const expansionPanel = inject$5(VExpansionPanelSymbol);
		if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
		const { hasContent, onAfterLeave } = useLazy(props, expansionPanel.isSelected);
		useRender(() => _createVNode$48(VExpandTransition, { "onAfterLeave": onAfterLeave }, { default: () => [_withDirectives$5(_createElementVNode$39("div", {
			"class": _normalizeClass$33(["v-expansion-panel-text", props.class]),
			"style": _normalizeStyle$27(props.style)
		}, [slots.default && hasContent.value && _createElementVNode$39("div", { "class": "v-expansion-panel-text__wrapper" }, [slots.default?.()])]), [[_vShow$1, expansionPanel.isSelected.value]])] }));
		return {};
	}
});
var { createElementVNode: _createElementVNode$38, createVNode: _createVNode$47, normalizeClass: _normalizeClass$32, normalizeStyle: _normalizeStyle$26, withDirectives: _withDirectives$4 } = await importShared("vue");
var { computed: computed$40, inject: inject$4, toRef: toRef$17 } = await importShared("vue");
const makeVExpansionPanelTitleProps = propsFactory({
	color: String,
	expandIcon: {
		type: IconValue,
		default: "$expand"
	},
	collapseIcon: {
		type: IconValue,
		default: "$collapse"
	},
	hideActions: Boolean,
	focusable: Boolean,
	static: Boolean,
	ripple: {
		type: [Boolean, Object],
		default: false
	},
	readonly: Boolean,
	...makeComponentProps(),
	...makeDimensionProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
	name: "VExpansionPanelTitle",
	directives: { vRipple: ripple_default },
	props: makeVExpansionPanelTitleProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const expansionPanel = inject$4(VExpansionPanelSymbol);
		if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { dimensionStyles } = useDimension(props);
		const slotProps = computed$40(() => ({
			collapseIcon: props.collapseIcon,
			disabled: expansionPanel.disabled.value,
			expanded: expansionPanel.isSelected.value,
			expandIcon: props.expandIcon,
			readonly: props.readonly
		}));
		const icon = toRef$17(() => expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon);
		useRender(() => _withDirectives$4(_createElementVNode$38("button", {
			"class": _normalizeClass$32([
				"v-expansion-panel-title",
				{
					"v-expansion-panel-title--active": expansionPanel.isSelected.value,
					"v-expansion-panel-title--focusable": props.focusable,
					"v-expansion-panel-title--static": props.static
				},
				backgroundColorClasses.value,
				props.class
			]),
			"style": _normalizeStyle$26([
				backgroundColorStyles.value,
				dimensionStyles.value,
				props.style
			]),
			"type": "button",
			"tabindex": expansionPanel.disabled.value ? -1 : void 0,
			"disabled": expansionPanel.disabled.value,
			"aria-expanded": expansionPanel.isSelected.value,
			"onClick": !props.readonly ? expansionPanel.toggle : void 0
		}, [
			_createElementVNode$38("span", { "class": "v-expansion-panel-title__overlay" }, null),
			slots.default?.(slotProps.value),
			!props.hideActions && _createVNode$47(VDefaultsProvider, { "defaults": { VIcon: { icon: icon.value } } }, { default: () => [_createElementVNode$38("span", { "class": "v-expansion-panel-title__icon" }, [slots.actions?.(slotProps.value) ?? _createVNode$47(VIcon, null, null)])] })
		]), [[ripple_default, props.ripple]]));
		return {};
	}
});
var { normalizeClass: _normalizeClass$31, createElementVNode: _createElementVNode$37, createVNode: _createVNode$46, normalizeStyle: _normalizeStyle$25 } = await importShared("vue");
var { computed: computed$39, provide: provide$1, toRef: toRef$16 } = await importShared("vue");
const makeVExpansionPanelProps = propsFactory({
	title: String,
	text: String,
	bgColor: String,
	...makeElevationProps(),
	...makeGroupItemProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeVExpansionPanelTitleProps(),
	...makeVExpansionPanelTextProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
	name: "VExpansionPanel",
	props: makeVExpansionPanelProps(),
	emits: { "group:selected": (val) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const groupItem = useGroupItem(props, VExpansionPanelSymbol);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const isDisabled = toRef$16(() => groupItem?.disabled.value || props.disabled);
		const selectedIndices = computed$39(() => groupItem.group.items.value.reduce((arr, item, index) => {
			if (groupItem.group.selected.value.includes(item.id)) arr.push(index);
			return arr;
		}, []));
		const isBeforeSelected = computed$39(() => {
			const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
			return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === 1);
		});
		const isAfterSelected = computed$39(() => {
			const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
			return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === -1);
		});
		provide$1(VExpansionPanelSymbol, groupItem);
		useRender(() => {
			const hasText = !!(slots.text || props.text);
			const hasTitle = !!(slots.title || props.title);
			const expansionPanelTitleProps = VExpansionPanelTitle.filterProps(props);
			const expansionPanelTextProps = VExpansionPanelText.filterProps(props);
			return _createVNode$46(props.tag, {
				"class": _normalizeClass$31([
					"v-expansion-panel",
					{
						"v-expansion-panel--active": groupItem.isSelected.value,
						"v-expansion-panel--before-active": isBeforeSelected.value,
						"v-expansion-panel--after-active": isAfterSelected.value,
						"v-expansion-panel--disabled": isDisabled.value
					},
					roundedClasses.value,
					backgroundColorClasses.value,
					props.class
				]),
				"style": _normalizeStyle$25([backgroundColorStyles.value, props.style])
			}, { default: () => [_createElementVNode$37("div", { "class": _normalizeClass$31(["v-expansion-panel__shadow", ...elevationClasses.value]) }, null), _createVNode$46(VDefaultsProvider, { "defaults": {
				VExpansionPanelTitle: { ...expansionPanelTitleProps },
				VExpansionPanelText: { ...expansionPanelTextProps }
			} }, { default: () => [
				hasTitle && _createVNode$46(VExpansionPanelTitle, { "key": "title" }, { default: () => [slots.title ? slots.title() : props.title] }),
				hasText && _createVNode$46(VExpansionPanelText, { "key": "text" }, { default: () => [slots.text ? slots.text() : props.text] }),
				slots.default?.()
			] })] });
		});
		return { groupItem };
	}
});
var { normalizeClass: _normalizeClass$30, normalizeStyle: _normalizeStyle$24, createVNode: _createVNode$45 } = await importShared("vue");
var { toRef: toRef$15 } = await importShared("vue");
var allowedVariants = [
	"default",
	"accordion",
	"inset",
	"popout"
];
const makeVExpansionPanelsProps = propsFactory({
	flat: Boolean,
	...makeGroupProps(),
	...pick(makeVExpansionPanelProps(), [
		"bgColor",
		"collapseIcon",
		"color",
		"eager",
		"elevation",
		"expandIcon",
		"focusable",
		"hideActions",
		"readonly",
		"ripple",
		"rounded",
		"tile",
		"static"
	]),
	...makeThemeProps(),
	...makeComponentProps(),
	...makeTagProps(),
	variant: {
		type: String,
		default: "default",
		validator: (v) => allowedVariants.includes(v)
	}
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
	name: "VExpansionPanels",
	props: makeVExpansionPanelsProps(),
	emits: { "update:modelValue": (val) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { next, prev } = useGroup(props, VExpansionPanelSymbol);
		const { themeClasses } = provideTheme(props);
		const variantClass = toRef$15(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
		provideDefaults({ VExpansionPanel: {
			bgColor: toRef$15(() => props.bgColor),
			collapseIcon: toRef$15(() => props.collapseIcon),
			color: toRef$15(() => props.color),
			eager: toRef$15(() => props.eager),
			elevation: toRef$15(() => props.elevation),
			expandIcon: toRef$15(() => props.expandIcon),
			focusable: toRef$15(() => props.focusable),
			hideActions: toRef$15(() => props.hideActions),
			readonly: toRef$15(() => props.readonly),
			ripple: toRef$15(() => props.ripple),
			rounded: toRef$15(() => props.rounded),
			static: toRef$15(() => props.static)
		} });
		useRender(() => _createVNode$45(props.tag, {
			"class": _normalizeClass$30([
				"v-expansion-panels",
				{
					"v-expansion-panels--flat": props.flat,
					"v-expansion-panels--tile": props.tile
				},
				themeClasses.value,
				variantClass.value,
				props.class
			]),
			"style": _normalizeStyle$24(props.style)
		}, { default: () => [slots.default?.({
			prev,
			next
		})] }));
		return {
			next,
			prev
		};
	}
});
var { vShow: _vShow, mergeProps: _mergeProps$29, createVNode: _createVNode$44, withDirectives: _withDirectives$3, createElementVNode: _createElementVNode$36, normalizeClass: _normalizeClass$29, normalizeStyle: _normalizeStyle$23 } = await importShared("vue");
var { computed: computed$38, ref: ref$27, shallowRef: shallowRef$14, toRef: toRef$14, watchEffect: watchEffect$6 } = await importShared("vue");
const makeVFabProps = propsFactory({
	app: Boolean,
	appear: Boolean,
	extended: Boolean,
	layout: Boolean,
	offset: Boolean,
	modelValue: {
		type: Boolean,
		default: true
	},
	...omit(makeVBtnProps({ active: true }), ["location", "spaced"]),
	...makeLayoutItemProps(),
	...makeLocationProps(),
	...makeTransitionProps({ transition: "fab-transition" })
}, "VFab");
const VFab = genericComponent()({
	name: "VFab",
	props: makeVFabProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const height = shallowRef$14(56);
		const layoutItemStyles = ref$27();
		const { resizeRef } = useResizeObserver((entries) => {
			if (!entries.length) return;
			height.value = entries[0].target.clientHeight;
		});
		const hasPosition = toRef$14(() => props.app || props.absolute);
		const position = computed$38(() => {
			if (!hasPosition.value) return false;
			return props.location?.split(" ").shift() ?? "bottom";
		});
		const orientation = computed$38(() => {
			if (!hasPosition.value) return false;
			return props.location?.split(" ")[1] ?? "end";
		});
		useToggleScope(() => props.app, () => {
			const layout = useLayoutItem({
				id: props.name,
				order: computed$38(() => parseInt(props.order, 10)),
				position,
				layoutSize: computed$38(() => props.layout ? height.value + 24 : 0),
				elementSize: computed$38(() => height.value + 24),
				active: computed$38(() => props.app && model.value),
				absolute: toRef$14(() => props.absolute)
			});
			watchEffect$6(() => {
				layoutItemStyles.value = layout.layoutItemStyles.value;
			});
		});
		const vFabRef = ref$27();
		useRender(() => {
			const btnProps = VBtn.filterProps(props);
			return _createElementVNode$36("div", {
				"ref": vFabRef,
				"class": _normalizeClass$29([
					"v-fab",
					{
						"v-fab--absolute": props.absolute,
						"v-fab--app": !!props.app,
						"v-fab--extended": props.extended,
						"v-fab--offset": props.offset,
						[`v-fab--${position.value}`]: hasPosition.value,
						[`v-fab--${orientation.value}`]: hasPosition.value
					},
					props.class
				]),
				"style": _normalizeStyle$23([props.app ? { ...layoutItemStyles.value } : { height: props.absolute ? "100%" : "inherit" }, props.style])
			}, [_createElementVNode$36("div", { "class": "v-fab__container" }, [_createVNode$44(MaybeTransition, {
				"appear": props.appear,
				"transition": props.transition
			}, { default: () => [_withDirectives$3(_createVNode$44(VBtn, _mergeProps$29({ "ref": resizeRef }, btnProps, {
				"active": void 0,
				"location": void 0
			}), slots), [[_vShow, props.active]])] })])]);
		});
		return {};
	}
});
function useFileDrop() {
	function hasFilesOrFolders(e) {
		return [...e.dataTransfer?.items ?? []].filter((x) => x.kind === "file").map((x) => x.webkitGetAsEntry()).filter(Boolean).length > 0 || [...e.dataTransfer?.files ?? []].length > 0;
	}
	async function handleDrop(e) {
		const result = [];
		const entries = [...e.dataTransfer?.items ?? []].filter((x) => x.kind === "file").map((x) => x.webkitGetAsEntry()).filter(Boolean);
		if (entries.length) for (const entry of entries) {
			const files = await traverseFileTree(entry, appendIfDirectory(".", entry));
			result.push(...files.map((x) => x.file));
		}
		else result.push(...[...e.dataTransfer?.files ?? []]);
		return result;
	}
	return {
		handleDrop,
		hasFilesOrFolders
	};
}
function traverseFileTree(item) {
	let path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
	return new Promise((resolve, reject) => {
		if (item.isFile) item.file((file) => resolve([{
			file,
			path
		}]), reject);
		else if (item.isDirectory) item.createReader().readEntries(async (entries) => {
			const files = [];
			for (const entry of entries) files.push(...await traverseFileTree(entry, appendIfDirectory(path, entry)));
			resolve(files);
		});
	});
}
function appendIfDirectory(path, item) {
	return item.isDirectory ? `${path}/${item.name}` : path;
}
var { computed: computed$37 } = await importShared("vue");
const makeFileFilterProps = propsFactory({ filterByType: String }, "file-accept");
function useFileFilter(props) {
	const fileFilter = computed$37(() => props.filterByType ? createFilter(props.filterByType) : null);
	function filterAccepted(files) {
		if (fileFilter.value) {
			const accepted = files.filter(fileFilter.value);
			return {
				accepted,
				rejected: files.filter((f) => !accepted.includes(f))
			};
		}
		return {
			accepted: files,
			rejected: []
		};
	}
	return { filterAccepted };
}
function createFilter(v) {
	const types = v.split(",").map((x) => x.trim().toLowerCase());
	const extensionsToMatch = types.filter((x) => x.startsWith("."));
	const wildcards = types.filter((x) => x.endsWith("/*"));
	const typesToMatch = types.filter((x) => !extensionsToMatch.includes(x) && !wildcards.includes(x));
	return (file) => {
		const extension = file.name.split(".").at(-1)?.toLowerCase() ?? "";
		const typeGroup = file.type.split("/").at(0)?.toLowerCase() ?? "";
		return typesToMatch.includes(file.type) || extensionsToMatch.includes(`.${extension}`) || wildcards.includes(`${typeGroup}/*`);
	};
}
var { Fragment: _Fragment$18, mergeProps: _mergeProps$28, createElementVNode: _createElementVNode$35, createVNode: _createVNode$43, normalizeClass: _normalizeClass$28 } = await importShared("vue");
var { computed: computed$36, nextTick: nextTick$9, ref: ref$26, shallowRef: shallowRef$13, toRef: toRef$13, watch: watch$14 } = await importShared("vue");
const makeVFileInputProps = propsFactory({
	chips: Boolean,
	counter: Boolean,
	counterSizeString: {
		type: String,
		default: "$vuetify.fileInput.counterSize"
	},
	counterString: {
		type: String,
		default: "$vuetify.fileInput.counter"
	},
	hideInput: Boolean,
	multiple: Boolean,
	showSize: {
		type: [
			Boolean,
			Number,
			String
		],
		default: false,
		validator: (v) => {
			return typeof v === "boolean" || [1e3, 1024].includes(Number(v));
		}
	},
	truncateLength: {
		type: [Number, String],
		default: 22
	},
	...omit(makeVInputProps({ prependIcon: "$file" }), ["direction"]),
	modelValue: {
		type: [Array, Object],
		default: (props) => props.multiple ? [] : null,
		validator: (val) => {
			return wrapInArray(val).every((v) => v != null && typeof v === "object");
		}
	},
	...makeFileFilterProps(),
	...makeVFieldProps({ clearable: true })
}, "VFileInput");
const VFileInput = genericComponent()({
	name: "VFileInput",
	inheritAttrs: false,
	props: makeVFileInputProps(),
	emits: {
		"click:control": (e) => true,
		"mousedown:control": (e) => true,
		"update:focused": (focused) => true,
		"update:modelValue": (files) => true,
		rejected: (files) => true
	},
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const { t } = useLocale();
		const { filterAccepted } = useFileFilter(props);
		const model = useProxiedModel(props, "modelValue", props.modelValue, (val) => wrapInArray(val), (val) => !props.multiple && Array.isArray(val) ? val[0] : val);
		const { isFocused, focus, blur } = useFocus(props);
		const base = computed$36(() => typeof props.showSize !== "boolean" ? props.showSize : void 0);
		const totalBytes = computed$36(() => (model.value ?? []).reduce((bytes, _ref2) => {
			let { size = 0 } = _ref2;
			return bytes + size;
		}, 0));
		const totalBytesReadable = computed$36(() => humanReadableFileSize(totalBytes.value, base.value));
		const fileNames = computed$36(() => (model.value ?? []).map((file) => {
			const { name = "", size = 0 } = file;
			const truncatedText = truncateText(name);
			return !props.showSize ? truncatedText : `${truncatedText} (${humanReadableFileSize(size, base.value)})`;
		}));
		const counterValue = computed$36(() => {
			const fileCount = model.value?.length ?? 0;
			if (props.showSize) return t(props.counterSizeString, fileCount, totalBytesReadable.value);
			else return t(props.counterString, fileCount);
		});
		const vInputRef = ref$26();
		const vFieldRef = ref$26();
		const inputRef = ref$26();
		const isActive = toRef$13(() => isFocused.value || props.active);
		const isPlainOrUnderlined = computed$36(() => ["plain", "underlined"].includes(props.variant));
		const isDragging = shallowRef$13(false);
		const { handleDrop, hasFilesOrFolders } = useFileDrop();
		function onFocus() {
			if (inputRef.value !== document.activeElement) inputRef.value?.focus();
			if (!isFocused.value) focus();
		}
		function onClickPrepend(e) {
			inputRef.value?.click();
		}
		function onControlMousedown(e) {
			emit("mousedown:control", e);
		}
		function onControlClick(e) {
			inputRef.value?.click();
			emit("click:control", e);
		}
		function onClear(e) {
			e.stopPropagation();
			onFocus();
			nextTick$9(() => {
				model.value = [];
				callEvent(props["onClick:clear"], e);
			});
		}
		function truncateText(str) {
			if (str.length < Number(props.truncateLength)) return str;
			const charsKeepOneSide = Math.floor((Number(props.truncateLength) - 1) / 2);
			return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
		}
		function onDragover(e) {
			e.preventDefault();
			e.stopImmediatePropagation();
			isDragging.value = true;
		}
		function onDragleave(e) {
			e.preventDefault();
			isDragging.value = false;
		}
		async function onDrop(e) {
			e.preventDefault();
			e.stopImmediatePropagation();
			isDragging.value = false;
			if (!inputRef.value || !hasFilesOrFolders(e)) return;
			selectAccepted(await handleDrop(e));
		}
		function onFileSelection(e) {
			if (!e.target || e.repack) return;
			if (!props.filterByType) model.value = [...e.target.files ?? []];
			else selectAccepted([...e.target.files]);
		}
		function selectAccepted(files) {
			const dataTransfer = new DataTransfer();
			const { accepted, rejected } = filterAccepted(files);
			if (rejected.length) emit("rejected", rejected);
			for (const file of accepted) dataTransfer.items.add(file);
			inputRef.value.files = dataTransfer.files;
			model.value = [...dataTransfer.files];
			const event = new Event("change", { bubbles: true });
			event.repack = true;
			inputRef.value.dispatchEvent(event);
		}
		watch$14(model, (newValue) => {
			if ((!Array.isArray(newValue) || !newValue.length) && inputRef.value) inputRef.value.value = "";
		});
		useRender(() => {
			const hasCounter = !!(slots.counter || props.counter);
			const hasDetails = !!(hasCounter || slots.details);
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			const { modelValue: _, ...inputProps } = VInput.filterProps(props);
			const fieldProps = {
				...VField.filterProps(props),
				"onClick:clear": onClear
			};
			const expectsDirectory = attrs.webkitdirectory !== void 0 && attrs.webkitdirectory !== false;
			const acceptFallback = attrs.accept ? String(attrs.accept) : void 0;
			const inputAccept = expectsDirectory ? void 0 : props.filterByType ?? acceptFallback;
			return _createVNode$43(VInput, _mergeProps$28({
				"ref": vInputRef,
				"modelValue": props.multiple ? model.value : model.value[0],
				"class": [
					"v-file-input",
					{
						"v-file-input--chips": !!props.chips,
						"v-file-input--dragging": isDragging.value,
						"v-file-input--hide": props.hideInput,
						"v-input--plain-underlined": isPlainOrUnderlined.value
					},
					props.class
				],
				"style": props.style,
				"onClick:prepend": onClickPrepend
			}, rootAttrs, inputProps, {
				"centerAffix": !isPlainOrUnderlined.value,
				"focused": isFocused.value
			}), {
				...slots,
				default: (_ref3) => {
					let { id, isDisabled, isDirty, isReadonly, isValid, hasDetails: hasDetails$1 } = _ref3;
					return _createVNode$43(VField, _mergeProps$28({
						"ref": vFieldRef,
						"prependIcon": props.prependIcon,
						"onMousedown": onControlMousedown,
						"onClick": onControlClick,
						"onClick:prependInner": props["onClick:prependInner"],
						"onClick:appendInner": props["onClick:appendInner"]
					}, fieldProps, {
						"id": id.value,
						"active": isActive.value || isDirty.value,
						"dirty": isDirty.value || props.dirty,
						"disabled": isDisabled.value,
						"focused": isFocused.value,
						"details": hasDetails$1.value,
						"error": isValid.value === false,
						"onDragover": onDragover,
						"onDrop": onDrop
					}), {
						...slots,
						default: (_ref4) => {
							let { props: { class: fieldClass, ...slotProps }, controlRef } = _ref4;
							return _createElementVNode$35(_Fragment$18, null, [_createElementVNode$35("input", _mergeProps$28({
								"ref": (val) => inputRef.value = controlRef.value = val,
								"type": "file",
								"accept": inputAccept,
								"readonly": isReadonly.value,
								"disabled": isDisabled.value,
								"multiple": props.multiple,
								"name": props.name,
								"onClick": (e) => {
									e.stopPropagation();
									if (isReadonly.value) e.preventDefault();
									onFocus();
								},
								"onChange": onFileSelection,
								"onDragleave": onDragleave,
								"onFocus": onFocus,
								"onBlur": blur
							}, slotProps, inputAttrs), null), _createElementVNode$35("div", { "class": _normalizeClass$28(fieldClass) }, [!!model.value?.length && !props.hideInput && (slots.selection ? slots.selection({
								fileNames: fileNames.value,
								totalBytes: totalBytes.value,
								totalBytesReadable: totalBytesReadable.value
							}) : props.chips ? fileNames.value.map((text) => _createVNode$43(VChip, {
								"key": text,
								"size": "small",
								"text": text
							}, null)) : fileNames.value.join(", "))])]);
						}
					});
				},
				details: hasDetails ? (slotProps) => _createElementVNode$35(_Fragment$18, null, [slots.details?.(slotProps), hasCounter && _createElementVNode$35(_Fragment$18, null, [_createElementVNode$35("span", null, null), _createVNode$43(VCounter, {
					"active": !!model.value?.length,
					"value": counterValue.value,
					"disabled": props.disabled
				}, slots.counter)])]) : void 0
			});
		});
		return forwardRefs({}, vInputRef, vFieldRef, inputRef);
	}
});
var { normalizeClass: _normalizeClass$27, normalizeStyle: _normalizeStyle$22, createVNode: _createVNode$42 } = await importShared("vue");
var { computed: computed$35, ref: ref$25, shallowRef: shallowRef$12, toRef: toRef$12, watchEffect: watchEffect$5 } = await importShared("vue");
const makeVFooterProps = propsFactory({
	app: Boolean,
	color: String,
	height: {
		type: [Number, String],
		default: "auto"
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeElevationProps(),
	...makeLayoutItemProps(),
	...makeRoundedProps(),
	...makeTagProps({ tag: "footer" }),
	...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
	name: "VFooter",
	props: makeVFooterProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const layoutItemStyles = ref$25();
		const { themeClasses } = provideTheme(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { borderClasses } = useBorder(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const autoHeight = shallowRef$12(32);
		const { resizeRef } = useResizeObserver((entries) => {
			if (!entries.length) return;
			autoHeight.value = entries[0].target.clientHeight;
		});
		const height = computed$35(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
		useToggleScope(() => props.app, () => {
			const layout = useLayoutItem({
				id: props.name,
				order: computed$35(() => parseInt(props.order, 10)),
				position: toRef$12(() => "bottom"),
				layoutSize: height,
				elementSize: computed$35(() => props.height === "auto" ? void 0 : height.value),
				active: toRef$12(() => props.app),
				absolute: toRef$12(() => props.absolute)
			});
			watchEffect$5(() => {
				layoutItemStyles.value = layout.layoutItemStyles.value;
			});
		});
		useRender(() => _createVNode$42(props.tag, {
			"ref": resizeRef,
			"class": _normalizeClass$27([
				"v-footer",
				themeClasses.value,
				backgroundColorClasses.value,
				borderClasses.value,
				elevationClasses.value,
				roundedClasses.value,
				props.class
			]),
			"style": _normalizeStyle$22([
				backgroundColorStyles.value,
				props.app ? layoutItemStyles.value : { height: convertToUnit(props.height) },
				props.style
			])
		}, slots));
		return {};
	}
});
var { normalizeClass: _normalizeClass$26, normalizeStyle: _normalizeStyle$21, createElementVNode: _createElementVNode$34 } = await importShared("vue");
var { ref: ref$24 } = await importShared("vue");
const makeVFormProps = propsFactory({
	...makeComponentProps(),
	...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
	name: "VForm",
	props: makeVFormProps(),
	emits: {
		"update:modelValue": (val) => true,
		submit: (e) => true
	},
	setup(props, _ref) {
		let { slots, emit } = _ref;
		const form = createForm(props);
		const formRef = ref$24();
		function onReset(e) {
			e.preventDefault();
			form.reset();
		}
		function onSubmit(_e) {
			const e = _e;
			const ready = form.validate();
			e.then = ready.then.bind(ready);
			e.catch = ready.catch.bind(ready);
			e.finally = ready.finally.bind(ready);
			emit("submit", e);
			if (!e.defaultPrevented) ready.then((_ref2) => {
				let { valid } = _ref2;
				if (valid) formRef.value?.submit();
			});
			e.preventDefault();
		}
		useRender(() => _createElementVNode$34("form", {
			"ref": formRef,
			"class": _normalizeClass$26(["v-form", props.class]),
			"style": _normalizeStyle$21(props.style),
			"novalidate": true,
			"onReset": onReset,
			"onSubmit": onSubmit
		}, [slots.default?.(form)]));
		return forwardRefs(form, formRef);
	}
});
var { normalizeClass: _normalizeClass$25, normalizeStyle: _normalizeStyle$20, createVNode: _createVNode$41 } = await importShared("vue");
const makeVKbdProps = propsFactory({
	color: String,
	...makeBorderProps(),
	...makeComponentProps(),
	...makeRoundedProps(),
	...makeTagProps({ tag: "kbd" }),
	...makeThemeProps(),
	...makeElevationProps()
}, "VKbd");
const VKbd = genericComponent()({
	name: "VKbd",
	props: makeVKbdProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { roundedClasses } = useRounded(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { elevationClasses } = useElevation(props);
		useRender(() => _createVNode$41(props.tag, {
			"class": _normalizeClass$25([
				"v-kbd",
				themeClasses.value,
				backgroundColorClasses.value,
				borderClasses.value,
				elevationClasses.value,
				roundedClasses.value,
				props.class
			]),
			"style": _normalizeStyle$20([backgroundColorStyles.value, props.style])
		}, slots));
		return {};
	}
});
var { createVNode: _createVNode$40, normalizeClass: _normalizeClass$24, normalizeStyle: _normalizeStyle$19, createElementVNode: _createElementVNode$33, Fragment: _Fragment$17, createTextVNode: _createTextVNode$3 } = await importShared("vue");
var { computed: computed$34 } = await importShared("vue");
function processKey(config, requestedMode, isMac) {
	const keyCfg = isMac && config.mac ? config.mac : config.default;
	const mode = (() => {
		if (requestedMode === "icon" && !keyCfg.icon) return "text";
		if (requestedMode === "symbol" && !keyCfg.symbol) return "text";
		return requestedMode;
	})();
	let value = keyCfg[mode] ?? keyCfg.text;
	if (mode === "text" && typeof value === "string" && value.startsWith("$") && !value.startsWith("$vuetify.")) value = value.slice(1).toUpperCase();
	return mode === "icon" ? ["icon", value] : [mode, value];
}
const hotkeyMap = {
	ctrl: {
		mac: {
			symbol: "⌃",
			icon: "$ctrl",
			text: "$vuetify.hotkey.ctrl"
		},
		default: { text: "Ctrl" }
	},
	meta: {
		mac: {
			symbol: "⌘",
			icon: "$command",
			text: "$vuetify.hotkey.command"
		},
		default: { text: "Ctrl" }
	},
	cmd: {
		mac: {
			symbol: "⌘",
			icon: "$command",
			text: "$vuetify.hotkey.command"
		},
		default: { text: "Ctrl" }
	},
	shift: {
		mac: {
			symbol: "⇧",
			icon: "$shift",
			text: "$vuetify.hotkey.shift"
		},
		default: { text: "Shift" }
	},
	alt: {
		mac: {
			symbol: "⌥",
			icon: "$alt",
			text: "$vuetify.hotkey.option"
		},
		default: { text: "Alt" }
	},
	enter: { default: {
		symbol: "↵",
		icon: "$enter",
		text: "$vuetify.hotkey.enter"
	} },
	arrowup: { default: {
		symbol: "↑",
		icon: "$arrowup",
		text: "$vuetify.hotkey.upArrow"
	} },
	arrowdown: { default: {
		symbol: "↓",
		icon: "$arrowdown",
		text: "$vuetify.hotkey.downArrow"
	} },
	arrowleft: { default: {
		symbol: "←",
		icon: "$arrowleft",
		text: "$vuetify.hotkey.leftArrow"
	} },
	arrowright: { default: {
		symbol: "→",
		icon: "$arrowright",
		text: "$vuetify.hotkey.rightArrow"
	} },
	backspace: { default: {
		symbol: "⌫",
		icon: "$backspace",
		text: "$vuetify.hotkey.backspace"
	} },
	escape: { default: { text: "$vuetify.hotkey.escape" } },
	" ": {
		mac: {
			symbol: "␣",
			icon: "$space",
			text: "$vuetify.hotkey.space"
		},
		default: { text: "$vuetify.hotkey.space" }
	},
	"-": { default: { text: "-" } }
};
const makeVHotkeyProps = propsFactory({
	keys: String,
	displayMode: {
		type: String,
		default: "icon"
	},
	keyMap: {
		type: Object,
		default: () => hotkeyMap
	},
	platform: {
		type: String,
		default: "auto"
	},
	inline: Boolean,
	disabled: Boolean,
	prefix: String,
	suffix: String,
	variant: {
		type: String,
		default: "elevated",
		validator: (v) => [
			"elevated",
			"flat",
			"tonal",
			"outlined",
			"text",
			"plain",
			"contained"
		].includes(v)
	},
	...makeComponentProps(),
	...makeThemeProps(),
	...makeBorderProps(),
	...makeRoundedProps(),
	...makeElevationProps(),
	color: String
}, "VHotkey");
var AND_DELINEATOR = Symbol("VHotkey:AND_DELINEATOR");
var SLASH_DELINEATOR = Symbol("VHotkey:SLASH_DELINEATOR");
var THEN_DELINEATOR = Symbol("VHotkey:THEN_DELINEATOR");
function getKeyText(keyMap, key, isMac) {
	const lowerKey = key.toLowerCase();
	if (lowerKey in keyMap) {
		const result = processKey(keyMap[lowerKey], "text", isMac);
		return typeof result[1] === "string" ? result[1] : String(result[1]);
	}
	return key.toUpperCase();
}
function applyDisplayModeToKey(keyMap, mode, key, isMac) {
	const lowerKey = key.toLowerCase();
	if (lowerKey in keyMap) {
		const result = processKey(keyMap[lowerKey], mode, isMac);
		if (result[0] === "text" && typeof result[1] === "string" && result[1].startsWith("$") && !result[1].startsWith("$vuetify.")) return [
			"text",
			result[1].replace("$", "").toUpperCase(),
			key
		];
		return [...result, key];
	}
	return [
		"text",
		key.toUpperCase(),
		key
	];
}
const VHotkey = genericComponent()({
	name: "VHotkey",
	props: makeVHotkeyProps(),
	setup(props) {
		const { t } = useLocale();
		const { themeClasses } = provideTheme(props);
		const { rtlClasses } = useRtl();
		const { borderClasses } = useBorder(props);
		const { roundedClasses } = useRounded(props);
		const { elevationClasses } = useElevation(props);
		const { colorClasses, colorStyles, variantClasses } = useVariant(() => ({
			color: props.color,
			variant: props.variant === "contained" ? "elevated" : props.variant
		}));
		const isMac = computed$34(() => props.platform === "auto" ? typeof navigator !== "undefined" && /macintosh/i.test(navigator.userAgent) : props.platform === "mac");
		const keyCombinations = computed$34(() => {
			if (!props.keys) return [];
			return props.keys.split(" ").map((combination) => {
				const result = [];
				const sequenceGroups = splitKeySequence(combination);
				for (let i = 0; i < sequenceGroups.length; i++) {
					const group = sequenceGroups[i];
					if (i > 0) result.push(THEN_DELINEATOR);
					const { keys: keyParts, separators } = splitKeyCombination(group);
					for (let j = 0; j < keyParts.length; j++) {
						const part = keyParts[j];
						if (j > 0) result.push(separators[j - 1] === "/" ? SLASH_DELINEATOR : AND_DELINEATOR);
						result.push(applyDisplayModeToKey(props.keyMap, props.displayMode, part, isMac.value));
					}
				}
				return result;
			});
		});
		const accessibleLabel = computed$34(() => {
			if (!props.keys) return "";
			return t("$vuetify.hotkey.shortcut", keyCombinations.value.map((combination) => {
				const readableParts = [];
				for (const key of combination) if (Array.isArray(key)) {
					const textKey = key[0] === "icon" || key[0] === "symbol" ? applyDisplayModeToKey(mergeDeep(hotkeyMap, props.keyMap), "text", String(key[1]), isMac.value)[1] : key[1];
					readableParts.push(translateKey(textKey));
				} else if (key === AND_DELINEATOR) readableParts.push(t("$vuetify.hotkey.plus"));
				else if (key === SLASH_DELINEATOR) readableParts.push(t("$vuetify.hotkey.or"));
				else if (key === THEN_DELINEATOR) readableParts.push(t("$vuetify.hotkey.then"));
				return readableParts.join(" ");
			}).join(", "));
		});
		function translateKey(key) {
			return key.startsWith("$vuetify.") ? t(key) : key;
		}
		function getKeyTooltip(key) {
			if (props.displayMode === "text") return void 0;
			return translateKey(getKeyText(props.keyMap, String(key[2]), isMac.value));
		}
		function renderKey(key, keyIndex) {
			const isContained = props.variant === "contained";
			const KeyComponent = isContained ? "kbd" : VKbd;
			const keyClasses = [
				"v-hotkey__key",
				`v-hotkey__key-${key[0]}`,
				...isContained ? ["v-hotkey__key--nested"] : [
					borderClasses.value,
					roundedClasses.value,
					elevationClasses.value,
					colorClasses.value
				]
			];
			return _createVNode$40(KeyComponent, {
				"key": keyIndex,
				"class": _normalizeClass$24(keyClasses),
				"style": _normalizeStyle$19(isContained ? void 0 : colorStyles.value),
				"aria-hidden": "true",
				"title": getKeyTooltip(key)
			}, { default: () => [key[0] === "icon" ? _createVNode$40(VIcon, {
				"icon": key[1],
				"aria-hidden": "true"
			}, null) : translateKey(key[1])] });
		}
		function renderDivider(key, keyIndex) {
			return _createElementVNode$33("span", {
				"key": keyIndex,
				"class": "v-hotkey__divider",
				"aria-hidden": "true"
			}, [key === AND_DELINEATOR ? "+" : key === SLASH_DELINEATOR ? "/" : t("$vuetify.hotkey.then")]);
		}
		useRender(() => {
			const content = _createElementVNode$33(_Fragment$17, null, [
				props.prefix && _createElementVNode$33("span", {
					"key": "prefix",
					"class": "v-hotkey__prefix"
				}, [props.prefix]),
				keyCombinations.value.map((combination, comboIndex) => _createElementVNode$33("span", {
					"class": "v-hotkey__combination",
					"key": comboIndex
				}, [combination.map((key, keyIndex) => Array.isArray(key) ? renderKey(key, keyIndex) : renderDivider(key, keyIndex)), comboIndex < keyCombinations.value.length - 1 && _createElementVNode$33("span", { "aria-hidden": "true" }, [_createTextVNode$3("\xA0")])])),
				props.suffix && _createElementVNode$33("span", {
					"key": "suffix",
					"class": "v-hotkey__suffix"
				}, [props.suffix])
			]);
			return _createElementVNode$33("div", {
				"class": _normalizeClass$24([
					"v-hotkey",
					{
						"v-hotkey--disabled": props.disabled,
						"v-hotkey--inline": props.inline,
						"v-hotkey--contained": props.variant === "contained"
					},
					themeClasses.value,
					rtlClasses.value,
					variantClasses.value,
					props.class
				]),
				"style": _normalizeStyle$19(props.style),
				"role": "img",
				"aria-label": accessibleLabel.value
			}, [props.variant !== "contained" ? content : _createVNode$40(VKbd, {
				"key": "contained",
				"class": _normalizeClass$24([
					"v-hotkey__contained-wrapper",
					borderClasses.value,
					roundedClasses.value,
					elevationClasses.value,
					colorClasses.value
				]),
				"style": _normalizeStyle$19(colorStyles.value),
				"aria-hidden": "true"
			}, { default: () => [content] })]);
		});
	}
});
const makeVHoverProps = propsFactory({
	disabled: Boolean,
	modelValue: {
		type: Boolean,
		default: null
	},
	...makeDelayProps()
}, "VHover");
const VHover = genericComponent()({
	name: "VHover",
	props: makeVHoverProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const isHovering = useProxiedModel(props, "modelValue");
		const { runOpenDelay, runCloseDelay } = useDelay(props, (value) => !props.disabled && (isHovering.value = value));
		return () => slots.default?.({
			isHovering: isHovering.value,
			props: {
				onMouseenter: runOpenDelay,
				onMouseleave: runCloseDelay
			}
		});
	}
});
var { createTextVNode: _createTextVNode$2, createElementVNode: _createElementVNode$32, createVNode: _createVNode$39, normalizeClass: _normalizeClass$23, normalizeStyle: _normalizeStyle$18 } = await importShared("vue");
var { computed: computed$33, nextTick: nextTick$8, onMounted: onMounted$6, ref: ref$23, shallowRef: shallowRef$11, watch: watch$13 } = await importShared("vue");
const makeVInfiniteScrollProps = propsFactory({
	color: String,
	direction: {
		type: String,
		default: "vertical",
		validator: (v) => ["vertical", "horizontal"].includes(v)
	},
	side: {
		type: String,
		default: "end",
		validator: (v) => [
			"start",
			"end",
			"both"
		].includes(v)
	},
	mode: {
		type: String,
		default: "intersect",
		validator: (v) => ["intersect", "manual"].includes(v)
	},
	margin: [Number, String],
	loadMoreText: {
		type: String,
		default: "$vuetify.infiniteScroll.loadMore"
	},
	emptyText: {
		type: String,
		default: "$vuetify.infiniteScroll.empty"
	},
	...makeDimensionProps(),
	...makeTagProps()
}, "VInfiniteScroll");
const VInfiniteScrollIntersect = defineComponent({
	name: "VInfiniteScrollIntersect",
	props: {
		side: {
			type: String,
			required: true
		},
		rootMargin: String
	},
	emits: { intersect: (side, isIntersecting) => true },
	setup(props, _ref) {
		let { emit } = _ref;
		const { intersectionRef, isIntersecting } = useIntersectionObserver();
		watch$13(isIntersecting, async (val) => {
			emit("intersect", props.side, val);
		});
		useRender(() => _createElementVNode$32("div", {
			"class": "v-infinite-scroll-intersect",
			"style": { "--v-infinite-margin-size": props.rootMargin },
			"ref": intersectionRef
		}, [_createTextVNode$2("\xA0")]));
		return {};
	}
});
const VInfiniteScroll = genericComponent()({
	name: "VInfiniteScroll",
	props: makeVInfiniteScrollProps(),
	emits: { load: (options) => true },
	setup(props, _ref2) {
		let { slots, emit } = _ref2;
		const rootEl = ref$23();
		const startStatus = shallowRef$11("ok");
		const endStatus = shallowRef$11("ok");
		const margin = computed$33(() => convertToUnit(props.margin));
		const isIntersecting = shallowRef$11(false);
		function setScrollAmount(amount) {
			if (!rootEl.value) return;
			const property = props.direction === "vertical" ? "scrollTop" : "scrollLeft";
			rootEl.value[property] = amount;
		}
		function getScrollAmount() {
			if (!rootEl.value) return 0;
			const property = props.direction === "vertical" ? "scrollTop" : "scrollLeft";
			return rootEl.value[property];
		}
		function getScrollSize$1() {
			if (!rootEl.value) return 0;
			const property = props.direction === "vertical" ? "scrollHeight" : "scrollWidth";
			return rootEl.value[property];
		}
		function getContainerSize() {
			if (!rootEl.value) return 0;
			const property = props.direction === "vertical" ? "clientHeight" : "clientWidth";
			return rootEl.value[property];
		}
		onMounted$6(() => {
			if (!rootEl.value) return;
			if (props.side === "start") setScrollAmount(getScrollSize$1());
			else if (props.side === "both") setScrollAmount(getScrollSize$1() / 2 - getContainerSize() / 2);
		});
		function setStatus(side, status) {
			if (side === "start") startStatus.value = status;
			else if (side === "end") endStatus.value = status;
			else if (side === "both") {
				startStatus.value = status;
				endStatus.value = status;
			}
		}
		function getStatus(side) {
			return side === "start" ? startStatus.value : endStatus.value;
		}
		let previousScrollSize = 0;
		function handleIntersect(side, _isIntersecting) {
			isIntersecting.value = _isIntersecting;
			if (isIntersecting.value) intersecting(side);
		}
		function intersecting(side) {
			if (props.mode !== "manual" && !isIntersecting.value) return;
			const status = getStatus(side);
			if (!rootEl.value || ["empty", "loading"].includes(status)) return;
			previousScrollSize = getScrollSize$1();
			setStatus(side, "loading");
			function done(status$1) {
				setStatus(side, status$1);
				nextTick$8(() => {
					if (status$1 === "empty" || status$1 === "error") return;
					if (status$1 === "ok" && side === "start") setScrollAmount(getScrollSize$1() - previousScrollSize + getScrollAmount());
					if (props.mode !== "manual") nextTick$8(() => {
						window.requestAnimationFrame(() => {
							window.requestAnimationFrame(() => {
								window.requestAnimationFrame(() => {
									intersecting(side);
								});
							});
						});
					});
				});
			}
			emit("load", {
				side,
				done
			});
		}
		const { t } = useLocale();
		function renderSide(side, status) {
			if (props.side !== side && props.side !== "both") return;
			const onClick = () => intersecting(side);
			const slotProps = {
				side,
				props: {
					onClick,
					color: props.color
				}
			};
			if (status === "error") return slots.error?.(slotProps);
			if (status === "empty") return slots.empty?.(slotProps) ?? _createElementVNode$32("div", null, [t(props.emptyText)]);
			if (props.mode === "manual") {
				if (status === "loading") return slots.loading?.(slotProps) ?? _createVNode$39(VProgressCircular, {
					"indeterminate": true,
					"color": props.color
				}, null);
				return slots["load-more"]?.(slotProps) ?? _createVNode$39(VBtn, {
					"variant": "outlined",
					"color": props.color,
					"onClick": onClick
				}, { default: () => [t(props.loadMoreText)] });
			}
			return slots.loading?.(slotProps) ?? _createVNode$39(VProgressCircular, {
				"indeterminate": true,
				"color": props.color
			}, null);
		}
		const { dimensionStyles } = useDimension(props);
		useRender(() => {
			const Tag = props.tag;
			const hasStartIntersect = props.side === "start" || props.side === "both";
			const hasEndIntersect = props.side === "end" || props.side === "both";
			const intersectMode = props.mode === "intersect";
			return _createVNode$39(Tag, {
				"ref": rootEl,
				"class": _normalizeClass$23([
					"v-infinite-scroll",
					`v-infinite-scroll--${props.direction}`,
					{
						"v-infinite-scroll--start": hasStartIntersect,
						"v-infinite-scroll--end": hasEndIntersect
					}
				]),
				"style": _normalizeStyle$18(dimensionStyles.value)
			}, { default: () => [
				_createElementVNode$32("div", { "class": "v-infinite-scroll__side" }, [renderSide("start", startStatus.value)]),
				hasStartIntersect && intersectMode && _createVNode$39(VInfiniteScrollIntersect, {
					"key": "start",
					"side": "start",
					"onIntersect": handleIntersect,
					"rootMargin": margin.value
				}, null),
				slots.default?.(),
				hasEndIntersect && intersectMode && _createVNode$39(VInfiniteScrollIntersect, {
					"key": "end",
					"side": "end",
					"onIntersect": handleIntersect,
					"rootMargin": margin.value
				}, null),
				_createElementVNode$32("div", { "class": "v-infinite-scroll__side" }, [renderSide("end", endStatus.value)])
			] });
		});
		function reset(side) {
			const effectiveSide = side ?? props.side;
			setStatus(effectiveSide, "ok");
			nextTick$8(() => {
				if (effectiveSide !== "end") setScrollAmount(getScrollSize$1() - previousScrollSize + getScrollAmount());
				if (props.mode !== "manual") nextTick$8(() => {
					window.requestAnimationFrame(() => {
						window.requestAnimationFrame(() => {
							window.requestAnimationFrame(() => {
								if (effectiveSide === "both") {
									intersecting("start");
									intersecting("end");
								} else intersecting(effectiveSide);
							});
						});
					});
				});
			});
		}
		return { reset };
	}
});
var { normalizeClass: _normalizeClass$22, normalizeStyle: _normalizeStyle$17, createVNode: _createVNode$38 } = await importShared("vue");
const VItemGroupSymbol = Symbol.for("vuetify:v-item-group");
const makeVItemGroupProps = propsFactory({
	...makeComponentProps(),
	...makeGroupProps({ selectedClass: "v-item--selected" }),
	...makeTagProps(),
	...makeThemeProps()
}, "VItemGroup");
const VItemGroup = genericComponent()({
	name: "VItemGroup",
	props: makeVItemGroupProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { isSelected, select, next, prev, selected } = useGroup(props, VItemGroupSymbol);
		return () => _createVNode$38(props.tag, {
			"class": _normalizeClass$22([
				"v-item-group",
				themeClasses.value,
				props.class
			]),
			"style": _normalizeStyle$17(props.style)
		}, { default: () => [slots.default?.({
			isSelected,
			select,
			next,
			prev,
			selected: selected.value
		})] });
	}
});
const VItem = genericComponent()({
	name: "VItem",
	props: makeGroupItemProps(),
	emits: { "group:selected": (val) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { isSelected, select, toggle, selectedClass, value, disabled } = useGroupItem(props, VItemGroupSymbol);
		return () => slots.default?.({
			isSelected: isSelected.value,
			selectedClass: selectedClass.value,
			select,
			toggle,
			value: value.value,
			disabled: disabled.value
		});
	}
});
var { normalizeClass: _normalizeClass$21, normalizeStyle: _normalizeStyle$16, createElementVNode: _createElementVNode$31 } = await importShared("vue");
const makeVLayoutProps = propsFactory({
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeLayoutProps()
}, "VLayout");
const VLayout = genericComponent()({
	name: "VLayout",
	props: makeVLayoutProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { layoutClasses, layoutStyles, getLayoutItem, items, layoutRef } = createLayout(props);
		const { dimensionStyles } = useDimension(props);
		useRender(() => _createElementVNode$31("div", {
			"ref": layoutRef,
			"class": _normalizeClass$21([layoutClasses.value, props.class]),
			"style": _normalizeStyle$16([
				dimensionStyles.value,
				layoutStyles.value,
				props.style
			])
		}, [slots.default?.()]));
		return {
			getLayoutItem,
			items
		};
	}
});
var { normalizeClass: _normalizeClass$20, normalizeStyle: _normalizeStyle$15, createElementVNode: _createElementVNode$30 } = await importShared("vue");
var { computed: computed$32, toRef: toRef$11 } = await importShared("vue");
const makeVLayoutItemProps = propsFactory({
	position: {
		type: String,
		required: true
	},
	size: {
		type: [Number, String],
		default: 300
	},
	modelValue: Boolean,
	...makeComponentProps(),
	...makeLayoutItemProps()
}, "VLayoutItem");
const VLayoutItem = genericComponent()({
	name: "VLayoutItem",
	props: makeVLayoutItemProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { layoutItemStyles } = useLayoutItem({
			id: props.name,
			order: computed$32(() => parseInt(props.order, 10)),
			position: toRef$11(() => props.position),
			elementSize: toRef$11(() => props.size),
			layoutSize: toRef$11(() => props.size),
			active: toRef$11(() => props.modelValue),
			absolute: toRef$11(() => props.absolute)
		});
		return () => _createElementVNode$30("div", {
			"class": _normalizeClass$20(["v-layout-item", props.class]),
			"style": _normalizeStyle$15([layoutItemStyles.value, props.style])
		}, [slots.default?.()]);
	}
});
var { createVNode: _createVNode$37, normalizeClass: _normalizeClass$19, normalizeStyle: _normalizeStyle$14, withDirectives: _withDirectives$2 } = await importShared("vue");
const makeVLazyProps = propsFactory({
	modelValue: Boolean,
	options: {
		type: Object,
		default: () => ({
			root: void 0,
			rootMargin: void 0,
			threshold: void 0
		})
	},
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeTagProps(),
	...makeTransitionProps({ transition: "fade-transition" })
}, "VLazy");
const VLazy = genericComponent()({
	name: "VLazy",
	directives: { vIntersect: intersect_default },
	props: makeVLazyProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { dimensionStyles } = useDimension(props);
		const isActive = useProxiedModel(props, "modelValue");
		function onIntersect(isIntersecting) {
			if (isActive.value) return;
			isActive.value = isIntersecting;
		}
		useRender(() => _withDirectives$2(_createVNode$37(props.tag, {
			"class": _normalizeClass$19(["v-lazy", props.class]),
			"style": _normalizeStyle$14([dimensionStyles.value, props.style])
		}, { default: () => [isActive.value && _createVNode$37(MaybeTransition, {
			"transition": props.transition,
			"appear": true
		}, { default: () => [slots.default?.()] })] }), [[
			intersect_default,
			{
				handler: onIntersect,
				options: props.options
			},
			null
		]]));
		return {};
	}
});
var { normalizeClass: _normalizeClass$18, normalizeStyle: _normalizeStyle$13, createElementVNode: _createElementVNode$29 } = await importShared("vue");
const makeVLocaleProviderProps = propsFactory({
	locale: String,
	fallbackLocale: String,
	messages: Object,
	rtl: {
		type: Boolean,
		default: void 0
	},
	...makeComponentProps()
}, "VLocaleProvider");
const VLocaleProvider = genericComponent()({
	name: "VLocaleProvider",
	props: makeVLocaleProviderProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { rtlClasses } = provideLocale(props);
		useRender(() => _createElementVNode$29("div", {
			"class": _normalizeClass$18([
				"v-locale-provider",
				rtlClasses.value,
				props.class
			]),
			"style": _normalizeStyle$13(props.style)
		}, [slots.default?.()]));
		return {};
	}
});
var { createElementVNode: _createElementVNode$28, normalizeClass: _normalizeClass$17, normalizeStyle: _normalizeStyle$12, createVNode: _createVNode$36 } = await importShared("vue");
const makeVMainProps = propsFactory({
	scrollable: Boolean,
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeTagProps({ tag: "main" })
}, "VMain");
const VMain = genericComponent()({
	name: "VMain",
	props: makeVMainProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { dimensionStyles } = useDimension(props);
		const { mainStyles } = useLayout();
		const { ssrBootStyles } = useSsrBoot();
		useRender(() => _createVNode$36(props.tag, {
			"class": _normalizeClass$17([
				"v-main",
				{ "v-main--scrollable": props.scrollable },
				props.class
			]),
			"style": _normalizeStyle$12([
				mainStyles.value,
				ssrBootStyles.value,
				dimensionStyles.value,
				props.style
			])
		}, { default: () => [props.scrollable ? _createElementVNode$28("div", { "class": "v-main__scroller" }, [slots.default?.()]) : slots.default?.()] }));
		return {};
	}
});
var { computed: computed$31, onBeforeUnmount: onBeforeUnmount$3, onMounted: onMounted$5, shallowRef: shallowRef$10, watch: watch$12 } = await importShared("vue");
function useSticky(_ref) {
	let { rootEl, isSticky, layoutItemStyles } = _ref;
	const isStuck = shallowRef$10(false);
	const stuckPosition = shallowRef$10(0);
	const stickyStyles = computed$31(() => {
		const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
		return [isSticky.value ? {
			top: "auto",
			bottom: "auto",
			height: void 0
		} : void 0, isStuck.value ? { [side]: convertToUnit(stuckPosition.value) } : { top: layoutItemStyles.value.top }];
	});
	onMounted$5(() => {
		watch$12(isSticky, (val) => {
			if (val) window.addEventListener("scroll", onScroll, { passive: true });
			else window.removeEventListener("scroll", onScroll);
		}, { immediate: true });
	});
	onBeforeUnmount$3(() => {
		window.removeEventListener("scroll", onScroll);
	});
	let lastScrollTop = 0;
	function onScroll() {
		const direction = lastScrollTop > window.scrollY ? "up" : "down";
		const rect = rootEl.value.getBoundingClientRect();
		const layoutTop = parseFloat(layoutItemStyles.value.top ?? 0);
		const top = window.scrollY - Math.max(0, stuckPosition.value - layoutTop);
		const bottom = rect.height + Math.max(stuckPosition.value, layoutTop) - window.scrollY - window.innerHeight;
		const bodyScroll = parseFloat(getComputedStyle(rootEl.value).getPropertyValue("--v-body-scroll-y")) || 0;
		if (rect.height < window.innerHeight - layoutTop) {
			isStuck.value = "top";
			stuckPosition.value = layoutTop;
		} else if (direction === "up" && isStuck.value === "bottom" || direction === "down" && isStuck.value === "top") {
			stuckPosition.value = window.scrollY + rect.top - bodyScroll;
			isStuck.value = true;
		} else if (direction === "down" && bottom <= 0) {
			stuckPosition.value = 0;
			isStuck.value = "bottom";
		} else if (direction === "up" && top <= 0) {
			if (!bodyScroll) {
				stuckPosition.value = rect.top + top;
				isStuck.value = "top";
			} else if (isStuck.value !== "top") {
				stuckPosition.value = -top + bodyScroll + layoutTop;
				isStuck.value = "top";
			}
		}
		lastScrollTop = window.scrollY;
	}
	return {
		isStuck,
		stickyStyles
	};
}
var HORIZON = 100;
var HISTORY = 20;
function kineticEnergyToVelocity(work) {
	return (work < 0 ? -1 : 1) * Math.sqrt(Math.abs(work)) * 1.41421356237;
}
function calculateImpulseVelocity(samples) {
	if (samples.length < 2) return 0;
	if (samples.length === 2) {
		if (samples[1].t === samples[0].t) return 0;
		return (samples[1].d - samples[0].d) / (samples[1].t - samples[0].t);
	}
	let work = 0;
	for (let i = samples.length - 1; i > 0; i--) {
		if (samples[i].t === samples[i - 1].t) continue;
		const vprev = kineticEnergyToVelocity(work);
		const vcurr = (samples[i].d - samples[i - 1].d) / (samples[i].t - samples[i - 1].t);
		work += (vcurr - vprev) * Math.abs(vcurr);
		if (i === samples.length - 1) work *= .5;
	}
	return kineticEnergyToVelocity(work) * 1e3;
}
function useVelocity() {
	const touches = {};
	function addMovement(e) {
		Array.from(e.changedTouches).forEach((touch) => {
			(touches[touch.identifier] ?? (touches[touch.identifier] = new CircularBuffer(HISTORY))).push([e.timeStamp, touch]);
		});
	}
	function endTouch(e) {
		Array.from(e.changedTouches).forEach((touch) => {
			delete touches[touch.identifier];
		});
	}
	function getVelocity(id) {
		const samples = touches[id]?.values().reverse();
		if (!samples) throw new Error(`No samples for touch id ${id}`);
		const newest = samples[0];
		const x = [];
		const y = [];
		for (const val of samples) {
			if (newest[0] - val[0] > HORIZON) break;
			x.push({
				t: val[0],
				d: val[1].clientX
			});
			y.push({
				t: val[0],
				d: val[1].clientY
			});
		}
		return {
			x: calculateImpulseVelocity(x),
			y: calculateImpulseVelocity(y),
			get direction() {
				const { x: x$1, y: y$1 } = this;
				const [absX, absY] = [Math.abs(x$1), Math.abs(y$1)];
				return absX > absY && x$1 >= 0 ? "right" : absX > absY && x$1 <= 0 ? "left" : absY > absX && y$1 >= 0 ? "down" : absY > absX && y$1 <= 0 ? "up" : oops$1();
			}
		};
	}
	return {
		addMovement,
		endTouch,
		getVelocity
	};
}
function oops$1() {
	throw new Error();
}
var { computed: computed$30, onBeforeUnmount: onBeforeUnmount$2, onMounted: onMounted$4, onScopeDispose: onScopeDispose$3, shallowRef: shallowRef$9, watchEffect: watchEffect$4 } = await importShared("vue");
function useTouch(_ref) {
	let { el, isActive, isTemporary, width, touchless, position } = _ref;
	onMounted$4(() => {
		window.addEventListener("touchstart", onTouchstart, { passive: true });
		window.addEventListener("touchmove", onTouchmove, { passive: false });
		window.addEventListener("touchend", onTouchend, { passive: true });
	});
	onBeforeUnmount$2(() => {
		window.removeEventListener("touchstart", onTouchstart);
		window.removeEventListener("touchmove", onTouchmove);
		window.removeEventListener("touchend", onTouchend);
	});
	const isHorizontal = computed$30(() => ["left", "right"].includes(position.value));
	const { addMovement, endTouch, getVelocity } = useVelocity();
	let maybeDragging = false;
	const isDragging = shallowRef$9(false);
	const dragProgress = shallowRef$9(0);
	const offset = shallowRef$9(0);
	let start;
	function getOffset$2(pos, active) {
		return (position.value === "left" ? pos : position.value === "right" ? document.documentElement.clientWidth - pos : position.value === "top" ? pos : position.value === "bottom" ? document.documentElement.clientHeight - pos : oops()) - (active ? width.value : 0);
	}
	function getProgress(pos) {
		let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
		const progress = position.value === "left" ? (pos - offset.value) / width.value : position.value === "right" ? (document.documentElement.clientWidth - pos - offset.value) / width.value : position.value === "top" ? (pos - offset.value) / width.value : position.value === "bottom" ? (document.documentElement.clientHeight - pos - offset.value) / width.value : oops();
		return limit ? clamp(progress) : progress;
	}
	function onTouchstart(e) {
		if (touchless.value) return;
		const touchX = e.changedTouches[0].clientX;
		const touchY = e.changedTouches[0].clientY;
		const touchZone = 25;
		const inTouchZone = position.value === "left" ? touchX < touchZone : position.value === "right" ? touchX > document.documentElement.clientWidth - touchZone : position.value === "top" ? touchY < touchZone : position.value === "bottom" ? touchY > document.documentElement.clientHeight - touchZone : oops();
		const inElement = isActive.value && (position.value === "left" ? touchX < width.value : position.value === "right" ? touchX > document.documentElement.clientWidth - width.value : position.value === "top" ? touchY < width.value : position.value === "bottom" ? touchY > document.documentElement.clientHeight - width.value : oops());
		if (inTouchZone || inElement || isActive.value && isTemporary.value) {
			start = [touchX, touchY];
			offset.value = getOffset$2(isHorizontal.value ? touchX : touchY, isActive.value);
			dragProgress.value = getProgress(isHorizontal.value ? touchX : touchY);
			maybeDragging = offset.value > -20 && offset.value < 80;
			endTouch(e);
			addMovement(e);
		}
	}
	function onTouchmove(e) {
		const touchX = e.changedTouches[0].clientX;
		const touchY = e.changedTouches[0].clientY;
		if (maybeDragging) {
			if (!e.cancelable) {
				maybeDragging = false;
				return;
			}
			const dx = Math.abs(touchX - start[0]);
			const dy = Math.abs(touchY - start[1]);
			if (isHorizontal.value ? dx > dy && dx > 3 : dy > dx && dy > 3) {
				isDragging.value = true;
				maybeDragging = false;
			} else if ((isHorizontal.value ? dy : dx) > 3) maybeDragging = false;
		}
		if (!isDragging.value) return;
		e.preventDefault();
		addMovement(e);
		const progress = getProgress(isHorizontal.value ? touchX : touchY, false);
		dragProgress.value = Math.max(0, Math.min(1, progress));
		if (progress > 1) offset.value = getOffset$2(isHorizontal.value ? touchX : touchY, true);
		else if (progress < 0) offset.value = getOffset$2(isHorizontal.value ? touchX : touchY, false);
	}
	function onTouchend(e) {
		maybeDragging = false;
		if (!isDragging.value) return;
		addMovement(e);
		isDragging.value = false;
		const velocity = getVelocity(e.changedTouches[0].identifier);
		const vx = Math.abs(velocity.x);
		const vy = Math.abs(velocity.y);
		if (isHorizontal.value ? vx > vy && vx > 400 : vy > vx && vy > 3) isActive.value = velocity.direction === ({
			left: "right",
			right: "left",
			top: "down",
			bottom: "up"
		}[position.value] || oops());
		else isActive.value = dragProgress.value > .5;
	}
	const dragStyles = computed$30(() => {
		return isDragging.value ? {
			transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
			transition: "none"
		} : void 0;
	});
	useToggleScope(isDragging, () => {
		const transform$1 = el.value?.style.transform ?? null;
		const transition = el.value?.style.transition ?? null;
		watchEffect$4(() => {
			el.value?.style.setProperty("transform", dragStyles.value?.transform || "none");
			el.value?.style.setProperty("transition", dragStyles.value?.transition || null);
		});
		onScopeDispose$3(() => {
			el.value?.style.setProperty("transform", transform$1);
			el.value?.style.setProperty("transition", transition);
		});
	});
	return {
		isDragging,
		dragProgress,
		dragStyles
	};
}
function oops() {
	throw new Error();
}
var { Fragment: _Fragment$16, createVNode: _createVNode$35, createElementVNode: _createElementVNode$27, mergeProps: _mergeProps$27 } = await importShared("vue");
var { computed: computed$29, nextTick: nextTick$7, readonly, ref: ref$22, shallowRef: shallowRef$8, toRef: toRef$10, Transition, watch: watch$11 } = await importShared("vue");
var locations = [
	"start",
	"end",
	"left",
	"right",
	"top",
	"bottom"
];
const makeVNavigationDrawerProps = propsFactory({
	color: String,
	disableResizeWatcher: Boolean,
	disableRouteWatcher: Boolean,
	expandOnHover: Boolean,
	floating: Boolean,
	modelValue: {
		type: Boolean,
		default: null
	},
	permanent: Boolean,
	rail: {
		type: Boolean,
		default: null
	},
	railWidth: {
		type: [Number, String],
		default: 56
	},
	scrim: {
		type: [Boolean, String],
		default: true
	},
	image: String,
	temporary: Boolean,
	persistent: Boolean,
	touchless: Boolean,
	width: {
		type: [Number, String],
		default: 256
	},
	location: {
		type: String,
		default: "start",
		validator: (value) => locations.includes(value)
	},
	sticky: Boolean,
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDelayProps(),
	...makeDisplayProps({ mobile: null }),
	...makeElevationProps(),
	...makeLayoutItemProps(),
	...makeRoundedProps(),
	...omit(makeFocusTrapProps(), ["disableInitialFocus"]),
	...makeTagProps({ tag: "nav" }),
	...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
	name: "VNavigationDrawer",
	props: makeVNavigationDrawerProps(),
	emits: {
		"update:modelValue": (val) => true,
		"update:rail": (val) => true
	},
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const { isRtl } = useRtl();
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { elevationClasses } = useElevation(props);
		const { displayClasses, mobile } = useDisplay(props);
		const { roundedClasses } = useRounded(props);
		const router = useRouter();
		const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
		const { ssrBootStyles } = useSsrBoot();
		const { scopeId } = useScopeId();
		const rootEl = ref$22();
		const isHovering = shallowRef$8(false);
		const { runOpenDelay, runCloseDelay } = useDelay(props, (value) => {
			isHovering.value = value;
		});
		const width = computed$29(() => {
			return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
		});
		const location = computed$29(() => {
			return toPhysical(props.location, isRtl.value);
		});
		const isPersistent = toRef$10(() => props.persistent);
		const isTemporary = computed$29(() => !props.permanent && (mobile.value || props.temporary));
		const isSticky = computed$29(() => props.sticky && !isTemporary.value && location.value !== "bottom");
		useFocusTrap(props, {
			isActive,
			localTop: isTemporary,
			contentEl: rootEl
		});
		useToggleScope(() => props.expandOnHover && props.rail != null, () => {
			watch$11(isHovering, (val) => emit("update:rail", !val));
		});
		useToggleScope(() => !props.disableResizeWatcher, () => {
			watch$11(isTemporary, (val) => !props.permanent && nextTick$7(() => isActive.value = !val));
		});
		useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
			watch$11(router.currentRoute, () => isTemporary.value && (isActive.value = false));
		});
		watch$11(() => props.permanent, (val) => {
			if (val) isActive.value = true;
		});
		if (props.modelValue == null && !isTemporary.value) isActive.value = props.permanent || !mobile.value;
		const { isDragging, dragProgress } = useTouch({
			el: rootEl,
			isActive,
			isTemporary,
			width,
			touchless: toRef$10(() => props.touchless),
			position: location
		});
		const layoutSize = computed$29(() => {
			const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
			return isDragging.value ? size * dragProgress.value : size;
		});
		const { layoutItemStyles, layoutItemScrimStyles } = useLayoutItem({
			id: props.name,
			order: computed$29(() => parseInt(props.order, 10)),
			position: location,
			layoutSize,
			elementSize: width,
			active: readonly(isActive),
			disableTransitions: toRef$10(() => isDragging.value),
			absolute: computed$29(() => props.absolute || isSticky.value && typeof isStuck.value !== "string")
		});
		const { isStuck, stickyStyles } = useSticky({
			rootEl,
			isSticky,
			layoutItemStyles
		});
		const scrimColor = useBackgroundColor(() => {
			return typeof props.scrim === "string" ? props.scrim : null;
		});
		const scrimStyles = computed$29(() => ({
			...isDragging.value ? {
				opacity: dragProgress.value * .2,
				transition: "none"
			} : void 0,
			...layoutItemScrimStyles.value
		}));
		provideDefaults({ VList: { bgColor: "transparent" } });
		useRender(() => {
			const hasImage = slots.image || props.image;
			return _createElementVNode$27(_Fragment$16, null, [_createVNode$35(props.tag, _mergeProps$27({
				"ref": rootEl,
				"onMouseenter": runOpenDelay,
				"onMouseleave": runCloseDelay,
				"class": [
					"v-navigation-drawer",
					`v-navigation-drawer--${location.value}`,
					{
						"v-navigation-drawer--expand-on-hover": props.expandOnHover,
						"v-navigation-drawer--floating": props.floating,
						"v-navigation-drawer--is-hovering": isHovering.value,
						"v-navigation-drawer--rail": props.rail,
						"v-navigation-drawer--temporary": isTemporary.value,
						"v-navigation-drawer--persistent": isPersistent.value,
						"v-navigation-drawer--active": isActive.value,
						"v-navigation-drawer--sticky": isSticky.value
					},
					themeClasses.value,
					backgroundColorClasses.value,
					borderClasses.value,
					displayClasses.value,
					elevationClasses.value,
					roundedClasses.value,
					props.class
				],
				"style": [
					backgroundColorStyles.value,
					layoutItemStyles.value,
					ssrBootStyles.value,
					stickyStyles.value,
					props.style
				],
				"inert": !isActive.value
			}, scopeId, attrs), { default: () => [
				hasImage && _createElementVNode$27("div", {
					"key": "image",
					"class": "v-navigation-drawer__img"
				}, [!slots.image ? _createVNode$35(VImg, {
					"key": "image-img",
					"alt": "",
					"cover": true,
					"height": "inherit",
					"src": props.image
				}, null) : _createVNode$35(VDefaultsProvider, {
					"key": "image-defaults",
					"disabled": !props.image,
					"defaults": { VImg: {
						alt: "",
						cover: true,
						height: "inherit",
						src: props.image
					} }
				}, slots.image)]),
				slots.prepend && _createElementVNode$27("div", { "class": "v-navigation-drawer__prepend" }, [slots.prepend?.()]),
				_createElementVNode$27("div", { "class": "v-navigation-drawer__content" }, [slots.default?.()]),
				slots.append && _createElementVNode$27("div", { "class": "v-navigation-drawer__append" }, [slots.append?.()])
			] }), _createVNode$35(Transition, { "name": "fade-transition" }, { default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && _createElementVNode$27("div", _mergeProps$27({
				"class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
				"style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
				"onClick": () => {
					if (isPersistent.value) return;
					isActive.value = false;
				}
			}, scopeId), null)] })]);
		});
		return { isStuck };
	}
});
const VNoSsr = defineComponent({
	name: "VNoSsr",
	setup(_, _ref) {
		let { slots } = _ref;
		const show = useHydration();
		return () => show.value && slots.default?.();
	}
});
var { onScopeDispose: onScopeDispose$2 } = await importShared("vue");
var HOLD_REPEAT = 50;
var HOLD_DELAY = 500;
function useHold(_ref) {
	let { toggleUpDown } = _ref;
	let timeout = -1;
	let interval = -1;
	onScopeDispose$2(holdStop);
	function holdStart(value) {
		holdStop();
		tick(value);
		window.addEventListener("pointerup", holdStop);
		document.addEventListener("blur", holdStop);
		timeout = window.setTimeout(() => {
			interval = window.setInterval(() => tick(value), HOLD_REPEAT);
		}, HOLD_DELAY);
	}
	function holdStop() {
		window.clearTimeout(timeout);
		window.clearInterval(interval);
		window.removeEventListener("pointerup", holdStop);
		document.removeEventListener("blur", holdStop);
	}
	onScopeDispose$2(holdStop);
	function tick(value) {
		toggleUpDown(value === "up");
	}
	return {
		holdStart,
		holdStop
	};
}
var { createVNode: _createVNode$34, createElementVNode: _createElementVNode$26, Fragment: _Fragment$15, mergeProps: _mergeProps$26 } = await importShared("vue");
var { computed: computed$28, nextTick: nextTick$6, onMounted: onMounted$3, ref: ref$21, shallowRef: shallowRef$7, toRef: toRef$9, watch: watch$10 } = await importShared("vue");
var makeVNumberInputProps = propsFactory({
	controlVariant: {
		type: String,
		default: "default"
	},
	inset: Boolean,
	hideInput: Boolean,
	modelValue: {
		type: Number,
		default: null
	},
	min: {
		type: Number,
		default: Number.MIN_SAFE_INTEGER
	},
	max: {
		type: Number,
		default: Number.MAX_SAFE_INTEGER
	},
	step: {
		type: Number,
		default: 1
	},
	precision: {
		type: Number,
		default: 0
	},
	minFractionDigits: {
		type: Number,
		default: null
	},
	decimalSeparator: {
		type: String,
		validator: (v) => !v || v.length === 1
	},
	...omit(makeVTextFieldProps(), ["modelValue", "validationValue"])
}, "VNumberInput");
const VNumberInput = genericComponent()({
	name: "VNumberInput",
	props: { ...makeVNumberInputProps() },
	emits: {
		"update:focused": (val) => true,
		"update:modelValue": (val) => true
	},
	setup(props, _ref) {
		let { slots } = _ref;
		const vTextFieldRef = ref$21();
		const { holdStart, holdStop } = useHold({ toggleUpDown });
		const form = useForm(props);
		const controlsDisabled = computed$28(() => form.isDisabled.value || form.isReadonly.value);
		const isFocused = shallowRef$7(props.focused);
		const { decimalSeparator: decimalSeparatorFromLocale } = useLocale();
		const decimalSeparator = computed$28(() => props.decimalSeparator?.[0] || decimalSeparatorFromLocale.value);
		function correctPrecision(val) {
			let precision = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.precision;
			let trim = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
			const fixed = precision == null ? String(val) : val.toFixed(precision);
			if (isFocused.value && trim) return Number(fixed).toString().replace(".", decimalSeparator.value);
			if (props.minFractionDigits === null || precision !== null && precision < props.minFractionDigits) return fixed.replace(".", decimalSeparator.value);
			let [baseDigits, fractionDigits] = fixed.split(".");
			fractionDigits = (fractionDigits ?? "").padEnd(props.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${props.minFractionDigits}})0+$`, "g"), "");
			return [baseDigits, fractionDigits].filter(Boolean).join(decimalSeparator.value);
		}
		const model = useProxiedModel(props, "modelValue", null, (val) => val ?? null, (val) => val == null ? val ?? null : clamp(Number(val), props.min, props.max));
		const _inputText = shallowRef$7(null);
		const _lastParsedValue = shallowRef$7(null);
		watch$10(model, (val) => {
			if (isFocused.value && !controlsDisabled.value && Number(_inputText.value?.replace(decimalSeparator.value, ".")) === val) {} else if (val == null) {
				_inputText.value = null;
				_lastParsedValue.value = null;
			} else if (!isNaN(val)) {
				_inputText.value = correctPrecision(val);
				_lastParsedValue.value = Number(_inputText.value.replace(decimalSeparator.value, "."));
			}
		}, { immediate: true });
		const inputText = computed$28({
			get: () => _inputText.value,
			set(val) {
				if (val === null || val === "") {
					model.value = null;
					_inputText.value = null;
					_lastParsedValue.value = null;
					return;
				}
				const parsedValue = Number(val.replace(decimalSeparator.value, "."));
				if (!isNaN(parsedValue)) {
					_inputText.value = val;
					_lastParsedValue.value = parsedValue;
					if (parsedValue <= props.max && parsedValue >= props.min) model.value = parsedValue;
				}
			}
		});
		const isOutOfRange = computed$28(() => {
			if (_lastParsedValue.value === null) return false;
			const numberFromText = Number(_inputText.value?.replace(decimalSeparator.value, "."));
			return numberFromText !== clamp(numberFromText, props.min, props.max);
		});
		const canIncrease = computed$28(() => {
			if (controlsDisabled.value) return false;
			return (model.value ?? 0) + props.step <= props.max;
		});
		const canDecrease = computed$28(() => {
			if (controlsDisabled.value) return false;
			return (model.value ?? 0) - props.step >= props.min;
		});
		const controlVariant = computed$28(() => {
			return props.hideInput ? "stacked" : props.controlVariant;
		});
		const incrementIcon = toRef$9(() => controlVariant.value === "split" ? "$plus" : "$collapse");
		const decrementIcon = toRef$9(() => controlVariant.value === "split" ? "$minus" : "$expand");
		const controlNodeSize = toRef$9(() => controlVariant.value === "split" ? "default" : "small");
		const controlNodeDefaultHeight = toRef$9(() => controlVariant.value === "stacked" ? "auto" : "100%");
		const incrementSlotProps = { props: {
			onClick: onControlClick,
			onPointerup: onControlMouseup,
			onPointerdown: onUpControlMousedown,
			onPointercancel: onControlMouseup
		} };
		const decrementSlotProps = { props: {
			onClick: onControlClick,
			onPointerup: onControlMouseup,
			onPointerdown: onDownControlMousedown,
			onPointercancel: onControlMouseup
		} };
		watch$10(() => props.precision, () => formatInputValue());
		watch$10(() => props.minFractionDigits, () => formatInputValue());
		onMounted$3(() => {
			clampModel();
		});
		function inferPrecision(value) {
			if (value == null) return 0;
			const str = value.toString();
			const idx = str.indexOf(".");
			return ~idx ? str.length - idx : 0;
		}
		function toggleUpDown() {
			let increment = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
			if (controlsDisabled.value) return;
			if (model.value == null) {
				inputText.value = correctPrecision(clamp(0, props.min, props.max));
				return;
			}
			let inferredPrecision = Math.max(inferPrecision(model.value), inferPrecision(props.step));
			if (props.precision != null) inferredPrecision = Math.max(inferredPrecision, props.precision);
			if (increment) {
				if (canIncrease.value) inputText.value = correctPrecision(model.value + props.step, inferredPrecision);
			} else if (canDecrease.value) inputText.value = correctPrecision(model.value - props.step, inferredPrecision);
		}
		function onBeforeinput(e) {
			if (!e.data) return;
			const inputElement = e.target;
			const { value: existingTxt, selectionStart, selectionEnd } = inputElement ?? {};
			const potentialNewInputVal = existingTxt ? existingTxt.slice(0, selectionStart) + e.data + existingTxt.slice(selectionEnd) : e.data;
			const potentialNewNumber = extractNumber(potentialNewInputVal, props.precision, decimalSeparator.value);
			if (!(/* @__PURE__ */ new RegExp(`^-?\\d*${escapeForRegex(decimalSeparator.value)}?\\d*$`)).test(potentialNewInputVal)) {
				e.preventDefault();
				inputElement.value = potentialNewNumber;
				nextTick$6(() => inputText.value = potentialNewNumber);
			}
			if (props.precision == null) return;
			if (potentialNewInputVal.split(decimalSeparator.value)[1]?.length > props.precision) {
				e.preventDefault();
				inputElement.value = potentialNewNumber;
				nextTick$6(() => inputText.value = potentialNewNumber);
				const cursorPosition = (selectionStart ?? 0) + e.data.length;
				inputElement.setSelectionRange(cursorPosition, cursorPosition);
			}
			if (props.precision === 0 && potentialNewInputVal.endsWith(decimalSeparator.value)) {
				e.preventDefault();
				inputElement.value = potentialNewNumber;
				nextTick$6(() => inputText.value = potentialNewNumber);
			}
		}
		async function onKeydown$1(e) {
			if ([
				"Enter",
				"ArrowLeft",
				"ArrowRight",
				"Backspace",
				"Delete",
				"Tab"
			].includes(e.key) || e.ctrlKey) return;
			if (["ArrowDown", "ArrowUp"].includes(e.key)) {
				e.preventDefault();
				e.stopPropagation();
				clampModel();
				await nextTick$6();
				if (e.key === "ArrowDown") toggleUpDown(false);
				else toggleUpDown();
			}
		}
		function onControlClick(e) {
			e.stopPropagation();
		}
		function onControlMouseup(e) {
			e.currentTarget?.releasePointerCapture(e.pointerId);
			e.preventDefault();
			holdStop();
		}
		function onUpControlMousedown(e) {
			e.currentTarget?.setPointerCapture(e.pointerId);
			e.preventDefault();
			e.stopPropagation();
			holdStart("up");
		}
		function onDownControlMousedown(e) {
			e.currentTarget?.setPointerCapture(e.pointerId);
			e.preventDefault();
			e.stopPropagation();
			holdStart("down");
		}
		function clampModel() {
			if (controlsDisabled.value) return;
			if (!vTextFieldRef.value) return;
			const actualText = vTextFieldRef.value.value;
			const parsedValue = Number(actualText.replace(decimalSeparator.value, "."));
			if (actualText && !isNaN(parsedValue)) inputText.value = correctPrecision(clamp(parsedValue, props.min, props.max));
			else inputText.value = null;
		}
		function formatInputValue() {
			if (controlsDisabled.value) return;
			inputText.value = model.value !== null && !isNaN(model.value) ? correctPrecision(model.value, props.precision, false) : null;
		}
		function trimDecimalZeros() {
			if (controlsDisabled.value) return;
			if (model.value === null || isNaN(model.value)) {
				inputText.value = null;
				return;
			}
			inputText.value = model.value.toString().replace(".", decimalSeparator.value);
		}
		function onFocus() {
			trimDecimalZeros();
		}
		function onBlur() {
			clampModel();
		}
		useRender(() => {
			const { modelValue: _, type, ...textFieldProps } = VTextField.filterProps(props);
			function incrementControlNode() {
				return !slots.increment ? _createVNode$34(VBtn, {
					"aria-hidden": "true",
					"data-testid": "increment",
					"disabled": !canIncrease.value,
					"height": controlNodeDefaultHeight.value,
					"icon": incrementIcon.value,
					"key": "increment-btn",
					"onClick": onControlClick,
					"onPointerdown": onUpControlMousedown,
					"onPointerup": onControlMouseup,
					"onPointercancel": onControlMouseup,
					"size": controlNodeSize.value,
					"variant": "text",
					"tabindex": "-1"
				}, null) : _createVNode$34(VDefaultsProvider, {
					"key": "increment-defaults",
					"defaults": { VBtn: {
						disabled: !canIncrease.value,
						height: controlNodeDefaultHeight.value,
						size: controlNodeSize.value,
						icon: incrementIcon.value,
						variant: "text"
					} }
				}, { default: () => [slots.increment(incrementSlotProps)] });
			}
			function decrementControlNode() {
				return !slots.decrement ? _createVNode$34(VBtn, {
					"aria-hidden": "true",
					"data-testid": "decrement",
					"disabled": !canDecrease.value,
					"height": controlNodeDefaultHeight.value,
					"icon": decrementIcon.value,
					"key": "decrement-btn",
					"onClick": onControlClick,
					"onPointerdown": onDownControlMousedown,
					"onPointerup": onControlMouseup,
					"onPointercancel": onControlMouseup,
					"size": controlNodeSize.value,
					"variant": "text",
					"tabindex": "-1"
				}, null) : _createVNode$34(VDefaultsProvider, {
					"key": "decrement-defaults",
					"defaults": { VBtn: {
						disabled: !canDecrease.value,
						height: controlNodeDefaultHeight.value,
						size: controlNodeSize.value,
						icon: decrementIcon.value,
						variant: "text"
					} }
				}, { default: () => [slots.decrement(decrementSlotProps)] });
			}
			function controlNode() {
				return _createElementVNode$26("div", { "class": "v-number-input__control" }, [
					decrementControlNode(),
					_createVNode$34(VDivider, { "vertical": controlVariant.value !== "stacked" }, null),
					incrementControlNode()
				]);
			}
			function dividerNode() {
				return !props.hideInput && !props.inset ? _createVNode$34(VDivider, { "vertical": true }, null) : void 0;
			}
			const appendInnerControl = controlVariant.value === "split" ? _createElementVNode$26("div", { "class": "v-number-input__control" }, [_createVNode$34(VDivider, { "vertical": true }, null), incrementControlNode()]) : props.reverse || controlVariant.value === "hidden" ? void 0 : _createElementVNode$26(_Fragment$15, null, [dividerNode(), controlNode()]);
			const hasAppendInner = slots["append-inner"] || appendInnerControl;
			const prependInnerControl = controlVariant.value === "split" ? _createElementVNode$26("div", { "class": "v-number-input__control" }, [decrementControlNode(), _createVNode$34(VDivider, { "vertical": true }, null)]) : props.reverse && controlVariant.value !== "hidden" ? _createElementVNode$26(_Fragment$15, null, [controlNode(), dividerNode()]) : void 0;
			const hasPrependInner = slots["prepend-inner"] || prependInnerControl;
			return _createVNode$34(VTextField, _mergeProps$26({ "ref": vTextFieldRef }, textFieldProps, {
				"modelValue": inputText.value,
				"onUpdate:modelValue": ($event) => inputText.value = $event,
				"focused": isFocused.value,
				"onUpdate:focused": ($event) => isFocused.value = $event,
				"validationValue": model.value,
				"error": props.error || isOutOfRange.value || void 0,
				"onBeforeinput": onBeforeinput,
				"onFocus": onFocus,
				"onBlur": onBlur,
				"onKeydown": onKeydown$1,
				"class": [
					"v-number-input",
					{
						"v-number-input--default": controlVariant.value === "default",
						"v-number-input--hide-input": props.hideInput,
						"v-number-input--inset": props.inset,
						"v-number-input--reverse": props.reverse,
						"v-number-input--split": controlVariant.value === "split",
						"v-number-input--stacked": controlVariant.value === "stacked"
					},
					props.class
				],
				"style": props.style,
				"inputmode": "decimal"
			}), {
				...slots,
				"append-inner": hasAppendInner ? function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return _createElementVNode$26(_Fragment$15, null, [slots["append-inner"]?.(...args), appendInnerControl]);
				} : void 0,
				"prepend-inner": hasPrependInner ? function() {
					for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
					return _createElementVNode$26(_Fragment$15, null, [prependInnerControl, slots["prepend-inner"]?.(...args)]);
				} : void 0
			});
		});
		return forwardRefs({}, vTextFieldRef);
	}
});
var { Fragment: _Fragment$14, createElementVNode: _createElementVNode$25, normalizeClass: _normalizeClass$16, createVNode: _createVNode$33, mergeProps: _mergeProps$25, normalizeStyle: _normalizeStyle$11 } = await importShared("vue");
var { computed: computed$27, effectScope, nextTick: nextTick$5, ref: ref$20, toRef: toRef$8, watch: watch$9, watchEffect: watchEffect$3 } = await importShared("vue");
const makeVOtpInputProps = propsFactory({
	autofocus: Boolean,
	divider: String,
	focusAll: Boolean,
	label: {
		type: String,
		default: "$vuetify.input.otp"
	},
	length: {
		type: [Number, String],
		default: 6
	},
	modelValue: {
		type: [Number, String],
		default: void 0
	},
	placeholder: String,
	type: {
		type: String,
		default: "number"
	},
	...makeDimensionProps(),
	...makeFocusProps(),
	...pick(makeVFieldProps({ variant: "outlined" }), [
		"baseColor",
		"bgColor",
		"class",
		"color",
		"disabled",
		"error",
		"loading",
		"rounded",
		"style",
		"theme",
		"variant"
	])
}, "VOtpInput");
const VOtpInput = genericComponent()({
	name: "VOtpInput",
	props: makeVOtpInputProps(),
	emits: {
		finish: (val) => true,
		"update:focused": (val) => true,
		"update:modelValue": (val) => true
	},
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const { dimensionStyles } = useDimension(props);
		const { isFocused, focus, blur } = useFocus(props);
		const model = useProxiedModel(props, "modelValue", "", (val) => val == null ? [] : String(val).split(""), (val) => val.join(""));
		const { t } = useLocale();
		const length = computed$27(() => Number(props.length));
		const fields = computed$27(() => Array(length.value).fill(0));
		const focusIndex = ref$20(-1);
		const contentRef = ref$20();
		const inputRef = ref$20([]);
		const current = computed$27(() => inputRef.value[focusIndex.value]);
		let _isComposing = false;
		useToggleScope(() => props.autofocus, () => {
			const intersectScope = effectScope();
			intersectScope.run(() => {
				const { intersectionRef, isIntersecting } = useIntersectionObserver();
				watchEffect$3(() => {
					intersectionRef.value = inputRef.value[0];
				});
				watch$9(isIntersecting, (v) => {
					if (!v) return;
					intersectionRef.value?.focus();
					intersectScope.stop();
				});
			});
		});
		function onInput() {
			if (isValidNumber(current.value.value)) {
				current.value.value = "";
				return;
			}
			if (_isComposing) return;
			const array = model.value.slice();
			const value = current.value.value;
			array[focusIndex.value] = value;
			let target = null;
			if (focusIndex.value > model.value.length) target = model.value.length + 1;
			else if (focusIndex.value + 1 !== length.value) target = "next";
			model.value = array;
			if (target) focusChild(contentRef.value, target);
		}
		function onCompositionend() {
			_isComposing = false;
			onInput();
		}
		function onKeydown$1(e) {
			const array = model.value.slice();
			const index = focusIndex.value;
			let target = null;
			if (![
				"ArrowLeft",
				"ArrowRight",
				"Backspace",
				"Delete"
			].includes(e.key)) return;
			e.preventDefault();
			if (e.key === "ArrowLeft") target = "prev";
			else if (e.key === "ArrowRight") target = "next";
			else if (["Backspace", "Delete"].includes(e.key)) {
				array[focusIndex.value] = "";
				model.value = array;
				if (focusIndex.value > 0 && e.key === "Backspace") target = "prev";
				else requestAnimationFrame(() => {
					inputRef.value[index]?.select();
				});
			}
			requestAnimationFrame(() => {
				if (target != null) focusChild(contentRef.value, target);
			});
		}
		function onPaste(index, e) {
			e.preventDefault();
			e.stopPropagation();
			const clipboardText = e?.clipboardData?.getData("Text").trim().slice(0, length.value) ?? "";
			const finalIndex = clipboardText.length - 1 === -1 ? index : clipboardText.length - 1;
			if (isValidNumber(clipboardText)) return;
			model.value = clipboardText.split("");
			focusIndex.value = finalIndex;
		}
		function reset() {
			model.value = [];
		}
		function onFocus(e, index) {
			focus();
			focusIndex.value = index;
		}
		function onBlur() {
			blur();
			focusIndex.value = -1;
		}
		function isValidNumber(value) {
			return props.type === "number" && /[^0-9]/g.test(value);
		}
		provideDefaults({ VField: {
			color: toRef$8(() => props.color),
			bgColor: toRef$8(() => props.color),
			baseColor: toRef$8(() => props.baseColor),
			disabled: toRef$8(() => props.disabled),
			error: toRef$8(() => props.error),
			variant: toRef$8(() => props.variant),
			rounded: toRef$8(() => props.rounded)
		} }, { scoped: true });
		watch$9(model, (val) => {
			if (val.length === length.value) emit("finish", val.join(""));
		}, { deep: true });
		watch$9(focusIndex, (val) => {
			if (val < 0) return;
			nextTick$5(() => {
				inputRef.value[val]?.select();
			});
		});
		useRender(() => {
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			return _createElementVNode$25("div", _mergeProps$25({
				"class": [
					"v-otp-input",
					{ "v-otp-input--divided": !!props.divider },
					props.class
				],
				"style": [props.style]
			}, rootAttrs), [_createElementVNode$25("div", {
				"ref": contentRef,
				"class": "v-otp-input__content",
				"style": _normalizeStyle$11([dimensionStyles.value])
			}, [
				fields.value.map((_, i) => _createElementVNode$25(_Fragment$14, null, [props.divider && i !== 0 && _createElementVNode$25("span", { "class": "v-otp-input__divider" }, [props.divider]), _createVNode$33(VField, {
					"focused": isFocused.value && props.focusAll || focusIndex.value === i,
					"key": i
				}, {
					...slots,
					loader: void 0,
					default: () => {
						return _createElementVNode$25("input", {
							"ref": (val) => inputRef.value[i] = val,
							"aria-label": t(props.label, i + 1),
							"autofocus": i === 0 && props.autofocus,
							"autocomplete": "one-time-code",
							"class": _normalizeClass$16(["v-otp-input__field"]),
							"disabled": props.disabled,
							"inputmode": props.type === "number" ? "numeric" : "text",
							"min": props.type === "number" ? 0 : void 0,
							"maxlength": i === 0 ? length.value : "1",
							"placeholder": props.placeholder,
							"type": props.type === "number" ? "text" : props.type,
							"value": model.value[i],
							"onInput": onInput,
							"onFocus": (e) => onFocus(e, i),
							"onBlur": onBlur,
							"onKeydown": onKeydown$1,
							"onCompositionstart": () => _isComposing = true,
							"onCompositionend": onCompositionend,
							"onPaste": (event) => onPaste(i, event)
						}, null);
					}
				})])),
				_createElementVNode$25("input", _mergeProps$25({
					"class": "v-otp-input-input",
					"type": "hidden"
				}, inputAttrs, { "value": model.value.join("") }), null),
				_createVNode$33(VOverlay, {
					"contained": true,
					"contentClass": "v-otp-input__loader",
					"modelValue": !!props.loading,
					"persistent": true
				}, { default: () => [slots.loader?.() ?? _createVNode$33(VProgressCircular, {
					"color": typeof props.loading === "boolean" ? void 0 : props.loading,
					"indeterminate": true,
					"size": "24",
					"width": "2"
				}, null)] }),
				slots.default?.()
			])]);
		});
		return {
			blur: () => {
				inputRef.value?.some((input) => input.blur());
			},
			focus: () => {
				inputRef.value?.[0].focus();
			},
			reset,
			isFocused
		};
	}
});
var { normalizeClass: _normalizeClass$15, normalizeStyle: _normalizeStyle$10, createVNode: _createVNode$32 } = await importShared("vue");
var { computed: computed$26, onBeforeUnmount: onBeforeUnmount$1, ref: ref$19, watch: watch$8, watchEffect: watchEffect$2 } = await importShared("vue");
function floor(val) {
	return Math.floor(Math.abs(val)) * Math.sign(val);
}
const makeVParallaxProps = propsFactory({
	scale: {
		type: [Number, String],
		default: .5
	},
	...makeComponentProps()
}, "VParallax");
const VParallax = genericComponent()({
	name: "VParallax",
	props: makeVParallaxProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { intersectionRef, isIntersecting } = useIntersectionObserver();
		const { resizeRef, contentRect } = useResizeObserver();
		const { height: displayHeight } = useDisplay();
		const root = ref$19();
		watchEffect$2(() => {
			intersectionRef.value = resizeRef.value = root.value?.$el;
		});
		let scrollParent;
		watch$8(isIntersecting, (val) => {
			if (val) {
				scrollParent = getScrollParent(intersectionRef.value);
				scrollParent = scrollParent === document.scrollingElement ? document : scrollParent;
				scrollParent.addEventListener("scroll", onScroll, { passive: true });
				onScroll();
			} else scrollParent.removeEventListener("scroll", onScroll);
		});
		onBeforeUnmount$1(() => {
			scrollParent?.removeEventListener("scroll", onScroll);
		});
		watch$8(displayHeight, onScroll);
		watch$8(() => contentRect.value?.height, onScroll);
		const scale = computed$26(() => {
			return 1 - clamp(Number(props.scale));
		});
		let frame = -1;
		function onScroll() {
			if (!isIntersecting.value || PREFERS_REDUCED_MOTION()) return;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const el = (root.value?.$el).querySelector(".v-img__img");
				if (!el) return;
				const scrollHeight = scrollParent instanceof Document ? document.documentElement.clientHeight : scrollParent.clientHeight;
				const scrollPos = scrollParent instanceof Document ? window.scrollY : scrollParent.scrollTop;
				const top = intersectionRef.value.getBoundingClientRect().top + scrollPos;
				const height = contentRect.value.height;
				const translate = floor((scrollPos - (top + (height - scrollHeight) / 2)) * scale.value);
				const sizeScale = Math.max(1, (scale.value * (scrollHeight - height) + height) / height);
				el.style.setProperty("transform", `translateY(${translate}px) scale(${sizeScale})`);
			});
		}
		useRender(() => _createVNode$32(VImg, {
			"class": _normalizeClass$15([
				"v-parallax",
				{ "v-parallax--active": isIntersecting.value },
				props.class
			]),
			"style": _normalizeStyle$10(props.style),
			"ref": root,
			"cover": true,
			"onLoadstart": onScroll,
			"onLoad": onScroll
		}, slots));
		return {};
	}
});
var { mergeProps: _mergeProps$24, createVNode: _createVNode$31 } = await importShared("vue");
const makeVRadioProps = propsFactory({ ...makeVSelectionControlProps({
	falseIcon: "$radioOff",
	trueIcon: "$radioOn"
}) }, "VRadio");
const VRadio = genericComponent()({
	name: "VRadio",
	props: makeVRadioProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => {
			return _createVNode$31(VSelectionControl, _mergeProps$24(VSelectionControl.filterProps(props), {
				"class": ["v-radio", props.class],
				"style": props.style,
				"type": "radio"
			}), slots);
		});
		return {};
	}
});
var { Fragment: _Fragment$13, createVNode: _createVNode$30, mergeProps: _mergeProps$23, createElementVNode: _createElementVNode$24 } = await importShared("vue");
var { computed: computed$25, ref: ref$18, useId: useId$5 } = await importShared("vue");
const makeVRadioGroupProps = propsFactory({
	height: {
		type: [Number, String],
		default: "auto"
	},
	...omit(makeVInputProps(), ["direction"]),
	...omit(makeSelectionControlGroupProps(), ["multiple"]),
	trueIcon: {
		type: IconValue,
		default: "$radioOn"
	},
	falseIcon: {
		type: IconValue,
		default: "$radioOff"
	},
	type: {
		type: String,
		default: "radio"
	}
}, "VRadioGroup");
const VRadioGroup = genericComponent()({
	name: "VRadioGroup",
	inheritAttrs: false,
	props: makeVRadioGroupProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const uid = useId$5();
		const id = computed$25(() => props.id || `radio-group-${uid}`);
		const model = useProxiedModel(props, "modelValue");
		const inputRef = ref$18();
		useRender(() => {
			const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
			const inputProps = VInput.filterProps(props);
			const controlProps = VSelectionControl.filterProps(props);
			const label = slots.label ? slots.label({
				label: props.label,
				props: { for: id.value }
			}) : props.label;
			return _createVNode$30(VInput, _mergeProps$23({
				"ref": inputRef,
				"class": ["v-radio-group", props.class],
				"style": props.style
			}, rootAttrs, inputProps, {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"id": id.value
			}), {
				...slots,
				default: (_ref2) => {
					let { id: id$1, messagesId, isDisabled, isReadonly } = _ref2;
					return _createElementVNode$24(_Fragment$13, null, [label && _createVNode$30(VLabel, { "id": id$1.value }, { default: () => [label] }), _createVNode$30(VSelectionControlGroup, _mergeProps$23(controlProps, {
						"id": id$1.value,
						"aria-describedby": messagesId.value,
						"defaultsTarget": "VRadio",
						"trueIcon": props.trueIcon,
						"falseIcon": props.falseIcon,
						"type": props.type,
						"disabled": isDisabled.value,
						"readonly": isReadonly.value,
						"aria-labelledby": label ? id$1.value : void 0,
						"multiple": false
					}, controlAttrs, {
						"modelValue": model.value,
						"onUpdate:modelValue": ($event) => model.value = $event
					}), slots)]);
				}
			});
		});
		return forwardRefs({}, inputRef);
	}
});
var { Fragment: _Fragment$12, createVNode: _createVNode$29, createElementVNode: _createElementVNode$23, mergeProps: _mergeProps$22 } = await importShared("vue");
var { computed: computed$24, ref: ref$17 } = await importShared("vue");
const makeVRangeSliderProps = propsFactory({
	...makeFocusProps(),
	...makeVInputProps(),
	...makeSliderProps(),
	strict: Boolean,
	modelValue: {
		type: Array,
		default: () => [0, 0]
	}
}, "VRangeSlider");
const VRangeSlider = genericComponent()({
	name: "VRangeSlider",
	inheritAttrs: false,
	props: makeVRangeSliderProps(),
	emits: {
		"update:focused": (value) => true,
		"update:modelValue": (value) => true,
		end: (value) => true,
		start: (value) => true
	},
	setup(props, _ref) {
		let { slots, emit, attrs } = _ref;
		const startThumbRef = ref$17();
		const stopThumbRef = ref$17();
		const inputRef = ref$17();
		const { rtlClasses } = useRtl();
		function getActiveThumb(e) {
			if (!startThumbRef.value || !stopThumbRef.value) return;
			const startOffset = getOffset(e, startThumbRef.value.$el, props.direction);
			const stopOffset = getOffset(e, stopThumbRef.value.$el, props.direction);
			const a = Math.abs(startOffset);
			const b = Math.abs(stopOffset);
			return a < b || a === b && startOffset < 0 ? startThumbRef.value.$el : stopThumbRef.value.$el;
		}
		const steps = useSteps(props);
		const model = useProxiedModel(props, "modelValue", void 0, (arr) => {
			if (!arr?.length) return [0, 0];
			return arr.map((value) => steps.roundValue(value));
		});
		const { activeThumbRef, hasLabels, max, min, mousePressed, onSliderMousedown, onSliderTouchstart, position, trackContainerRef, disabled, readonly: readonly$3 } = useSlider({
			props,
			steps,
			onSliderStart: () => {
				if (disabled.value || readonly$3.value) {
					activeThumbRef.value?.blur();
					return;
				}
				emit("start", model.value);
			},
			onSliderEnd: (_ref2) => {
				let { value } = _ref2;
				if (disabled.value || readonly$3.value) activeThumbRef.value?.blur();
				else {
					const newValue = activeThumbRef.value === startThumbRef.value?.$el ? [value, model.value[1]] : [model.value[0], value];
					if (!props.strict && newValue[0] < newValue[1]) model.value = newValue;
				}
				emit("end", model.value);
			},
			onSliderMove: (_ref3) => {
				let { value } = _ref3;
				const [start, stop] = model.value;
				if (disabled.value || readonly$3.value) {
					activeThumbRef.value?.blur();
					return;
				}
				if (!props.strict && start === stop && start !== min.value) {
					activeThumbRef.value = value > start ? stopThumbRef.value?.$el : startThumbRef.value?.$el;
					activeThumbRef.value?.focus();
				}
				if (activeThumbRef.value === startThumbRef.value?.$el) model.value = [Math.min(value, stop), stop];
				else model.value = [start, Math.max(start, value)];
			},
			getActiveThumb
		});
		const { isFocused, focus, blur } = useFocus(props);
		const trackStart = computed$24(() => position(model.value[0]));
		const trackStop = computed$24(() => position(model.value[1]));
		useRender(() => {
			const inputProps = VInput.filterProps(props);
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			const hasPrepend = !!(props.label || slots.label || slots.prepend);
			return _createVNode$29(VInput, _mergeProps$22({
				"class": [
					"v-slider",
					"v-range-slider",
					{
						"v-slider--has-labels": !!slots["tick-label"] || hasLabels.value,
						"v-slider--focused": isFocused.value,
						"v-slider--pressed": mousePressed.value,
						"v-slider--disabled": disabled.value
					},
					rtlClasses.value,
					props.class
				],
				"style": props.style,
				"ref": inputRef
			}, inputProps, rootAttrs, { "focused": isFocused.value }), {
				...slots,
				prepend: hasPrepend ? (slotProps) => _createElementVNode$23(_Fragment$12, null, [slots.label?.(slotProps) ?? (props.label ? _createVNode$29(VLabel, {
					"class": "v-slider__label",
					"text": props.label
				}, null) : void 0), slots.prepend?.(slotProps)]) : void 0,
				default: (_ref4) => {
					let { id, messagesId } = _ref4;
					return _createElementVNode$23("div", {
						"class": "v-slider__container",
						"onMousedown": !readonly$3.value ? onSliderMousedown : void 0,
						"onTouchstartPassive": !readonly$3.value ? onSliderTouchstart : void 0
					}, [
						_createElementVNode$23("input", {
							"id": `${id.value}_start`,
							"name": props.name || id.value,
							"disabled": disabled.value,
							"readonly": readonly$3.value,
							"tabindex": "-1",
							"value": model.value[0]
						}, null),
						_createElementVNode$23("input", {
							"id": `${id.value}_stop`,
							"name": props.name || id.value,
							"disabled": disabled.value,
							"readonly": readonly$3.value,
							"tabindex": "-1",
							"value": model.value[1]
						}, null),
						_createVNode$29(VSliderTrack, {
							"ref": trackContainerRef,
							"start": trackStart.value,
							"stop": trackStop.value
						}, { "tick-label": slots["tick-label"] }),
						_createVNode$29(VSliderThumb, _mergeProps$22({
							"ref": startThumbRef,
							"aria-describedby": messagesId.value,
							"focused": isFocused && activeThumbRef.value === startThumbRef.value?.$el,
							"modelValue": model.value[0],
							"onUpdate:modelValue": (v) => model.value = [v, model.value[1]],
							"onFocus": (e) => {
								focus();
								activeThumbRef.value = startThumbRef.value?.$el;
								if (max.value !== min.value && model.value[0] === model.value[1] && model.value[1] === min.value && e.relatedTarget !== stopThumbRef.value?.$el) {
									startThumbRef.value?.$el.blur();
									stopThumbRef.value?.$el.focus();
								}
							},
							"onBlur": () => {
								blur();
								activeThumbRef.value = void 0;
							},
							"min": min.value,
							"max": model.value[1],
							"position": trackStart.value,
							"ripple": props.ripple
						}, inputAttrs), { "thumb-label": slots["thumb-label"] }),
						_createVNode$29(VSliderThumb, _mergeProps$22({
							"ref": stopThumbRef,
							"aria-describedby": messagesId.value,
							"focused": isFocused && activeThumbRef.value === stopThumbRef.value?.$el,
							"modelValue": model.value[1],
							"onUpdate:modelValue": (v) => model.value = [model.value[0], v],
							"onFocus": (e) => {
								focus();
								activeThumbRef.value = stopThumbRef.value?.$el;
								if (max.value !== min.value && model.value[0] === model.value[1] && model.value[0] === max.value && e.relatedTarget !== startThumbRef.value?.$el) {
									stopThumbRef.value?.$el.blur();
									startThumbRef.value?.$el.focus();
								}
							},
							"onBlur": () => {
								blur();
								activeThumbRef.value = void 0;
							},
							"min": model.value[0],
							"max": max.value,
							"position": trackStop.value,
							"ripple": props.ripple
						}, inputAttrs), { "thumb-label": slots["thumb-label"] })
					]);
				}
			});
		});
		return forwardRefs({ focus: () => startThumbRef.value?.$el.focus() }, inputRef);
	}
});
var { Fragment: _Fragment$11, createElementVNode: _createElementVNode$22, mergeProps: _mergeProps$21, createVNode: _createVNode$28, normalizeClass: _normalizeClass$14, createTextVNode: _createTextVNode$1, normalizeStyle: _normalizeStyle$9 } = await importShared("vue");
var { computed: computed$23, nextTick: nextTick$4, ref: ref$16, shallowRef: shallowRef$6, useId: useId$4 } = await importShared("vue");
const makeVRatingProps = propsFactory({
	name: String,
	itemAriaLabel: {
		type: String,
		default: "$vuetify.rating.ariaLabel.item"
	},
	activeColor: String,
	color: String,
	clearable: Boolean,
	disabled: Boolean,
	emptyIcon: {
		type: IconValue,
		default: "$ratingEmpty"
	},
	fullIcon: {
		type: IconValue,
		default: "$ratingFull"
	},
	halfIncrements: Boolean,
	hover: Boolean,
	length: {
		type: [Number, String],
		default: 5
	},
	readonly: Boolean,
	modelValue: {
		type: [Number, String],
		default: 0
	},
	itemLabels: Array,
	itemLabelPosition: {
		type: String,
		default: "top",
		validator: (v) => ["top", "bottom"].includes(v)
	},
	ripple: Boolean,
	...makeComponentProps(),
	...makeDensityProps(),
	...makeSizeProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VRating");
const VRating = genericComponent()({
	name: "VRating",
	props: makeVRatingProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { t } = useLocale();
		const { themeClasses } = provideTheme(props);
		const root = ref$16();
		const rating = useProxiedModel(props, "modelValue");
		const normalizedValue = computed$23(() => clamp(parseFloat(rating.value), 0, Number(props.length)));
		const range = computed$23(() => createRange(Number(props.length), 1));
		const increments = computed$23(() => range.value.flatMap((v) => props.halfIncrements ? [v - .5, v] : [v]));
		const hoverIndex = shallowRef$6(-1);
		const itemState = computed$23(() => increments.value.map((value) => {
			const isHovering = props.hover && hoverIndex.value > -1;
			const isFilled = normalizedValue.value >= value;
			const isHovered = hoverIndex.value >= value;
			const icon = (isHovering ? isHovered : isFilled) ? props.fullIcon : props.emptyIcon;
			const activeColor = props.activeColor ?? props.color;
			return {
				isFilled,
				isHovered,
				icon,
				color: isFilled || isHovered ? activeColor : props.color
			};
		}));
		const eventState = computed$23(() => [0, ...increments.value].map((value) => {
			function onMouseenter() {
				hoverIndex.value = value;
			}
			function onMouseleave() {
				hoverIndex.value = -1;
			}
			function onClick() {
				if (props.disabled || props.readonly) return;
				rating.value = normalizedValue.value === value && props.clearable ? 0 : value;
			}
			return {
				onMouseenter: props.hover ? onMouseenter : void 0,
				onMouseleave: props.hover ? onMouseleave : void 0,
				onClick
			};
		}));
		const currentItemIndex = computed$23(() => {
			return props.halfIncrements ? 1 + Math.floor(Math.max(0, Number(rating.value ?? 0) - .5)) * 2 : Math.floor(Math.max(0, Number(rating.value ?? 0) - 1));
		});
		function moveCurrentFocus() {
			(root.value?.querySelector("[tabindex=\"0\"]"))?.focus();
		}
		function onItemKeydown(event) {
			if (props.disabled || props.readonly) return;
			if (event.ctrlKey || event.altKey) return;
			const step = props.halfIncrements ? .5 : 1;
			if (event.key === "ArrowRight") {
				rating.value = Math.min(Number(props.length), Number(rating.value ?? 0) + step);
				nextTick$4(() => moveCurrentFocus());
			}
			if (event.key === "ArrowLeft") {
				rating.value = Math.max(0, Number(rating.value ?? 0) - step);
				nextTick$4(() => moveCurrentFocus());
			}
		}
		const uid = useId$4();
		const name = computed$23(() => props.name ?? `v-rating-${uid}`);
		function VRatingItem(_ref2) {
			let { value, index, showStar = true } = _ref2;
			const { onMouseenter, onMouseleave, onClick } = eventState.value[index + 1];
			const id = `${name.value}-${String(value).replace(".", "-")}`;
			const isFocusable = index === currentItemIndex.value;
			const btnProps = {
				color: itemState.value[index]?.color,
				density: props.density,
				disabled: props.disabled,
				icon: itemState.value[index]?.icon,
				ripple: props.ripple,
				size: props.size,
				variant: "plain",
				tabindex: isFocusable ? 0 : -1,
				onKeydown: onItemKeydown
			};
			return _createElementVNode$22(_Fragment$11, null, [_createElementVNode$22("label", {
				"for": id,
				"class": _normalizeClass$14({
					"v-rating__item--half": props.halfIncrements && value % 1 > 0,
					"v-rating__item--full": props.halfIncrements && value % 1 === 0
				}),
				"onMouseenter": onMouseenter,
				"onMouseleave": onMouseleave,
				"onClick": onClick
			}, [_createElementVNode$22("span", { "class": "v-rating__hidden" }, [t(props.itemAriaLabel, value, props.length)]), !showStar ? void 0 : slots.item ? slots.item({
				...itemState.value[index],
				props: btnProps,
				value,
				index,
				rating: normalizedValue.value
			}) : _createVNode$28(VBtn, _mergeProps$21({ "aria-label": t(props.itemAriaLabel, value, props.length) }, btnProps), null)]), _createElementVNode$22("input", {
				"class": "v-rating__hidden",
				"name": name.value,
				"id": id,
				"type": "radio",
				"value": value,
				"checked": normalizedValue.value === value,
				"tabindex": -1,
				"readonly": props.readonly,
				"disabled": props.disabled
			}, null)]);
		}
		function createLabel(labelProps) {
			if (slots["item-label"]) return slots["item-label"](labelProps);
			if (labelProps.label) return _createElementVNode$22("span", null, [labelProps.label]);
			return _createElementVNode$22("span", null, [_createTextVNode$1("\xA0")]);
		}
		useRender(() => {
			const hasLabels = !!props.itemLabels?.length || slots["item-label"];
			return _createVNode$28(props.tag, {
				"class": _normalizeClass$14([
					"v-rating",
					{
						"v-rating--hover": props.hover,
						"v-rating--readonly": props.readonly
					},
					themeClasses.value,
					props.class
				]),
				"style": _normalizeStyle$9(props.style),
				"ref": root
			}, { default: () => [_createVNode$28(VRatingItem, {
				"value": 0,
				"index": -1,
				"showStar": false
			}, null), range.value.map((value, i) => _createElementVNode$22("div", { "class": "v-rating__wrapper" }, [
				hasLabels && props.itemLabelPosition === "top" ? createLabel({
					value,
					index: i,
					label: props.itemLabels?.[i]
				}) : void 0,
				_createElementVNode$22("div", { "class": "v-rating__item" }, [props.halfIncrements ? _createElementVNode$22(_Fragment$11, null, [_createVNode$28(VRatingItem, {
					"value": value - .5,
					"index": i * 2
				}, null), _createVNode$28(VRatingItem, {
					"value": value,
					"index": i * 2 + 1
				}, null)]) : _createVNode$28(VRatingItem, {
					"value": value,
					"index": i
				}, null)]),
				hasLabels && props.itemLabelPosition === "bottom" ? createLabel({
					value,
					index: i,
					label: props.itemLabels?.[i]
				}) : void 0
			]))] });
		});
		return {};
	}
});
var { normalizeClass: _normalizeClass$13, createElementVNode: _createElementVNode$21, mergeProps: _mergeProps$20, Fragment: _Fragment$10 } = await importShared("vue");
var { computed: computed$22 } = await importShared("vue");
const rootTypes = {
	actions: "button@2",
	article: "heading, paragraph",
	avatar: "avatar",
	button: "button",
	card: "image, heading",
	"card-avatar": "image, list-item-avatar",
	chip: "chip",
	"date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
	"date-picker-options": "text, avatar@2",
	"date-picker-days": "avatar@28",
	divider: "divider",
	heading: "heading",
	image: "image",
	"list-item": "text",
	"list-item-avatar": "avatar, text",
	"list-item-two-line": "sentences",
	"list-item-avatar-two-line": "avatar, sentences",
	"list-item-three-line": "paragraph",
	"list-item-avatar-three-line": "avatar, paragraph",
	ossein: "ossein",
	paragraph: "text@3",
	sentences: "text@2",
	subtitle: "text",
	table: "table-heading, table-thead, table-tbody, table-tfoot",
	"table-heading": "chip, text",
	"table-thead": "heading@6",
	"table-tbody": "table-row-divider@6",
	"table-row-divider": "table-row, divider",
	"table-row": "text@6",
	"table-tfoot": "text@2, avatar@2",
	text: "text"
};
function genBone(type) {
	let children = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	return _createElementVNode$21("div", { "class": _normalizeClass$13(["v-skeleton-loader__bone", `v-skeleton-loader__${type}`]) }, [children]);
}
function genBones(bone) {
	const [type, length] = bone.split("@");
	return Array.from({ length }).map(() => genStructure(type));
}
function genStructure(type) {
	let children = [];
	if (!type) return children;
	const bone = rootTypes[type];
	if (type === bone) {} else if (type.includes(",")) return mapBones(type);
	else if (type.includes("@")) return genBones(type);
	else if (bone.includes(",")) children = mapBones(bone);
	else if (bone.includes("@")) children = genBones(bone);
	else if (bone) children.push(genStructure(bone));
	return [genBone(type, children)];
}
function mapBones(bones) {
	return bones.replace(/\s/g, "").split(",").map(genStructure);
}
const makeVSkeletonLoaderProps = propsFactory({
	boilerplate: Boolean,
	color: String,
	loading: Boolean,
	loadingText: {
		type: String,
		default: "$vuetify.loading"
	},
	type: {
		type: [String, Array],
		default: "ossein"
	},
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeThemeProps()
}, "VSkeletonLoader");
const VSkeletonLoader = genericComponent()({
	name: "VSkeletonLoader",
	inheritAttrs: false,
	props: makeVSkeletonLoaderProps(),
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { themeClasses } = provideTheme(props);
		const { t } = useLocale();
		const items = computed$22(() => genStructure(wrapInArray(props.type).join(",")));
		useRender(() => {
			const isLoading = !slots.default || props.loading;
			const loadingProps = props.boilerplate || !isLoading ? {} : {
				ariaLive: "polite",
				ariaLabel: t(props.loadingText),
				role: "alert"
			};
			return isLoading ? _createElementVNode$21("div", _mergeProps$20({
				"class": [
					"v-skeleton-loader",
					{ "v-skeleton-loader--boilerplate": props.boilerplate },
					themeClasses.value,
					backgroundColorClasses.value,
					elevationClasses.value
				],
				"style": [backgroundColorStyles.value, dimensionStyles.value]
			}, loadingProps, attrs), [items.value]) : _createElementVNode$21(_Fragment$10, null, [slots.default?.()]);
		});
		return {};
	}
});
const VSlideGroupItem = genericComponent()({
	name: "VSlideGroupItem",
	props: makeGroupItemProps(),
	emits: { "group:selected": (val) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const slideGroupItem = useGroupItem(props, VSlideGroupSymbol);
		return () => slots.default?.({
			isSelected: slideGroupItem.isSelected.value,
			select: slideGroupItem.select,
			toggle: slideGroupItem.toggle,
			selectedClass: slideGroupItem.selectedClass.value
		});
	}
});
var { createVNode: _createVNode$27, createElementVNode: _createElementVNode$20, mergeProps: _mergeProps$19 } = await importShared("vue");
var { computed: computed$21, inject: inject$3, mergeProps: mergeProps$2, nextTick: nextTick$3, onMounted: onMounted$2, onScopeDispose: onScopeDispose$1, ref: ref$15, shallowRef: shallowRef$5, watch: watch$7, watchEffect: watchEffect$1 } = await importShared("vue");
function useCountdown(milliseconds) {
	const time = shallowRef$5(milliseconds());
	let timer = -1;
	function clear() {
		clearInterval(timer);
	}
	function reset() {
		clear();
		nextTick$3(() => time.value = milliseconds());
	}
	function start(el) {
		const style = el ? getComputedStyle(el) : { transitionDuration: .2 };
		const interval = parseFloat(style.transitionDuration) * 1e3 || 200;
		clear();
		if (time.value <= 0) return;
		const startTime = performance.now();
		timer = window.setInterval(() => {
			const elapsed = performance.now() - startTime + interval;
			time.value = Math.max(milliseconds() - elapsed, 0);
			if (time.value <= 0) clear();
		}, interval);
	}
	onScopeDispose$1(clear);
	return {
		clear,
		time,
		start,
		reset
	};
}
const makeVSnackbarProps = propsFactory({
	multiLine: Boolean,
	text: String,
	timer: [Boolean, String],
	timeout: {
		type: [Number, String],
		default: 5e3
	},
	vertical: Boolean,
	...makeLocationProps({ location: "bottom" }),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeVariantProps(),
	...makeThemeProps(),
	...omit(makeVOverlayProps({ transition: "v-snackbar-transition" }), [
		"persistent",
		"noClickAnimation",
		"retainFocus",
		"captureFocus",
		"disableInitialFocus",
		"scrim",
		"scrollStrategy",
		"stickToTarget",
		"viewportMargin"
	])
}, "VSnackbar");
const VSnackbar = genericComponent()({
	name: "VSnackbar",
	props: makeVSnackbarProps(),
	emits: { "update:modelValue": (v) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const isActive = useProxiedModel(props, "modelValue");
		const { positionClasses } = usePosition(props);
		const { scopeId } = useScopeId();
		const { themeClasses } = provideTheme(props);
		const { colorClasses, colorStyles, variantClasses } = useVariant(props);
		const { roundedClasses } = useRounded(props);
		const countdown = useCountdown(() => Number(props.timeout));
		const overlay = ref$15();
		const timerRef = ref$15();
		const isHovering = shallowRef$5(false);
		const startY = shallowRef$5(0);
		const mainStyles = ref$15();
		const hasLayout = inject$3(VuetifyLayoutKey, void 0);
		useToggleScope(() => !!hasLayout, () => {
			const layout = useLayout();
			watchEffect$1(() => {
				mainStyles.value = layout.mainStyles.value;
			});
		});
		watch$7(isActive, startTimeout);
		watch$7(() => props.timeout, startTimeout);
		onMounted$2(() => {
			if (isActive.value) startTimeout();
		});
		let activeTimeout = -1;
		function startTimeout() {
			countdown.reset();
			window.clearTimeout(activeTimeout);
			const timeout = Number(props.timeout);
			if (!isActive.value || timeout === -1) return;
			const element = refElement(timerRef.value);
			countdown.start(element);
			activeTimeout = window.setTimeout(() => {
				isActive.value = false;
			}, timeout);
		}
		function clearTimeout$1() {
			countdown.reset();
			window.clearTimeout(activeTimeout);
		}
		function onPointerenter() {
			isHovering.value = true;
			clearTimeout$1();
		}
		function onPointerleave() {
			isHovering.value = false;
			startTimeout();
		}
		function onTouchstart(event) {
			startY.value = event.touches[0].clientY;
		}
		function onTouchend(event) {
			if (Math.abs(startY.value - event.changedTouches[0].clientY) > 50) isActive.value = false;
		}
		function onAfterLeave() {
			if (isHovering.value) onPointerleave();
		}
		const locationClasses = computed$21(() => {
			return props.location.split(" ").reduce((acc, loc) => {
				acc[`v-snackbar--${loc}`] = true;
				return acc;
			}, {});
		});
		useRender(() => {
			const overlayProps = VOverlay.filterProps(props);
			const hasContent = !!(slots.default || slots.text || props.text);
			return _createVNode$27(VOverlay, _mergeProps$19({
				"ref": overlay,
				"class": [
					"v-snackbar",
					{
						"v-snackbar--active": isActive.value,
						"v-snackbar--multi-line": props.multiLine && !props.vertical,
						"v-snackbar--timer": !!props.timer,
						"v-snackbar--vertical": props.vertical
					},
					locationClasses.value,
					positionClasses.value,
					props.class
				],
				"style": [mainStyles.value, props.style]
			}, overlayProps, {
				"modelValue": isActive.value,
				"onUpdate:modelValue": ($event) => isActive.value = $event,
				"contentProps": mergeProps$2({
					class: [
						"v-snackbar__wrapper",
						themeClasses.value,
						colorClasses.value,
						roundedClasses.value,
						variantClasses.value
					],
					style: [colorStyles.value],
					onPointerenter,
					onPointerleave
				}, overlayProps.contentProps),
				"persistent": true,
				"noClickAnimation": true,
				"scrim": false,
				"scrollStrategy": "none",
				"_disableGlobalStack": true,
				"onTouchstartPassive": onTouchstart,
				"onTouchend": onTouchend,
				"onAfterLeave": onAfterLeave
			}, scopeId), {
				default: () => [
					genOverlays(false, "v-snackbar"),
					props.timer && !isHovering.value && _createElementVNode$20("div", {
						"key": "timer",
						"class": "v-snackbar__timer"
					}, [_createVNode$27(VProgressLinear, {
						"ref": timerRef,
						"color": typeof props.timer === "string" ? props.timer : "info",
						"max": props.timeout,
						"modelValue": countdown.time.value
					}, null)]),
					hasContent && _createElementVNode$20("div", {
						"key": "content",
						"class": "v-snackbar__content",
						"role": "status",
						"aria-live": "polite"
					}, [slots.text?.() ?? props.text, slots.default?.()]),
					slots.actions && _createVNode$27(VDefaultsProvider, { "defaults": { VBtn: {
						variant: "text",
						ripple: false,
						slim: true
					} } }, { default: () => [_createElementVNode$20("div", { "class": "v-snackbar__actions" }, [slots.actions({ isActive })])] })
				],
				activator: slots.activator
			});
		});
		return forwardRefs({}, overlay);
	}
});
var { Fragment: _Fragment$9, createVNode: _createVNode$26, mergeProps: _mergeProps$18, createElementVNode: _createElementVNode$19 } = await importShared("vue");
var { computed: computed$20, nextTick: nextTick$2, shallowRef: shallowRef$4, watch: watch$6 } = await importShared("vue");
const makeVSnackbarQueueProps = propsFactory({
	closable: [Boolean, String],
	closeText: {
		type: String,
		default: "$vuetify.dismiss"
	},
	modelValue: {
		type: Array,
		default: () => []
	},
	...omit(makeVSnackbarProps(), ["modelValue"])
}, "VSnackbarQueue");
const VSnackbarQueue = genericComponent()({
	name: "VSnackbarQueue",
	props: makeVSnackbarQueueProps(),
	emits: { "update:modelValue": (val) => true },
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { t } = useLocale();
		const isActive = shallowRef$4(false);
		const isVisible = shallowRef$4(false);
		const current = shallowRef$4();
		watch$6(() => props.modelValue.length, (val, oldVal) => {
			if (!isVisible.value && val > oldVal) showNext();
		});
		watch$6(isActive, (val) => {
			if (val) isVisible.value = true;
		});
		function onAfterLeave() {
			if (props.modelValue.length) showNext();
			else {
				current.value = void 0;
				isVisible.value = false;
			}
		}
		function showNext() {
			const [next, ...rest] = props.modelValue;
			emit("update:modelValue", rest);
			current.value = typeof next === "string" ? { text: next } : next;
			nextTick$2(() => {
				isActive.value = true;
			});
		}
		function onClickClose() {
			isActive.value = false;
		}
		const btnProps = computed$20(() => ({
			color: typeof props.closable === "string" ? props.closable : void 0,
			text: t(props.closeText)
		}));
		useRender(() => {
			const hasActions = !!(props.closable || slots.actions);
			const { modelValue: _, ...snackbarProps } = VSnackbar.filterProps(props);
			return _createElementVNode$19(_Fragment$9, null, [isVisible.value && !!current.value && (slots.default ? _createVNode$26(VDefaultsProvider, { "defaults": { VSnackbar: current.value } }, { default: () => [slots.default({ item: current.value })] }) : _createVNode$26(VSnackbar, _mergeProps$18(snackbarProps, current.value, {
				"modelValue": isActive.value,
				"onUpdate:modelValue": ($event) => isActive.value = $event,
				"onAfterLeave": onAfterLeave
			}), {
				text: slots.text ? () => slots.text?.({ item: current.value }) : void 0,
				actions: hasActions ? () => _createElementVNode$19(_Fragment$9, null, [!slots.actions ? _createVNode$26(VBtn, _mergeProps$18(btnProps.value, { "onClick": onClickClose }), null) : _createVNode$26(VDefaultsProvider, { "defaults": { VBtn: btnProps.value } }, { default: () => [slots.actions({
					item: current.value,
					props: { onClick: onClickClose }
				})] })]) : void 0
			}))]);
		});
	}
});
const makeLineProps = propsFactory({
	autoDraw: Boolean,
	autoDrawDuration: [Number, String],
	autoDrawEasing: {
		type: String,
		default: "ease"
	},
	color: String,
	gradient: {
		type: Array,
		default: () => []
	},
	gradientDirection: {
		type: String,
		validator: (val) => [
			"top",
			"bottom",
			"left",
			"right"
		].includes(val),
		default: "top"
	},
	height: {
		type: [String, Number],
		default: 75
	},
	labels: {
		type: Array,
		default: () => []
	},
	labelSize: {
		type: [Number, String],
		default: 7
	},
	lineWidth: {
		type: [String, Number],
		default: 4
	},
	id: String,
	itemValue: {
		type: String,
		default: "value"
	},
	modelValue: {
		type: Array,
		default: () => []
	},
	min: [String, Number],
	max: [String, Number],
	padding: {
		type: [String, Number],
		default: 8
	},
	showLabels: Boolean,
	smooth: [
		Boolean,
		String,
		Number
	],
	width: {
		type: [Number, String],
		default: 300
	}
}, "Line");
var { computed: computed$19, useId: useId$3, createElementVNode: _createElementVNode$18, Fragment: _Fragment$8 } = await importShared("vue");
const makeVBarlineProps = propsFactory({
	autoLineWidth: Boolean,
	...makeLineProps()
}, "VBarline");
const VBarline = genericComponent()({
	name: "VBarline",
	props: makeVBarlineProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const uid = useId$3();
		const id = computed$19(() => props.id || `barline-${uid}`);
		const autoDrawDuration = computed$19(() => Number(props.autoDrawDuration) || 500);
		const hasLabels = computed$19(() => {
			return Boolean(props.showLabels || props.labels.length > 0 || !!slots?.label);
		});
		const lineWidth = computed$19(() => parseFloat(props.lineWidth) || 4);
		const totalWidth = computed$19(() => Math.max(props.modelValue.length * lineWidth.value, Number(props.width)));
		const boundary = computed$19(() => {
			return {
				minX: 0,
				maxX: totalWidth.value,
				minY: 0,
				maxY: parseInt(props.height, 10)
			};
		});
		const items = computed$19(() => props.modelValue.map((item) => getPropertyFromItem(item, props.itemValue, item)));
		function genBars(values, boundary$1) {
			const { minX, maxX, minY, maxY } = boundary$1;
			const totalValues = values.length;
			let maxValue = props.max != null ? Number(props.max) : Math.max(...values);
			let minValue = props.min != null ? Number(props.min) : Math.min(...values);
			if (minValue > 0 && props.min == null) minValue = 0;
			if (maxValue < 0 && props.max == null) maxValue = 0;
			const gridX = maxX / (totalValues === 1 ? 2 : totalValues);
			const gridY = (maxY - minY) / (maxValue - minValue || 1);
			const horizonY = maxY - Math.abs(minValue * gridY);
			return values.map((value, index) => {
				const height = Math.abs(gridY * value);
				return {
					x: minX + index * gridX,
					y: horizonY - height + Number(value < 0) * height,
					height,
					value
				};
			});
		}
		const parsedLabels = computed$19(() => {
			const labels = [];
			const points = genBars(items.value, boundary.value);
			const len = points.length;
			for (let i = 0; labels.length < len; i++) {
				const item = points[i];
				let value = props.labels[i];
				if (!value) value = typeof item === "object" ? item.value : item;
				labels.push({
					x: item.x,
					value: String(value)
				});
			}
			return labels;
		});
		const bars = computed$19(() => genBars(items.value, boundary.value));
		const offsetX = computed$19(() => bars.value.length === 1 ? (boundary.value.maxX - lineWidth.value) / 2 : (Math.abs(bars.value[0].x - bars.value[1].x) - lineWidth.value) / 2);
		const smooth = computed$19(() => typeof props.smooth === "boolean" ? props.smooth ? 2 : 0 : Number(props.smooth));
		useRender(() => {
			const gradientData = !props.gradient.slice().length ? [""] : props.gradient.slice().reverse();
			return _createElementVNode$18("svg", { "display": "block" }, [
				_createElementVNode$18("defs", null, [_createElementVNode$18("linearGradient", {
					"id": id.value,
					"gradientUnits": "userSpaceOnUse",
					"x1": props.gradientDirection === "left" ? "100%" : "0",
					"y1": props.gradientDirection === "top" ? "100%" : "0",
					"x2": props.gradientDirection === "right" ? "100%" : "0",
					"y2": props.gradientDirection === "bottom" ? "100%" : "0"
				}, [gradientData.map((color, index) => _createElementVNode$18("stop", {
					"offset": index / Math.max(gradientData.length - 1, 1),
					"stop-color": color || "currentColor"
				}, null))])]),
				_createElementVNode$18("clipPath", { "id": `${id.value}-clip` }, [bars.value.map((item) => _createElementVNode$18("rect", {
					"x": item.x + offsetX.value,
					"y": item.y,
					"width": lineWidth.value,
					"height": item.height,
					"rx": smooth.value,
					"ry": smooth.value
				}, [props.autoDraw && !PREFERS_REDUCED_MOTION() && _createElementVNode$18(_Fragment$8, null, [_createElementVNode$18("animate", {
					"attributeName": "y",
					"from": item.y + item.height,
					"to": item.y,
					"dur": `${autoDrawDuration.value}ms`,
					"fill": "freeze"
				}, null), _createElementVNode$18("animate", {
					"attributeName": "height",
					"from": "0",
					"to": item.height,
					"dur": `${autoDrawDuration.value}ms`,
					"fill": "freeze"
				}, null)])]))]),
				hasLabels.value && _createElementVNode$18("g", {
					"key": "labels",
					"style": {
						textAnchor: "middle",
						dominantBaseline: "mathematical",
						fill: "currentColor"
					}
				}, [parsedLabels.value.map((item, i) => _createElementVNode$18("text", {
					"x": item.x + offsetX.value + lineWidth.value / 2,
					"y": parseInt(props.height, 10) - 2 + (parseInt(props.labelSize, 10) || 7 * .75),
					"font-size": Number(props.labelSize) || 7
				}, [slots.label?.({
					index: i,
					value: item.value
				}) ?? item.value]))]),
				_createElementVNode$18("g", {
					"clip-path": `url(#${id.value}-clip)`,
					"fill": `url(#${id.value})`
				}, [_createElementVNode$18("rect", {
					"x": 0,
					"y": 0,
					"width": Math.max(props.modelValue.length * lineWidth.value, Number(props.width)),
					"height": props.height
				}, null)])
			]);
		});
	}
});
function genPath(points, radius) {
	let fill = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
	let height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
	if (points.length === 0) return "";
	const start = points.shift();
	const end = points[points.length - 1];
	return (fill ? `M${start.x} ${height - start.x + 2} L${start.x} ${start.y}` : `M${start.x} ${start.y}`) + points.map((point, index) => {
		const next = points[index + 1];
		const prev = points[index - 1] || start;
		const isCollinear = next && checkCollinear(next, point, prev);
		if (!next || isCollinear) return `L${point.x} ${point.y}`;
		const threshold = Math.min(getDistance(prev, point), getDistance(next, point));
		const radiusForPoint = threshold / 2 < radius ? threshold / 2 : radius;
		const before = moveTo(prev, point, radiusForPoint);
		const after = moveTo(next, point, radiusForPoint);
		return `L${before.x} ${before.y}S${point.x} ${point.y} ${after.x} ${after.y}`;
	}).join("") + (fill ? `L${end.x} ${height - start.x + 2} Z` : "");
}
function int(value) {
	return parseInt(value, 10);
}
function checkCollinear(p0, p1, p2) {
	return int(p0.x + p2.x) === int(2 * p1.x) && int(p0.y + p2.y) === int(2 * p1.y);
}
function getDistance(p1, p2) {
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function moveTo(to, from, radius) {
	const vector = {
		x: to.x - from.x,
		y: to.y - from.y
	};
	const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
	const unitVector = {
		x: vector.x / length,
		y: vector.y / length
	};
	return {
		x: from.x + unitVector.x * radius,
		y: from.y + unitVector.y * radius
	};
}
var { computed: computed$18, nextTick: nextTick$1, ref: ref$14, useId: useId$2, watch: watch$5, createElementVNode: _createElementVNode$17 } = await importShared("vue");
const makeVTrendlineProps = propsFactory({
	fill: Boolean,
	...makeLineProps()
}, "VTrendline");
const VTrendline = genericComponent()({
	name: "VTrendline",
	props: makeVTrendlineProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const uid = useId$2();
		const id = computed$18(() => props.id || `trendline-${uid}`);
		const autoDrawDuration = computed$18(() => Number(props.autoDrawDuration) || (props.fill ? 500 : 2e3));
		const lastLength = ref$14(0);
		const path = ref$14(null);
		function genPoints(values, boundary$1) {
			const { minX, maxX, minY, maxY } = boundary$1;
			if (values.length === 1) values = [values[0], values[0]];
			const totalValues = values.length;
			const maxValue = props.max != null ? Number(props.max) : Math.max(...values);
			const minValue = props.min != null ? Number(props.min) : Math.min(...values);
			const gridX = (maxX - minX) / (totalValues - 1);
			const gridY = (maxY - minY) / (maxValue - minValue || 1);
			return values.map((value, index) => {
				return {
					x: minX + index * gridX,
					y: maxY - (value - minValue) * gridY,
					value
				};
			});
		}
		const hasLabels = computed$18(() => {
			return Boolean(props.showLabels || props.labels.length > 0 || !!slots?.label);
		});
		const lineWidth = computed$18(() => {
			return parseFloat(props.lineWidth) || 4;
		});
		const totalWidth = computed$18(() => Number(props.width));
		const boundary = computed$18(() => {
			const padding = Number(props.padding);
			return {
				minX: padding,
				maxX: totalWidth.value - padding,
				minY: padding,
				maxY: parseInt(props.height, 10) - padding
			};
		});
		const items = computed$18(() => props.modelValue.map((item) => getPropertyFromItem(item, props.itemValue, item)));
		const parsedLabels = computed$18(() => {
			const labels = [];
			const points = genPoints(items.value, boundary.value);
			const len = points.length;
			for (let i = 0; labels.length < len; i++) {
				const item = points[i];
				let value = props.labels[i];
				if (!value) value = typeof item === "object" ? item.value : item;
				labels.push({
					x: item.x,
					value: String(value)
				});
			}
			return labels;
		});
		watch$5(() => props.modelValue, async () => {
			await nextTick$1();
			if (!props.autoDraw || !path.value || PREFERS_REDUCED_MOTION()) return;
			const pathRef = path.value;
			const length = pathRef.getTotalLength();
			if (!props.fill) {
				pathRef.style.strokeDasharray = `${length}`;
				pathRef.style.strokeDashoffset = `${length}`;
				pathRef.getBoundingClientRect();
				pathRef.style.transition = `stroke-dashoffset ${autoDrawDuration.value}ms ${props.autoDrawEasing}`;
				pathRef.style.strokeDashoffset = "0";
			} else {
				pathRef.style.transformOrigin = "bottom center";
				pathRef.style.transition = "none";
				pathRef.style.transform = `scaleY(0)`;
				pathRef.getBoundingClientRect();
				pathRef.style.transition = `transform ${autoDrawDuration.value}ms ${props.autoDrawEasing}`;
				pathRef.style.transform = `scaleY(1)`;
			}
			lastLength.value = length;
		}, { immediate: true });
		function genPath$1(fill) {
			const smoothValue = typeof props.smooth === "boolean" ? props.smooth ? 8 : 0 : Number(props.smooth);
			return genPath(genPoints(items.value, boundary.value), smoothValue, fill, parseInt(props.height, 10));
		}
		useRender(() => {
			const gradientData = !props.gradient.slice().length ? [""] : props.gradient.slice().reverse();
			return _createElementVNode$17("svg", {
				"display": "block",
				"stroke-width": parseFloat(props.lineWidth) ?? 4
			}, [
				_createElementVNode$17("defs", null, [_createElementVNode$17("linearGradient", {
					"id": id.value,
					"gradientUnits": "userSpaceOnUse",
					"x1": props.gradientDirection === "left" ? "100%" : "0",
					"y1": props.gradientDirection === "top" ? "100%" : "0",
					"x2": props.gradientDirection === "right" ? "100%" : "0",
					"y2": props.gradientDirection === "bottom" ? "100%" : "0"
				}, [gradientData.map((color, index) => _createElementVNode$17("stop", {
					"offset": index / Math.max(gradientData.length - 1, 1),
					"stop-color": color || "currentColor"
				}, null))])]),
				hasLabels.value && _createElementVNode$17("g", {
					"key": "labels",
					"style": {
						textAnchor: "middle",
						dominantBaseline: "mathematical",
						fill: "currentColor"
					}
				}, [parsedLabels.value.map((item, i) => _createElementVNode$17("text", {
					"x": item.x + lineWidth.value / 2 + lineWidth.value / 2,
					"y": parseInt(props.height, 10) - 4 + (parseInt(props.labelSize, 10) || 7 * .75),
					"font-size": Number(props.labelSize) || 7
				}, [slots.label?.({
					index: i,
					value: item.value
				}) ?? item.value]))]),
				_createElementVNode$17("path", {
					"ref": path,
					"d": genPath$1(props.fill),
					"fill": props.fill ? `url(#${id.value})` : "none",
					"stroke": props.fill ? "none" : `url(#${id.value})`
				}, null),
				props.fill && _createElementVNode$17("path", {
					"d": genPath$1(false),
					"fill": "none",
					"stroke": props.color ?? props.gradient?.[0]
				}, null)
			]);
		});
	}
});
var { mergeProps: _mergeProps$17, createVNode: _createVNode$25 } = await importShared("vue");
var { computed: computed$17 } = await importShared("vue");
const makeVSparklineProps = propsFactory({
	type: {
		type: String,
		default: "trend"
	},
	...makeVBarlineProps(),
	...makeVTrendlineProps()
}, "VSparkline");
const VSparkline = genericComponent()({
	name: "VSparkline",
	props: makeVSparklineProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const hasLabels = computed$17(() => {
			return Boolean(props.showLabels || props.labels.length > 0 || !!slots?.label);
		});
		const totalHeight = computed$17(() => {
			let height = parseInt(props.height, 10);
			if (hasLabels.value) height += parseInt(props.labelSize, 10) * 1.5;
			return height;
		});
		useRender(() => {
			const Tag = props.type === "trend" ? VTrendline : VBarline;
			const lineProps = props.type === "trend" ? VTrendline.filterProps(props) : VBarline.filterProps(props);
			return _createVNode$25(Tag, _mergeProps$17({
				"key": props.type,
				"class": textColorClasses.value,
				"style": textColorStyles.value,
				"viewBox": `0 0 ${props.width} ${parseInt(totalHeight.value, 10)}`
			}, lineProps), slots);
		});
	}
});
var { createVNode: _createVNode$24, mergeProps: _mergeProps$16 } = await importShared("vue");
var { computed: computed$16, ref: ref$13 } = await importShared("vue");
const makeVSpeedDialProps = propsFactory({
	...makeComponentProps(),
	...makeVMenuProps({
		offset: 8,
		minWidth: 0,
		openDelay: 0,
		closeDelay: 100,
		location: "top center",
		transition: "scale-transition"
	})
}, "VSpeedDial");
const VSpeedDial = genericComponent()({
	name: "VSpeedDial",
	props: makeVSpeedDialProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const menuRef = ref$13();
		const location = computed$16(() => {
			const [y, x = "center"] = props.location?.split(" ") ?? [];
			return `${y} ${x}`;
		});
		const locationClasses = computed$16(() => ({ [`v-speed-dial__content--${location.value.replace(" ", "-")}`]: true }));
		useRender(() => {
			return _createVNode$24(VMenu, _mergeProps$16(VMenu.filterProps(props), {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": props.class,
				"style": props.style,
				"contentClass": [
					"v-speed-dial__content",
					locationClasses.value,
					props.contentClass
				],
				"location": location.value,
				"ref": menuRef,
				"transition": "fade-transition"
			}), {
				...slots,
				default: (slotProps) => _createVNode$24(VDefaultsProvider, { "defaults": { VBtn: { size: "small" } } }, { default: () => [_createVNode$24(MaybeTransition, {
					"appear": true,
					"group": true,
					"transition": props.transition
				}, { default: () => [slots.default?.(slotProps)] })] })
			});
		});
		return {};
	}
});
const VStepperSymbol = Symbol.for("vuetify:v-stepper");
var { createVNode: _createVNode$23, createElementVNode: _createElementVNode$16 } = await importShared("vue");
const makeVStepperActionsProps = propsFactory({
	color: String,
	disabled: {
		type: [Boolean, String],
		default: false
	},
	prevText: {
		type: String,
		default: "$vuetify.stepper.prev"
	},
	nextText: {
		type: String,
		default: "$vuetify.stepper.next"
	}
}, "VStepperActions");
const VStepperActions = genericComponent()({
	name: "VStepperActions",
	props: makeVStepperActionsProps(),
	emits: {
		"click:prev": () => true,
		"click:next": () => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { t } = useLocale();
		function onClickPrev() {
			emit("click:prev");
		}
		function onClickNext() {
			emit("click:next");
		}
		useRender(() => {
			const prevSlotProps = { onClick: onClickPrev };
			const nextSlotProps = { onClick: onClickNext };
			return _createElementVNode$16("div", { "class": "v-stepper-actions" }, [_createVNode$23(VDefaultsProvider, { "defaults": { VBtn: {
				disabled: ["prev", true].includes(props.disabled),
				text: t(props.prevText),
				variant: "text"
			} } }, { default: () => [slots.prev?.({ props: prevSlotProps }) ?? _createVNode$23(VBtn, prevSlotProps, null)] }), _createVNode$23(VDefaultsProvider, { "defaults": { VBtn: {
				color: props.color,
				disabled: ["next", true].includes(props.disabled),
				text: t(props.nextText),
				variant: "tonal"
			} } }, { default: () => [slots.next?.({ props: nextSlotProps }) ?? _createVNode$23(VBtn, nextSlotProps, null)] })]);
		});
		return {};
	}
});
const VStepperHeader = createSimpleFunctional("v-stepper-header");
var { createVNode: _createVNode$22, createElementVNode: _createElementVNode$15, normalizeClass: _normalizeClass$12, withDirectives: _withDirectives$1 } = await importShared("vue");
var { computed: computed$15 } = await importShared("vue");
const makeVStepperItemProps = propsFactory({
	...propsFactory({
		color: String,
		title: String,
		subtitle: String,
		complete: Boolean,
		completeIcon: {
			type: IconValue,
			default: "$complete"
		},
		editable: Boolean,
		editIcon: {
			type: IconValue,
			default: "$edit"
		},
		error: Boolean,
		errorIcon: {
			type: IconValue,
			default: "$error"
		},
		icon: IconValue,
		ripple: {
			type: [Boolean, Object],
			default: true
		},
		rules: {
			type: Array,
			default: () => []
		}
	}, "StepperItem")(),
	...makeGroupItemProps()
}, "VStepperItem");
const VStepperItem = genericComponent()({
	name: "VStepperItem",
	directives: { vRipple: ripple_default },
	props: makeVStepperItemProps(),
	emits: { "group:selected": (val) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const group = useGroupItem(props, VStepperSymbol, true);
		const step = computed$15(() => group?.value.value ?? props.value);
		const isValid = computed$15(() => props.rules.every((handler) => handler() === true));
		const isClickable = computed$15(() => !props.disabled && props.editable);
		const canEdit = computed$15(() => !props.disabled && props.editable);
		const hasError = computed$15(() => props.error || !isValid.value);
		const hasCompleted = computed$15(() => props.complete || props.rules.length > 0 && isValid.value);
		const icon = computed$15(() => {
			if (hasError.value) return props.errorIcon;
			if (hasCompleted.value) return props.completeIcon;
			if (group.isSelected.value && props.editable) return props.editIcon;
			return props.icon;
		});
		const slotProps = computed$15(() => ({
			canEdit: canEdit.value,
			hasError: hasError.value,
			hasCompleted: hasCompleted.value,
			title: props.title,
			subtitle: props.subtitle,
			step: step.value,
			value: props.value
		}));
		useRender(() => {
			const hasColor = (!group || group.isSelected.value || hasCompleted.value || canEdit.value) && !hasError.value && !props.disabled;
			const hasTitle = !!(props.title != null || slots.title);
			const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
			function onClick() {
				group?.toggle();
			}
			return _withDirectives$1(_createElementVNode$15("button", {
				"class": _normalizeClass$12([
					"v-stepper-item",
					{
						"v-stepper-item--complete": hasCompleted.value,
						"v-stepper-item--disabled": props.disabled,
						"v-stepper-item--error": hasError.value
					},
					group?.selectedClass.value
				]),
				"disabled": !props.editable,
				"type": "button",
				"onClick": onClick
			}, [
				isClickable.value && genOverlays(true, "v-stepper-item"),
				_createVNode$22(VAvatar, {
					"key": "stepper-avatar",
					"class": "v-stepper-item__avatar",
					"color": hasColor ? props.color : void 0,
					"size": 24
				}, { default: () => [slots.icon?.(slotProps.value) ?? (icon.value ? _createVNode$22(VIcon, { "icon": icon.value }, null) : step.value)] }),
				_createElementVNode$15("div", { "class": "v-stepper-item__content" }, [
					hasTitle && _createElementVNode$15("div", {
						"key": "title",
						"class": "v-stepper-item__title"
					}, [slots.title?.(slotProps.value) ?? props.title]),
					hasSubtitle && _createElementVNode$15("div", {
						"key": "subtitle",
						"class": "v-stepper-item__subtitle"
					}, [slots.subtitle?.(slotProps.value) ?? props.subtitle]),
					slots.default?.(slotProps.value)
				])
			]), [[
				ripple_default,
				props.editable && props.ripple,
				null
			]]);
		});
		return {};
	}
});
var { mergeProps: _mergeProps$15, createVNode: _createVNode$21 } = await importShared("vue");
var { computed: computed$14, inject: inject$2 } = await importShared("vue");
const makeVStepperWindowProps = propsFactory({ ...omit(makeVWindowProps(), [
	"continuous",
	"nextIcon",
	"prevIcon",
	"showArrows",
	"touch",
	"mandatory"
]) }, "VStepperWindow");
const VStepperWindow = genericComponent()({
	name: "VStepperWindow",
	props: makeVStepperWindowProps(),
	emits: { "update:modelValue": (v) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const group = inject$2(VStepperSymbol, null);
		const _model = useProxiedModel(props, "modelValue");
		const model = computed$14({
			get() {
				if (_model.value != null || !group) return _model.value;
				return group.items.value.find((item) => group.selected.value.includes(item.id))?.value;
			},
			set(val) {
				_model.value = val;
			}
		});
		useRender(() => {
			const windowProps = VWindow.filterProps(props);
			return _createVNode$21(VWindow, _mergeProps$15({ "_as": "VStepperWindow" }, windowProps, {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": ["v-stepper-window", props.class],
				"style": props.style,
				"mandatory": false,
				"touch": false
			}), slots);
		});
		return {};
	}
});
var { mergeProps: _mergeProps$14, createVNode: _createVNode$20 } = await importShared("vue");
const makeVStepperWindowItemProps = propsFactory({ ...makeVWindowItemProps() }, "VStepperWindowItem");
const VStepperWindowItem = genericComponent()({
	name: "VStepperWindowItem",
	props: makeVStepperWindowItemProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => {
			const windowItemProps = VWindowItem.filterProps(props);
			return _createVNode$20(VWindowItem, _mergeProps$14({ "_as": "VStepperWindowItem" }, windowItemProps, {
				"class": ["v-stepper-window-item", props.class],
				"style": props.style
			}), slots);
		});
		return {};
	}
});
var { Fragment: _Fragment$7, createVNode: _createVNode$19, createElementVNode: _createElementVNode$14, mergeProps: _mergeProps$13 } = await importShared("vue");
var { computed: computed$13, toRefs } = await importShared("vue");
const makeVStepperProps = propsFactory({
	...propsFactory({
		altLabels: Boolean,
		bgColor: String,
		completeIcon: IconValue,
		editIcon: IconValue,
		editable: Boolean,
		errorIcon: IconValue,
		hideActions: Boolean,
		items: {
			type: Array,
			default: () => []
		},
		itemTitle: {
			type: [
				String,
				Array,
				Function
			],
			default: "title"
		},
		itemValue: {
			type: [
				String,
				Array,
				Function
			],
			default: "value"
		},
		itemProps: {
			type: [
				Boolean,
				String,
				Array,
				Function
			],
			default: "props"
		},
		nonLinear: Boolean,
		flat: Boolean,
		...makeDisplayProps()
	}, "Stepper")(),
	...makeGroupProps({
		mandatory: "force",
		selectedClass: "v-stepper-item--selected"
	}),
	...makeVSheetProps(),
	...pick(makeVStepperActionsProps(), ["prevText", "nextText"])
}, "VStepper");
const VStepper = genericComponent()({
	name: "VStepper",
	props: makeVStepperProps(),
	emits: { "update:modelValue": (v) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const { items: _items, next, prev, selected } = useGroup(props, VStepperSymbol);
		const { displayClasses, mobile } = useDisplay(props);
		const { completeIcon, editIcon, errorIcon, color, editable, prevText, nextText } = toRefs(props);
		const items = computed$13(() => props.items.map((item, index) => {
			const _props = {
				title: getPropertyFromItem(item, props.itemTitle, item),
				value: getPropertyFromItem(item, props.itemValue, index + 1),
				...props.itemProps === true ? item : getPropertyFromItem(item, props.itemProps)
			};
			return {
				title: _props.title,
				value: _props.value,
				props: _props,
				raw: item
			};
		}));
		const activeIndex = computed$13(() => {
			return _items.value.findIndex((item) => selected.value.includes(item.id));
		});
		const disabled = computed$13(() => {
			if (props.disabled) return props.disabled;
			if (activeIndex.value === 0) return "prev";
			if (activeIndex.value === _items.value.length - 1) return "next";
			return false;
		});
		provideDefaults({
			VStepperItem: {
				editable,
				errorIcon,
				completeIcon,
				editIcon,
				prevText,
				nextText
			},
			VStepperActions: {
				color,
				disabled,
				prevText,
				nextText
			}
		});
		useRender(() => {
			const sheetProps = VSheet.filterProps(props);
			const hasHeader = !!(slots.header || props.items.length);
			const hasWindow = props.items.length > 0;
			const hasActions = !props.hideActions && !!(hasWindow || slots.actions);
			return _createVNode$19(VSheet, _mergeProps$13(sheetProps, {
				"color": props.bgColor,
				"class": [
					"v-stepper",
					{
						"v-stepper--alt-labels": props.altLabels,
						"v-stepper--flat": props.flat,
						"v-stepper--non-linear": props.nonLinear,
						"v-stepper--mobile": mobile.value
					},
					displayClasses.value,
					props.class
				],
				"style": props.style
			}), { default: () => [
				hasHeader && _createVNode$19(VStepperHeader, { "key": "stepper-header" }, { default: () => [items.value.map((_ref2, index) => {
					let { raw, ...item } = _ref2;
					return _createElementVNode$14(_Fragment$7, null, [!!index && _createVNode$19(VDivider, null, null), _createVNode$19(VStepperItem, item.props, {
						default: slots[`header-item.${item.value}`] ?? slots.header,
						icon: slots.icon,
						title: slots.title,
						subtitle: slots.subtitle
					})]);
				})] }),
				hasWindow && _createVNode$19(VStepperWindow, { "key": "stepper-window" }, { default: () => [items.value.map((item) => _createVNode$19(VStepperWindowItem, { "value": item.value }, { default: () => slots[`item.${item.value}`]?.(item) ?? slots.item?.(item) }))] }),
				slots.default?.({
					prev,
					next
				}),
				hasActions && (slots.actions?.({
					next,
					prev
				}) ?? _createVNode$19(VStepperActions, {
					"key": "stepper-actions",
					"onClick:prev": prev,
					"onClick:next": next
				}, slots))
			] });
		});
		return {
			prev,
			next
		};
	}
});
var { createElementVNode: _createElementVNode$13, normalizeClass: _normalizeClass$11, normalizeStyle: _normalizeStyle$8, Fragment: _Fragment$6, createVNode: _createVNode$18, mergeProps: _mergeProps$12 } = await importShared("vue");
var { ref: ref$12, toRef: toRef$7, useId: useId$1 } = await importShared("vue");
const makeVSwitchProps = propsFactory({
	indeterminate: Boolean,
	inset: Boolean,
	flat: Boolean,
	loading: {
		type: [Boolean, String],
		default: false
	},
	...makeVInputProps(),
	...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
	name: "VSwitch",
	inheritAttrs: false,
	props: makeVSwitchProps(),
	emits: {
		"update:focused": (focused) => true,
		"update:modelValue": (value) => true,
		"update:indeterminate": (value) => true
	},
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const indeterminate = useProxiedModel(props, "indeterminate");
		const model = useProxiedModel(props, "modelValue");
		const { loaderClasses } = useLoader(props);
		const { isFocused, focus, blur } = useFocus(props);
		const control = ref$12();
		const inputRef = ref$12();
		const isForcedColorsModeActive = SUPPORTS_MATCH_MEDIA && window.matchMedia("(forced-colors: active)").matches;
		const loaderColor = toRef$7(() => {
			return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
		});
		const uid = useId$1();
		const id = toRef$7(() => props.id || `switch-${uid}`);
		function onChange() {
			if (indeterminate.value) indeterminate.value = false;
		}
		function onTrackClick(e) {
			e.stopPropagation();
			e.preventDefault();
			control.value?.input?.click();
		}
		useRender(() => {
			const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
			const inputProps = VInput.filterProps(props);
			const controlProps = VSelectionControl.filterProps(props);
			return _createVNode$18(VInput, _mergeProps$12({
				"ref": inputRef,
				"class": [
					"v-switch",
					{ "v-switch--flat": props.flat },
					{ "v-switch--inset": props.inset },
					{ "v-switch--indeterminate": indeterminate.value },
					loaderClasses.value,
					props.class
				]
			}, rootAttrs, inputProps, {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"id": id.value,
				"focused": isFocused.value,
				"style": props.style
			}), {
				...slots,
				default: (_ref2) => {
					let { id: id$1, messagesId, isDisabled, isReadonly, isValid } = _ref2;
					const slotProps = {
						model,
						isValid
					};
					return _createVNode$18(VSelectionControl, _mergeProps$12({ "ref": control }, controlProps, {
						"modelValue": model.value,
						"onUpdate:modelValue": [($event) => model.value = $event, onChange],
						"id": id$1.value,
						"aria-describedby": messagesId.value,
						"type": "checkbox",
						"aria-checked": indeterminate.value ? "mixed" : void 0,
						"disabled": isDisabled.value,
						"readonly": isReadonly.value,
						"onFocus": focus,
						"onBlur": blur
					}, controlAttrs), {
						...slots,
						default: (_ref3) => {
							let { backgroundColorClasses, backgroundColorStyles } = _ref3;
							return _createElementVNode$13("div", {
								"class": _normalizeClass$11(["v-switch__track", !isForcedColorsModeActive ? backgroundColorClasses.value : void 0]),
								"style": _normalizeStyle$8(backgroundColorStyles.value),
								"onClick": onTrackClick
							}, [slots["track-true"] && _createElementVNode$13("div", {
								"key": "prepend",
								"class": "v-switch__track-true"
							}, [slots["track-true"](slotProps)]), slots["track-false"] && _createElementVNode$13("div", {
								"key": "append",
								"class": "v-switch__track-false"
							}, [slots["track-false"](slotProps)])]);
						},
						input: (_ref4) => {
							let { inputNode, icon, backgroundColorClasses, backgroundColorStyles } = _ref4;
							return _createElementVNode$13(_Fragment$6, null, [inputNode, _createElementVNode$13("div", {
								"class": _normalizeClass$11([
									"v-switch__thumb",
									{ "v-switch__thumb--filled": icon || props.loading },
									props.inset || isForcedColorsModeActive ? void 0 : backgroundColorClasses.value
								]),
								"style": _normalizeStyle$8(props.inset ? void 0 : backgroundColorStyles.value)
							}, [slots.thumb ? _createVNode$18(VDefaultsProvider, { "defaults": { VIcon: {
								icon,
								size: "x-small"
							} } }, { default: () => [slots.thumb({
								...slotProps,
								icon
							})] }) : _createVNode$18(VScaleTransition, null, { default: () => [!props.loading ? icon && _createVNode$18(VIcon, {
								"key": String(icon),
								"icon": icon,
								"size": "x-small"
							}, null) : _createVNode$18(LoaderSlot, {
								"name": "v-switch",
								"active": true,
								"color": isValid.value === false ? void 0 : loaderColor.value
							}, { default: (slotProps$1) => slots.loader ? slots.loader(slotProps$1) : _createVNode$18(VProgressCircular, {
								"active": slotProps$1.isActive,
								"color": slotProps$1.color,
								"indeterminate": true,
								"size": "16",
								"width": "2"
							}, null) })] })])]);
						}
					});
				}
			});
		});
		return forwardRefs({}, inputRef);
	}
});
var { normalizeClass: _normalizeClass$10, normalizeStyle: _normalizeStyle$7, createVNode: _createVNode$17 } = await importShared("vue");
var { computed: computed$12, shallowRef: shallowRef$3, toRef: toRef$6 } = await importShared("vue");
const makeVSystemBarProps = propsFactory({
	color: String,
	height: [Number, String],
	window: Boolean,
	...makeComponentProps(),
	...makeElevationProps(),
	...makeLayoutItemProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VSystemBar");
const VSystemBar = genericComponent()({
	name: "VSystemBar",
	props: makeVSystemBarProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		const { ssrBootStyles } = useSsrBoot();
		const height = computed$12(() => props.height ?? (props.window ? 32 : 24));
		const { layoutItemStyles } = useLayoutItem({
			id: props.name,
			order: computed$12(() => parseInt(props.order, 10)),
			position: shallowRef$3("top"),
			layoutSize: height,
			elementSize: height,
			active: computed$12(() => true),
			absolute: toRef$6(() => props.absolute)
		});
		useRender(() => _createVNode$17(props.tag, {
			"class": _normalizeClass$10([
				"v-system-bar",
				{ "v-system-bar--window": props.window },
				themeClasses.value,
				backgroundColorClasses.value,
				elevationClasses.value,
				roundedClasses.value,
				props.class
			]),
			"style": _normalizeStyle$7([
				backgroundColorStyles.value,
				layoutItemStyles.value,
				ssrBootStyles.value,
				props.style
			])
		}, slots));
		return {};
	}
});
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
var { Fragment: _Fragment$5, normalizeClass: _normalizeClass$9, normalizeStyle: _normalizeStyle$6, createElementVNode: _createElementVNode$12, mergeProps: _mergeProps$11, createVNode: _createVNode$16 } = await importShared("vue");
var { computed: computed$11, ref: ref$11 } = await importShared("vue");
const makeVTabProps = propsFactory({
	fixed: Boolean,
	sliderColor: String,
	sliderTransition: String,
	sliderTransitionDuration: [String, Number],
	hideSlider: Boolean,
	inset: Boolean,
	direction: {
		type: String,
		default: "horizontal"
	},
	...omit(makeVBtnProps({
		selectedClass: "v-tab--selected",
		variant: "text"
	}), [
		"active",
		"block",
		"flat",
		"location",
		"position",
		"symbol"
	])
}, "VTab");
const VTab = genericComponent()({
	name: "VTab",
	props: makeVTabProps(),
	setup(props, _ref) {
		let { slots, attrs } = _ref;
		const { textColorClasses: sliderColorClasses, textColorStyles: sliderColorStyles } = useTextColor(() => props.sliderColor);
		const { backgroundColorClasses: insetColorClasses, backgroundColorStyles: insetColorStyles } = useBackgroundColor(() => props.sliderColor);
		const rootEl = ref$11();
		const sliderEl = ref$11();
		const isHorizontal = computed$11(() => props.direction === "horizontal");
		const isSelected = computed$11(() => rootEl.value?.group?.isSelected.value ?? false);
		function fade(nextEl, prevEl) {
			return { opacity: [0, 1] };
		}
		function grow(nextEl, prevEl) {
			return props.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
		}
		function shift(nextEl, prevEl) {
			const prevBox = prevEl.getBoundingClientRect();
			const nextBox = nextEl.getBoundingClientRect();
			const xy = isHorizontal.value ? "x" : "y";
			const XY = isHorizontal.value ? "X" : "Y";
			const rightBottom = isHorizontal.value ? "right" : "bottom";
			const widthHeight = isHorizontal.value ? "width" : "height";
			const delta = prevBox[xy] > nextBox[xy] ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
			const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
			const scale = (Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight])) / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
			const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
			const sigma = 1.5;
			return {
				transform: [
					`translate${XY}(${delta}px) scale${XY}(${initialScale})`,
					`translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`,
					"none"
				],
				transformOrigin: Array(3).fill(origin)
			};
		}
		function updateSlider(_ref2) {
			let { value } = _ref2;
			if (value) {
				const prevEl = rootEl.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider");
				const nextEl = sliderEl.value;
				if (!prevEl || !nextEl) return;
				const color = getComputedStyle(prevEl).color;
				const keyframes = {
					fade,
					grow,
					shift
				}[props.sliderTransition ?? "shift"] ?? shift;
				const duration = Number(props.sliderTransitionDuration) || ({
					fade: 400,
					grow: 350,
					shift: 225
				}[props.sliderTransition ?? "shift"] ?? 225);
				animate(nextEl, {
					backgroundColor: [color, "currentcolor"],
					...keyframes(nextEl, prevEl)
				}, {
					duration,
					easing: standardEasing
				});
			}
		}
		useRender(() => {
			const btnProps = VBtn.filterProps(props);
			return _createVNode$16(VBtn, _mergeProps$11({
				"symbol": VTabsSymbol,
				"ref": rootEl,
				"class": [
					"v-tab",
					props.class,
					isSelected.value && props.inset ? insetColorClasses.value : []
				],
				"style": [props.style, isSelected.value && props.inset ? insetColorStyles.value : []],
				"tabindex": isSelected.value ? 0 : -1,
				"role": "tab",
				"aria-selected": String(isSelected.value),
				"active": false
			}, btnProps, attrs, {
				"block": props.fixed,
				"maxWidth": props.fixed ? 300 : void 0,
				"onGroup:selected": updateSlider
			}), {
				...slots,
				default: () => _createElementVNode$12(_Fragment$5, null, [slots.default?.() ?? props.text, !props.hideSlider && _createElementVNode$12("div", {
					"ref": sliderEl,
					"class": _normalizeClass$9(["v-tab__slider", sliderColorClasses.value]),
					"style": _normalizeStyle$6(sliderColorStyles.value)
				}, null)])
			});
		});
		return forwardRefs({}, rootEl);
	}
});
var { mergeProps: _mergeProps$10, createVNode: _createVNode$15 } = await importShared("vue");
var { computed: computed$10, inject: inject$1 } = await importShared("vue");
const makeVTabsWindowProps = propsFactory({ ...omit(makeVWindowProps(), [
	"continuous",
	"nextIcon",
	"prevIcon",
	"showArrows",
	"touch",
	"mandatory"
]) }, "VTabsWindow");
const VTabsWindow = genericComponent()({
	name: "VTabsWindow",
	props: makeVTabsWindowProps(),
	emits: { "update:modelValue": (v) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const group = inject$1(VTabsSymbol, null);
		const _model = useProxiedModel(props, "modelValue");
		const model = computed$10({
			get() {
				if (_model.value != null || !group) return _model.value;
				return group.items.value.find((item) => group.selected.value.includes(item.id))?.value;
			},
			set(val) {
				_model.value = val;
			}
		});
		useRender(() => {
			const windowProps = VWindow.filterProps(props);
			return _createVNode$15(VWindow, _mergeProps$10({ "_as": "VTabsWindow" }, windowProps, {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": ["v-tabs-window", props.class],
				"style": props.style,
				"mandatory": false,
				"touch": false
			}), slots);
		});
		return {};
	}
});
var { mergeProps: _mergeProps$9, createVNode: _createVNode$14 } = await importShared("vue");
const makeVTabsWindowItemProps = propsFactory({ ...makeVWindowItemProps() }, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
	name: "VTabsWindowItem",
	props: makeVTabsWindowItemProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		useRender(() => {
			const windowItemProps = VWindowItem.filterProps(props);
			return _createVNode$14(VWindowItem, _mergeProps$9({ "_as": "VTabsWindowItem" }, windowItemProps, {
				"class": ["v-tabs-window-item", props.class],
				"style": props.style
			}), slots);
		});
		return {};
	}
});
var { Fragment: _Fragment$4, mergeProps: _mergeProps$8, createVNode: _createVNode$13, createElementVNode: _createElementVNode$11 } = await importShared("vue");
var { computed: computed$9, toRef: toRef$5 } = await importShared("vue");
function parseItems(items) {
	if (!items) return [];
	return items.map((item) => {
		if (!isObject(item)) return {
			text: item,
			value: item
		};
		return item;
	});
}
const makeVTabsProps = propsFactory({
	alignTabs: {
		type: String,
		default: "start"
	},
	color: String,
	fixedTabs: Boolean,
	items: {
		type: Array,
		default: () => []
	},
	stacked: Boolean,
	bgColor: String,
	grow: Boolean,
	height: {
		type: [Number, String],
		default: void 0
	},
	hideSlider: Boolean,
	inset: Boolean,
	insetPadding: [String, Number],
	insetRadius: [String, Number],
	sliderColor: String,
	...pick(makeVTabProps(), [
		"spaced",
		"sliderTransition",
		"sliderTransitionDuration"
	]),
	...makeVSlideGroupProps({
		mandatory: "force",
		selectedClass: "v-tab-item--selected"
	}),
	...makeDensityProps(),
	...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
	name: "VTabs",
	props: makeVTabsProps(),
	emits: { "update:modelValue": (v) => true },
	setup(props, _ref) {
		let { attrs, slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const items = computed$9(() => parseItems(props.items));
		const { densityClasses } = useDensity(props);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { scopeId } = useScopeId();
		provideDefaults({ VTab: {
			color: toRef$5(props, "color"),
			direction: toRef$5(props, "direction"),
			stacked: toRef$5(props, "stacked"),
			fixed: toRef$5(props, "fixedTabs"),
			inset: toRef$5(props, "inset"),
			sliderColor: toRef$5(props, "sliderColor"),
			sliderTransition: toRef$5(props, "sliderTransition"),
			sliderTransitionDuration: toRef$5(props, "sliderTransitionDuration"),
			hideSlider: toRef$5(props, "hideSlider")
		} });
		useRender(() => {
			const slideGroupProps = VSlideGroup.filterProps(props);
			const hasWindow = !!(slots.window || props.items.length > 0);
			return _createElementVNode$11(_Fragment$4, null, [_createVNode$13(VSlideGroup, _mergeProps$8(slideGroupProps, {
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": [
					"v-tabs",
					`v-tabs--${props.direction}`,
					`v-tabs--align-tabs-${props.alignTabs}`,
					{
						"v-tabs--fixed-tabs": props.fixedTabs,
						"v-tabs--grow": props.grow,
						"v-tabs--inset": props.inset,
						"v-tabs--stacked": props.stacked
					},
					densityClasses.value,
					backgroundColorClasses.value,
					props.class
				],
				"style": [
					{
						"--v-tabs-height": convertToUnit(props.height),
						"--v-tabs-inset-padding": props.inset ? convertToUnit(props.insetPadding) : void 0,
						"--v-tabs-inset-radius": props.inset ? convertToUnit(props.insetRadius) : void 0
					},
					backgroundColorStyles.value,
					props.style
				],
				"role": "tablist",
				"symbol": VTabsSymbol
			}, scopeId, attrs), {
				default: slots.default ?? (() => items.value.map((item) => slots.tab?.({ item }) ?? _createVNode$13(VTab, _mergeProps$8(item, {
					"key": item.text,
					"value": item.value,
					"spaced": props.spaced
				}), { default: slots[`tab.${item.value}`] ? () => slots[`tab.${item.value}`]?.({ item }) : void 0 }))),
				prev: slots.prev,
				next: slots.next
			}), hasWindow && _createVNode$13(VTabsWindow, _mergeProps$8({
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"key": "tabs-window"
			}, scopeId), { default: () => [items.value.map((item) => slots.item?.({ item }) ?? _createVNode$13(VTabsWindowItem, { "value": item.value }, { default: () => slots[`item.${item.value}`]?.({ item }) })), slots.window?.()] })]);
		});
		return {};
	}
});
var { Fragment: _Fragment$3, createElementVNode: _createElementVNode$10, mergeProps: _mergeProps$7, withDirectives: _withDirectives, vModelText: _vModelText, normalizeClass: _normalizeClass$8, createVNode: _createVNode$12 } = await importShared("vue");
var { computed: computed$8, nextTick, onBeforeUnmount, onMounted: onMounted$1, ref: ref$10, shallowRef: shallowRef$2, watch: watch$4, watchEffect } = await importShared("vue");
const makeVTextareaProps = propsFactory({
	autoGrow: Boolean,
	autofocus: Boolean,
	counter: [
		Boolean,
		Number,
		String
	],
	counterValue: Function,
	prefix: String,
	placeholder: String,
	persistentPlaceholder: Boolean,
	persistentCounter: Boolean,
	noResize: Boolean,
	rows: {
		type: [Number, String],
		default: 5,
		validator: (v) => !isNaN(parseFloat(v))
	},
	maxHeight: {
		type: [Number, String],
		validator: (v) => !isNaN(parseFloat(v))
	},
	maxRows: {
		type: [Number, String],
		validator: (v) => !isNaN(parseFloat(v))
	},
	suffix: String,
	modelModifiers: Object,
	...makeAutocompleteProps(),
	...omit(makeVInputProps(), ["direction"]),
	...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
	name: "VTextarea",
	directives: { vIntersect: intersect_default },
	inheritAttrs: false,
	props: makeVTextareaProps(),
	emits: {
		"click:control": (e) => true,
		"mousedown:control": (e) => true,
		"update:focused": (focused) => true,
		"update:modelValue": (val) => true,
		"update:rows": (rows) => true
	},
	setup(props, _ref) {
		let { attrs, emit, slots } = _ref;
		const model = useProxiedModel(props, "modelValue");
		const { isFocused, focus, blur } = useFocus(props);
		const { onIntersect } = useAutofocus(props);
		const counterValue = computed$8(() => {
			return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
		});
		const max = computed$8(() => {
			if (attrs.maxlength) return attrs.maxlength;
			if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
			return props.counter;
		});
		const vInputRef = ref$10();
		const vFieldRef = ref$10();
		const controlHeight = shallowRef$2("");
		const textareaRef = ref$10();
		const scrollbarWidth = ref$10(0);
		const { platform } = useDisplay();
		const autocomplete = useAutocomplete(props);
		const isActive = computed$8(() => props.persistentPlaceholder || isFocused.value || props.active);
		function onFocus() {
			if (autocomplete.isSuppressing.value) autocomplete.update();
			if (textareaRef.value !== document.activeElement) textareaRef.value?.focus();
			if (!isFocused.value) focus();
		}
		function onControlClick(e) {
			onFocus();
			emit("click:control", e);
		}
		function onControlMousedown(e) {
			emit("mousedown:control", e);
		}
		function onClear(e) {
			e.stopPropagation();
			onFocus();
			nextTick(() => {
				model.value = "";
				callEvent(props["onClick:clear"], e);
			});
		}
		function onInput(e) {
			const el = e.target;
			if (!props.modelModifiers?.trim) {
				model.value = el.value;
				return;
			}
			const value = el.value;
			const start = el.selectionStart;
			const end = el.selectionEnd;
			model.value = value;
			nextTick(() => {
				let offset = 0;
				if (value.trimStart().length === el.value.length) offset = value.length - el.value.length;
				if (start != null) el.selectionStart = start - offset;
				if (end != null) el.selectionEnd = end - offset;
			});
		}
		const sizerRef = ref$10();
		const rows = ref$10(Number(props.rows));
		const isPlainOrUnderlined = computed$8(() => ["plain", "underlined"].includes(props.variant));
		watchEffect(() => {
			if (!props.autoGrow) rows.value = Number(props.rows);
		});
		function calculateInputHeight() {
			nextTick(() => {
				if (!textareaRef.value) return;
				if (platform.value.firefox) {
					scrollbarWidth.value = 12;
					return;
				}
				const { offsetWidth, clientWidth } = textareaRef.value;
				scrollbarWidth.value = Math.max(0, offsetWidth - clientWidth);
			});
			if (!props.autoGrow) return;
			nextTick(() => {
				if (!sizerRef.value || !vFieldRef.value) return;
				const style = getComputedStyle(sizerRef.value);
				const fieldStyle = getComputedStyle(vFieldRef.value.$el);
				const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
				const height = sizerRef.value.scrollHeight;
				const lineHeight = parseFloat(style.lineHeight);
				const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
				const maxHeight = props.maxHeight ? parseFloat(props.maxHeight) : parseFloat(props.maxRows) * lineHeight + padding || Infinity;
				const newHeight = clamp(height ?? 0, minHeight, maxHeight);
				rows.value = Math.floor((newHeight - padding) / lineHeight);
				controlHeight.value = convertToUnit(newHeight);
			});
		}
		onMounted$1(calculateInputHeight);
		watch$4(model, calculateInputHeight);
		watch$4(() => props.rows, calculateInputHeight);
		watch$4(() => props.maxHeight, calculateInputHeight);
		watch$4(() => props.maxRows, calculateInputHeight);
		watch$4(() => props.density, calculateInputHeight);
		watch$4(rows, (val) => {
			emit("update:rows", val);
		});
		let observer;
		watch$4(sizerRef, (val) => {
			if (val) {
				observer = new ResizeObserver(calculateInputHeight);
				observer.observe(sizerRef.value);
			} else observer?.disconnect();
		});
		onBeforeUnmount(() => {
			observer?.disconnect();
		});
		useRender(() => {
			const hasCounter = !!(slots.counter || props.counter || props.counterValue);
			const hasDetails = !!(hasCounter || slots.details);
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			const { modelValue: _, ...inputProps } = VInput.filterProps(props);
			const fieldProps = {
				...VField.filterProps(props),
				"onClick:clear": onClear
			};
			return _createVNode$12(VInput, _mergeProps$7({
				"ref": vInputRef,
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": [
					"v-textarea v-text-field",
					{
						"v-textarea--prefixed": props.prefix,
						"v-textarea--suffixed": props.suffix,
						"v-text-field--prefixed": props.prefix,
						"v-text-field--suffixed": props.suffix,
						"v-textarea--auto-grow": props.autoGrow,
						"v-textarea--no-resize": props.noResize || props.autoGrow,
						"v-input--plain-underlined": isPlainOrUnderlined.value
					},
					props.class
				],
				"style": [{
					"--v-textarea-max-height": props.maxHeight ? convertToUnit(props.maxHeight) : void 0,
					"--v-textarea-scroll-bar-width": convertToUnit(scrollbarWidth.value)
				}, props.style]
			}, rootAttrs, inputProps, {
				"centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
				"focused": isFocused.value
			}), {
				...slots,
				default: (_ref2) => {
					let { id, isDisabled, isDirty, isReadonly, isValid, hasDetails: hasDetails$1 } = _ref2;
					return _createVNode$12(VField, _mergeProps$7({
						"ref": vFieldRef,
						"style": { "--v-textarea-control-height": controlHeight.value },
						"onClick": onControlClick,
						"onMousedown": onControlMousedown,
						"onClick:prependInner": props["onClick:prependInner"],
						"onClick:appendInner": props["onClick:appendInner"]
					}, fieldProps, {
						"id": id.value,
						"active": isActive.value || isDirty.value,
						"labelId": `${id.value}-label`,
						"centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
						"dirty": isDirty.value || props.dirty,
						"disabled": isDisabled.value,
						"focused": isFocused.value,
						"details": hasDetails$1.value,
						"error": isValid.value === false
					}), {
						...slots,
						default: (_ref3) => {
							let { props: { class: fieldClass, ...slotProps }, controlRef } = _ref3;
							return _createElementVNode$10(_Fragment$3, null, [
								props.prefix && _createElementVNode$10("span", { "class": "v-text-field__prefix" }, [props.prefix]),
								_withDirectives(_createElementVNode$10("textarea", _mergeProps$7({
									"ref": (val) => textareaRef.value = controlRef.value = val,
									"class": fieldClass,
									"value": model.value,
									"onInput": onInput,
									"autofocus": props.autofocus,
									"readonly": isReadonly.value,
									"disabled": isDisabled.value,
									"placeholder": props.placeholder,
									"rows": props.rows,
									"name": autocomplete.fieldName.value,
									"autocomplete": autocomplete.fieldAutocomplete.value,
									"onFocus": onFocus,
									"onBlur": blur,
									"aria-labelledby": `${id.value}-label`
								}, slotProps, inputAttrs), null), [[
									intersect_default,
									{ handler: onIntersect },
									null,
									{ once: true }
								]]),
								props.autoGrow && _withDirectives(_createElementVNode$10("textarea", {
									"class": _normalizeClass$8([fieldClass, "v-textarea__sizer"]),
									"id": `${slotProps.id}-sizer`,
									"onUpdate:modelValue": ($event) => model.value = $event,
									"ref": sizerRef,
									"readonly": true,
									"aria-hidden": "true"
								}, null), [[_vModelText, model.value]]),
								props.suffix && _createElementVNode$10("span", { "class": "v-text-field__suffix" }, [props.suffix])
							]);
						}
					});
				},
				details: hasDetails ? (slotProps) => _createElementVNode$10(_Fragment$3, null, [slots.details?.(slotProps), hasCounter && _createElementVNode$10(_Fragment$3, null, [_createElementVNode$10("span", null, null), _createVNode$12(VCounter, {
					"active": props.persistentCounter || isFocused.value,
					"value": counterValue.value,
					"max": max.value,
					"disabled": props.disabled
				}, slots.counter)])]) : void 0
			});
		});
		return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
	}
});
var { normalizeClass: _normalizeClass$7, normalizeStyle: _normalizeStyle$5, createVNode: _createVNode$11 } = await importShared("vue");
const makeVThemeProviderProps = propsFactory({
	withBackground: Boolean,
	...makeComponentProps(),
	...makeThemeProps(),
	...makeTagProps()
}, "VThemeProvider");
const VThemeProvider = genericComponent()({
	name: "VThemeProvider",
	props: makeVThemeProviderProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		return () => {
			if (!props.withBackground) return slots.default?.();
			return _createVNode$11(props.tag, {
				"class": _normalizeClass$7([
					"v-theme-provider",
					themeClasses.value,
					props.class
				]),
				"style": _normalizeStyle$5(props.style)
			}, { default: () => [slots.default?.()] });
		};
	}
});
var { normalizeClass: _normalizeClass$6, normalizeStyle: _normalizeStyle$4, createElementVNode: _createElementVNode$9, createVNode: _createVNode$10 } = await importShared("vue");
const makeVTimelineDividerProps = propsFactory({
	dotColor: String,
	fillDot: Boolean,
	hideDot: Boolean,
	icon: IconValue,
	iconColor: String,
	lineColor: String,
	...makeComponentProps(),
	...makeRoundedProps(),
	...makeSizeProps(),
	...makeElevationProps()
}, "VTimelineDivider");
const VTimelineDivider = genericComponent()({
	name: "VTimelineDivider",
	props: makeVTimelineDividerProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { sizeClasses, sizeStyles } = useSize(props, "v-timeline-divider__dot");
		const { backgroundColorStyles, backgroundColorClasses } = useBackgroundColor(() => props.dotColor);
		const { roundedClasses } = useRounded(props, "v-timeline-divider__dot");
		const { elevationClasses } = useElevation(props);
		const { backgroundColorClasses: lineColorClasses, backgroundColorStyles: lineColorStyles } = useBackgroundColor(() => props.lineColor);
		useRender(() => _createElementVNode$9("div", {
			"class": _normalizeClass$6([
				"v-timeline-divider",
				{ "v-timeline-divider--fill-dot": props.fillDot },
				props.class
			]),
			"style": _normalizeStyle$4(props.style)
		}, [
			_createElementVNode$9("div", {
				"class": _normalizeClass$6(["v-timeline-divider__before", lineColorClasses.value]),
				"style": _normalizeStyle$4(lineColorStyles.value)
			}, null),
			!props.hideDot && _createElementVNode$9("div", {
				"key": "dot",
				"class": _normalizeClass$6([
					"v-timeline-divider__dot",
					elevationClasses.value,
					roundedClasses.value,
					sizeClasses.value
				]),
				"style": _normalizeStyle$4(sizeStyles.value)
			}, [_createElementVNode$9("div", {
				"class": _normalizeClass$6([
					"v-timeline-divider__inner-dot",
					backgroundColorClasses.value,
					roundedClasses.value
				]),
				"style": _normalizeStyle$4(backgroundColorStyles.value)
			}, [!slots.default ? _createVNode$10(VIcon, {
				"key": "icon",
				"color": props.iconColor,
				"icon": props.icon,
				"size": props.size
			}, null) : _createVNode$10(VDefaultsProvider, {
				"key": "icon-defaults",
				"disabled": !props.icon,
				"defaults": { VIcon: {
					color: props.iconColor,
					icon: props.icon,
					size: props.size
				} }
			}, slots.default)])]),
			_createElementVNode$9("div", {
				"class": _normalizeClass$6(["v-timeline-divider__after", lineColorClasses.value]),
				"style": _normalizeStyle$4(lineColorStyles.value)
			}, null)
		]));
		return {};
	}
});
var { normalizeStyle: _normalizeStyle$3, createElementVNode: _createElementVNode$8, createVNode: _createVNode$9, normalizeClass: _normalizeClass$5 } = await importShared("vue");
var { ref: ref$9, shallowRef: shallowRef$1, watch: watch$3 } = await importShared("vue");
const makeVTimelineItemProps = propsFactory({
	density: String,
	dotColor: String,
	fillDot: Boolean,
	hideDot: Boolean,
	hideOpposite: {
		type: Boolean,
		default: void 0
	},
	icon: IconValue,
	iconColor: String,
	lineInset: [Number, String],
	side: {
		type: String,
		validator: (v) => v == null || ["start", "end"].includes(v)
	},
	...makeComponentProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeSizeProps(),
	...makeTagProps()
}, "VTimelineItem");
const VTimelineItem = genericComponent()({
	name: "VTimelineItem",
	props: makeVTimelineItemProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { dimensionStyles } = useDimension(props);
		const dotSize = shallowRef$1(0);
		const dotRef = ref$9();
		watch$3(dotRef, (newValue) => {
			if (!newValue) return;
			dotSize.value = newValue.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width ?? 0;
		}, { flush: "post" });
		useRender(() => _createElementVNode$8("div", {
			"class": _normalizeClass$5([
				"v-timeline-item",
				{
					"v-timeline-item--fill-dot": props.fillDot,
					"v-timeline-item--side-start": props.side === "start",
					"v-timeline-item--side-end": props.side === "end"
				},
				props.class
			]),
			"style": _normalizeStyle$3([{
				"--v-timeline-dot-size": convertToUnit(dotSize.value),
				"--v-timeline-line-inset": props.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${convertToUnit(props.lineInset)})` : convertToUnit(0)
			}, props.style])
		}, [
			_createElementVNode$8("div", {
				"class": "v-timeline-item__body",
				"style": _normalizeStyle$3(dimensionStyles.value)
			}, [slots.default?.()]),
			_createVNode$9(VTimelineDivider, {
				"ref": dotRef,
				"hideDot": props.hideDot,
				"icon": props.icon,
				"iconColor": props.iconColor,
				"size": props.size,
				"elevation": props.elevation,
				"dotColor": props.dotColor,
				"fillDot": props.fillDot,
				"rounded": props.rounded
			}, { default: slots.icon }),
			props.density !== "compact" && _createElementVNode$8("div", { "class": "v-timeline-item__opposite" }, [!props.hideOpposite && slots.opposite?.()])
		]));
		return {};
	}
});
var { normalizeClass: _normalizeClass$4, normalizeStyle: _normalizeStyle$2, createVNode: _createVNode$8 } = await importShared("vue");
var { computed: computed$7, toRef: toRef$4 } = await importShared("vue");
const makeVTimelineProps = propsFactory({
	align: {
		type: String,
		default: "center",
		validator: (v) => ["center", "start"].includes(v)
	},
	direction: {
		type: String,
		default: "vertical",
		validator: (v) => ["vertical", "horizontal"].includes(v)
	},
	justify: {
		type: String,
		default: "auto",
		validator: (v) => ["auto", "center"].includes(v)
	},
	side: {
		type: String,
		validator: (v) => v == null || ["start", "end"].includes(v)
	},
	lineThickness: {
		type: [String, Number],
		default: 2
	},
	lineColor: String,
	truncateLine: {
		type: String,
		validator: (v) => [
			"start",
			"end",
			"both"
		].includes(v)
	},
	...pick(makeVTimelineItemProps({ lineInset: 0 }), [
		"dotColor",
		"fillDot",
		"hideOpposite",
		"iconColor",
		"lineInset",
		"size"
	]),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VTimeline");
const VTimeline = genericComponent()({
	name: "VTimeline",
	props: makeVTimelineProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const { themeClasses } = provideTheme(props);
		const { densityClasses } = useDensity(props);
		const { rtlClasses } = useRtl();
		provideDefaults({
			VTimelineDivider: { lineColor: toRef$4(() => props.lineColor) },
			VTimelineItem: {
				density: toRef$4(() => props.density),
				dotColor: toRef$4(() => props.dotColor),
				fillDot: toRef$4(() => props.fillDot),
				hideOpposite: toRef$4(() => props.hideOpposite),
				iconColor: toRef$4(() => props.iconColor),
				lineColor: toRef$4(() => props.lineColor),
				lineInset: toRef$4(() => props.lineInset),
				size: toRef$4(() => props.size)
			}
		});
		const sideClasses = computed$7(() => {
			const side = props.side ? props.side : props.density !== "default" ? "end" : null;
			return side && `v-timeline--side-${side}`;
		});
		const truncateClasses = computed$7(() => {
			const classes = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
			switch (props.truncateLine) {
				case "both": return classes;
				case "start": return classes[0];
				case "end": return classes[1];
				default: return null;
			}
		});
		useRender(() => _createVNode$8(props.tag, {
			"class": _normalizeClass$4([
				"v-timeline",
				`v-timeline--${props.direction}`,
				`v-timeline--align-${props.align}`,
				`v-timeline--justify-${props.justify}`,
				truncateClasses.value,
				{ "v-timeline--inset-line": !!props.lineInset },
				themeClasses.value,
				densityClasses.value,
				sideClasses.value,
				rtlClasses.value,
				props.class
			]),
			"style": _normalizeStyle$2([{ "--v-timeline-line-thickness": convertToUnit(props.lineThickness) }, props.style])
		}, slots));
		return {};
	}
});
var { normalizeClass: _normalizeClass$3, normalizeStyle: _normalizeStyle$1, createElementVNode: _createElementVNode$7 } = await importShared("vue");
var { computed: computed$6, onScopeDispose, ref: ref$8, watch: watch$2 } = await importShared("vue");
const makeVTimePickerClockProps = propsFactory({
	allowedValues: Function,
	ampm: Boolean,
	color: String,
	disabled: Boolean,
	displayedValue: null,
	double: Boolean,
	format: {
		type: Function,
		default: (val) => val
	},
	max: {
		type: Number,
		required: true
	},
	min: {
		type: Number,
		required: true
	},
	scrollable: Boolean,
	readonly: Boolean,
	rotate: {
		type: Number,
		default: 0
	},
	step: {
		type: Number,
		default: 1
	},
	modelValue: { type: Number }
}, "VTimePickerClock");
const VTimePickerClock = genericComponent()({
	name: "VTimePickerClock",
	props: makeVTimePickerClockProps(),
	emits: {
		change: (val) => true,
		input: (val) => true
	},
	setup(props, _ref) {
		let { emit } = _ref;
		const clockRef = ref$8(null);
		const innerClockRef = ref$8(null);
		const inputValue = ref$8(void 0);
		const isDragging = ref$8(false);
		const valueOnMouseDown = ref$8(null);
		const valueOnMouseUp = ref$8(null);
		const emitChangeDebounced = debounce((value) => emit("change", value), 750);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.color);
		const count = computed$6(() => props.max - props.min + 1);
		const roundCount = computed$6(() => props.double ? count.value / 2 : count.value);
		const degreesPerUnit = computed$6(() => 360 / roundCount.value);
		const degrees = computed$6(() => degreesPerUnit.value * Math.PI / 180);
		const displayedValue = computed$6(() => props.modelValue == null ? props.min : props.modelValue);
		const innerRadiusScale = computed$6(() => .62);
		const genChildren = computed$6(() => {
			const children = [];
			for (let value = props.min; value <= props.max; value = value + props.step) children.push(value);
			return children;
		});
		watch$2(() => props.modelValue, (val) => {
			inputValue.value = val;
		});
		function update(value) {
			if (inputValue.value !== value) inputValue.value = value;
			emit("input", value);
		}
		function isAllowed(value) {
			return !props.allowedValues || props.allowedValues(value);
		}
		function wheel(e) {
			if (!props.scrollable || props.disabled) return;
			e.preventDefault();
			const delta = Math.sign(-e.deltaY || 1);
			let value = displayedValue.value;
			do {
				value = value + delta;
				value = (value - props.min + count.value) % count.value + props.min;
			} while (!isAllowed(value) && value !== displayedValue.value);
			if (value !== props.displayedValue) update(value);
			emitChangeDebounced(value);
		}
		function isInner(value) {
			return props.double && value - props.min >= roundCount.value;
		}
		function handScale(value) {
			return isInner(value) ? innerRadiusScale.value : 1;
		}
		function getPosition$1(value) {
			const rotateRadians = props.rotate * Math.PI / 180;
			return {
				x: Math.sin((value - props.min) * degrees.value + rotateRadians) * handScale(value),
				y: -Math.cos((value - props.min) * degrees.value + rotateRadians) * handScale(value)
			};
		}
		function angleToValue(angle$1, insideClick) {
			const value = (Math.round(angle$1 / degreesPerUnit.value) + (insideClick ? roundCount.value : 0)) % count.value + props.min;
			if (angle$1 < 360 - degreesPerUnit.value / 2) return value;
			return insideClick ? props.max - roundCount.value + 1 : props.min;
		}
		function getTransform(i) {
			const { x, y } = getPosition$1(i);
			return {
				left: `${Math.round(50 + x * 50)}%`,
				top: `${Math.round(50 + y * 50)}%`
			};
		}
		function euclidean(p0, p1) {
			const dx = p1.x - p0.x;
			const dy = p1.y - p0.y;
			return Math.sqrt(dx * dx + dy * dy);
		}
		function angle(center, p1) {
			const value = 2 * Math.atan2(p1.y - center.y - euclidean(center, p1), p1.x - center.x);
			return Math.abs(value * 180 / Math.PI);
		}
		function setMouseDownValue(value) {
			if (valueOnMouseDown.value === null) valueOnMouseDown.value = value;
			valueOnMouseUp.value = value;
			update(value);
		}
		function onDragMove(e) {
			e.preventDefault();
			if (!isDragging.value && e.type !== "click" || !clockRef.value) return;
			const { width, top, left } = clockRef.value?.getBoundingClientRect();
			const { width: innerWidth } = innerClockRef.value?.getBoundingClientRect() ?? { width: 0 };
			const { clientX, clientY } = "touches" in e ? e.touches[0] : e;
			const center = {
				x: width / 2,
				y: -width / 2
			};
			const coords = {
				x: clientX - left,
				y: top - clientY
			};
			const handAngle = Math.round(angle(center, coords) - props.rotate + 360) % 360;
			const insideClick = props.double && euclidean(center, coords) < (innerWidth + innerWidth * innerRadiusScale.value) / 4;
			const checksCount = Math.ceil(15 / degreesPerUnit.value);
			let value;
			for (let i = 0; i < checksCount; i++) {
				value = angleToValue(handAngle + i * degreesPerUnit.value, insideClick);
				if (isAllowed(value)) return setMouseDownValue(value);
				value = angleToValue(handAngle - i * degreesPerUnit.value, insideClick);
				if (isAllowed(value)) return setMouseDownValue(value);
			}
		}
		function onMouseDown(e) {
			if (props.disabled) return;
			e.preventDefault();
			window.addEventListener("mousemove", onDragMove);
			window.addEventListener("touchmove", onDragMove);
			window.addEventListener("mouseup", onMouseUp);
			window.addEventListener("touchend", onMouseUp);
			valueOnMouseDown.value = null;
			valueOnMouseUp.value = null;
			isDragging.value = true;
			onDragMove(e);
		}
		function onMouseUp(e) {
			e.stopPropagation();
			removeListeners$1();
			isDragging.value = false;
			if (valueOnMouseUp.value !== null && isAllowed(valueOnMouseUp.value)) emit("change", valueOnMouseUp.value);
		}
		function removeListeners$1() {
			window.removeEventListener("mousemove", onDragMove);
			window.removeEventListener("touchmove", onDragMove);
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("touchend", onMouseUp);
		}
		onScopeDispose(removeListeners$1);
		useRender(() => {
			return _createElementVNode$7("div", {
				"class": _normalizeClass$3([{
					"v-time-picker-clock": true,
					"v-time-picker-clock--indeterminate": props.modelValue == null,
					"v-time-picker-clock--readonly": props.readonly
				}]),
				"onMousedown": onMouseDown,
				"onTouchstart": onMouseDown,
				"onWheel": wheel,
				"ref": clockRef
			}, [_createElementVNode$7("div", {
				"class": "v-time-picker-clock__inner",
				"ref": innerClockRef
			}, [_createElementVNode$7("div", {
				"class": _normalizeClass$3([{
					"v-time-picker-clock__hand": true,
					"v-time-picker-clock__hand--inner": isInner(props.modelValue)
				}, textColorClasses.value]),
				"style": _normalizeStyle$1([{ transform: `rotate(${props.rotate + degreesPerUnit.value * (displayedValue.value - props.min)}deg) scaleY(${handScale(displayedValue.value)})` }, textColorStyles.value])
			}, null), genChildren.value.map((value) => {
				const isActive = value === displayedValue.value;
				return _createElementVNode$7("div", {
					"class": _normalizeClass$3([{
						"v-time-picker-clock__item": true,
						"v-time-picker-clock__item--active": isActive,
						"v-time-picker-clock__item--disabled": props.disabled || !isAllowed(value)
					}, isActive && backgroundColorClasses.value]),
					"style": _normalizeStyle$1([getTransform(value), isActive && backgroundColorStyles.value])
				}, [_createElementVNode$7("span", null, [props.format(value)])]);
			})])]);
		});
	}
});
var { mergeProps: _mergeProps$6, createVNode: _createVNode$7, createElementVNode: _createElementVNode$6 } = await importShared("vue");
var { ref: ref$7, shallowRef } = await importShared("vue");
const makeVTimePickerFieldProps = propsFactory({
	active: Boolean,
	color: String,
	disabled: Boolean,
	label: String,
	modelValue: String,
	readonly: Boolean
}, "VTimePickerField");
const VTimePickerField = genericComponent()({
	name: "VTimePickerField",
	inheritAttrs: false,
	props: makeVTimePickerFieldProps(),
	emits: { "update:modelValue": (v) => true },
	setup(props, _ref) {
		let { emit, attrs } = _ref;
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const vTextInputRef = ref$7();
		const isFocused = shallowRef(false);
		function onKeydown$1(e) {
			if (["Backspace", "Delete"].includes(e.key)) {
				e.preventDefault();
				const target = e.target;
				target.value = "";
				emit("update:modelValue", null);
			}
		}
		useRender(() => {
			return _createElementVNode$6("div", null, [_createVNode$7(VTextField, _mergeProps$6({
				"ref": vTextInputRef,
				"_as": "VTimePickerField",
				"autocomplete": "off",
				"class": [
					"v-time-picker-controls__time__field",
					{ "v-time-picker-controls__time__field--active": props.active },
					props.active ? textColorClasses.value : []
				],
				"style": props.active ? textColorStyles.value : [],
				"disabled": props.disabled,
				"variant": "solo-filled",
				"inputmode": "numeric",
				"hideDetails": true,
				"flat": true,
				"modelValue": props.modelValue ?? (isFocused.value ? "" : "--"),
				"onUpdate:modelValue": (v) => emit("update:modelValue", v),
				"onKeydown": onKeydown$1,
				"onFocus": () => isFocused.value = true,
				"onBlur": () => isFocused.value = false
			}, attrs), null), _createElementVNode$6("div", { "class": "v-time-picker-controls__field-label" }, [props.label])]);
		});
		return forwardRefs({}, vTextInputRef);
	}
});
function pad(n) {
	let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
	return String(n).padStart(length, "0");
}
function convert24to12(hour) {
	return hour ? (hour - 1) % 12 + 1 : 12;
}
function convert12to24(hour, period) {
	return hour % 12 + (period === "pm" ? 12 : 0);
}
function extractInteger(v) {
	const digits = v.replaceAll(/\D/g, "");
	return digits.length > 0 ? Number(digits) : null;
}
function incrementHour(hour, increment, period) {
	if (period) {
		if (hour === 12 && increment) return { value: 1 };
		if (hour === 11 && increment) return {
			value: 12,
			togglePeriod: true
		};
		if (hour === 12 && !increment) return {
			value: 11,
			togglePeriod: true
		};
		if (hour === 1 && !increment) return { value: 12 };
	} else {
		if (hour === 23 && increment) return { value: 0 };
		if (hour === 0 && !increment) return { value: 23 };
	}
	return { value: hour + (increment ? 1 : -1) };
}
function incrementMinuteOrSecond(val, increment) {
	if (val === 59 && increment) return 0;
	if (val === 0 && !increment) return 59;
	return val + (increment ? 1 : -1);
}
var { createVNode: _createVNode$6, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode$5, normalizeClass: _normalizeClass$2 } = await importShared("vue");
var { ref: ref$6, watch: watch$1 } = await importShared("vue");
const makeVTimePickerControlsProps = propsFactory({
	ampm: Boolean,
	color: String,
	disabled: Boolean,
	hour: [Number, String],
	minute: [Number, String],
	second: [Number, String],
	period: String,
	readonly: Boolean,
	useSeconds: Boolean,
	value: Number,
	viewMode: String
}, "VTimePickerControls");
const VTimePickerControls = genericComponent()({
	name: "VTimePickerControls",
	props: makeVTimePickerControlsProps(),
	emits: {
		"update:period": (data) => true,
		"update:viewMode": (data) => true,
		"update:hour": (v) => true,
		"update:minute": (v) => true,
		"update:second": (v) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { t } = useLocale();
		const transformHours = {
			in: (v) => {
				if (v == null || isNaN(Number(v))) return null;
				const val = Number(v);
				return props.ampm ? pad(convert24to12(val)) : pad(val);
			},
			out: (v) => {
				if (isNaN(Number(v)) || v == null || v === "") return null;
				const val = typeof v === "string" ? extractInteger(v) : Number(v);
				if (val === null) return null;
				return props.ampm ? convert12to24(val, props.period ?? "am") : clamp(val, 0, 23);
			}
		};
		const hour = useProxiedModel(props, "hour", void 0, transformHours.in, transformHours.out);
		const transformMinutesOrSeconds = {
			in: (v) => v != null && !isNaN(Number(v)) ? pad(`${v}`) : null,
			out: (v) => {
				if (isNaN(Number(v)) || v == null || v === "") return null;
				const val = typeof v === "string" ? extractInteger(v) : Number(v);
				return val !== null ? clamp(val, 0, 59) : null;
			}
		};
		const minute = useProxiedModel(props, "minute", void 0, transformMinutesOrSeconds.in, transformMinutesOrSeconds.out);
		const second = useProxiedModel(props, "second", void 0, transformMinutesOrSeconds.in, transformMinutesOrSeconds.out);
		function onHourFieldKeydown(e) {
			if (!["ArrowUp", "ArrowDown"].includes(e.key)) return;
			e.preventDefault();
			e.stopPropagation();
			const current = Number(hour.value ?? 0);
			const period = props.ampm ? props.period ?? "am" : null;
			const { value, togglePeriod } = incrementHour(current, e.key === "ArrowUp", period);
			hour.value = pad(value);
			if (togglePeriod) emit("update:period", props.period === "am" ? "pm" : "am");
		}
		function onMinuteFieldKeydown(e) {
			if (!["ArrowUp", "ArrowDown"].includes(e.key)) return;
			e.preventDefault();
			e.stopPropagation();
			minute.value = incrementMinuteOrSecond(Number(minute.value), e.key === "ArrowUp");
		}
		function onSecondFieldKeydown(e) {
			if (!["ArrowUp", "ArrowDown"].includes(e.key)) return;
			e.preventDefault();
			e.stopPropagation();
			second.value = incrementMinuteOrSecond(Number(second.value), e.key === "ArrowUp");
		}
		function createInputInterceptor(valueTransformOut, compare, apply) {
			return (e) => {
				if (!e.data) return;
				const inputElement = e.target;
				const { value: existingTxt, selectionStart, selectionEnd } = inputElement ?? {};
				if (extractInteger(e.data) === null) {
					e.preventDefault();
					return;
				}
				const potentialNewInputVal = existingTxt ? existingTxt.slice(0, selectionStart) + e.data + existingTxt.slice(selectionEnd) : e.data;
				if (potentialNewInputVal.length > 2) {
					if (selectionStart === selectionEnd && selectionEnd === 0 && e.data.trim().startsWith("0")) {
						e.preventDefault();
						inputElement.value = potentialNewInputVal.trim().substring(0, 2);
						apply(inputElement.value);
						if (e.data.trim().length === 1) inputElement.setSelectionRange(1, 1);
						return;
					}
					if (selectionStart === selectionEnd && selectionEnd === 1 && existingTxt.startsWith("0")) {
						e.preventDefault();
						inputElement.value = potentialNewInputVal.trim().substring(0, 2);
						apply(inputElement.value);
						return;
					}
					const maxValue = props.viewMode === "hour" ? props.ampm ? 12 : 23 : 59;
					if (extractInteger(potentialNewInputVal) > maxValue) {
						e.preventDefault();
						inputElement.value = pad(String(extractInteger(e.data)).substring(0, 2));
						apply(inputElement.value);
						return;
					}
				}
				if (compare(valueTransformOut(potentialNewInputVal))) e.preventDefault();
			};
		}
		const hourInputRef = ref$6();
		const minuteInputRef = ref$6();
		const secondInputRef = ref$6();
		watch$1(() => props.viewMode, (_, old) => {
			switch (old) {
				case "hour":
					hourInputRef.value.blur();
					break;
				case "minute":
					minuteInputRef.value.blur();
					break;
				case "second":
					secondInputRef.value.blur();
					break;
			}
		});
		const hourInputFilter = createInputInterceptor(transformHours.out, (v) => transformHours.in(v) === hour.value, (v) => hour.value = v);
		const minuteInputFilter = createInputInterceptor(transformMinutesOrSeconds.out, (v) => transformMinutesOrSeconds.in(v) === minute.value, (v) => minute.value = v);
		const secondInputFilter = createInputInterceptor(transformMinutesOrSeconds.out, (v) => transformMinutesOrSeconds.in(v) === second.value, (v) => second.value = v);
		useRender(() => {
			return _createElementVNode$5("div", { "class": "v-time-picker-controls" }, [_createElementVNode$5("div", { "class": _normalizeClass$2({
				"v-time-picker-controls__time": true,
				"v-time-picker-controls__time--with-ampm": props.ampm,
				"v-time-picker-controls__time--with-seconds": props.useSeconds
			}) }, [
				_createVNode$6(VTimePickerField, {
					"ref": hourInputRef,
					"active": props.viewMode === "hour",
					"color": props.color,
					"disabled": props.disabled,
					"label": t("$vuetify.timePicker.hour"),
					"modelValue": hour.value,
					"onUpdate:modelValue": (v) => hour.value = v,
					"onKeydown": onHourFieldKeydown,
					"onBeforeinput": hourInputFilter,
					"onFocus": () => emit("update:viewMode", "hour")
				}, null),
				_createElementVNode$5("span", { "class": "v-time-picker-controls__time__separator" }, [_createTextVNode(":")]),
				_createVNode$6(VTimePickerField, {
					"ref": minuteInputRef,
					"active": props.viewMode === "minute",
					"color": props.color,
					"disabled": props.disabled,
					"label": t("$vuetify.timePicker.minute"),
					"modelValue": minute.value,
					"onUpdate:modelValue": (v) => minute.value = v,
					"onKeydown": onMinuteFieldKeydown,
					"onBeforeinput": minuteInputFilter,
					"onFocus": () => emit("update:viewMode", "minute")
				}, null),
				props.useSeconds && _createElementVNode$5("span", {
					"key": "secondsDivider",
					"class": "v-time-picker-controls__time__separator"
				}, [_createTextVNode(":")]),
				props.useSeconds && _createVNode$6(VTimePickerField, {
					"key": "secondsVal",
					"ref": secondInputRef,
					"active": props.viewMode === "second",
					"color": props.color,
					"disabled": props.disabled,
					"label": t("$vuetify.timePicker.second"),
					"modelValue": second.value,
					"onUpdate:modelValue": (v) => second.value = v,
					"onKeydown": onSecondFieldKeydown,
					"onBeforeinput": secondInputFilter,
					"onFocus": () => emit("update:viewMode", "second")
				}, null),
				props.ampm && _createElementVNode$5("div", { "class": "v-time-picker-controls__ampm" }, [_createVNode$6(VBtn, {
					"active": props.period === "am",
					"color": props.period === "am" ? props.color : void 0,
					"class": _normalizeClass$2({
						"v-time-picker-controls__ampm__am": true,
						"v-time-picker-controls__ampm__btn": true,
						"v-time-picker-controls__ampm__btn__active": props.period === "am"
					}),
					"disabled": props.disabled,
					"text": t("$vuetify.timePicker.am"),
					"variant": props.disabled && props.period === "am" ? "elevated" : "tonal",
					"onClick": () => props.period !== "am" ? emit("update:period", "am") : null
				}, null), _createVNode$6(VBtn, {
					"active": props.period === "pm",
					"color": props.period === "pm" ? props.color : void 0,
					"class": _normalizeClass$2({
						"v-time-picker-controls__ampm__pm": true,
						"v-time-picker-controls__ampm__btn": true,
						"v-time-picker-controls__ampm__btn__active": props.period === "pm"
					}),
					"disabled": props.disabled,
					"text": t("$vuetify.timePicker.pm"),
					"variant": props.disabled && props.period === "pm" ? "elevated" : "tonal",
					"onClick": () => props.period !== "pm" ? emit("update:period", "pm") : null
				}, null)])
			])]);
		});
		return {};
	}
});
var { createElementVNode: _createElementVNode$4, mergeProps: _mergeProps$5, createVNode: _createVNode$5 } = await importShared("vue");
var { computed: computed$5, onMounted, ref: ref$5, toRef: toRef$3, watch } = await importShared("vue");
var rangeHours24 = createRange(24);
var rangeHours12am = createRange(12);
var rangeHours12pm = rangeHours12am.map((v) => v + 12);
var range60 = createRange(60);
const makeVTimePickerProps = propsFactory({
	allowedHours: [Function, Array],
	allowedMinutes: [Function, Array],
	allowedSeconds: [Function, Array],
	disabled: Boolean,
	format: {
		type: String,
		default: "ampm"
	},
	max: String,
	min: String,
	viewMode: {
		type: String,
		default: "hour"
	},
	period: {
		type: String,
		default: "am",
		validator: (v) => ["am", "pm"].includes(v)
	},
	modelValue: null,
	readonly: Boolean,
	scrollable: Boolean,
	useSeconds: Boolean,
	variant: {
		type: String,
		default: "dial"
	},
	...omit(makeVPickerProps({ title: "$vuetify.timePicker.title" }), ["landscape"]),
	...makeDensityProps()
}, "VTimePicker");
const VTimePicker = genericComponent()({
	name: "VTimePicker",
	props: makeVTimePickerProps(),
	emits: {
		"update:hour": (val) => true,
		"update:minute": (val) => true,
		"update:period": (val) => true,
		"update:second": (val) => true,
		"update:modelValue": (val) => true,
		"update:viewMode": (val) => true
	},
	setup(props, _ref) {
		let { emit, slots } = _ref;
		const { t } = useLocale();
		const { densityClasses } = useDensity(props);
		const inputHour = ref$5(null);
		const inputMinute = ref$5(null);
		const inputSecond = ref$5(null);
		const lazyInputHour = ref$5(null);
		const lazyInputMinute = ref$5(null);
		const lazyInputSecond = ref$5(null);
		const period = useProxiedModel(props, "period", "am");
		const viewMode = useProxiedModel(props, "viewMode", "hour");
		const controlsRef = ref$5(null);
		const clockRef = ref$5(null);
		const isAllowedHourCb = computed$5(() => {
			let cb;
			if (props.allowedHours instanceof Array) cb = (val) => props.allowedHours.includes(val);
			else cb = props.allowedHours;
			if (!props.min && !props.max) return cb;
			const minHour = props.min ? Number(props.min.split(":")[0]) : 0;
			const maxHour = props.max ? Number(props.max.split(":")[0]) : 23;
			return (val) => {
				return val >= Number(minHour) && val <= Number(maxHour) && (!cb || cb(val));
			};
		});
		const isAllowedMinuteCb = computed$5(() => {
			let cb;
			const isHourAllowed = !isAllowedHourCb.value || inputHour.value === null || isAllowedHourCb.value(inputHour.value);
			if (props.allowedMinutes instanceof Array) cb = (val) => props.allowedMinutes.includes(val);
			else cb = props.allowedMinutes;
			if (!props.min && !props.max) return isHourAllowed ? cb : () => false;
			const [minHour, minMinute] = props.min ? props.min.split(":").map(Number) : [0, 0];
			const [maxHour, maxMinute] = props.max ? props.max.split(":").map(Number) : [23, 59];
			const minTime = minHour * 60 + Number(minMinute);
			const maxTime = maxHour * 60 + Number(maxMinute);
			return (val) => {
				const time = 60 * inputHour.value + val;
				return time >= minTime && time <= maxTime && isHourAllowed && (!cb || cb(val));
			};
		});
		const isAllowedSecondCb = computed$5(() => {
			let cb;
			const isMinuteAllowed = (!isAllowedHourCb.value || inputHour.value === null || isAllowedHourCb.value(inputHour.value)) && (!isAllowedMinuteCb.value || inputMinute.value === null || isAllowedMinuteCb.value(inputMinute.value));
			if (props.allowedSeconds instanceof Array) cb = (val) => props.allowedSeconds.includes(val);
			else cb = props.allowedSeconds;
			if (!props.min && !props.max) return isMinuteAllowed ? cb : () => false;
			const [minHour, minMinute, minSecond] = props.min ? props.min.split(":").map(Number) : [
				0,
				0,
				0
			];
			const [maxHour, maxMinute, maxSecond] = props.max ? props.max.split(":").map(Number) : [
				23,
				59,
				59
			];
			const minTime = minHour * 3600 + minMinute * 60 + Number(minSecond || 0);
			const maxTime = maxHour * 3600 + maxMinute * 60 + Number(maxSecond || 0);
			return (val) => {
				const time = 3600 * inputHour.value + 60 * inputMinute.value + val;
				return time >= minTime && time <= maxTime && isMinuteAllowed && (!cb || cb(val));
			};
		});
		const isAmPm = computed$5(() => {
			return props.format === "ampm";
		});
		const shouldClear = toRef$3(() => {
			return props.modelValue !== null && inputHour.value === null && inputMinute.value === null && (!props.useSeconds || inputSecond.value === null);
		});
		function emitValue() {
			const value = genValue();
			if (value !== null && value !== props.modelValue) emit("update:modelValue", value);
			if (shouldClear.value) emit("update:modelValue", null);
		}
		watch(inputHour, emitValue);
		watch(inputMinute, emitValue);
		watch(inputSecond, emitValue);
		watch(() => props.period, (val) => setPeriod(val));
		watch(() => props.modelValue, (val) => setInputData(val));
		watch(() => props.useSeconds, (val, old) => {
			if (old && !val && viewMode.value === "second") viewMode.value = "minute";
			if (!val && inputSecond.value !== null) inputSecond.value = null;
		});
		onMounted(() => {
			setInputData(props.modelValue);
		});
		function genValue() {
			if (inputHour.value != null && inputMinute.value != null && (!props.useSeconds || inputSecond.value != null)) return `${pad(inputHour.value)}:${pad(inputMinute.value)}` + (props.useSeconds ? `:${pad(inputSecond.value)}` : "");
			return null;
		}
		function setInputData(value) {
			if (value == null || value === "") {
				inputHour.value = null;
				inputMinute.value = null;
				inputSecond.value = null;
			} else if (value instanceof Date) {
				inputHour.value = value.getHours();
				inputMinute.value = value.getMinutes();
				inputSecond.value = value.getSeconds();
			} else {
				const [hour, , minute, , second, period$1] = value.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
				inputHour.value = period$1 ? convert12to24(parseInt(hour, 10), period$1) : parseInt(hour, 10);
				inputMinute.value = parseInt(minute, 10);
				inputSecond.value = parseInt(second || 0, 10);
			}
			period.value = inputHour.value == null || inputHour.value < 12 ? "am" : "pm";
		}
		function firstAllowed(type, value) {
			const allowedFn = type === "hour" ? isAllowedHourCb.value : type === "minute" ? isAllowedMinuteCb.value : isAllowedSecondCb.value;
			if (!allowedFn) return value;
			const range = type === "minute" ? range60 : type === "second" ? range60 : isAmPm.value ? value < 12 ? rangeHours12am : rangeHours12pm : rangeHours24;
			return ((range.find((v) => allowedFn((v + value) % range.length + range[0])) || 0) + value) % range.length + range[0];
		}
		function setPeriod(val) {
			period.value = val;
			if (inputHour.value != null) inputHour.value = firstAllowed("hour", inputHour.value + (period.value === "am" ? -12 : 12));
			emit("update:period", val);
			emitValue();
			return true;
		}
		function onInput(value) {
			if (viewMode.value === "hour") inputHour.value = isAmPm.value ? convert12to24(value, period.value) : value;
			else if (viewMode.value === "minute") inputMinute.value = value;
			else inputSecond.value = value;
		}
		function onChange(value) {
			switch (viewMode.value || "hour") {
				case "hour":
					emit("update:hour", value);
					break;
				case "minute":
					emit("update:minute", value);
					break;
				case "second":
					emit("update:second", value);
					break;
				default: break;
			}
			const emitChange = inputHour.value !== null && inputMinute.value !== null && (props.useSeconds ? inputSecond.value !== null : true);
			if (viewMode.value === "hour") viewMode.value = "minute";
			else if (props.useSeconds && viewMode.value === "minute") viewMode.value = "second";
			if (inputHour.value === lazyInputHour.value && inputMinute.value === lazyInputMinute.value && (!props.useSeconds || inputSecond.value === lazyInputSecond.value)) return;
			if (genValue() === null) return;
			lazyInputHour.value = inputHour.value;
			lazyInputMinute.value = inputMinute.value;
			props.useSeconds && (lazyInputSecond.value = inputSecond.value);
			emitChange && emitValue();
		}
		useRender(() => {
			const pickerProps = omit(VPicker.filterProps(props), ["hideHeader"]);
			const timePickerControlsProps = VTimePickerControls.filterProps(props);
			const timePickerClockProps = VTimePickerClock.filterProps(omit(props, [
				"format",
				"modelValue",
				"min",
				"max"
			]));
			return _createVNode$5(VPicker, _mergeProps$5(pickerProps, {
				"color": void 0,
				"class": [
					"v-time-picker",
					`v-time-picker--variant-${props.variant}`,
					props.class,
					densityClasses.value
				],
				"hideHeader": props.hideHeader && props.variant !== "input",
				"style": props.style
			}), {
				title: () => slots.title?.() ?? _createElementVNode$4("div", { "class": "v-time-picker__title" }, [t(props.title)]),
				header: () => _createVNode$5(VTimePickerControls, _mergeProps$5(timePickerControlsProps, {
					"ampm": isAmPm.value,
					"hour": inputHour.value,
					"minute": inputMinute.value,
					"period": period.value,
					"second": inputSecond.value,
					"viewMode": viewMode.value,
					"onUpdate:hour": (val) => inputHour.value = val,
					"onUpdate:minute": (val) => inputMinute.value = val,
					"onUpdate:period": (val) => setPeriod(val),
					"onUpdate:second": (val) => inputSecond.value = val,
					"onUpdate:viewMode": (value) => viewMode.value = value,
					"ref": controlsRef
				}), null),
				default: () => _createVNode$5(VTimePickerClock, _mergeProps$5(timePickerClockProps, {
					"allowedValues": viewMode.value === "hour" ? isAllowedHourCb.value : viewMode.value === "minute" ? isAllowedMinuteCb.value : isAllowedSecondCb.value,
					"double": viewMode.value === "hour" && !isAmPm.value,
					"format": viewMode.value === "hour" ? isAmPm.value ? convert24to12 : (val) => val : (val) => pad(val, 2),
					"max": viewMode.value === "hour" ? isAmPm.value && period.value === "am" ? 11 : 23 : 59,
					"min": viewMode.value === "hour" && isAmPm.value && period.value === "pm" ? 12 : 0,
					"size": 20,
					"step": viewMode.value === "hour" ? 1 : 5,
					"modelValue": viewMode.value === "hour" ? inputHour.value : viewMode.value === "minute" ? inputMinute.value : inputSecond.value,
					"onChange": onChange,
					"onInput": onInput,
					"ref": clockRef
				}), null),
				actions: slots.actions
			});
		});
	}
});
var { normalizeClass: _normalizeClass$1, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode$3 } = await importShared("vue");
var { toRef: toRef$2 } = await importShared("vue");
const makeVToolbarItemsProps = propsFactory({
	...makeComponentProps(),
	...makeVariantProps({ variant: "text" })
}, "VToolbarItems");
const VToolbarItems = genericComponent()({
	name: "VToolbarItems",
	props: makeVToolbarItemsProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		provideDefaults({ VBtn: {
			color: toRef$2(() => props.color),
			height: "inherit",
			variant: toRef$2(() => props.variant)
		} });
		useRender(() => _createElementVNode$3("div", {
			"class": _normalizeClass$1(["v-toolbar-items", props.class]),
			"style": _normalizeStyle(props.style)
		}, [slots.default?.()]));
		return {};
	}
});
var { mergeProps: _mergeProps$4, createVNode: _createVNode$4 } = await importShared("vue");
var { computed: computed$4, mergeProps: mergeProps$1, ref: ref$4, toRef: toRef$1, useId } = await importShared("vue");
const makeVTooltipProps = propsFactory({
	id: String,
	interactive: Boolean,
	text: String,
	...omit(makeVOverlayProps({
		closeOnBack: false,
		location: "end",
		locationStrategy: "connected",
		eager: true,
		minWidth: 0,
		offset: 10,
		openOnClick: false,
		openOnHover: true,
		origin: "auto",
		scrim: false,
		scrollStrategy: "reposition",
		transition: null
	}), [
		"absolute",
		"retainFocus",
		"captureFocus",
		"disableInitialFocus"
	])
}, "VTooltip");
const VTooltip = genericComponent()({
	name: "VTooltip",
	props: makeVTooltipProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const isActive = useProxiedModel(props, "modelValue");
		const { scopeId } = useScopeId();
		const uid = useId();
		const id = toRef$1(() => props.id || `v-tooltip-${uid}`);
		const overlay = ref$4();
		const location = computed$4(() => {
			return props.location.split(" ").length > 1 ? props.location : props.location + " center";
		});
		const origin = computed$4(() => {
			return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
		});
		const transition = toRef$1(() => {
			if (props.transition != null) return props.transition;
			return isActive.value ? "scale-transition" : "fade-transition";
		});
		const activatorProps = computed$4(() => mergeProps$1({ "aria-describedby": id.value }, props.activatorProps));
		useRender(() => {
			const overlayProps = VOverlay.filterProps(props);
			return _createVNode$4(VOverlay, _mergeProps$4({
				"ref": overlay,
				"class": [
					"v-tooltip",
					{ "v-tooltip--interactive": props.interactive },
					props.class
				],
				"style": props.style,
				"id": id.value
			}, overlayProps, {
				"modelValue": isActive.value,
				"onUpdate:modelValue": ($event) => isActive.value = $event,
				"transition": transition.value,
				"absolute": true,
				"location": location.value,
				"origin": origin.value,
				"role": "tooltip",
				"activatorProps": activatorProps.value,
				"_disableGlobalStack": true
			}, scopeId), {
				activator: slots.activator,
				default: function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return slots.default?.(...args) ?? props.text;
				}
			});
		});
		return forwardRefs({}, overlay);
	}
});
var { Fragment: _Fragment$2, createVNode: _createVNode$3, createElementVNode: _createElementVNode$2, mergeProps: _mergeProps$3 } = await importShared("vue");
var { computed: computed$3, ref: ref$3 } = await importShared("vue");
const makeVTreeviewGroupProps = propsFactory({ ...omit(makeVListGroupProps({
	collapseIcon: "$treeviewCollapse",
	expandIcon: "$treeviewExpand"
}), ["subgroup"]) }, "VTreeviewGroup");
const VTreeviewGroup = genericComponent()({
	name: "VTreeviewGroup",
	props: makeVTreeviewGroupProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const vListGroupRef = ref$3();
		const toggleIcon = computed$3(() => vListGroupRef.value?.isOpen ? props.collapseIcon : props.expandIcon);
		const activatorDefaults = computed$3(() => ({ VTreeviewItem: {
			prependIcon: void 0,
			appendIcon: void 0,
			toggleIcon: toggleIcon.value
		} }));
		useRender(() => {
			return _createVNode$3(VListGroup, _mergeProps$3(VListGroup.filterProps(props), {
				"ref": vListGroupRef,
				"class": ["v-treeview-group", props.class],
				"subgroup": true
			}), {
				...slots,
				activator: slots.activator ? (slotProps) => _createElementVNode$2(_Fragment$2, null, [_createVNode$3(VDefaultsProvider, { "defaults": activatorDefaults.value }, { default: () => [slots.activator?.(slotProps)] })]) : void 0
			});
		});
		return {};
	}
});
const VTreeviewSymbol = Symbol.for("vuetify:v-treeview");
var { Fragment: _Fragment$1, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode$1, createVNode: _createVNode$2, mergeProps: _mergeProps$2 } = await importShared("vue");
var { computed: computed$2, inject, ref: ref$2, toRaw: toRaw$2 } = await importShared("vue");
const makeVTreeviewItemProps = propsFactory({
	loading: Boolean,
	hideActions: Boolean,
	hasCustomPrepend: Boolean,
	indentLines: Array,
	toggleIcon: IconValue,
	...makeVListItemProps({ slim: true })
}, "VTreeviewItem");
const VTreeviewItem = genericComponent()({
	name: "VTreeviewItem",
	props: makeVTreeviewItemProps(),
	emits: { toggleExpand: (value) => true },
	setup(props, _ref) {
		let { slots, emit } = _ref;
		const visibleIds = inject(VTreeviewSymbol, { visibleIds: ref$2() }).visibleIds;
		const vListItemRef = ref$2();
		const isActivatableGroupActivator = computed$2(() => vListItemRef.value?.root.activatable.value && vListItemRef.value?.isGroupActivator);
		const vListItemRefIsClickable = computed$2(() => vListItemRef.value?.link.isClickable.value || props.value != null && !!vListItemRef.value?.list);
		const isClickable = computed$2(() => !props.disabled && props.link !== false && (props.link || vListItemRefIsClickable.value || isActivatableGroupActivator.value));
		const isFiltered = computed$2(() => visibleIds.value && !visibleIds.value.has(toRaw$2(vListItemRef.value?.id)));
		function activateGroupActivator(e) {
			if (isClickable.value && isActivatableGroupActivator.value) vListItemRef.value?.activate(!vListItemRef.value?.isActivated, e);
		}
		function onClickAction(e) {
			e.preventDefault();
			e.stopPropagation();
			emit("toggleExpand", e);
		}
		useRender(() => {
			const listItemProps = VListItem.filterProps(props);
			const hasPrepend = slots.prepend || props.toggleIcon || props.indentLines || props.prependIcon || props.prependAvatar;
			return _createVNode$2(VListItem, _mergeProps$2({ "ref": vListItemRef }, listItemProps, {
				"active": vListItemRef.value?.isActivated || void 0,
				"class": [
					"v-treeview-item",
					{
						"v-treeview-item--activatable-group-activator": isActivatableGroupActivator.value,
						"v-treeview-item--filtered": isFiltered.value
					},
					props.class
				],
				"ripple": false,
				"onClick": activateGroupActivator
			}), {
				...slots,
				prepend: hasPrepend ? (slotProps) => {
					return _createElementVNode$1(_Fragment$1, null, [
						props.indentLines && props.indentLines.length > 0 ? _createElementVNode$1("div", {
							"key": "indent-lines",
							"class": "v-treeview-indent-lines",
							"style": { "--v-indent-parts": props.indentLines.length }
						}, [props.indentLines.map((type) => _createElementVNode$1("div", { "class": _normalizeClass(`v-treeview-indent-line v-treeview-indent-line--${type}`) }, null))]) : "",
						!props.hideActions && _createVNode$2(VListItemAction, { "start": true }, { default: () => [props.toggleIcon ? _createElementVNode$1(_Fragment$1, null, [!slots.toggle ? _createVNode$2(VBtn, {
							"key": "prepend-toggle",
							"density": "compact",
							"icon": props.toggleIcon,
							"loading": props.loading,
							"variant": "text",
							"onClick": onClickAction
						}, { loader: () => _createVNode$2(VProgressCircular, {
							"indeterminate": "disable-shrink",
							"size": "20",
							"width": "2"
						}, null) }) : _createVNode$2(VDefaultsProvider, {
							"key": "prepend-defaults",
							"defaults": {
								VBtn: {
									density: "compact",
									icon: props.toggleIcon,
									variant: "text",
									loading: props.loading
								},
								VProgressCircular: {
									indeterminate: "disable-shrink",
									size: 20,
									width: 2
								}
							}
						}, { default: () => [slots.toggle({
							...slotProps,
							loading: props.loading,
							props: { onClick: onClickAction }
						})] })]) : _createElementVNode$1("div", { "class": "v-treeview-item__level" }, null)] }),
						!props.hasCustomPrepend ? _createElementVNode$1(_Fragment$1, null, [
							slots.prepend?.(slotProps),
							props.prependAvatar && _createVNode$2(VAvatar, {
								"key": "prepend-avatar",
								"density": props.density,
								"image": props.prependAvatar
							}, null),
							props.prependIcon && _createVNode$2(VIcon, {
								"key": "prepend-icon",
								"density": props.density,
								"icon": props.prependIcon
							}, null)
						]) : _createVNode$2(VDefaultsProvider, {
							"key": "prepend-defaults",
							"defaults": {
								VAvatar: {
									density: props.density,
									image: props.appendAvatar
								},
								VIcon: {
									density: props.density,
									icon: props.appendIcon
								},
								VListItemAction: { start: true }
							}
						}, { default: () => [slots.prepend?.(slotProps)] })
					]);
				} : void 0
			});
		});
		return forwardRefs({}, vListItemRef);
	}
});
var { Fragment: _Fragment, createVNode: _createVNode$1, createElementVNode: _createElementVNode, mergeProps: _mergeProps$1 } = await importShared("vue");
var { computed: computed$1, reactive, ref: ref$1, toRaw: toRaw$1 } = await importShared("vue");
const makeVTreeviewChildrenProps = propsFactory({
	fluid: Boolean,
	disabled: Boolean,
	loadChildren: Function,
	loadingIcon: {
		type: String,
		default: "$loading"
	},
	items: Array,
	openOnClick: {
		type: Boolean,
		default: void 0
	},
	indeterminateIcon: {
		type: IconValue,
		default: "$checkboxIndeterminate"
	},
	falseIcon: IconValue,
	trueIcon: IconValue,
	returnObject: Boolean,
	activatable: Boolean,
	selectable: Boolean,
	selectedColor: String,
	selectStrategy: [
		String,
		Function,
		Object
	],
	index: Number,
	isLastGroup: Boolean,
	separateRoots: Boolean,
	parentIndentLines: Array,
	indentLinesVariant: String,
	path: {
		type: Array,
		default: () => []
	},
	...pick(makeVTreeviewItemProps(), ["hideActions"]),
	...makeDensityProps()
}, "VTreeviewChildren");
const VTreeviewChildren = genericComponent()({
	name: "VTreeviewChildren",
	props: makeVTreeviewChildrenProps(),
	setup(props, _ref) {
		let { slots } = _ref;
		const isLoading = reactive(/* @__PURE__ */ new Set());
		const activatorItems = ref$1([]);
		const isClickOnOpen = computed$1(() => !props.disabled && (props.openOnClick != null ? props.openOnClick : props.selectable && !props.activatable));
		async function checkChildren(item) {
			try {
				if (!props.items?.length || !props.loadChildren) return;
				if (item?.children?.length === 0) {
					isLoading.add(item.value);
					await props.loadChildren(item.raw);
				}
			} finally {
				isLoading.delete(item.value);
			}
		}
		function selectItem(select, isSelected) {
			if (props.selectable) select(isSelected);
		}
		return () => slots.default?.() ?? props.items?.map((item, index, items) => {
			const { children, props: itemProps } = item;
			const loading = isLoading.has(item.value);
			const nextItemHasChildren = !!items.at(index + 1)?.children;
			const depth = props.path?.length ?? 0;
			const isLast = items.length - 1 === index;
			const treeItemProps = {
				index,
				depth,
				isFirst: index === 0,
				isLast,
				path: [...props.path, index],
				hideAction: props.hideActions
			};
			const indentLines = getIndentLines({
				depth,
				isLast,
				isLastGroup: props.isLastGroup,
				leafLinks: !props.hideActions && !props.fluid,
				separateRoots: props.separateRoots,
				parentIndentLines: props.parentIndentLines,
				variant: props.indentLinesVariant
			});
			const slotsWithItem = {
				toggle: slots.toggle ? (slotProps) => slots.toggle?.({
					...slotProps,
					...treeItemProps,
					item: item.raw,
					internalItem: item,
					loading
				}) : void 0,
				prepend: (slotProps) => _createElementVNode(_Fragment, null, [props.selectable && (!children || children && !["leaf", "single-leaf"].includes(props.selectStrategy)) && _createVNode$1(VListItemAction, { "start": true }, { default: () => [_createVNode$1(VCheckboxBtn, {
					"key": item.value,
					"modelValue": slotProps.isSelected,
					"disabled": props.disabled || itemProps.disabled,
					"loading": loading,
					"color": props.selectedColor,
					"density": props.density,
					"indeterminate": slotProps.isIndeterminate,
					"indeterminateIcon": props.indeterminateIcon,
					"falseIcon": props.falseIcon,
					"trueIcon": props.trueIcon,
					"onUpdate:modelValue": (v) => selectItem(slotProps.select, v),
					"onClick": (e) => e.stopPropagation(),
					"onKeydown": (e) => {
						if (!["Enter", "Space"].includes(e.key)) return;
						e.stopPropagation();
						selectItem(slotProps.select, slotProps.isSelected);
					}
				}, null)] }), slots.prepend?.({
					...slotProps,
					...treeItemProps,
					item: item.raw,
					internalItem: item
				})]),
				append: slots.append ? (slotProps) => slots.append?.({
					...slotProps,
					...treeItemProps,
					item: item.raw,
					internalItem: item
				}) : void 0,
				title: slots.title ? (slotProps) => slots.title?.({
					...slotProps,
					item: item.raw,
					internalItem: item
				}) : void 0,
				subtitle: slots.subtitle ? (slotProps) => slots.subtitle?.({
					...slotProps,
					item: item.raw,
					internalItem: item
				}) : void 0
			};
			const treeviewGroupProps = VTreeviewGroup.filterProps(itemProps);
			const treeviewChildrenProps = VTreeviewChildren.filterProps({
				...props,
				...treeItemProps
			});
			const footerProps = {
				hideActions: props.hideActions,
				indentLines: indentLines.footer
			};
			return children ? _createVNode$1(VTreeviewGroup, _mergeProps$1(treeviewGroupProps, {
				"value": props.returnObject ? item.raw : treeviewGroupProps?.value,
				"rawId": treeviewGroupProps?.value
			}), {
				activator: (_ref2) => {
					let { props: activatorProps } = _ref2;
					const listItemProps = {
						...itemProps,
						...activatorProps,
						value: itemProps?.value,
						hideActions: props.hideActions,
						indentLines: indentLines.node,
						onToggleExpand: [() => checkChildren(item), activatorProps.onClick],
						onClick: props.disabled || itemProps.disabled ? void 0 : isClickOnOpen.value ? [() => checkChildren(item), activatorProps.onClick] : () => selectItem(activatorItems.value[index]?.select, !activatorItems.value[index]?.isSelected)
					};
					return renderSlot(slots.header, {
						props: listItemProps,
						item: item.raw,
						internalItem: item,
						loading
					}, () => _createVNode$1(VTreeviewItem, _mergeProps$1({ "ref": (el) => activatorItems.value[index] = el }, listItemProps, {
						"hasCustomPrepend": !!slots.prepend,
						"value": props.returnObject ? item.raw : itemProps.value,
						"loading": loading
					}), slotsWithItem));
				},
				default: () => _createElementVNode(_Fragment, null, [_createVNode$1(VTreeviewChildren, _mergeProps$1(treeviewChildrenProps, {
					"items": children,
					"indentLinesVariant": props.indentLinesVariant,
					"parentIndentLines": indentLines.children,
					"isLastGroup": nextItemHasChildren,
					"returnObject": props.returnObject
				}), slots), slots.footer?.({
					props: footerProps,
					item: item.raw,
					internalItem: item,
					loading
				})])
			}) : renderSlot(slots.item, {
				props: itemProps,
				item: item.raw,
				internalItem: item
			}, () => {
				if (item.type === "divider") return renderSlot(slots.divider, { props: item.raw }, () => _createVNode$1(VDivider, item.props, null));
				if (item.type === "subheader") return renderSlot(slots.subheader, { props: item.raw }, () => _createVNode$1(VListSubheader, item.props, null));
				return _createVNode$1(VTreeviewItem, _mergeProps$1(itemProps, {
					"hasCustomPrepend": !!slots.prepend,
					"hideActions": props.hideActions,
					"indentLines": indentLines.leaf,
					"value": props.returnObject ? toRaw$1(item.raw) : itemProps.value
				}), slotsWithItem);
			});
		});
	}
});
var { createVNode: _createVNode, mergeProps: _mergeProps } = await importShared("vue");
var { computed, provide, ref, toRaw, toRef } = await importShared("vue");
function flatten(items) {
	let flat = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	for (const item of items) {
		flat.push(item);
		if (item.children) flatten(item.children, flat);
	}
	return flat;
}
const makeVTreeviewProps = propsFactory({
	openAll: Boolean,
	indentLines: [Boolean, String],
	search: String,
	hideNoData: Boolean,
	noDataText: {
		type: String,
		default: "$vuetify.noDataText"
	},
	...makeFilterProps({ filterKeys: ["title"] }),
	...omit(makeVTreeviewChildrenProps(), [
		"index",
		"path",
		"indentLinesVariant",
		"parentIndentLines",
		"isLastGroup"
	]),
	...omit(makeVListProps({
		collapseIcon: "$treeviewCollapse",
		expandIcon: "$treeviewExpand",
		slim: true
	}), ["nav", "openStrategy"]),
	modelValue: Array
}, "VTreeview");
const VTreeview = genericComponent()({
	name: "VTreeview",
	props: makeVTreeviewProps(),
	emits: {
		"update:opened": (val) => true,
		"update:activated": (val) => true,
		"update:selected": (val) => true,
		"update:modelValue": (val) => true,
		"click:open": (value) => true,
		"click:select": (value) => true
	},
	setup(props, _ref) {
		let { slots, emit } = _ref;
		const { t } = useLocale();
		const { items } = useListItems(props);
		const activeColor = toRef(() => props.activeColor);
		const baseColor = toRef(() => props.baseColor);
		const color = toRef(() => props.color);
		const activated = useProxiedModel(props, "activated");
		const _selected = useProxiedModel(props, "selected");
		const selected = computed({
			get: () => props.modelValue ?? _selected.value,
			set(val) {
				_selected.value = val;
				emit("update:modelValue", val);
			}
		});
		const vListRef = ref();
		const opened = computed(() => props.openAll ? openAll(items.value) : props.opened);
		const flatItems = computed(() => flatten(items.value));
		const search = toRef(() => props.search);
		const { filteredItems } = useFilter(props, flatItems, search);
		const visibleIds = computed(() => {
			if (!search.value) return null;
			const getPath = vListRef.value?.getPath;
			if (!getPath) return null;
			return new Set(filteredItems.value.flatMap((item) => {
				const itemVal = props.returnObject ? item.raw : item.props.value;
				return [...getPath(itemVal), ...getChildren$1(itemVal)].map(toRaw);
			}));
		});
		function getChildren$1(id) {
			const arr = [];
			const queue = (vListRef.value?.children.get(id) ?? []).slice();
			while (queue.length) {
				const child = queue.shift();
				if (!child) continue;
				arr.push(child);
				queue.push(...(vListRef.value?.children.get(child) ?? []).slice());
			}
			return arr;
		}
		function openAll(items$1) {
			let ids = [];
			for (const i of items$1) {
				if (!i.children) continue;
				ids.push(props.returnObject ? toRaw(i.raw) : i.value);
				if (i.children) ids = ids.concat(openAll(i.children));
			}
			return ids;
		}
		provide(VTreeviewSymbol, { visibleIds });
		provideDefaults({
			VTreeviewGroup: {
				activeColor,
				baseColor,
				color,
				collapseIcon: toRef(() => props.collapseIcon),
				expandIcon: toRef(() => props.expandIcon)
			},
			VTreeviewItem: {
				activeClass: toRef(() => props.activeClass),
				activeColor,
				baseColor,
				color,
				density: toRef(() => props.density),
				disabled: toRef(() => props.disabled),
				lines: toRef(() => props.lines),
				variant: toRef(() => props.variant)
			}
		});
		useRender(() => {
			const listProps = VList.filterProps(props);
			const treeviewChildrenProps = VTreeviewChildren.filterProps(props);
			const indentLinesVariant = typeof props.indentLines === "boolean" ? "default" : props.indentLines;
			return _createVNode(VList, _mergeProps({ "ref": vListRef }, listProps, {
				"class": [
					"v-treeview",
					{ "v-treeview--fluid": props.fluid },
					props.class
				],
				"openStrategy": "multiple",
				"style": props.style,
				"opened": opened.value,
				"activated": activated.value,
				"onUpdate:activated": ($event) => activated.value = $event,
				"selected": selected.value,
				"onUpdate:selected": ($event) => selected.value = $event
			}), { default: () => [visibleIds.value?.size === 0 && !props.hideNoData && (slots["no-data"]?.() ?? _createVNode(VListItem, {
				"key": "no-data",
				"title": t(props.noDataText)
			}, null)), _createVNode(VTreeviewChildren, _mergeProps(treeviewChildrenProps, {
				"density": props.density,
				"returnObject": props.returnObject,
				"items": items.value,
				"parentIndentLines": props.indentLines ? [] : void 0,
				"indentLinesVariant": indentLinesVariant
			}), slots)] });
		});
		return {};
	}
});
const VValidation = genericComponent()({
	name: "VValidation",
	props: makeValidationProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, _ref) {
		let { slots } = _ref;
		const validation = useValidation(props, "validation");
		return () => slots.default?.(validation);
	}
});
var components_exports = /* @__PURE__ */ __export({
	VAlert: () => VAlert,
	VAlertTitle: () => VAlertTitle,
	VApp: () => VApp,
	VAppBar: () => VAppBar,
	VAppBarNavIcon: () => VAppBarNavIcon,
	VAppBarTitle: () => VAppBarTitle,
	VAutocomplete: () => VAutocomplete,
	VAvatar: () => VAvatar,
	VBadge: () => VBadge,
	VBanner: () => VBanner,
	VBannerActions: () => VBannerActions,
	VBannerText: () => VBannerText,
	VBottomNavigation: () => VBottomNavigation,
	VBottomSheet: () => VBottomSheet,
	VBreadcrumbs: () => VBreadcrumbs,
	VBreadcrumbsDivider: () => VBreadcrumbsDivider,
	VBreadcrumbsItem: () => VBreadcrumbsItem,
	VBtn: () => VBtn,
	VBtnGroup: () => VBtnGroup,
	VBtnToggle: () => VBtnToggle,
	VCalendar: () => VCalendar,
	VCard: () => VCard,
	VCardActions: () => VCardActions,
	VCardItem: () => VCardItem,
	VCardSubtitle: () => VCardSubtitle,
	VCardText: () => VCardText,
	VCardTitle: () => VCardTitle,
	VCarousel: () => VCarousel,
	VCarouselItem: () => VCarouselItem,
	VCheckbox: () => VCheckbox,
	VCheckboxBtn: () => VCheckboxBtn,
	VChip: () => VChip,
	VChipGroup: () => VChipGroup,
	VClassIcon: () => VClassIcon,
	VCode: () => VCode,
	VCol: () => VCol,
	VColorPicker: () => VColorPicker,
	VCombobox: () => VCombobox,
	VComponentIcon: () => VComponentIcon,
	VConfirmEdit: () => VConfirmEdit,
	VContainer: () => VContainer,
	VCounter: () => VCounter,
	VDataIterator: () => VDataIterator,
	VDataTable: () => VDataTable,
	VDataTableFooter: () => VDataTableFooter,
	VDataTableHeaders: () => VDataTableHeaders,
	VDataTableRow: () => VDataTableRow,
	VDataTableRows: () => VDataTableRows,
	VDataTableServer: () => VDataTableServer,
	VDataTableVirtual: () => VDataTableVirtual,
	VDatePicker: () => VDatePicker,
	VDatePickerControls: () => VDatePickerControls,
	VDatePickerHeader: () => VDatePickerHeader,
	VDatePickerMonth: () => VDatePickerMonth,
	VDatePickerMonths: () => VDatePickerMonths,
	VDatePickerYears: () => VDatePickerYears,
	VDefaultsProvider: () => VDefaultsProvider,
	VDialog: () => VDialog,
	VDialogBottomTransition: () => VDialogBottomTransition,
	VDialogTopTransition: () => VDialogTopTransition,
	VDialogTransition: () => VDialogTransition,
	VDivider: () => VDivider,
	VEmptyState: () => VEmptyState,
	VExpandTransition: () => VExpandTransition,
	VExpandXTransition: () => VExpandXTransition,
	VExpansionPanel: () => VExpansionPanel,
	VExpansionPanelText: () => VExpansionPanelText,
	VExpansionPanelTitle: () => VExpansionPanelTitle,
	VExpansionPanels: () => VExpansionPanels,
	VFab: () => VFab,
	VFabTransition: () => VFabTransition,
	VFadeTransition: () => VFadeTransition,
	VField: () => VField,
	VFieldLabel: () => VFieldLabel,
	VFileInput: () => VFileInput,
	VFooter: () => VFooter,
	VForm: () => VForm,
	VHotkey: () => VHotkey,
	VHover: () => VHover,
	VIcon: () => VIcon,
	VImg: () => VImg,
	VInfiniteScroll: () => VInfiniteScroll,
	VInput: () => VInput,
	VItem: () => VItem,
	VItemGroup: () => VItemGroup,
	VKbd: () => VKbd,
	VLabel: () => VLabel,
	VLayout: () => VLayout,
	VLayoutItem: () => VLayoutItem,
	VLazy: () => VLazy,
	VLigatureIcon: () => VLigatureIcon,
	VList: () => VList,
	VListGroup: () => VListGroup,
	VListImg: () => VListImg,
	VListItem: () => VListItem,
	VListItemAction: () => VListItemAction,
	VListItemMedia: () => VListItemMedia,
	VListItemSubtitle: () => VListItemSubtitle,
	VListItemTitle: () => VListItemTitle,
	VListSubheader: () => VListSubheader,
	VLocaleProvider: () => VLocaleProvider,
	VMain: () => VMain,
	VMenu: () => VMenu,
	VMessages: () => VMessages,
	VNavigationDrawer: () => VNavigationDrawer,
	VNoSsr: () => VNoSsr,
	VNumberInput: () => VNumberInput,
	VOtpInput: () => VOtpInput,
	VOverlay: () => VOverlay,
	VPagination: () => VPagination,
	VParallax: () => VParallax,
	VProgressCircular: () => VProgressCircular,
	VProgressLinear: () => VProgressLinear,
	VRadio: () => VRadio,
	VRadioGroup: () => VRadioGroup,
	VRangeSlider: () => VRangeSlider,
	VRating: () => VRating,
	VResponsive: () => VResponsive,
	VRow: () => VRow,
	VScaleTransition: () => VScaleTransition,
	VScrollXReverseTransition: () => VScrollXReverseTransition,
	VScrollXTransition: () => VScrollXTransition,
	VScrollYReverseTransition: () => VScrollYReverseTransition,
	VScrollYTransition: () => VScrollYTransition,
	VSelect: () => VSelect,
	VSelectionControl: () => VSelectionControl,
	VSelectionControlGroup: () => VSelectionControlGroup,
	VSheet: () => VSheet,
	VSkeletonLoader: () => VSkeletonLoader,
	VSlideGroup: () => VSlideGroup,
	VSlideGroupItem: () => VSlideGroupItem,
	VSlideXReverseTransition: () => VSlideXReverseTransition,
	VSlideXTransition: () => VSlideXTransition,
	VSlideYReverseTransition: () => VSlideYReverseTransition,
	VSlideYTransition: () => VSlideYTransition,
	VSlider: () => VSlider,
	VSnackbar: () => VSnackbar,
	VSnackbarQueue: () => VSnackbarQueue,
	VSpacer: () => VSpacer,
	VSparkline: () => VSparkline,
	VSpeedDial: () => VSpeedDial,
	VStepper: () => VStepper,
	VStepperActions: () => VStepperActions,
	VStepperHeader: () => VStepperHeader,
	VStepperItem: () => VStepperItem,
	VStepperWindow: () => VStepperWindow,
	VStepperWindowItem: () => VStepperWindowItem,
	VSvgIcon: () => VSvgIcon,
	VSwitch: () => VSwitch,
	VSystemBar: () => VSystemBar,
	VTab: () => VTab,
	VTable: () => VTable,
	VTabs: () => VTabs,
	VTabsWindow: () => VTabsWindow,
	VTabsWindowItem: () => VTabsWindowItem,
	VTextField: () => VTextField,
	VTextarea: () => VTextarea,
	VThemeProvider: () => VThemeProvider,
	VTimePicker: () => VTimePicker,
	VTimePickerClock: () => VTimePickerClock,
	VTimePickerControls: () => VTimePickerControls,
	VTimeline: () => VTimeline,
	VTimelineItem: () => VTimelineItem,
	VToolbar: () => VToolbar,
	VToolbarItems: () => VToolbarItems,
	VToolbarTitle: () => VToolbarTitle,
	VTooltip: () => VTooltip,
	VTreeview: () => VTreeview,
	VTreeviewGroup: () => VTreeviewGroup,
	VTreeviewItem: () => VTreeviewItem,
	VValidation: () => VValidation,
	VVirtualScroll: () => VVirtualScroll,
	VWindow: () => VWindow,
	VWindowItem: () => VWindowItem
});
function mounted$1(el, binding) {
	const modifiers = binding.modifiers || {};
	const value = binding.value;
	const { once, immediate, ...modifierKeys } = modifiers;
	const defaultValue = !Object.keys(modifierKeys).length;
	const { handler, options } = typeof value === "object" ? value : {
		handler: value,
		options: {
			attributes: modifierKeys?.attr ?? defaultValue,
			characterData: modifierKeys?.char ?? defaultValue,
			childList: modifierKeys?.child ?? defaultValue,
			subtree: modifierKeys?.sub ?? defaultValue
		}
	};
	const observer = new MutationObserver(function() {
		let mutations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
		let observer$1 = arguments.length > 1 ? arguments[1] : void 0;
		handler?.(mutations, observer$1);
		if (once) unmounted$1(el, binding);
	});
	if (immediate) handler?.([], observer);
	el._mutate = Object(el._mutate);
	el._mutate[binding.instance.$.uid] = { observer };
	observer.observe(el, options);
}
function unmounted$1(el, binding) {
	if (!el._mutate?.[binding.instance.$.uid]) return;
	el._mutate[binding.instance.$.uid].observer.disconnect();
	delete el._mutate[binding.instance.$.uid];
}
const Mutate = {
	mounted: mounted$1,
	unmounted: unmounted$1
};
function mounted(el, binding) {
	const { self = false } = binding.modifiers ?? {};
	const value = binding.value;
	const options = typeof value === "object" && value.options || { passive: true };
	const handler = typeof value === "function" || "handleEvent" in value ? value : value.handler;
	const target = self ? el : binding.arg ? document.querySelector(binding.arg) : window;
	if (!target) return;
	target.addEventListener("scroll", handler, options);
	el._onScroll = Object(el._onScroll);
	el._onScroll[binding.instance.$.uid] = {
		handler,
		options,
		target: self ? void 0 : target
	};
}
function unmounted(el, binding) {
	if (!el._onScroll?.[binding.instance.$.uid]) return;
	const { handler, options, target = el } = el._onScroll[binding.instance.$.uid];
	target.removeEventListener("scroll", handler, options);
	delete el._onScroll[binding.instance.$.uid];
}
function updated(el, binding) {
	if (binding.value === binding.oldValue) return;
	unmounted(el, binding);
	mounted(el, binding);
}
const Scroll = {
	mounted,
	unmounted,
	updated
};
var { h, mergeProps, render, resolveComponent } = await importShared("vue");
function useDirectiveComponent(component, props) {
	const hook = mountComponent(typeof component === "string" ? resolveComponent(component) : component, props);
	return {
		mounted: hook,
		updated: hook,
		unmounted(el) {
			render(null, el);
		}
	};
}
function mountComponent(component, props) {
	return function(el, binding, vnode) {
		const _props = typeof props === "function" ? props(binding) : props;
		const text = binding.value?.text ?? binding.value ?? _props?.text;
		const value = isObject(binding.value) ? binding.value : {};
		const children = () => text ?? el.textContent;
		const provides = (vnode.ctx === binding.instance.$ ? findComponentParent(vnode, binding.instance.$)?.provides : vnode.ctx?.provides) ?? binding.instance.$.provides;
		const node = h(component, mergeProps(_props, value), children);
		node.appContext = Object.assign(Object.create(null), binding.instance.$.appContext, { provides });
		render(node, el);
	};
}
function findComponentParent(vnode, root) {
	const stack$1 = /* @__PURE__ */ new Set();
	const walk = (children) => {
		for (const child of children) {
			if (!child) continue;
			if (child === vnode || child.el && vnode.el && child.el === vnode.el) return true;
			stack$1.add(child);
			let result$1;
			if (child.suspense) result$1 = walk([child.ssContent]);
			else if (Array.isArray(child.children)) result$1 = walk(child.children);
			else if (child.component?.vnode) result$1 = walk([child.component?.subTree]);
			if (result$1) return result$1;
			stack$1.delete(child);
		}
		return false;
	};
	if (!walk([root.subTree])) {
		consoleError("Could not find original vnode, component will not inherit provides");
		return root;
	}
	const result = Array.from(stack$1).reverse();
	for (const child of result) if (child.component) return child.component;
	return root;
}
const Tooltip = useDirectiveComponent(VTooltip, (binding) => {
	return {
		activator: (isObject(binding.value) ? !binding.value.text : [
			"",
			false,
			null
		].includes(binding.value)) ? null : "parent",
		location: binding.arg?.replace("-", " "),
		text: typeof binding.value === "boolean" ? void 0 : binding.value
	};
});
var directives_exports = /* @__PURE__ */ __export({
	ClickOutside: () => ClickOutside,
	Intersect: () => Intersect,
	Mutate: () => Mutate,
	Resize: () => Resize,
	Ripple: () => Ripple,
	Scroll: () => Scroll,
	Tooltip: () => Tooltip,
	Touch: () => Touch
});
var { createApp } = await importShared("vue");
var { createVuetify } = await importShared("vuetify");
var vuetify = createVuetify({
	components: components_exports,
	directives: directives_exports
});
createApp(App_default).use(vuetify).mount("#app");
