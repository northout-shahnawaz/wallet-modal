// import WalletConnect from "@walletconnect/client";
import useWalletService from "./walletService";
import useApiService from "./apiService";

const useWallet = () => {
  const { connectWallet, killSession } = useWalletService();
  const apiService = useApiService();

  /**
   * Method to connect to wallet
   *
   * If not connected - returns URI
   *
   * Already connected - triggers event according to action taken
   * Events - connect, session update, disconnect
   */
  const createSession = () => {
    connectWallet();
  };

  /**
   * Method to disconnect from wallet
   */
  const destroySession = () => {
    killSession();
  };

  /**
   * Method used for sending transaction
   *
   * @param  data - data has paramters as receiver and amount
   *
   * @returns result - result contains hash
   */
  const transaction = () => {
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
  const sendTransaction = (data: any, receiver: any, amount: any) => {
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
  const blockChainResponse = (data: any) => {
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

  const saveToWallet = (data: any) => {
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

  const buyAsset = (param: any) => {
    // config.buyAsset(param).subscribe((res: any) => {
    //       console.log('buyAsset', res);
    //       if (res) {
    //       }
    //     });
  };

  const addAsset = (param: any) => {
    // this.config.addAsset(param).subscribe((res: any) => {
    //   console.log('addAsset', res);
    //   if (res) {
    //   }
    // });
  };

  const assetList = (data: any) => {
    //  config.assetList(data).subscribe((res: any) => {
    //     console.log('assetList', res);
    //     if (res) {
    //     }
    //   });
  };

  return {
    transaction,
    createSession,
    destroySession,
    assetList,
    addAsset,
    buyAsset,
    saveToWallet,
    blockChainResponse,
    sendTransaction,
  };
};

export default useWallet;
