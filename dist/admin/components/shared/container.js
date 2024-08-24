"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Container = ({ title, description, children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "border border-grey-20 rounded-rounded bg-white py-6 px-8 flex flex-col mb-base relative", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between", children: title && ((0, jsx_runtime_1.jsx)("h2", { className: "text-[24px] leading-9 font-semibold", children: title })) }), description && ((0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-500 mt-2", children: description }))] }), (0, jsx_runtime_1.jsx)("div", { children: children })] }));
};
exports.Container = Container;
