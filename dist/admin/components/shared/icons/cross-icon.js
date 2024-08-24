"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CrossIcon = ({ size = "20", color = "currentColor", ...attributes }) => {
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attributes, children: [(0, jsx_runtime_1.jsx)("path", { d: "M15 5L5 15", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M5 5L15 15", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
};
exports.default = CrossIcon;
