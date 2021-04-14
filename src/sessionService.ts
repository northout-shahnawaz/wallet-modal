const useSession = () => {
  const setWalletURI = (uri: string) => {
    sessionStorage.setItem("dapp", uri);
  };
  const getWalletURI = () => {
    return sessionStorage.getItem("dapp");
  };
  const setPayload = (data: any) => {
    sessionStorage.setItem("payload", data);
  };
  const getPayload = () => {
    return sessionStorage.getItem("payload");
  };

  const setWalletAccount = (data: any) => {
    sessionStorage.setItem("account", data);
  };
  const getWalletAccount = () => {
    return sessionStorage.getItem("account");
  };

  return {
    setWalletURI,
    getPayload,
    getWalletAccount,
    getWalletURI,
    setPayload,
    setWalletAccount,
  };
};

export default useSession;
