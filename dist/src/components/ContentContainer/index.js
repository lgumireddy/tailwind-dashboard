"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bs_1 = require("react-icons/bs");
// import { useState } from 'react';
const ContentContainer = () => {
    return (React.createElement("div", { className: 'content-container' },
        React.createElement("div", { className: 'content-list' },
            React.createElement(Post, { name: 'Ada', timestamp: 'one week ago', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.` }),
            React.createElement(Post, { name: 'Leon', timestamp: 'one week ago', text: `Lorem ipsum dolor. ` }),
            React.createElement(Post, { name: 'Jill', timestamp: '5 days ago', text: `Lorem.` }),
            React.createElement(Post, { name: 'Ellie', timestamp: '4 days ago', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ` }),
            React.createElement(Post, { name: 'Chris', timestamp: '4 days ago', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.` }),
            React.createElement(Post, { name: 'Claire', timestamp: '2 days ago', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ` }),
            React.createElement(Post, { name: 'Albert', timestamp: '22 hours ago', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ ` }),
            React.createElement(Post, { name: 'Rebecca', timestamp: '3 hours ago', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.` }),
            React.createElement(Post, { name: 'H.U.N.K', timestamp: 'Just now', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.` }))));
};
const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random() * 100);
    return (React.createElement("div", { className: 'post' },
        React.createElement("div", { className: 'avatar-wrapper' },
            React.createElement("img", { src: `https://avatars.dicebear.com/api/open-peeps/${seed}.svg`, alt: '', className: 'avatar' })),
        React.createElement("div", { className: 'post-content' },
            React.createElement("p", { className: 'post-owner' },
                name,
                React.createElement("small", { className: 'timestamp' }, timestamp)),
            React.createElement("p", { className: 'post-text' }, text))));
};
const PlusIcon = () => (React.createElement(bs_1.BsPlusCircleFill, { size: '22', className: 'text-green-500 dark:shadow-lg mx-2 dark:text-primary' }));
exports.default = ContentContainer;
