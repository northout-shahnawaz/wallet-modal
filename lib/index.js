"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroySession = exports.createSession = void 0;
var walletService_1 = require("./walletService");
var createSession = function () {
    walletService_1.connectWallet();
};
exports.createSession = createSession;
var destroySession = function () {
    walletService_1.killSession();
};
exports.destroySession = destroySession;
//# sourceMappingURL=index.js.map