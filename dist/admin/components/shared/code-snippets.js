"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const prism_react_renderer_1 = require("prism-react-renderer");
const clipboard_copy_icon_1 = __importDefault(require("./icons/clipboard-copy-icon"));
const check_circle_fill_icon_1 = __importDefault(require("./icons/check-circle-fill-icon"));
const CodeSnippets = ({ snippets, }) => {
    const [active, setActive] = (0, react_1.useState)(snippets[0]);
    const [copied, setCopied] = (0, react_1.useState)(false);
    const copyToClipboard = () => {
        setCopied(true);
        (0, copy_to_clipboard_1.default)(active.code);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rounded-lg bg-stone-900", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex gap-2 rounded-t-lg border-b border-b-stone-600 bg-stone-800 px-6 py-4", children: snippets.map(snippet => ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("text-small rounded-xl border border-transparent px-4 py-2 font-semibold", {
                        "border-stone-600 bg-stone-900 text-white": active.label === snippet.label,
                    }, {
                        "cursor-pointer text-gray-400": active.label !== snippet.label,
                    }), onClick: () => setActive(snippet), children: snippet.label }, snippet.label))) }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6 relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute right-4 top-4 text-gray-600 hover:text-gray-400 cursor-pointer", onClick: copyToClipboard, children: copied ? ((0, jsx_runtime_1.jsx)(check_circle_fill_icon_1.default, { size: "24px" })) : ((0, jsx_runtime_1.jsx)(clipboard_copy_icon_1.default, { size: "24px" })) }), (0, jsx_runtime_1.jsx)(prism_react_renderer_1.Highlight, { theme: {
                            ...prism_react_renderer_1.themes.palenight,
                            plain: {
                                color: "#7E7D86",
                                backgroundColor: "#1C1C1F",
                            },
                        }, code: active.code, language: active.language, children: ({ style, tokens, getLineProps, getTokenProps }) => ((0, jsx_runtime_1.jsx)("pre", { style: { ...style, background: "transparent", fontSize: "12px" }, children: tokens.map((line, i) => ((0, jsx_runtime_1.jsx)("div", { ...getLineProps({ line }), children: line.map((token, key) => ((0, jsx_runtime_1.jsx)("span", { ...getTokenProps({ token }) }, key))) }, i))) })) })] })] }));
};
exports.default = CodeSnippets;
