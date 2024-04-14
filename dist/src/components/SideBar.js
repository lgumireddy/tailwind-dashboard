"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bs_1 = require("react-icons/bs");
const fi_1 = require("react-icons/fi");
const SideBar = (props) => {
    return (React.createElement("div", { className: "sidebar" },
        React.createElement("div", { className: "sidebar-top" },
            React.createElement(SideBarIcon, { icon: React.createElement(fi_1.FiInfo, { size: "28" }) }),
            React.createElement(SideBarIcon, { icon: React.createElement(bs_1.BsPlus, { size: "32" }) }),
            React.createElement(SideBarIcon, { icon: React.createElement(bs_1.BsFillLightningFill, { size: "20" }) }),
            React.createElement(SideBarIcon, { icon: React.createElement(bs_1.BsGearFill, { size: "20" }) })),
        React.createElement("div", { className: "sidebar-bottom" },
            props.isOpen
                ? React.createElement(SideBarIcon, { onClick: props.toggleCollapse, icon: React.createElement(bs_1.BsChevronBarLeft, { size: "22" }) })
                : React.createElement(SideBarIcon, { onClick: props.toggleCollapse, icon: React.createElement(bs_1.BsChevronBarRight, { size: "22" }) }),
            React.createElement(Divider, null))));
};
const SideBarIcon = ({ onClick, icon, text = 'tooltip 💡' }) => (React.createElement("div", { className: "sidebar-icon group", onClick: onClick },
    icon,
    React.createElement("span", { class: "sidebar-tooltip group-hover:scale-100" }, text)));
const Divider = () => React.createElement("hr", { className: "sidebar-hr" });
exports.default = SideBar;
