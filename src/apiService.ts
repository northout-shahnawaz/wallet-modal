const useApiService = () => {
  const transaction = (data: any) => {
    // return this._http.post(environment.transaction, data);
    console.log("api transaction call");
  };

  const getBalanceData = (data: any) => {
    // return this._http.post(environment.balanceData, data);
  };

  const getReceiptData = (data: any) => {
    // return this._http.get(`${environment.receiptData}${data}`);
  };

  const saveData = (data: any) => {
    // return this._http.post(environment.saveData, data);
  };

  const getHistory = () => {
    // return this._http.get(environment.getAssetHistory)
  };

  const getAssetHistory = (data: any) => {};

  const buyAsset = (param: any) => {};
  const addAsset = (param: any) => {};
  const assetList = (data: any) => {};
  return {
    transaction,
    getBalanceData,
    getReceiptData,
    saveData,
    getHistory,
    getAssetHistory,
    buyAsset,
    addAsset,
    assetList,
  };
};
export default useApiService;
