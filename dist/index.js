"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeAPIClient = void 0;
// Re-export the client and its specific types
const client_1 = require("./client");
Object.defineProperty(exports, "PokeAPIClient", { enumerable: true, get: function () { return client_1.PokeAPIClient; } });
// Re-export types from each domain
__exportStar(require("./types/base"), exports);
__exportStar(require("./types/pokemon"), exports);
__exportStar(require("./types/berries"), exports);
__exportStar(require("./types/items"), exports);
__exportStar(require("./types/machines"), exports);
__exportStar(require("./types/moves"), exports);
//# sourceMappingURL=index.js.map