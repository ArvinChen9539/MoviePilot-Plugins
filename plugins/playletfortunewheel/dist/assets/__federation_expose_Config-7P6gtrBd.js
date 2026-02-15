import { r as importShared } from "./_virtual___federation_fn_import-CGvRSdYS.js";
import "./preload-helper-D8ypjKNi.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BtmITFDH.js";
var { defineComponent: _defineComponent } = await importShared("vue");
var { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementVNode: _createElementVNode, createElementBlock: _createElementBlock, withModifiers: _withModifiers } = await importShared("vue");
var _hoisted_1 = { class: "plugin-config" };
var _hoisted_2 = { class: "text-body-1" };
var _hoisted_3 = { class: "mb-4 text-pre-wrap" };
var _hoisted_4 = { class: "mb-2 text-high-emphasis" };
var _hoisted_5 = { class: "d-flex justify-end mb-2" };
var _hoisted_6 = { class: "text-body-1" };
var _hoisted_7 = { class: "mb-4 text-pre-wrap" };
var _hoisted_8 = {
	key: 0,
	class: "mb-2 text-high-emphasis"
};
var _hoisted_9 = {
	key: 1,
	class: "text-medium-emphasis"
};
var { ref, onMounted, reactive } = await importShared("vue");
var Config_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ _defineComponent({
	__name: "Config",
	props: {
		initialConfig: {
			type: Object,
			default: () => ({})
		},
		api: {
			type: Object,
			default: () => {}
		}
	},
	emits: [
		"save",
		"close",
		"switch"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const form = ref(null);
		const isFormValid = ref(true);
		const reportTab = ref("last");
		const dailyReportPreview = ref("");
		const generatingDailyReport = ref(false);
		const defaultConfig = {
			enabled: false,
			onlyonce: false,
			notify: true,
			use_proxy: false,
			only_free: false,
			cookie: "",
			auto_cookie: true,
			cron: "",
			max_raffle_num: null,
			last_report: "",
			announce_first: true,
			announce_first_content: "🎉🎉🎉🥇😊",
			announce_second: true,
			announce_second_content: "🎉🎉🎉🥈🙂",
			announce_medal: true,
			announce_medal_content: "🎉🎉🎉👹😱我是大赌鬼",
			auth_token: "",
			daily_summary_notify: true,
			daily_summary_time: "11:00"
		};
		const config = reactive({ ...defaultConfig });
		const emit = __emit;
		function resetForm() {
			Object.keys(defaultConfig).forEach((key) => {
				config[key] = defaultConfig[key];
			});
			if (form.value) form.value.resetValidation();
		}
		const error = ref("");
		const saving = ref(false);
		async function saveConfig() {
			if (!isFormValid.value) {
				error.value = "请修正表单错误";
				return;
			}
			saving.value = true;
			error.value = null;
			try {
				await new Promise((resolve) => setTimeout(resolve, 1e3));
				emit("save", { ...config });
			} catch (err) {
				console.error("保存配置失败:", err);
				error.value = err.message || "保存配置失败";
			} finally {
				saving.value = false;
			}
		}
		async function generateDailyReport() {
			generatingDailyReport.value = true;
			try {
				const res = await props.api.post("plugin/PlayletFortuneWheel/generate-daily-summary");
				if (res.success) dailyReportPreview.value = res.report;
				else console.error("生成报告失败:", res.message);
			} catch (err) {
				console.error("生成每日报告请求异常:", err);
			} finally {
				generatingDailyReport.value = false;
			}
		}
		function notifySwitch() {
			emit("switch");
		}
		function notifyClose() {
			emit("close");
		}
		onMounted(() => {
			if (props.initialConfig) Object.keys(props.initialConfig).forEach((key) => {
				if (key in config) config[key] = props.initialConfig[key];
			});
		});
		return (_ctx, _cache) => {
			const _component_v_card_title = _resolveComponent("v-card-title");
			const _component_v_icon = _resolveComponent("v-icon");
			const _component_v_btn = _resolveComponent("v-btn");
			const _component_v_card_item = _resolveComponent("v-card-item");
			const _component_v_alert = _resolveComponent("v-alert");
			const _component_v_switch = _resolveComponent("v-switch");
			const _component_v_col = _resolveComponent("v-col");
			const _component_v_row = _resolveComponent("v-row");
			const _component_v_card_text = _resolveComponent("v-card-text");
			const _component_v_card = _resolveComponent("v-card");
			const _component_v_text_field = _resolveComponent("v-text-field");
			const _component_v_tab = _resolveComponent("v-tab");
			const _component_v_tabs = _resolveComponent("v-tabs");
			const _component_v_window_item = _resolveComponent("v-window-item");
			const _component_v_window = _resolveComponent("v-window");
			const _component_v_form = _resolveComponent("v-form");
			const _component_v_spacer = _resolveComponent("v-spacer");
			const _component_v_card_actions = _resolveComponent("v-card-actions");
			return _openBlock(), _createElementBlock("div", _hoisted_1, [_createVNode(_component_v_card, null, {
				default: _withCtx(() => [
					_createVNode(_component_v_card_item, null, {
						append: _withCtx(() => [_createVNode(_component_v_btn, {
							icon: "",
							color: "primary",
							variant: "text",
							onClick: notifyClose
						}, {
							default: _withCtx(() => [_createVNode(_component_v_icon, { left: "" }, {
								default: _withCtx(() => [..._cache[22] || (_cache[22] = [_createTextVNode("mdi-close", -1)])]),
								_: 1
							})]),
							_: 1
						})]),
						default: _withCtx(() => [_createVNode(_component_v_card_title, null, {
							default: _withCtx(() => [..._cache[21] || (_cache[21] = [_createTextVNode("插件配置", -1)])]),
							_: 1
						})]),
						_: 1
					}),
					_createVNode(_component_v_card_text, {
						class: "overflow-y-auto",
						style: { "max-height": "calc(100vh - 200px)" }
					}, {
						default: _withCtx(() => [error.value ? (_openBlock(), _createBlock(_component_v_alert, {
							key: 0,
							type: "error",
							class: "mb-4"
						}, {
							default: _withCtx(() => [_createTextVNode(_toDisplayString(error.value), 1)]),
							_: 1
						})) : _createCommentVNode("", true), _createVNode(_component_v_form, {
							ref_key: "form",
							ref: form,
							modelValue: isFormValid.value,
							"onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => isFormValid.value = $event),
							onSubmit: _withModifiers(saveConfig, ["prevent"])
						}, {
							default: _withCtx(() => [
								_createVNode(_component_v_card, {
									variant: "flat",
									class: "mb-6",
									color: "surface"
								}, {
									default: _withCtx(() => [_createVNode(_component_v_card_item, { class: "pa-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_card_title, { class: "d-flex align-center text-h6" }, {
											default: _withCtx(() => [_createVNode(_component_v_icon, {
												color: "#16b1ff",
												class: "mr-3",
												size: "default"
											}, {
												default: _withCtx(() => [..._cache[23] || (_cache[23] = [_createTextVNode("mdi-cog", -1)])]),
												_: 1
											}), _cache[24] || (_cache[24] = _createElementVNode("span", null, "基本设置", -1))]),
											_: 1
										})]),
										_: 1
									}), _createVNode(_component_v_card_text, { class: "px-6 pb-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_row, null, {
											default: _withCtx(() => [
												_createVNode(_component_v_col, {
													cols: "12",
													sm: "3"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_switch, {
														modelValue: config.enabled,
														"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => config.enabled = $event),
														label: "启用插件",
														color: "primary",
														"hide-details": ""
													}, null, 8, ["modelValue"])]),
													_: 1
												}),
												_createVNode(_component_v_col, {
													cols: "12",
													sm: "3"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_switch, {
														modelValue: config.use_proxy,
														"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => config.use_proxy = $event),
														label: "使用代理",
														color: "primary",
														"hide-details": ""
													}, null, 8, ["modelValue"])]),
													_: 1
												}),
												_createVNode(_component_v_col, {
													cols: "12",
													sm: "3"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_switch, {
														modelValue: config.notify,
														"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => config.notify = $event),
														label: "开启通知",
														color: "primary",
														"hide-details": ""
													}, null, 8, ["modelValue"])]),
													_: 1
												}),
												_createVNode(_component_v_col, {
													cols: "12",
													sm: "3"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_switch, {
														modelValue: config.onlyonce,
														"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => config.onlyonce = $event),
														label: "立即运行一次",
														color: "primary",
														"hide-details": ""
													}, null, 8, ["modelValue"])]),
													_: 1
												})
											]),
											_: 1
										})]),
										_: 1
									})]),
									_: 1
								}),
								_createVNode(_component_v_card, {
									variant: "flat",
									class: "mb-6",
									color: "surface"
								}, {
									default: _withCtx(() => [_createVNode(_component_v_card_item, { class: "pa-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_card_title, { class: "d-flex align-center text-h6" }, {
											default: _withCtx(() => [_createVNode(_component_v_icon, {
												color: "#16b1ff",
												class: "mr-3",
												size: "default"
											}, {
												default: _withCtx(() => [..._cache[25] || (_cache[25] = [_createTextVNode("mdi-tools", -1)])]),
												_: 1
											}), _cache[26] || (_cache[26] = _createElementVNode("span", null, "功能设置", -1))]),
											_: 1
										})]),
										_: 1
									}), _createVNode(_component_v_card_text, { class: "px-6 pb-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_row, null, {
											default: _withCtx(() => [_createVNode(_component_v_col, {
												cols: "12",
												sm: "3"
											}, {
												default: _withCtx(() => [_createVNode(_component_v_switch, {
													modelValue: config.auto_cookie,
													"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => config.auto_cookie = $event),
													label: "使用站点Cookie",
													color: "primary",
													"hide-details": ""
												}, null, 8, ["modelValue"])]),
												_: 1
											}), _createVNode(_component_v_col, {
												cols: "12",
												sm: "3"
											}, {
												default: _withCtx(() => [_createVNode(_component_v_switch, {
													modelValue: config.only_free,
													"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => config.only_free = $event),
													label: "只抽免费",
													color: "primary",
													"hide-details": ""
												}, null, 8, ["modelValue"])]),
												_: 1
											})]),
											_: 1
										}), _createVNode(_component_v_row, null, {
											default: _withCtx(() => [
												_createVNode(_component_v_col, {
													cols: "12",
													sm: "4"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_text_field, {
														modelValue: config.cookie,
														"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => config.cookie = $event),
														label: "站点Cookie",
														variant: "outlined",
														color: "primary",
														"hide-details": "",
														class: "mt-2",
														disabled: config.auto_cookie
													}, null, 8, ["modelValue", "disabled"])]),
													_: 1
												}),
												_createVNode(_component_v_col, {
													cols: "12",
													sm: "4"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_text_field, {
														modelValue: config.cron,
														"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => config.cron = $event),
														label: "执行周期(cron)",
														variant: "outlined",
														color: "primary",
														"hide-details": "",
														placeholder: "请自行设置执行周期",
														class: "mt-2"
													}, null, 8, ["modelValue"])]),
													_: 1
												}),
												_createVNode(_component_v_col, {
													cols: "12",
													sm: "4"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_text_field, {
														modelValue: config.max_raffle_num,
														"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => config.max_raffle_num = $event),
														label: "最大抽奖次数",
														variant: "outlined",
														color: "primary",
														"hide-details": "",
														placeholder: "默认全部抽完",
														class: "mt-2"
													}, null, 8, ["modelValue"])]),
													_: 1
												})
											]),
											_: 1
										})]),
										_: 1
									})]),
									_: 1
								}),
								_createVNode(_component_v_card, {
									variant: "flat",
									class: "mb-6",
									color: "surface"
								}, {
									default: _withCtx(() => [_createVNode(_component_v_card_item, { class: "pa-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_card_title, { class: "d-flex align-center text-h6" }, {
											default: _withCtx(() => [_createVNode(_component_v_icon, {
												color: "#16b1ff",
												class: "mr-3",
												size: "default"
											}, {
												default: _withCtx(() => [..._cache[27] || (_cache[27] = [_createTextVNode("mdi-server-network", -1)])]),
												_: 1
											}), _cache[28] || (_cache[28] = _createElementVNode("span", null, "数据服务设置", -1))]),
											_: 1
										})]),
										_: 1
									}), _createVNode(_component_v_card_text, { class: "px-6 pb-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_row, null, {
											default: _withCtx(() => [_createVNode(_component_v_col, {
												cols: "12",
												sm: "12"
											}, {
												default: _withCtx(() => [_createVNode(_component_v_text_field, {
													modelValue: config.auth_token,
													"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => config.auth_token = $event),
													label: "认证Token",
													variant: "outlined",
													color: "primary",
													"hide-details": "",
													placeholder: "自动获取",
													class: "mt-2"
												}, null, 8, ["modelValue"])]),
												_: 1
											})]),
											_: 1
										})]),
										_: 1
									})]),
									_: 1
								}),
								_createVNode(_component_v_card, {
									variant: "flat",
									class: "mb-6",
									color: "surface"
								}, {
									default: _withCtx(() => [_createVNode(_component_v_card_item, { class: "pa-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_card_title, { class: "d-flex align-center text-h6" }, {
											default: _withCtx(() => [_createVNode(_component_v_icon, {
												color: "#16b1ff",
												class: "mr-3",
												size: "default"
											}, {
												default: _withCtx(() => [..._cache[29] || (_cache[29] = [_createTextVNode("mdi-chat-typing-outline", -1)])]),
												_: 1
											}), _cache[30] || (_cache[30] = _createElementVNode("span", null, "中奖喊话设置", -1))]),
											_: 1
										})]),
										_: 1
									}), _createVNode(_component_v_card_text, { class: "px-6 pb-6" }, {
										default: _withCtx(() => [
											_createVNode(_component_v_row, null, {
												default: _withCtx(() => [_createVNode(_component_v_col, {
													cols: "12",
													sm: "3",
													class: "d-flex align-sm-center"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_switch, {
														modelValue: config.announce_first,
														"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => config.announce_first = $event),
														label: "一等奖喊话",
														color: "primary",
														"hide-details": ""
													}, null, 8, ["modelValue"])]),
													_: 1
												}), _createVNode(_component_v_col, {
													cols: "12",
													sm: "9"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_text_field, {
														modelValue: config.announce_first_content,
														"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => config.announce_first_content = $event),
														label: "喊话内容",
														variant: "outlined",
														color: "primary",
														"hide-details": "",
														class: "mt-2 w-100"
													}, null, 8, ["modelValue"])]),
													_: 1
												})]),
												_: 1
											}),
											_createVNode(_component_v_row, null, {
												default: _withCtx(() => [_createVNode(_component_v_col, {
													cols: "12",
													sm: "3",
													class: "d-flex align-sm-center"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_switch, {
														modelValue: config.announce_second,
														"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => config.announce_second = $event),
														label: "二等奖喊话",
														color: "primary",
														"hide-details": ""
													}, null, 8, ["modelValue"])]),
													_: 1
												}), _createVNode(_component_v_col, {
													cols: "12",
													sm: "9"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_text_field, {
														modelValue: config.announce_second_content,
														"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => config.announce_second_content = $event),
														label: "喊话内容",
														variant: "outlined",
														color: "primary",
														"hide-details": "",
														class: "mt-2 w-100"
													}, null, 8, ["modelValue"])]),
													_: 1
												})]),
												_: 1
											}),
											_createVNode(_component_v_row, null, {
												default: _withCtx(() => [_createVNode(_component_v_col, {
													cols: "12",
													sm: "3",
													class: "d-flex align-sm-center"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_switch, {
														modelValue: config.announce_medal,
														"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => config.announce_medal = $event),
														label: "赌鬼勋章喊话",
														color: "primary",
														"hide-details": ""
													}, null, 8, ["modelValue"])]),
													_: 1
												}), _createVNode(_component_v_col, {
													cols: "12",
													sm: "9"
												}, {
													default: _withCtx(() => [_createVNode(_component_v_text_field, {
														modelValue: config.announce_medal_content,
														"onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => config.announce_medal_content = $event),
														label: "喊话内容",
														variant: "outlined",
														color: "primary",
														"hide-details": "",
														class: "mt-2 w-100"
													}, null, 8, ["modelValue"])]),
													_: 1
												})]),
												_: 1
											})
										]),
										_: 1
									})]),
									_: 1
								}),
								_createVNode(_component_v_card, {
									variant: "flat",
									class: "mb-6",
									color: "surface"
								}, {
									default: _withCtx(() => [_createVNode(_component_v_card_item, { class: "pa-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_card_title, { class: "d-flex align-center text-h6" }, {
											default: _withCtx(() => [_createVNode(_component_v_icon, {
												color: "#16b1ff",
												class: "mr-3",
												size: "default"
											}, {
												default: _withCtx(() => [..._cache[31] || (_cache[31] = [_createTextVNode("mdi-bulletin-board", -1)])]),
												_: 1
											}), _cache[32] || (_cache[32] = _createElementVNode("span", null, "每日汇总设置", -1))]),
											_: 1
										})]),
										_: 1
									}), _createVNode(_component_v_card_text, { class: "px-6 pb-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_row, null, {
											default: _withCtx(() => [_createVNode(_component_v_col, {
												cols: "12",
												sm: "3",
												class: "d-flex align-sm-center"
											}, {
												default: _withCtx(() => [_createVNode(_component_v_switch, {
													modelValue: config.daily_summary_notify,
													"onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => config.daily_summary_notify = $event),
													label: "开启每日汇总",
													color: "primary",
													"hide-details": ""
												}, null, 8, ["modelValue"])]),
												_: 1
											}), _createVNode(_component_v_col, {
												cols: "12",
												sm: "9"
											}, {
												default: _withCtx(() => [_createVNode(_component_v_text_field, {
													modelValue: config.daily_summary_time,
													"onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => config.daily_summary_time = $event),
													label: "最迟报告时间 (HH:MM)",
													variant: "outlined",
													color: "primary",
													"hide-details": "",
													class: "mt-2 w-100",
													placeholder: "11:00",
													disabled: !config.daily_summary_notify
												}, null, 8, ["modelValue", "disabled"])]),
												_: 1
											})]),
											_: 1
										})]),
										_: 1
									})]),
									_: 1
								}),
								_createVNode(_component_v_card, {
									variant: "flat",
									class: "mb-6",
									color: "surface"
								}, {
									default: _withCtx(() => [_createVNode(_component_v_card_item, { class: "pa-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_card_title, { class: "d-flex align-center text-h6" }, {
											default: _withCtx(() => [_createVNode(_component_v_icon, {
												color: "#16b1ff",
												class: "mr-3",
												size: "default"
											}, {
												default: _withCtx(() => [..._cache[33] || (_cache[33] = [_createTextVNode("mdi-file-document-outline", -1)])]),
												_: 1
											}), _cache[34] || (_cache[34] = _createElementVNode("span", null, "报告预览", -1))]),
											_: 1
										})]),
										_: 1
									}), _createVNode(_component_v_card_text, { class: "px-6 pb-6" }, {
										default: _withCtx(() => [_createVNode(_component_v_tabs, {
											modelValue: reportTab.value,
											"onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => reportTab.value = $event),
											color: "primary",
											density: "compact",
											class: "mb-4"
										}, {
											default: _withCtx(() => [_createVNode(_component_v_tab, { value: "last" }, {
												default: _withCtx(() => [..._cache[35] || (_cache[35] = [_createTextVNode("最后一次抽奖报告", -1)])]),
												_: 1
											}), _createVNode(_component_v_tab, { value: "daily" }, {
												default: _withCtx(() => [..._cache[36] || (_cache[36] = [_createTextVNode("每日汇总报告", -1)])]),
												_: 1
											})]),
											_: 1
										}, 8, ["modelValue"]), _createVNode(_component_v_window, {
											modelValue: reportTab.value,
											"onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => reportTab.value = $event)
										}, {
											default: _withCtx(() => [_createVNode(_component_v_window_item, { value: "last" }, {
												default: _withCtx(() => [_createElementVNode("div", _hoisted_2, [_createElementVNode("div", _hoisted_3, [_createElementVNode("div", _hoisted_4, _toDisplayString(config.last_report || "暂无数据,可以点击立即运行一次查看"), 1)])])]),
												_: 1
											}), _createVNode(_component_v_window_item, { value: "daily" }, {
												default: _withCtx(() => [_createElementVNode("div", _hoisted_5, [_createVNode(_component_v_btn, {
													color: "primary",
													size: "small",
													"prepend-icon": "mdi-refresh",
													loading: generatingDailyReport.value,
													onClick: generateDailyReport
												}, {
													default: _withCtx(() => [..._cache[37] || (_cache[37] = [_createTextVNode(" 立即生成 ", -1)])]),
													_: 1
												}, 8, ["loading"])]), _createElementVNode("div", _hoisted_6, [_createElementVNode("div", _hoisted_7, [dailyReportPreview.value ? (_openBlock(), _createElementBlock("div", _hoisted_8, _toDisplayString(dailyReportPreview.value), 1)) : (_openBlock(), _createElementBlock("div", _hoisted_9, " 暂无每日汇总报告预览，请点击上方按钮生成。 "))])])]),
												_: 1
											})]),
											_: 1
										}, 8, ["modelValue"])]),
										_: 1
									})]),
									_: 1
								})
							]),
							_: 1
						}, 8, ["modelValue"])]),
						_: 1
					}),
					_createVNode(_component_v_card_actions, null, {
						default: _withCtx(() => [
							_createVNode(_component_v_btn, {
								color: "secondary",
								onClick: resetForm
							}, {
								default: _withCtx(() => [..._cache[38] || (_cache[38] = [_createTextVNode("重置为初始值", -1)])]),
								_: 1
							}),
							_createVNode(_component_v_spacer),
							_createVNode(_component_v_btn, {
								color: "primary",
								onClick: notifySwitch
							}, {
								default: _withCtx(() => [_createVNode(_component_v_icon, { left: "" }, {
									default: _withCtx(() => [..._cache[39] || (_cache[39] = [_createTextVNode("mdi-chart-line", -1)])]),
									_: 1
								}), _cache[40] || (_cache[40] = _createTextVNode(" 抽奖数据统计 ", -1))]),
								_: 1
							}),
							_createVNode(_component_v_spacer),
							_createVNode(_component_v_btn, {
								color: "primary",
								disabled: !isFormValid.value,
								onClick: saveConfig,
								loading: saving.value
							}, {
								default: _withCtx(() => [..._cache[41] || (_cache[41] = [_createTextVNode("保存配置", -1)])]),
								_: 1
							}, 8, ["disabled", "loading"])
						]),
						_: 1
					})
				]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-1b33ede8"]]);
export { Config_default as default };
