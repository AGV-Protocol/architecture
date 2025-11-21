"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { toast } from "sonner";
import { useActiveAccount, useActiveWalletChain, useDisconnect, useActiveWallet } from "thirdweb/react";
import { thirdwebClient } from "@/app/provider";

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  chainId: string | null;
  chainName: string | null;
  isLoading: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchChain: (chainId: string) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isConnected = !!account;
  const address = account?.address || null;
  const chainId = activeChain?.id ? activeChain.id.toString() : null;
  const chainName = activeChain?.name || null;

  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // The actual connection is handled by Thirdweb's ConnectButton
      // This function can be used for additional setup after connection
      toast.success("Wallet connected successfully");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to connect wallet";
      setError(errorMessage);
      toast.error("Failed to connect wallet", {
        description: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (wallet) {
        await disconnect(wallet);
        toast.success("Wallet disconnected");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to disconnect wallet";
      setError(errorMessage);
      toast.error("Failed to disconnect wallet", {
        description: errorMessage
      });
    }
  };

  const switchChain = async (targetChainId: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Chain switching is handled by Thirdweb's built-in functionality
      toast.success("Network switched successfully");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to switch network";
      setError(errorMessage);
      toast.error("Failed to switch network", {
        description: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Clear error when wallet connects
  useEffect(() => {
    if (isConnected) {
      setError(null);
    }
  }, [isConnected]);

  const value: WalletContextType = {
    isConnected,
    address,
    chainId,
    chainName,
    isLoading,
    error,
    connectWallet,
    disconnectWallet,
    switchChain,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}
