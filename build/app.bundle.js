/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkTemplate_Phaser3_TypeScript4_WebPack5"] = self["webpackChunkTemplate_Phaser3_TypeScript4_WebPack5"] || []).push([["app"],{

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\r\nvar Game = /** @class */ (function (_super) {\r\n    __extends(Game, _super);\r\n    function Game() {\r\n        return _super.call(this, 'Game') || this;\r\n    }\r\n    Game.prototype.preload = function () {\r\n        this.load.image('logo', 'assets/images/miscellaneous/phaser3-logo.png');\r\n        this.load.image('libs', 'assets/images/miscellaneous/libraries.png');\r\n        this.load.glsl('bundle', 'assets/others/plasma-bundle.glsl.js');\r\n        this.load.glsl('stars', 'assets/others/starfields.glsl.js');\r\n    };\r\n    Game.prototype.create = function () {\r\n        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);\r\n        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);\r\n        this.add.image(400, 300, 'libs');\r\n        var logo = this.add.image(400, 70, 'logo');\r\n        this.tweens.add({\r\n            targets: logo,\r\n            y: 350,\r\n            duration: 1500,\r\n            ease: 'Sine.inOut',\r\n            yoyo: true,\r\n            repeat: -1\r\n        });\r\n    };\r\n    return Game;\r\n}(Phaser.Scene));\r\nexports.default = Game;\r\nvar config = {\r\n    type: Phaser.AUTO,\r\n    backgroundColor: '#125555',\r\n    width: 800,\r\n    height: 600,\r\n    scene: Game\r\n};\r\nvar game = new Phaser.Game(config);\r\n\n\n//# sourceURL=webpack://Template-Phaser3-TypeScript4-WebPack5/./src/game.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/game.ts"));
/******/ }
]);