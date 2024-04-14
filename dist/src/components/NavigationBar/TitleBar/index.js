"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
require("./index.css");
const TitleBar = () => {
    return (React.createElement("div", { className: 'title-bar' },
        React.createElement(HashtagIcon, null),
        React.createElement(Title, null)));
};
const HashtagIcon = () => React.createElement(fa_1.FaHashtag, { size: '20', className: 'title-hashtag' });
const Title = () => React.createElement("h5", { className: 'title-text' }, "spog v1.0.0");
exports.default = TitleBar;
