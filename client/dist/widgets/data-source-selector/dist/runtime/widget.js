System.register(["jimu-core","jimu-ui/advanced/data-source-selector"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/data-source-selector/src/runtime/widget.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/** @jsx jsx */


class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.handleDataSourceChange = (useDataSources) => {
            console.log('Selected Data Source:', useDataSources);
            // Handle the selected data source
            if (this.props.onSettingChange) {
                this.props.onSettingChange({
                    id: this.props.id,
                    useDataSources: useDataSources
                });
            }
        };
        this.state = {
            useDataSources: props.useDataSources
        };
    }
    render() {
        const { config } = this.props;
        const { buttonLabel = 'Select File' } = config;
        const selectorProps = {
            className: 'data-source-selector',
            buttonLabel,
            useDataSourcesEnabled: true,
            isMultiple: false, // Enforce single selection
            types: ['FILE'], // Only allow file data sources
            onChange: this.handleDataSourceChange,
            // Disable non-file upload options
            disableDataSourceList: true, // Disable existing data source list
            disableDataView: true, // Disable data view options
            hideAddDataButton: true, // Hide add data button
            hideTabs: ['ADDED', 'OUTPUT'], // Hide unnecessary tabs
            mustUseDataSource: true, // Force data source selection
            useDataSources: this.state.useDataSources,
            widgetId: this.props.id
        };
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-demo jimu-widget m-2" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null,
                "buttonLabel: ",
                buttonLabel),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, Object.assign({}, selectorProps))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kYXRhLXNvdXJjZS1zZWxlY3Rvci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBQ3VCO0FBRW9DO0FBYTFFLE1BQU0sTUFBTyxTQUFRLDRDQUFLLENBQUMsYUFBMkI7SUFDcEQsWUFBYSxLQUFZO1FBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFNZCwyQkFBc0IsR0FBRyxDQUFDLGNBQStCLEVBQVEsRUFBRTtZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGNBQWMsQ0FBQztZQUNwRCxrQ0FBa0M7WUFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztvQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakIsY0FBYyxFQUFFLGNBQWM7aUJBQy9CLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQWRDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDckM7SUFDSCxDQUFDO0lBYUQsTUFBTTtRQUNKLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztRQUM3QixNQUFNLEVBQUUsV0FBVyxHQUFHLGFBQWEsRUFBRSxHQUFHLE1BQU07UUFFOUMsTUFBTSxhQUFhLEdBQTRCO1lBQzdDLFNBQVMsRUFBRSxzQkFBc0I7WUFDakMsV0FBVztZQUNYLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsVUFBVSxFQUFFLEtBQUssRUFBRSwyQkFBMkI7WUFDOUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFRLEVBQUUsK0JBQStCO1lBQ3ZELFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCO1lBQ3JDLGtDQUFrQztZQUNsQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsb0NBQW9DO1lBQ2pFLGVBQWUsRUFBRSxJQUFJLEVBQUUsNEJBQTRCO1lBQ25ELGlCQUFpQixFQUFFLElBQUksRUFBRSx1QkFBdUI7WUFDaEQsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBUSxFQUFFLHdCQUF3QjtZQUM5RCxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsOEJBQThCO1lBQ3ZELGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7WUFDekMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtTQUN4QjtRQUVELE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsNkJBQTZCO1lBQzFDOztnQkFBaUIsV0FBVyxDQUFLO1lBQ2pDLCtDQUFDLHFGQUFrQixvQkFBSyxhQUFhLEVBQUksQ0FDckMsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kYXRhLXNvdXJjZS1zZWxlY3Rvci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0UHJvcHMsIFVzZURhdGFTb3VyY2UsIEltbXV0YWJsZUFycmF5IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcbmltcG9ydCB0eXBlIHsgRGF0YVNvdXJjZVNlbGVjdG9yUHJvcHMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xuaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBBbGxXaWRnZXRQcm9wczxDb25maWc+IHtcbiAgdXNlRGF0YVNvdXJjZXM/OiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxuICBvblNldHRpbmdDaGFuZ2U/OiAoc2V0dGluZzogYW55KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICB1c2VEYXRhU291cmNlcz86IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XG59XG5cbmNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yIChwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlRGF0YVNvdXJjZXM6IHByb3BzLnVzZURhdGFTb3VyY2VzXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIERhdGEgU291cmNlOicsIHVzZURhdGFTb3VyY2VzKVxuICAgIC8vIEhhbmRsZSB0aGUgc2VsZWN0ZWQgZGF0YSBzb3VyY2VcbiAgICBpZiAodGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCk6IGpzeC5KU1guRWxlbWVudCB7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJ1dHRvbkxhYmVsID0gJ1NlbGVjdCBGaWxlJyB9ID0gY29uZmlnXG5cbiAgICBjb25zdCBzZWxlY3RvclByb3BzOiBEYXRhU291cmNlU2VsZWN0b3JQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ2RhdGEtc291cmNlLXNlbGVjdG9yJyxcbiAgICAgIGJ1dHRvbkxhYmVsLFxuICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkOiB0cnVlLFxuICAgICAgaXNNdWx0aXBsZTogZmFsc2UsIC8vIEVuZm9yY2Ugc2luZ2xlIHNlbGVjdGlvblxuICAgICAgdHlwZXM6IFsnRklMRSddIGFzIGFueSwgLy8gT25seSBhbGxvdyBmaWxlIGRhdGEgc291cmNlc1xuICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSxcbiAgICAgIC8vIERpc2FibGUgbm9uLWZpbGUgdXBsb2FkIG9wdGlvbnNcbiAgICAgIGRpc2FibGVEYXRhU291cmNlTGlzdDogdHJ1ZSwgLy8gRGlzYWJsZSBleGlzdGluZyBkYXRhIHNvdXJjZSBsaXN0XG4gICAgICBkaXNhYmxlRGF0YVZpZXc6IHRydWUsIC8vIERpc2FibGUgZGF0YSB2aWV3IG9wdGlvbnNcbiAgICAgIGhpZGVBZGREYXRhQnV0dG9uOiB0cnVlLCAvLyBIaWRlIGFkZCBkYXRhIGJ1dHRvblxuICAgICAgaGlkZVRhYnM6IFsnQURERUQnLCAnT1VUUFVUJ10gYXMgYW55LCAvLyBIaWRlIHVubmVjZXNzYXJ5IHRhYnNcbiAgICAgIG11c3RVc2VEYXRhU291cmNlOiB0cnVlLCAvLyBGb3JjZSBkYXRhIHNvdXJjZSBzZWxlY3Rpb25cbiAgICAgIHVzZURhdGFTb3VyY2VzOiB0aGlzLnN0YXRlLnVzZURhdGFTb3VyY2VzLFxuICAgICAgd2lkZ2V0SWQ6IHRoaXMucHJvcHMuaWRcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtZGVtbyBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgICAgPHA+YnV0dG9uTGFiZWw6IHtidXR0b25MYWJlbH08L3A+XG4gICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3Igey4uLnNlbGVjdG9yUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9