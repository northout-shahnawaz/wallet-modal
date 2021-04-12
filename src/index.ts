import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const walletModal = () => {
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
    // window.location.href = "home";
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
export default walletModal;
