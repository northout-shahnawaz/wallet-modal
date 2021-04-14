declare const useApiService: () => {
    transaction: (data: any) => void;
    getBalanceData: (data: any) => void;
    getReceiptData: (data: any) => void;
    saveData: (data: any) => void;
    getHistory: () => void;
    getAssetHistory: (data: any) => void;
    buyAsset: (param: any) => void;
    addAsset: (param: any) => void;
    assetList: (data: any) => void;
};
export default useApiService;
//# sourceMappingURL=apiService.d.ts.map