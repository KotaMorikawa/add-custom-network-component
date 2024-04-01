"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const AddNetwork = () => {
  const [isInstall, setIsInstall] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsInstall(true);
    } else {
      setIsInstall(false);
    }
  }, []);

  const addMainnet = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x13B0",
            chainName: "ONIGIRI Mainnet",
            nativeCurrency: {
              name: "ONIGIRI",
              symbol: "ONGR",
              decimals: 18,
            },
            rpcUrls: ["https://subnets.avax.network/onigiri/mainnet/rpc"],
            blockExplorerUrls: ["https://subnets.avax.network/onigiri"],
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addTestnet = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x13AF",
            chainName: "ONIGIRI Testnet",
            nativeCurrency: {
              name: "ONIGIRI",
              symbol: "ONGR",
              decimals: 18,
            },
            rpcUrls: ["https://subnets.avax.network/onigiri/testnet/rpc"],
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center px-5 sm:px-0">
      {/* SP Component */}
      <div className="flex flex-col items-center gap-5 rounded-xl border p-8 sm:hidden">
        <p className="text-xl">ADD ONIGIRI CHAIN</p>
        {isInstall ? (
          <div className="flex h-full items-center justify-center gap-5">
            <button
              className="h-fit w-fit rounded-lg border bg-white p-2 text-black hover:bg-gray-300"
              onClick={async () => {
                await addMainnet();
              }}
            >
              ONIGIRI Mainnet
            </button>
            <button
              className="h-fit w-fit rounded-lg border bg-gray-500 p-2 hover:bg-gray-300"
              onClick={async () => {
                await addTestnet();
              }}
            >
              ONIGIRI Testnet
            </button>
          </div>
        ) : (
          <>
            <div className="flex h-full items-center justify-center">
              <p className="font-bold">Not found Metamask</p>
            </div>
          </>
        )}
      </div>

      {/* PC Component */}
      <div className="hidden h-1/3 w-1/3 flex-col items-center rounded-xl border p-10 sm:flex">
        <p className="text-2xl">ADD ONIGIRI CHAIN</p>
        {isInstall ? (
          <div className="flex h-full items-center justify-center gap-5">
            <button
              className="h-fit w-fit rounded-lg border bg-white p-2 text-black hover:bg-gray-300"
              onClick={async () => {
                await addMainnet();
              }}
            >
              ONIGIRI Mainnet
            </button>
            <button
              className="h-fit w-fit rounded-lg border bg-gray-500 p-2 hover:bg-gray-300"
              onClick={async () => {
                await addTestnet();
              }}
            >
              ONIGIRI Testnet
            </button>
          </div>
        ) : (
          <>
            <div className="flex h-full items-center justify-center">
              <p className="font-bold">Not found Metamask</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddNetwork;
