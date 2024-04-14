"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const lu_1 = require("react-icons/lu");
require("./index.css");
const SearchBar = () => {
    return (React.createElement("div", { className: 'search-bar' },
        React.createElement(BackButton, null),
        React.createElement(ForwardButton, null),
        React.createElement(HistoryButton, null),
        React.createElement(Search, null)));
};
const Search = () => (React.createElement("div", { className: 'search' },
    React.createElement(fa_1.FaSearch, { size: '18', className: 'search-icon' }),
    React.createElement("input", { className: 'search-input', type: 'text', placeholder: 'Search...' })));
const BackButton = () => React.createElement(fa_1.FaArrowLeft, { size: '24', className: 'search-bar-icon' });
const ForwardButton = () => React.createElement(fa_1.FaArrowRight, { size: '24', className: 'search-bar-icon' });
const HistoryButton = () => React.createElement(lu_1.LuClock3, { size: '30', className: 'search-bar-icon' });
exports.default = SearchBar;
/*
Need to add
1. clear button
2. a way view favorites
*/ 
