/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/reactor-worker-project-edge/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../Library/Caches/.wrangler/wranglerjs-1.12.2/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./dist/container.js":
/*!***************************!*\
  !*** ./dist/container.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getDataElementValues => ({
  "buildInfo": {
    "buildDate": "2019-11-07T20:31:52Z",
    "environment": "development",
    "turbineBuildDate": "2019-06-25T22:25:24Z",
    "turbineVersion": "25.6.0"
  },
  "modules": {
    "google-analytics-measurement-protocol/src/lib/actions/sendData.js": {
      "extensionName": "google-analytics-measurement-protocol",
      "displayName": "Send Data",
      "script": __webpack_require__(/*! reactor-extension-google-analytics-edge/src/lib/actions/sendData.js */ "./node_modules/reactor-extension-google-analytics-edge/src/lib/actions/sendData.js")
    },
    "adobe-cloud-connector/src/lib/actions/sendData.js": {
      "extensionName": "adobe-cloud-connector",
      "displayName": "Send Beacon",
      "script": __webpack_require__(/*! @adobe/reactor-extension-cloud-connector-edge/src/lib/actions/sendData.js */ "./node_modules/@adobe/reactor-extension-cloud-connector-edge/src/lib/actions/sendData.js")
    },
    "core/src/lib/dataElements/path.js": {
      "extensionName": "core",
      "displayName": "Path",
      "script": __webpack_require__(/*! @adobe/reactor-extension-core-edge/src/lib/dataElements/path.js */ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/dataElements/path.js")
    },
    "core/src/lib/dataElements/customCode.js": {
      "extensionName": "core",
      "displayName": "Custom Code Data Element",
      "script": __webpack_require__(/*! @adobe/reactor-extension-core-edge/src/lib/dataElements/customCode.js */ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/dataElements/customCode.js")
    },
    "core/src/lib/actions/customCode.js": {
      "extensionName": "core",
      "displayName": "Custom Code Action",
      "script": __webpack_require__(/*! @adobe/reactor-extension-core-edge/src/lib/actions/customCode.js */ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/actions/customCode.js")
    },
    "core/src/lib/conditions/customCode.js": {
      "extensionName": "core",
      "displayName": "Custom Code Condition",
      "script": __webpack_require__(/*! @adobe/reactor-extension-core-edge/src/lib/conditions/customCode.js */ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/conditions/customCode.js")
    }
  },
  "dataElements": {
    "ecid": {
      "modulePath": "core/src/lib/dataElements/path.js",
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        "path": "arc.event.xdm.identityMap.ECID[0].id"
      }))
    },
    "core": {
      "modulePath": "core/src/lib/dataElements/path.js",
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        "path": "arc.ruleStash.core"
      }))
    },
    "json": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        source: function (arc, utils) {
          return {
            "a": "b"
          };
        }
      }))
    },
    "e1": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "getSettings": context => getDataElementValues(['e2'], context).then(getDataElementValue => ({
        source: function (arc, utils) {
          return getDataElementValue("e2");
        }
      }))
    },
    "e2": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "getSettings": context => getDataElementValues(['e3'], context).then(getDataElementValue => ({
        source: function (arc, utils) {
          return getDataElementValue("e3");
        }
      }))
    },
    "e3": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        source: function (arc, utils) {
          return 910;
        }
      }))
    },
    "myPrecious": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        source: function (arc, utils) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve('precious');
            }, 1);
          });
        }
      }))
    }
  },
  "extensions": {
    "adobe-cloud-connector": {
      "displayName": "Adobe Cloud Connector"
    },
    "google-analytics-measurement-protocol": {
      "displayName": "Google Analytics Measurement Protocol",
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        "trackingId": "UA-1",
        "endpoint": "https://www.google-analytics.com/collect",
        "version": "1",
        "templates": []
      }))
    },
    "core": {
      "displayName": "Core"
    }
  },
  "company": {
    "orgId": "08364A825824E04F0A494115@AdobeOrg"
  },
  "property": {
    "name": "server",
    "settings": {
      "platform": "edge"
    }
  },
  "rules": [{
    "id": 'RLbb1d94c79fee4733a510564a86ba3c59',
    "name": 'Send data to webhook',
    "conditions": [{
      "modulePath": 'core/src/lib/conditions/customCode.js',
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        "source": function (arc, utils) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(true);
            }, 1);
          });
        }
      }))
    }],
    "actions": [{
      "modulePath": 'core/src/lib/actions/customCode.js',
      "getSettings": context => getDataElementValues(['core'], context).then(getDataElementValue => ({
        "keyName": "gigi",
        "source": function (arc, utils) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              getDataElementValue("core");

              const b = function () {
                getDataElementValue("core");
              }(function a() {
                getDataElementValue("core");
              }(getDataElementValue("core")));

              () => {
                getDataElementValue("core");
              };

              const x = getDataElementValue("core");
              const y = "some " + getDataElementValue("core");
              const z = 5 + getDataElementValue("core");
              const z2 = 5 + getDataElementValue("core") + 5;
              resolve(5);
            }, 1);
          });
        }
      }))
    }, {
      "modulePath": 'adobe-cloud-connector/src/lib/actions/sendData.js',
      "getSettings": context => getDataElementValues(['core', 'ecid', 'myPrecious'], context).then(getDataElementValue => ({
        "a": {
          "b": getDataElementValue("core"),
          "c": "some test %core% some other test %core% again"
        },
        "method": 'POST',
        "body": getDataElementValue("core"),
        "url": "https://webhook.site/54c97b3c-771e-46b1-8b8a-b9cf59faef85?q=" + getDataElementValue("ecid") + "&z=" + getDataElementValue("myPrecious")
      }))
    }]
  }, {
    "id": 'RLbb1d94c79fee4733a510564a86ba3c60',
    "name": 'Send data to webhook 2',
    "actions": [{
      "modulePath": 'adobe-cloud-connector/src/lib/actions/sendData.js',
      "getSettings": context => getDataElementValues(['ecid', 'e1', 'core'], context).then(getDataElementValue => ({
        "method": 'GET',
        "url": "https://webhook.site/54c97b3c-771e-46b1-8b8a-b9cf59faef85?q=" + getDataElementValue("ecid") + "&e=" + getDataElementValue("e1") + "&x=" + getDataElementValue("core")
      }))
    }, {
      "modulePath": 'google-analytics-measurement-protocol/src/lib/actions/sendData.js',
      "getSettings": context => getDataElementValues([], context).then(getDataElementValue => ({
        "parameters": [{
          "parameter": "dl",
          "value": "https://www.lenovo.com/us/en/pc"
        }],
        "customCode": ""
      }))
    }]
  }]
});

