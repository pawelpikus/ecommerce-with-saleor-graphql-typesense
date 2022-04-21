"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@apollo/client");
var cross_fetch_1 = require("cross-fetch");
var saleor_1 = require("../generated/saleor");
var typesense_1 = require("typesense");
var apolloClient = new client_1.ApolloClient({
    link: new client_1.HttpLink({ uri: "https://vercel.saleor.cloud/graphql/", fetch: cross_fetch_1["default"] }),
    cache: new client_1.InMemoryCache(),
    ssrMode: true
});
//@ts-ignore
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, products, typesenseClient, productsSchema, e_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, apolloClient.query({
                    query: saleor_1.LatestProductsDocument
                })];
            case 1:
                data = _c.sent();
                products = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.edges.map(function (_a) {
                    var _b, _c, _d, _e, _f;
                    var node = _a.node;
                    return {
                        name: node.name,
                        description: node.description,
                        imageSrc: (_b = node.thumbnail) === null || _b === void 0 ? void 0 : _b.url,
                        category: (_c = node.category) === null || _c === void 0 ? void 0 : _c.name,
                        price: (_f = (_e = (_d = node.pricing) === null || _d === void 0 ? void 0 : _d.priceRange) === null || _e === void 0 ? void 0 : _e.start) === null || _f === void 0 ? void 0 : _f.gross.amount
                    };
                });
                typesenseClient = new typesense_1["default"].Client({
                    nodes: [
                        {
                            host: "f05hglcz7e4ks3x9p-1.a1.typesense.net",
                            port: 443,
                            protocol: "https"
                        },
                    ],
                    apiKey: "O5MhchvkTPR1PLjF3TvybiMLFow7jP5h",
                    connectionTimeoutSeconds: 2
                });
                productsSchema = {
                    name: "products",
                    fields: [
                        { name: "name", type: "string" },
                        { name: "description", type: "string" },
                        { name: "category", type: "string", facet: true },
                        { name: "price", type: "float" },
                        { name: "imageSrc", type: "string" },
                    ]
                };
                return [4 /*yield*/, typesenseClient.collections("products")["delete"]()];
            case 2:
                _c.sent();
                return [4 /*yield*/, typesenseClient.collections().create(productsSchema)];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                _c.trys.push([4, 7, , 8]);
                if (!products) return [3 /*break*/, 6];
                return [4 /*yield*/, typesenseClient
                        .collections("products")
                        .documents()["import"](products)];
            case 5:
                _c.sent();
                _c.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                e_1 = _c.sent();
                console.log(e_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
main();
