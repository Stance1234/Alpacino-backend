"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = __importDefault(require("../../shared/button"));
const medusa_react_1 = require("medusa-react");
const medusa_react_2 = require("medusa-react");
// Needed for sample product creation — not exported by anything importable here
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["PUBLISHED"] = "published";
})(ProductStatus || (ProductStatus = {}));
const ProductsList = ({ onNext, isComplete }) => {
    const { mutateAsync: createCollection, isLoading: collectionLoading } = (0, medusa_react_1.useAdminCreateCollection)();
    const { mutateAsync: createProduct, isLoading: productLoading } = (0, medusa_react_1.useAdminCreateProduct)();
    const { regions } = (0, medusa_react_2.useAdminRegions)();
    const isLoading = collectionLoading || productLoading;
    const createSample = async () => {
        try {
            const { collection } = await createCollection({
                title: "Merch",
                handle: "merch",
            });
            const { product } = await createProduct({
                title: "Medusa T-Shirt",
                description: "Comfy t-shirt with Medusa logo",
                subtitle: "Black",
                is_giftcard: false,
                discountable: false,
                options: [{ title: "Size" }],
                images: [
                    "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
                    "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png",
                ],
                collection_id: collection.id,
                variants: [
                    {
                        title: "Small",
                        inventory_quantity: 25,
                        manage_inventory: true,
                        prices: regions.map(region => ({
                            amount: 5000,
                            currency_code: region.currency_code,
                        })),
                        options: [{ value: "S" }],
                    },
                    {
                        title: "Medium",
                        inventory_quantity: 10,
                        manage_inventory: true,
                        prices: regions.map(region => ({
                            amount: 5000,
                            currency_code: region.currency_code,
                        })),
                        options: [{ value: "M" }],
                    },
                    {
                        title: "Large",
                        inventory_quantity: 17,
                        manage_inventory: true,
                        prices: regions.map(region => ({
                            amount: 5000,
                            currency_code: region.currency_code,
                        })),
                        options: [{ value: "L" }],
                    },
                    {
                        title: "Extra Large",
                        inventory_quantity: 22,
                        manage_inventory: true,
                        prices: regions.map(region => ({
                            amount: 5000,
                            currency_code: region.currency_code,
                        })),
                        options: [{ value: "XL" }],
                    },
                ],
                status: ProductStatus.PUBLISHED,
            });
            onNext(product);
        }
        catch (e) {
            console.error(e);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Create a product and set its general details such as title and description, its price, options, variants, images, and more. You'll then use the product to create a sample order." }), (0, jsx_runtime_1.jsx)("p", { children: "You can create a product by clicking the \"New Product\" button below. Alternatively, if you're not ready to create your own product, we can create a sample one for you." }), !isComplete && ((0, jsx_runtime_1.jsx)("div", { className: "flex gap-2 mt-4", children: (0, jsx_runtime_1.jsx)(button_1.default, { variant: "secondary", size: "small", onClick: () => createSample(), loading: isLoading, children: "Create sample product" }) }))] }));
};
exports.default = ProductsList;