/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-cloud-connector-edge/src/lib/actions/sendData.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-cloud-connector-edge/src/lib/actions/sendData.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/



const byteArrayToString = (buf) => {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
};

module.exports = ({
  arc: { ruleStash = {} },
  utils: { fetch, getSettings }
}) => {
  let headers = {};

  const settings = getSettings();
  const { url, headers: settingsHeaders, method, responseKey } = settings;
  let { body } = settings;

  if (settingsHeaders && settingsHeaders.length > 0) {
    headers = settingsHeaders.reduce((accumulator, o) => {
      accumulator[o.key] = o.value;
      return accumulator;
    }, {});
  }

  if (typeof body === 'object') {
    body = JSON.stringify(body);
  }

  const fetchOptions = {
    method,
    body,
    headers
  };

  return fetch(url, fetchOptions).then((r) => {
    const accRuleStash = ruleStash['adobe-cloud-connector'] || {
      responses: {}
    };

    if (responseKey) {
      return r
        .arrayBuffer()
        .then(byteArrayToString)
        .then((bodyResponse) => {
          accRuleStash.responses[responseKey] = bodyResponse;
          return accRuleStash;
        });
    }

    return accRuleStash;
  });
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/actions/customCode.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-core-edge/src/lib/actions/customCode.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/



/**
 * Custom code action. This executes action code provided by the user.
 * @param {Object} context Action settings.
 * @param {Object} context.arc Adobe Request Context. It contains data like: event, request,
 *                     and ruleStash.
 * @param {Object} context.utils It contains utilities like logger, fetch, getSettings.
 * @returns {Promise}
 */
module.exports = ({ arc, utils }) => {
  const ruleStash = arc.ruleStash || {};
  const coreRuleStash = ruleStash.core || {};
  coreRuleStash.customCode = coreRuleStash.customCode || {};

  const settings = utils.getSettings();

  return Promise.resolve(settings.source(arc, utils)).then((r) => {
    coreRuleStash.customCode[settings.keyName] = r;
    return coreRuleStash;
  });
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/conditions/customCode.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-core-edge/src/lib/conditions/customCode.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/



/**
 * Custom code condition. This executes condition code provided by the user.
 * @param {Object} context Action settings.
 * @param {Object} context.arc Adobe Request Context. It contains data like: event, request,
 *                     and ruleStash.
 * @param {Object} context.utils It contains utilities like logger, fetch, getSettings.
 * @returns {boolean|Promise}
 */
module.exports = ({ arc, utils }) => {
  const settings = utils.getSettings();
  return settings.source(arc, utils);
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/dataElements/customCode.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-core-edge/src/lib/dataElements/customCode.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/



/**
 * Custom code data element. This executes data element code provided by the user.
 * @param {Object} context Action settings.
 * @param {Object} context.arc Adobe Request Context. It contains data like: event, request,
 *                     and ruleStash.
 * @param {Object} context.utils It contains utilities like logger, fetch, getSettings.
 * @returns {*|Promise}
 */
module.exports = ({ arc, utils }) => {
  const settings = utils.getSettings();
  return settings.source(arc, utils);
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/dataElements/path.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-core-edge/src/lib/dataElements/path.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/



var getValue = __webpack_require__(/*! ../helpers/getValue */ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/getValue.js");

module.exports = ({ arc, utils: { getSettings } }) => {
  const { path } = getSettings();
  const container = { arc };
  return getValue(container, path);
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/getArrayIndex.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/getArrayIndex.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/



module.exports = function (i) {
  var match = i.match(/\[([0-9]+)]$/);
  return match && match[1];
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/getValue.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/getValue.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/



var isKeyArray = __webpack_require__(/*! ./isKeyArray */ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/isKeyArray.js");
var getArrayIndex = __webpack_require__(/*! ./getArrayIndex */ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/getArrayIndex.js");

module.exports = function (payload, sourcePath) {
  var pathParts = sourcePath.split('.');
  var result = payload;

  pathParts.forEach(function (pathPart) {
    if (result) {
      if (isKeyArray(pathPart)) {
        var property = pathPart.substring(0, pathPart.indexOf('['));
        var index = getArrayIndex(pathPart);
        if (result[property]) {
          result = result[property][index];
        }
      } else {
        result = result[pathPart];
      }
    }
  });

  return result || null;
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/isKeyArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-extension-core-edge/src/lib/helpers/isKeyArray.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/



module.exports = function (i) {
  return !!i.match(/[[0-9]+]/);
};


/***/ }),

/***/ "./node_modules/@adobe/reactor-turbine-edge/dist/engine-server.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@adobe/reactor-turbine-edge/dist/engine-server.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var createGetDataElementValues=e=>(t,r)=>Promise.all(t.map((t=>{const{dataElementCallStack:o=[]}=r;return r.dataElementCallStack=o.slice(),e(t,r)}))).then((e=>{const r={};return t.forEach(((t,o)=>{r[t]=e[o]})),e=>r[e]})),cleanText=e=>"string"==typeof e?e.replace(/\s+/g," ").trim():e;const enhanceErrorMessage=(e,t)=>{t.message=`Failed to execute module for data element "${e}". ${t.message}`};var createGetDataElementValue=(e,t)=>(r,o)=>{const{dataElementCallStack:n=[],arcAndUtils:s}=o,{utils:l}=s,a=t(r);if(!a)return Promise.reject(new Error(`Data element definition for "${r}" was not found.`));if(n.includes(r))return n.push(r),Promise.reject(new Error("Data element circular reference detected: "+n.join(" -> ")));n.push(r);const i=e.getModuleExports(a.modulePath);return a.getSettings(o).then((e=>{try{return i({...s,utils:{...l,getSettings:()=>e}})}catch(e){throw enhanceErrorMessage(r,e),e}})).then((e=>{let t=e;return null==t&&null!=a.defaultValue&&(t=a.defaultValue),"string"==typeof t&&(a.cleanText&&(t=cleanText(t)),a.forceLowerCase&&(t=t.toLowerCase())),t}))},createModuleProvider=()=>{let e={},t={};return{registerModules:(r,o)=>{e=r,t=o},getModuleDefinition:t=>e[t],getExtensionDefinition:r=>t[e[r].extensionName],getModuleExports:t=>{let r;try{r=e[t].script}catch(e){throw new Error(`Failed to access module "${t}". ${e.message}`)}if("function"!=typeof r)throw new Error(`Module "${t}" did not export a function.`);return r}}};let lastTimestamp=0;var getCurrentTimestamp=()=>{let e=Date.now();return e<=lastTimestamp&&(e=lastTimestamp+1),lastTimestamp=e,e};const levels={LOG:"log",INFO:"info",DEBUG:"debug",WARN:"warn",ERROR:"error"},ROCKET="🚀",launchPrefix="🚀",process=(e,t,r,o)=>{o.unshift("🚀"),r.push({name:"evaluatingRule",timestampMs:getCurrentTimestamp(),attributes:{logLevel:e},messages:o.map((e=>"string"!=typeof e?JSON.stringify(e):e)),context:t})};var createNewLogger=e=>{const t=[];return{log:(...r)=>process(levels.LOG,e,t,r),info:(...r)=>process(levels.INFO,e,t,r),debug:(...r)=>process(levels.DEBUG,e,t,r),warn:(...r)=>process(levels.WARN,e,t,r),error:(...r)=>process(levels.ERROR,e,t,r),getJsonLogs:()=>t}};const emptyFn=()=>{};var getFakeLogger={log:emptyFn,info:emptyFn,debug:emptyFn,warn:emptyFn,error:emptyFn,getJsonLogs:()=>[]};const byteArrayToString=e=>String.fromCharCode.apply(null,new Uint8Array(e));var getRuleFetchFn=(e,t,r)=>(o,n={})=>{const s={};return"string"!=typeof o&&o.headers&&[...o.headers.entries()].reduce(((e,[t,r])=>(e[t]=r,e)),s),n.headers={...s,...n.headers,...t},e(o,n).then((e=>{const t=e.clone();return Promise.all([e.arrayBuffer().then(byteArrayToString),e.status]).then((([e,s])=>(r.log("FETCH","Resource",o,"Options",n,"Response Status",s,"Response Body",e||"empty"),t)))}),(e=>{throw r.error("FETCH","Resource",o,"Options",n,"Error",e.message),e}))};const isConditionMet=(e,t)=>!0===e&&!t||!1===e&&t;var checkConditionResult=({moduleOutput:e,arcAndUtils:t,delegateConfig:{displayName:r,negate:o=!1}})=>{const{utils:{getRule:n}}=t,{name:s}=n();return"boolean"!=typeof e?Promise.reject(new Error(`Condition "${r}" from rule "${s}" did not return a boolean result.`)):isConditionMet(e,o)?Promise.resolve({arcAndUtils:t}):Promise.reject(new Error(`Condition "${r}" from rule "${s}" not met.`))},addActionResultToStash=({moduleOutput:e,arcAndUtils:t,delegateConfig:{extension:{name:r}}})=>{const{arc:{ruleStash:o}}=t;return r&&(o[r]=null!=e?e:null),{arcAndUtils:t}},getTimeoutPromise=e=>new Promise(((t,r)=>{setTimeout((()=>{r(new Error(`A timeout occurred because the module took longer than ${e/1e3} seconds to complete.`))}),e)})),transformToTimeBoundedPromise=e=>t=>{const{delegateConfig:{timeout:r}}=t;return Promise.race([getTimeoutPromise(r),e(t)])},logDelegateModuleCall=e=>{const{arcAndUtils:{arc:{event:t,ruleStash:r},utils:{logger:o}},delegateConfig:{displayName:n,extension:{displayName:s}}}=e;return o.log(`Calling "${n}" module from the "${s}" extension.`,"Event: ",t,"Rule Stash: ",r),e},logDelegateModuleOutput=e=>{const{moduleOutput:t,arcAndUtils:{utils:{logger:r}},delegateConfig:{displayName:o,extension:{displayName:n}}}=e;return r.log(`"${o}" module from the "${n}" extension returned.`,"Output:",t),e},getExtensionSettingsByRuleComponent=({arcAndUtils:e,delegateConfig:t})=>{const{utils:r}=e;let{extension:{getExtensionSettings:o}}=t;return o||(o=()=>Promise.resolve({})),o(e).then((o=>({arcAndUtils:{...e,utils:{...r,getExtensionSettings:()=>o}},delegateConfig:t})))},executeDelegateModule=e=>{const{arcAndUtils:t,delegateConfig:r}=e,{utils:o}=t,{getSettings:n,moduleExports:s}=r;return n(e).then((e=>s({...t,utils:{...o,getSettings:()=>e}}))).then((t=>({...e,moduleOutput:t})))},getExecuteModulePromise=e=>Promise.resolve(e).then(logDelegateModuleCall).then(getExtensionSettingsByRuleComponent).then(executeDelegateModule).then(logDelegateModuleOutput),normalizeError=e=>{let t=e;return t||(t=new Error("The extension triggered an error, but no error information was provided.")),t instanceof Error||(t=new Error(String(t))),t},enhanceExecutionErrorMessageAndRethrow=({delegateConfig:{displayName:e}})=>t=>{const r=normalizeError(t);return r.message=`Failed to execute "${e}". ${r.message}`,Promise.reject(r)},logModuleErrorAndRethrow=({utils:{logger:e}})=>t=>(e.error(`${t.message}${t.stack?" \n "+t.stack:""}`),Promise.reject()),addModuleToQueue=(e,t,r,o)=>e.then((e=>Promise.resolve({...e,delegateConfig:r}))).then(transformToTimeBoundedPromise(getExecuteModulePromise)).catch(enhanceExecutionErrorMessageAndRethrow({delegateConfig:r})).then(t).catch(logModuleErrorAndRethrow({utils:o})),normalizeDelegate=({modulePath:e,...t},r)=>{const{extensionName:o,displayName:n}=r.getModuleDefinition(e),{displayName:s,getSettings:l}=r.getExtensionDefinition(e);return{...t,displayName:n,moduleExports:r.getModuleExports(e),extension:{name:o,displayName:s,getExtensionSettings:l}}},logRuleStarting=e=>{const{arcAndUtils:{utils:{getRule:t,logger:r}}}=e,{name:o}=t();return r.log(`Rule "${o}" is being executed.`),e},returnRuleResult=(e,{id:t},r)=>e.then((()=>({ruleId:t,status:"success"}))).catch((()=>({ruleId:t,status:"failed"}))).then((e=>{const t=e;return t.logs=r.getJsonLogs(),t}));const PROMISE_TIMEOUT=3e4;var executeRules=(e,t,r,o,{isDebugEnabled:n,headersForSubrequests:s}={})=>{const l=[],{rules:a,buildInfo:i}=t,u=JSON.stringify(o);return a.forEach((t=>{const o=n?createNewLogger({ruleId:t.id}):getFakeLogger,a={getRule:()=>t,getBuildInfo:()=>i,logger:o,fetch:getRuleFetchFn(r,s,o)},d={arcAndUtils:{utils:a,arc:{ruleStash:{},...JSON.parse(u)}}};let g=Promise.resolve(d);g=g.then(logRuleStarting),t.conditions&&t.conditions.forEach((t=>{g=addModuleToQueue(g,checkConditionResult,{timeout:3e4,...normalizeDelegate(t,e)},a)})),t.actions&&t.actions.forEach((t=>{g=addModuleToQueue(g,addActionResultToStash,{timeout:3e4,...normalizeDelegate(t,e)},a)})),g=returnRuleResult(g,t,o),l.push(g)})),Promise.all(l)};let dataElements={};const moduleProvider=createModuleProvider(),getDataElementDefinition=e=>dataElements[e],getDataElementValue=createGetDataElementValue(moduleProvider,getDataElementDefinition),getDataElementValues=createGetDataElementValues(getDataElementValue),initialize=(e,{fetch:t})=>{const r=e(getDataElementValues);return r.dataElements&&(dataElements=r.dataElements),moduleProvider.registerModules(r.modules,r.extensions),executeRules.bind(null,moduleProvider,r,t)};var src={initialize:initialize};module.exports=src;

/***/ }),

/***/ "./node_modules/reactor-extension-google-analytics-edge/src/lib/actions/sendData.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/reactor-extension-google-analytics-edge/src/lib/actions/sendData.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/***************************************************************************************
 * (c) 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/



module.exports = ({ arc, utils }) => {
  const { logger, fetch, getExtensionSettings, getSettings } = utils;
  const { endpoint, trackingId, version } = getExtensionSettings();
  const { parameters = [], customCode } = getSettings();

  let customCodeParameters;
  if (typeof customCode === 'function') {
    customCodeParameters = customCode(arc, utils);
    if (typeof customCodeParameters !== 'object') {
      // eslint-disable-next-line eqeqeq
      if (customCodeParameters != undefined) {
        logger.warn(
          'Ignoring custom code because it did not return an object.'
        );
      }

      customCodeParameters = {};
    }
  } else {
    logger.warn('The provided custom code parameter is not a function.');
  }

  const payloadDataParameters = parameters.reduce(
    (accumulator, { parameter, value }) => {
      accumulator[parameter] = value;
      return accumulator;
    },
    {}
  );

  const allParameters = Object.assign(
    { v: version, tid: trackingId },
    payloadDataParameters,
    customCodeParameters
  );

  let payloadData = '';

  const parametersKeys = Object.keys(allParameters);
  parametersKeys.forEach((parameterKey, index) => {
    const value = allParameters[parameterKey];
    payloadData += `${encodeURIComponent(parameterKey)}=${encodeURIComponent(
      value
    )}${index < parametersKeys.length - 1 ? '&' : ''}`;
  });

  const fetchOptions = {
    method: 'POST',
    body: payloadData
  };

  logger.log(
    'Validate your hit by going to',
    `https://ga-dev-tools.appspot.com/hit-builder/?${payloadData}`
  );

  return fetch(endpoint, fetchOptions);
};


/***/ }),

/***/ "./node_modules/reactor-worker-project-edge/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/reactor-worker-project-edge/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const createExecute = __webpack_require__(/*! ./src/createExecute */ "./node_modules/reactor-worker-project-edge/src/createExecute.js");
const engine = __webpack_require__(/*! @adobe/reactor-turbine-edge */ "./node_modules/@adobe/reactor-turbine-edge/dist/engine-server.min.js");

const { fetch } = global;
global.fetch = () => {};

const container = __webpack_require__(/*! ./dist/container */ "./dist/container.js");
const execute = createExecute(engine, container, { fetch });

async function handlePostRequest(request, event) {
  let requestBody = await readRequestBody(request);

  return execute(requestBody).then(([result, promise = null]) => {
    if (promise) {
      event.waitUntil(promise);
    }

    return new Response(JSON.stringify(result, null, 2), {
      status: 202,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
}

async function readRequestBody(request) {
  const { headers } = request;
  const contentType = headers.get('content-type');
  if (contentType.includes('application/json')) {
    const body = await request.json();
    return body;
  }

  return {};
}

/**
 * Fetch and log a request
 * @param {Request} request
 */
addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method === 'POST') {
    return event.respondWith(handlePostRequest(request, event));
  } else if (request.method === 'GET') {
    return event.respondWith(new Response());
  }
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../Library/Caches/.wrangler/wranglerjs-1.12.2/node_modules/webpack/buildin/global.js */ "../../../Library/Caches/.wrangler/wranglerjs-1.12.2/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/reactor-worker-project-edge/src/createExecute.js":
/*!***********************************************************************!*\
  !*** ./node_modules/reactor-worker-project-edge/src/createExecute.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

module.exports = (engine, containerInitFunction, { fetch }) => {
  const executeRules = engine.initialize(containerInitFunction, { fetch });

  return (request) => {
    const {
      header,
      body: { xdm, data },
    } = request;

    let {
      adobeAepValidationToken,
      httpHeaders = {},
      receivedAt,
      dispatchedAt,
    } = header;

    const isDebugEnabled = Boolean(adobeAepValidationToken);
    const input = { event: { xdm, data }, request };

    const headersForSubrequests = [
      'x-organization-id',
      'x-stack-id',
      'x-property-id',
      'x-environment-id',
      'x-request-id',
    ].reduce((acc, v) => {
      const h = httpHeaders[v];
      if (h) {
        acc[v] = Array.isArray(h) ? h.join(', ') : h;
      }
      return acc;
    }, {});

    // Add timestamps from Konductor to the subrequests headers.
    const dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';
    const extraHeaders = {
      'x-konductor-received-at': receivedAt,
      'x-konductor-dispatched-at': dispatchedAt,
    };

    Object.keys(extraHeaders).forEach((key) => {
      const value = extraHeaders[key];

      if (value) {
        try {
          headersForSubrequests[key] = new Date(value).toISOString(dateFormat);
        } catch (e) {}
      }
    });

    const result = {
      header: {
        createdAt: Date.now(),
      },
    };

    const executeRulesPromise = executeRules(input, {
      isDebugEnabled,
      headersForSubrequests,
    });

    if (isDebugEnabled) {
      return executeRulesPromise.then(function (engineResult) {
        if (isDebugEnabled) {
          result.body = {
            status: engineResult.reduce((acc, { ruleId, status }) => {
              acc.push([ruleId, status]);
              return acc;
            }, []),
            traces: engineResult.reduce(
              (acc, { logs }) => acc.concat(logs),
              [],
            ),
          };
        }

        return [result];
      });
    } else {
      return Promise.resolve([result, executeRulesPromise]);
    }
  };
};


/***/ })

/******/ });
