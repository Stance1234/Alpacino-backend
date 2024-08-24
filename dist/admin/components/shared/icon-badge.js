"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const badge_1 = __importDefault(require("./badge"));
const IconBadge = ({ children, variant, className, ...rest }) => {
    return ((0, jsx_runtime_1.jsx)(badge_1.default, { variant: variant !== null && variant !== void 0 ? variant : "default", className: (0, clsx_1.default)("outline-grey-20 flex aspect-square h-[40px] w-[40px] items-center justify-center border-2 border-white outline outline-1", className), ...rest, children: children }));
};
exports.default = IconBadge;
