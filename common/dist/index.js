"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsedInput = void 0;
const zod_1 = require("zod");
exports.parsedInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
