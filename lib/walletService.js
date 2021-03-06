"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("@walletconnect/client"));
var qrcode_modal_1 = __importDefault(require("@walletconnect/qrcode-modal"));
var useWalletService = function () {
    var connectWallet = function () {
        var connector = new client_1.default({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: qrcode_modal_1.default,
        });
        console.log("connector: ", connector);
        if (!connector.connected) {
            connector.createSession();
        }
        connector.on("connect", function (error, payload) {
            if (error) {
                throw error;
            }
            console.log("payload: ", payload);
        });
        connector.on("session_update", function (error, payload) {
            if (error) {
                throw error;
            }
            var _a = payload.params[0], accounts = _a.accounts, chainId = _a.chainId;
            console.log("accounts, chainId: ", accounts, chainId);
        });
        connector.on("disconnect", function (error, payload) {
            if (error) {
                throw error;
            }
            window.location.href = "";
            console.log("payload: ", payload);
        });
    };
    /**
     * Method to disconnect from wallet
     *
     * Removes payload, uri and account datails from session
     */
    var killSession = function () {
        var walletConnector = new client_1.default({
            bridge: "https://bridge.walletconnect.org", // Required
        });
        if (walletConnector) {
            walletConnector.killSession();
            console.log("DISCONNECTED FROM WALLETCONNECT");
        }
    };
    return { killSession: killSession, connectWallet: connectWallet };
};
exports.default = useWalletService;
//# sourceMappingURL=walletService.js.map