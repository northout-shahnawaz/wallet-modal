"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import WalletConnect from "@walletconnect/client";
var walletService_1 = __importDefault(require("./walletService"));
var apiService_1 = __importDefault(require("./apiService"));
var useWallet = function () {
    var _a = walletService_1.default(), connectWallet = _a.connectWallet, killSession = _a.killSession;
    var apiService = apiService_1.default();
    /**
     * Method to connect to wallet
     *
     * If not connected - returns URI
     *
     * Already connected - triggers event according to action taken
     * Events - connect, session update, disconnect
     */
    var createSession = function () {
        connectWallet();
    };
    /**
     * Method to disconnect from wallet
     */
    var destroySession = function () {
        killSession();
    };
    /**
     * Method used for sending transaction
     *
     * @param  data - data has paramters as receiver and amount
     *
     * @returns result - result contains hash
     */
    var transaction = function () {
        // this.config.transaction(data).subscribe((res: any) => {
        apiService.transaction("test");
        console.log("api transaction call");
    };
    /**
     * Coonect to walletconnect
     *
     * Bridge = "https://bridge.walletconnect.org"
     *
     * @package walletconnect - USed for using its functionality to send transaction
     *
     * sendCustomeRequest - Used for sending custom parameters to send transaction
     *
     * @param params - Pass onlt data if calling sendTransaction
     *               - Pass data and custom parameter for customSendTransaction
     *
     * @param data - Data contains account, contract name, function name, gas limit, and params
     *
     * @returns result - contains id and hash
     *
     *
     */
    var sendTransaction = function (data, receiver, amount) {
        // const walletConnector = new WalletConnect({
        //   bridge: "https://bridge.walletconnect.org",
        // }); // Required
        // const customRequest = {
        //   jsonrpc: "2.0",
        //   method: "eth_sendTransaction",
        //   params: [
        //     data,
        //     {
        //       transactionSummary:
        //         "You are sending " + amount + " token to this address " + receiver,
        //     },
        //   ],
        // };
        // walletConnector
        //   .sendCustomRequest(customRequest)
        //   .then((result) => {
        //     // Returns transaction id (hash)
        //   })
        //   .catch((error) => {
        //     // Error returned when rejected
        //   });
    };
    /**
     * Method for displaying balance of account
     *
     * @param contractName - "erc20"
     *
     * @param functionName - 'balanceOf'
     *
     * @param params - Logged-in account number
     *
     * @returns result - Result contains current balance
     */
    var blockChainResponse = function (data) {
        // this.config.getBalanceData(data).subscribe((res: any) => {
        //   if (res) {
        //     this.balance = res.Data;
        //   }
        // },
        //   (err) => {
        //     console.log(err)
        //   });
    };
    /**
     * Method for Saving  Assets to Wallet
     *
     * @param data - "contains object of the reciept"
     *
     * @returns result - Result contains the status of the operation.
     */
    var saveToWallet = function (data) {
        // const walletConnector = new WalletConnect({ bridge: "https://bridge.walletconnect.org" });// Required
        // console.log("walletConnector-->", walletConnector)
        // const customRequest = {
        //   method: "save_assests",
        //   params: data
        // };
        // console.log("customRequest", customRequest)
        // walletConnector.sendCustomRequest(customRequest)
        //   .then((result) => {
        //     // Returns request result
        //     console.log(result);
        //     observer.next({ result });
        //     console.log("after", result);
        //   })
        //   .catch((error) => {
        //     // Error returned when rejected
        //     console.error(error);
        //   });
    };
    var buyAsset = function (param) {
        // config.buyAsset(param).subscribe((res: any) => {
        //       console.log('buyAsset', res);
        //       if (res) {
        //       }
        //     });
    };
    var addAsset = function (param) {
        // this.config.addAsset(param).subscribe((res: any) => {
        //   console.log('addAsset', res);
        //   if (res) {
        //   }
        // });
    };
    var assetList = function (data) {
        //  config.assetList(data).subscribe((res: any) => {
        //     console.log('assetList', res);
        //     if (res) {
        //     }
        //   });
    };
    return {
        transaction: transaction,
        createSession: createSession,
        destroySession: destroySession,
        assetList: assetList,
        addAsset: addAsset,
        buyAsset: buyAsset,
        saveToWallet: saveToWallet,
        blockChainResponse: blockChainResponse,
        sendTransaction: sendTransaction,
    };
};
exports.default = useWallet;
//# sourceMappingURL=index.js.map