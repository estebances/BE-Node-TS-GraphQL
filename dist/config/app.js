"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const version = 1;
exports.default = {
    api: {
        version,
        path: `/v${version}`,
    },
    port: process.env.PORT || 8081,
};
