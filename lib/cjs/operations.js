"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const sum_1 = __importDefault(require("./operations/sum"));
const subtract_1 = __importDefault(require("./operations/subtract"));
const Operations = {
    sum: sum_1.default,
    subtract: subtract_1.default,
};
exports.default = Operations;
//# sourceMappingURL=operations.js.map