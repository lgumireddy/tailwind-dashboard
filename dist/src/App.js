"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentContainer_1 = __importDefault(require("./components/ContentContainer"));
const CollapsibleContainer_1 = __importDefault(require("./components/CollapsibleContainer"));
const NavigationBar_1 = __importDefault(require("./components/NavigationBar"));
function App() {
    return (React.createElement("div", null,
        React.createElement(NavigationBar_1.default, null),
        React.createElement(CollapsibleContainer_1.default, null)));
}
exports.default = App;
