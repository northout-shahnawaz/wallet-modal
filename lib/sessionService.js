"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useSession = function () {
    var setWalletURI = function (uri) {
        sessionStorage.setItem("dapp", uri);
    };
    var getWalletURI = function () {
        return sessionStorage.getItem("dapp");
    };
    var setPayload = function (data) {
        sessionStorage.setItem("payload", data);
    };
    var getPayload = function () {
        return sessionStorage.getItem("payload");
    };
    var setWalletAccount = function (data) {
        sessionStorage.setItem("account", data);
    };
    var getWalletAccount = function () {
        return sessionStorage.getItem("account");
    };
    return {
        setWalletURI: setWalletURI,
        getPayload: getPayload,
        getWalletAccount: getWalletAccount,
        getWalletURI: getWalletURI,
        setPayload: setPayload,
        setWalletAccount: setWalletAccount,
    };
};
exports.default = useSession;
//# sourceMappingURL=sessionService.js.map