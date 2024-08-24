"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const medusa_react_1 = require("medusa-react");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const order_detail_1 = __importDefault(require("../../components/onboarding-flow/orders/order-detail"));
const orders_list_1 = __importDefault(require("../../components/onboarding-flow/orders/orders-list"));
const product_detail_1 = __importDefault(require("../../components/onboarding-flow/products/product-detail"));
const products_list_1 = __importDefault(require("../../components/onboarding-flow/products/products-list"));
const accordion_1 = __importDefault(require("../../components/shared/accordion"));
const button_1 = __importDefault(require("../../components/shared/button"));
const container_1 = require("../../components/shared/container");
const get_started_icon_1 = __importDefault(require("../../components/shared/icons/get-started-icon"));
const STEP_FLOW = [
    "create_product",
    "preview_product",
    "create_order",
    "setup_finished",
];
const QUERY_KEY = ["onboarding_state"];
const OnboardingFlow = (props) => {
    var _a, _b;
    const { data, isLoading } = (0, medusa_react_1.useAdminCustomQuery)("/onboarding", QUERY_KEY);
    const { mutate } = (0, medusa_react_1.useAdminCustomPost)("/onboarding", QUERY_KEY);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const currentStep = (_a = data === null || data === void 0 ? void 0 : data.status) === null || _a === void 0 ? void 0 : _a.current_step;
    const [openStep, setOpenStep] = (0, react_1.useState)(currentStep);
    const [completed, setCompleted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setOpenStep(currentStep);
        if (currentStep === STEP_FLOW[STEP_FLOW.length - 1])
            setCompleted(true);
    }, [currentStep]);
    if (!isLoading &&
        ((_b = data === null || data === void 0 ? void 0 : data.status) === null || _b === void 0 ? void 0 : _b.is_complete) &&
        !localStorage.getItem("override_onboarding_finish"))
        return null;
    const updateServerState = (payload, onSuccess = () => { }) => {
        mutate(payload, { onSuccess });
    };
    const onStart = () => {
        updateServerState({ current_step: STEP_FLOW[0] });
        navigate(`/a/products`);
    };
    const setStepComplete = ({ step_id, extraData, onComplete, }) => {
        const next = STEP_FLOW[STEP_FLOW.findIndex((step) => step === step_id) + 1];
        updateServerState({ current_step: next, ...extraData }, onComplete);
    };
    const goToProductView = (product) => {
        setStepComplete({
            step_id: "create_product",
            extraData: { product_id: product.id },
            onComplete: () => navigate(`/a/products/${product.id}`),
        });
    };
    const goToOrders = () => {
        setStepComplete({
            step_id: "preview_product",
            onComplete: () => navigate(`/a/orders`),
        });
    };
    const goToOrderView = (order) => {
        setStepComplete({
            step_id: "create_order",
            onComplete: () => navigate(`/a/orders/${order.id}`),
        });
    };
    const onComplete = () => {
        setCompleted(true);
    };
    const onHide = () => {
        updateServerState({ is_complete: true });
    };
    const Steps = [
        {
            id: "create_product",
            title: "Create Product",
            component: products_list_1.default,
            onNext: goToProductView,
        },
        {
            id: "preview_product",
            title: "Preview Product",
            component: product_detail_1.default,
            onNext: goToOrders,
        },
        {
            id: "create_order",
            title: "Create an Order",
            component: orders_list_1.default,
            onNext: goToOrderView,
        },
        {
            id: "setup_finished",
            title: "Setup Finished: Start developing with Medusa",
            component: order_detail_1.default,
        },
    ];
    const isStepComplete = (step_id) => STEP_FLOW.indexOf(currentStep) > STEP_FLOW.indexOf(step_id);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(container_1.Container, { children: (0, jsx_runtime_1.jsxs)(accordion_1.default, { type: "single", className: "my-3", value: openStep, onValueChange: (value) => setOpenStep(value), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "mr-5", children: (0, jsx_runtime_1.jsx)(get_started_icon_1.default, {}) }), !completed ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "font-semibold text-lg", children: "Get started" }), (0, jsx_runtime_1.jsx)("p", { children: "Learn the basics of Medusa by creating your first order." })] }), (0, jsx_runtime_1.jsx)("div", { className: "ml-auto flex items-start gap-2", children: !!currentStep ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: currentStep === STEP_FLOW[STEP_FLOW.length - 1] ? ((0, jsx_runtime_1.jsx)(button_1.default, { variant: "primary", size: "small", onClick: () => onComplete(), children: "Complete Setup" })) : ((0, jsx_runtime_1.jsx)(button_1.default, { variant: "secondary", size: "small", onClick: () => onHide(), children: "Cancel Setup" })) })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(button_1.default, { variant: "secondary", size: "small", onClick: () => onHide(), children: "Close" }), (0, jsx_runtime_1.jsx)(button_1.default, { variant: "primary", size: "small", onClick: () => onStart(), children: "Begin setup" })] })) })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "font-semibold text-lg", children: "Thank you for completing the setup guide!" }), (0, jsx_runtime_1.jsxs)("p", { children: ["This whole experience was built using our new", " ", (0, jsx_runtime_1.jsx)("strong", { children: "widgets" }), " feature.", (0, jsx_runtime_1.jsx)("br", {}), " You can find out more details and build your own by following", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://docs.medusajs.com/admin/onboarding?ref=onboarding", target: "_blank", className: "text-blue-500 font-semibold", children: "our guide" }), "."] })] }), (0, jsx_runtime_1.jsx)("div", { className: "ml-auto flex items-start gap-2", children: (0, jsx_runtime_1.jsx)(button_1.default, { variant: "secondary", size: "small", onClick: () => onHide(), children: "Close" }) })] }))] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-5", children: (!completed ? Steps : Steps.slice(-1)).map((step) => {
                            const isComplete = isStepComplete(step.id);
                            const isCurrent = currentStep === step.id;
                            return ((0, jsx_runtime_1.jsx)(accordion_1.default.Item, { title: step.title, value: step.id, headingSize: "medium", active: isCurrent, complete: isComplete, disabled: !isComplete && !isCurrent, ...(!isComplete &&
                                    !isCurrent && {
                                    customTrigger: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
                                }), children: (0, jsx_runtime_1.jsx)("div", { className: "py-3 px-11 text-gray-500", children: (0, jsx_runtime_1.jsx)(step.component, { onNext: step.onNext, isComplete: isComplete, data: data === null || data === void 0 ? void 0 : data.status, ...props }) }) }, step.id));
                        }) })] }) }) }));
};
exports.config = {
    zone: [
        "product.list.before",
        "product.details.before",
        "order.list.before",
        "order.details.before",
    ],
};
exports.default = OnboardingFlow;
