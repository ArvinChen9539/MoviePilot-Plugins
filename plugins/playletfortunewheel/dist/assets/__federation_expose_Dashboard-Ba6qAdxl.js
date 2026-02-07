import { r as importShared } from "./_virtual___federation_fn_import-CGvRSdYS.js";
import "./preload-helper-D8ypjKNi.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BtmITFDH.js";
var { defineComponent: _defineComponent } = await importShared("vue");
var { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, vShow: _vShow, createElementVNode: _createElementVNode, withDirectives: _withDirectives, normalizeProps: _normalizeProps, guardReactiveProps: _guardReactiveProps, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
var _hoisted_1 = { class: "dashboard-widget" };
var _hoisted_2 = { class: "absolute right-5 top-5" };
var Dashboard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ _defineComponent({
	__name: "Dashboard",
	props: {
		config: {
			type: Object,
			default: () => ({})
		},
		allowRefresh: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_v_card_title = _resolveComponent("v-card-title");
			const _component_v_card_text = _resolveComponent("v-card-text");
			const _component_v_icon = _resolveComponent("v-icon");
			const _component_v_card = _resolveComponent("v-card");
			const _component_v_hover = _resolveComponent("v-hover");
			return _openBlock(), _createElementBlock("div", _hoisted_1, [_createVNode(_component_v_hover, null, {
				default: _withCtx(({ isHovering, props: hoverProps }) => [_createVNode(_component_v_card, _normalizeProps(_guardReactiveProps(hoverProps)), {
					default: _withCtx(() => [
						_createVNode(_component_v_card_title, null, {
							default: _withCtx(() => [_createTextVNode(_toDisplayString(__props.config.title || "仪表板组件"), 1)]),
							_: 1
						}),
						_createVNode(_component_v_card_text),
						_withDirectives(_createElementVNode("div", _hoisted_2, [_createVNode(_component_v_icon, { class: "cursor-move" }, {
							default: _withCtx(() => [..._cache[0] || (_cache[0] = [_createTextVNode("mdi-drag", -1)])]),
							_: 1
						})], 512), [[_vShow, isHovering]])
					]),
					_: 2
				}, 1040)]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-eeac8786"]]);
export { Dashboard_default as default };
