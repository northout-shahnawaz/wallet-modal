"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useApiService = function () {
    var transaction = function (data) {
        // return this._http.post(environment.transaction, data);
        console.log("api transaction call");
    };
    var getBalanceData = function (data) {
        // return this._http.post(environment.balanceData, data);
    };
    var getReceiptData = function (data) {
        // return this._http.get(`${environment.receiptData}${data}`);
    };
    var saveData = function (data) {
        // return this._http.post(environment.saveData, data);
    };
    var getHistory = function () {
        // return this._http.get(environment.getAssetHistory)
    };
    var getAssetHistory = function (data) { };
    var buyAsset = function (param) { };
    var addAsset = function (param) { };
    var assetList = function (data) { };
    return {
        transaction: transaction,
        getBalanceData: getBalanceData,
        getReceiptData: getReceiptData,
        saveData: saveData,
        getHistory: getHistory,
        getAssetHistory: getAssetHistory,
        buyAsset: buyAsset,
        addAsset: addAsset,
        assetList: assetList,
    };
};
exports.default = useApiService;
//# sourceMappingURL=apiService.js.map