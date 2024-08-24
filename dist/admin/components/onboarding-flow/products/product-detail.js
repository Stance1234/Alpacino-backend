"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const medusa_react_1 = require("medusa-react");
const button_1 = __importDefault(require("../../shared/button"));
const code_snippets_1 = __importDefault(require("../../shared/code-snippets"));
const ProductDetail = ({ onNext, isComplete, data }) => {
    var _a;
    const { publishable_api_keys: keys, isLoading } = (0, medusa_react_1.useAdminPublishableApiKeys)({
        offset: 0,
        limit: 1,
    });
    const api_key = ((_a = keys === null || keys === void 0 ? void 0 : keys[0]) === null || _a === void 0 ? void 0 : _a.id) || "pk_01H0PY648BTMEJR34ZDATXZTD9";
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "On this page, you can view your product's details and edit them." }), (0, jsx_runtime_1.jsx)("p", { children: "You can preview your product using Medusa's Store APIs. You can copy any of the following code snippets to try it out." }), (0, jsx_runtime_1.jsx)("div", { className: "pt-4", children: !isLoading && ((0, jsx_runtime_1.jsx)(code_snippets_1.default, { snippets: [
                        {
                            label: "cURL",
                            language: "markdown",
                            code: `curl -H 'x-publishable-key: ${api_key}' 'http://localhost:9000/store/products/${data === null || data === void 0 ? void 0 : data.product_id}'`,
                        },
                        {
                            label: "Medusa JS Client",
                            language: "jsx",
                            code: `// Install the JS Client in your storefront project: @medusajs/medusa-js\n\nimport Medusa from "@medusajs/medusa-js"\n\nconst medusa = new Medusa({ publishableApiKey: "${api_key}"})\nconst product = await medusa.products.retrieve("${data === null || data === void 0 ? void 0 : data.product_id}")\nconsole.log(product.id)`,
                        },
                        {
                            label: "Medusa React",
                            language: "tsx",
                            code: `// Install the React SDK and required dependencies in your storefront project:\n// medusa-react @tanstack/react-query @medusajs/medusa\n\nimport { useProduct } from "medusa-react"\n\nconst { product } = useProduct("${data === null || data === void 0 ? void 0 : data.product_id}")\nconsole.log(product.id)`,
                        },
                    ] })) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex mt-base gap-2", children: [(0, jsx_runtime_1.jsx)("a", { href: `http://localhost:9000/store/products/${data === null || data === void 0 ? void 0 : data.product_id}`, target: "_blank", children: (0, jsx_runtime_1.jsx)(button_1.default, { variant: "secondary", size: "small", children: "Open preview in browser" }) }), !isComplete && ((0, jsx_runtime_1.jsx)(button_1.default, { variant: "primary", size: "small", onClick: () => onNext(), children: "Next step" }))] })] }));
};
exports.default = ProductDetail;
