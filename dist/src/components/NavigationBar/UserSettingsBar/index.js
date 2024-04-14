"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// NOTE: headlessui is not compatible with typescript; use @ts-ignore on related errors
const react_2 = require("@headlessui/react");
const bs_1 = require("react-icons/bs");
const useDarkMode_1 = __importDefault(require("../../../hooks/useDarkMode"));
const fa_1 = require("react-icons/fa");
const rx_1 = require("react-icons/rx");
const tb_1 = require("react-icons/tb");
const pi_1 = require("react-icons/pi");
require("./index.css");
const react_3 = __importDefault(require("react"));
const UserSettingsBar = () => {
    return (react_3.default.createElement("div", { className: 'user-settings-container' },
        react_3.default.createElement(Dropdown, null),
        react_3.default.createElement(UserCircle, null),
        react_3.default.createElement(BellIcon, null)));
};
const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = (0, useDarkMode_1.default)();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (react_3.default.createElement("span", { onClick: handleMode }, darkTheme ? (react_3.default.createElement(fa_1.FaSun, { size: '24', className: 'user-settings-dropdown-icon' })) : (react_3.default.createElement(fa_1.FaMoon, { size: '24', className: 'user-settings-dropdown-icon' }))));
};
// NOTE: need to destructure prop
function KebabMenuIcon({ isOpen }) {
    return isOpen
        ? react_3.default.createElement(tb_1.TbDotsVertical, { size: '24', className: 'active-user-settings-icon' })
        : react_3.default.createElement(tb_1.TbDotsVertical, { size: '24', className: 'user-settings-icon' });
}
const BellIcon = () => react_3.default.createElement(fa_1.FaRegBell, { size: '24', className: 'user-settings-icon' });
const UserCircle = () => react_3.default.createElement(fa_1.FaUserCircle, { size: '24', className: 'user-settings-icon' });
const HelpIcon = () => react_3.default.createElement(rx_1.RxQuestionMarkCircled, { size: '24', className: 'user-settings-dropdown-icon' });
const GearIcon = () => react_3.default.createElement(bs_1.BsGearFill, { size: '24', className: 'user-settings-dropdown-icon' });
const SignOutIcon = () => react_3.default.createElement(pi_1.PiSignOutFill, { size: '24', className: 'user-settings-dropdown-icon' });
function Dropdown() {
    const [customOpen, setCustomOpen] = (0, react_1.useState)(false);
    // TODO: when active the color should stay
    function buttonClicked() {
        setCustomOpen(prev => !prev);
    }
    return (react_3.default.createElement(react_2.Menu, null,
        react_3.default.createElement(react_2.Menu.Button, { onClick: buttonClicked },
            react_3.default.createElement(KebabMenuIcon, { isOpen: customOpen })),
        customOpen && (react_3.default.createElement(react_2.Menu.Items, { static: true, className: "absolute right-0 top-10 z-10 mt-2 w-10" },
            react_3.default.createElement("div", { className: "py-1 m-auto" },
                react_3.default.createElement(react_2.Menu.Item
                // @ts-ignore
                , { 
                    // @ts-ignore
                    className: 'block py-2' },
                    react_3.default.createElement("div", null,
                        react_3.default.createElement(ThemeIcon, null))),
                react_3.default.createElement(react_2.Menu.Item
                // @ts-ignore
                , { 
                    // @ts-ignore
                    className: 'block py-2' },
                    react_3.default.createElement("a", { href: "#" },
                        react_3.default.createElement(HelpIcon, null))),
                react_3.default.createElement(react_2.Menu.Item
                // @ts-ignore
                , { 
                    // @ts-ignore
                    className: 'block py-2' },
                    react_3.default.createElement("a", { href: "#" },
                        react_3.default.createElement(GearIcon, null))),
                react_3.default.createElement(react_2.Menu.Item
                // @ts-ignore
                , { 
                    // @ts-ignore
                    className: 'block py-2' },
                    react_3.default.createElement("a", { href: "#" },
                        react_3.default.createElement(SignOutIcon, null))))))));
}
exports.default = UserSettingsBar;
