"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchBar_1 = __importDefault(require("./SearchBar"));
const UserSettingsBar_1 = __importDefault(require("./UserSettingsBar"));
const TitleBar_1 = __importDefault(require("./TitleBar"));
require("./index.css");
const react_1 = __importDefault(require("react"));
const NavigationBar = () => {
    return (react_1.default.createElement("div", { className: 'navigation-bar' },
        react_1.default.createElement(TitleBar_1.default, null),
        react_1.default.createElement(SearchBar_1.default, null),
        react_1.default.createElement(UserSettingsBar_1.default, null)));
};
exports.default = NavigationBar;
