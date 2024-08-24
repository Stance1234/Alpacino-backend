"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Badge = ({ children, variant, onClick, className, ...props }) => {
    const variantClassname = (0, clsx_1.default)({
        ["badge-primary"]: variant === "primary",
        ["badge-danger"]: variant === "danger",
        ["badge-success"]: variant === "success",
        ["badge-warning"]: variant === "warning",
        ["badge-ghost"]: variant === "ghost",
        ["badge-default"]: variant === "default",
        ["badge-disabled"]: variant === "disabled",
        ["bg-blue-10 border-blue-30 border font-normal text-blue-50"]: variant === "new-feature",
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("badge", variantClassname, className), onClick: onClick, ...props, children: children }));
};
exports.default = Badge;
