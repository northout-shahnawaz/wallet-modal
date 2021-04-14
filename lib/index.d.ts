declare const useWallet: () => {
    transaction: () => void;
    createSession: () => void;
    destroySession: () => void;
    assetList: (data: any) => void;
    addAsset: (param: any) => void;
    buyAsset: (param: any) => void;
    saveToWallet: (data: any) => void;
    blockChainResponse: (data: any) => void;
    sendTransaction: (data: any, receiver: any, amount: any) => void;
};
export default useWallet;
//# sourceMappingURL=index.d.ts.map