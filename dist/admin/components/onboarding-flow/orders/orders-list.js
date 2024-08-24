"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = __importDefault(require("../../shared/button"));
const medusa_react_1 = require("medusa-react");
const medusa_react_2 = require("medusa-react");
const medusa_react_3 = require("medusa-react");
const medusa_react_4 = require("medusa-react");
const medusa_react_5 = require("medusa-react");
const OrdersList = ({ onNext, isComplete, data }) => {
    const { product } = (0, medusa_react_1.useAdminProduct)(data.product_id);
    const { mutateAsync: createDraftOrder, isLoading } = (0, medusa_react_2.useAdminCreateDraftOrder)();
    const { client } = (0, medusa_react_5.useMedusa)();
    const { regions } = (0, medusa_react_4.useAdminRegions)();
    const { shipping_options } = (0, medusa_react_3.useAdminShippingOptions)();
    const createOrder = async () => {
        var _a;
        const variant = (_a = product.variants[0]) !== null && _a !== void 0 ? _a : null;
        try {
            const { draft_order } = await createDraftOrder({
                email: "customer@medusajs.com",
                items: [
                    variant
                        ? {
                            quantity: 1,
                            variant_id: variant.id,
                        }
                        : {
                            quantity: 1,
                            title: product.title,
                            unit_price: 50,
                        },
                ],
                shipping_methods: [
                    {
                        option_id: shipping_options[0].id,
                    },
                ],
                region_id: regions[0].id,
            });
            const { order } = await client.admin.draftOrders.markPaid(draft_order.id);
            onNext(order);
        }
        catch (e) {
            console.error(e);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "py-4", children: (0, jsx_runtime_1.jsx)("p", { children: "With a Product created, we can now place an Order. Click the button below to create a sample order." }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-2", children: !isComplete && ((0, jsx_runtime_1.jsx)(button_1.default, { variant: "primary", size: "small", onClick: () => createOrder(), loading: isLoading, children: "Create a sample order" })) })] }));
};
exports.default = OrdersList;
