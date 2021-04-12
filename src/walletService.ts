import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const connectWallet = () => {
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

  console.log("connector: ", connector);
  if (!connector.connected) {
    connector.createSession();
  }

  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }
    console.log("payload: ", payload);
  });

  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }
    const { accounts, chainId } = payload.params[0];
    console.log("accounts, chainId: ", accounts, chainId);
  });

  connector.on("disconnect", (error, payload) => {
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
const killSession = () => {
  const walletConnector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
  }); // Required
  if (walletConnector) {
    walletConnector.killSession();
    console.log("DISCONNECTED FROM WALLETCONNECT");
  }
};

export { connectWallet, killSession };
