declare const useSession: () => {
    setWalletURI: (uri: string) => void;
    getPayload: () => string | null;
    getWalletAccount: () => string | null;
    getWalletURI: () => string | null;
    setPayload: (data: any) => void;
    setWalletAccount: (data: any) => void;
};
export default useSession;
//# sourceMappingURL=sessionService.d.ts.map