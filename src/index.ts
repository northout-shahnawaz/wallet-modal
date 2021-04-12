import { connectWallet, killSession } from "./walletService";

export const createSession = () => {
  connectWallet();
};

export const destroySession = () => {
  killSession();
};
