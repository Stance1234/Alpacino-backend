"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importStar(require("react"));
const spinner_1 = __importDefault(require("./spinner"));
const Button = react_1.default.forwardRef(({ variant = "primary", size = "large", loading = false, children, ...attributes }, ref) => {
    const handleClick = e => {
        if (!loading && attributes.onClick) {
            attributes.onClick(e);
        }
    };
    const variantClassname = (0, clsx_1.default)({
        ["btn-primary"]: variant === "primary",
        ["btn-secondary"]: variant === "secondary",
        ["btn-ghost"]: variant === "ghost",
        ["btn-danger"]: variant === "danger",
        ["btn-nuclear"]: variant === "nuclear",
    });
    const sizeClassname = (0, clsx_1.default)({
        ["btn-large"]: size === "large",
        ["btn-medium"]: size === "medium",
        ["btn-small"]: size === "small",
    });
    return ((0, jsx_runtime_1.jsx)("button", { ...attributes, className: (0, clsx_1.default)("btn", variantClassname, sizeClassname, attributes.className), disabled: attributes.disabled || loading, ref: ref, onClick: handleClick, children: loading ? ((0, jsx_runtime_1.jsx)(spinner_1.default, { size: size, variant: "secondary" })) : (react_1.Children.map(children, (child, i) => {
            return ((0, jsx_runtime_1.jsx)("span", { className: "mr-xsmall last:mr-0", children: child }, i));
        })) }));
});
exports.default = Button;
