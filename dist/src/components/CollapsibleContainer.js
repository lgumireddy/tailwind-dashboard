"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChannelBar_1 = __importDefault(require("./ChannelBar"));
const SideBar_1 = __importDefault(require("./SideBar"));
const react_1 = __importStar(require("react"));
const CollapsibleContainer = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(true);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (react_1.default.createElement("div", { className: 'flex' },
        isOpen
            ? react_1.default.createElement(ChannelBar_1.default, null)
            : null,
        react_1.default.createElement(SideBar_1.default, { isOpen: isOpen, toggleCollapse: toggleCollapse })));
};
exports.default = CollapsibleContainer;
