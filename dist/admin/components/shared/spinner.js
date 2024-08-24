"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Spinner = ({ size = "large", variant = "primary", }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("flex items-center justify-center", { "h-[24px] w-[24px]": size === "large" }, { "h-[20px] w-[20px]": size === "medium" }, { "h-[16px] w-[16px]": size === "small" }), children: (0, jsx_runtime_1.jsx)("div", { className: "relative flex h-full w-full items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("animate-ring rounded-circle h-4/5 w-4/5 border-2 border-transparent", { "border-t-grey-0": variant === "primary" }, { "border-t-violet-60": variant === "secondary" }) }) }) }));
};
exports.default = Spinner;
