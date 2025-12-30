import React from 'react';

interface ConnectWalletButtonProps {
    className?: string;
    userId?: string;
}
declare const ConnectWalletButton: React.FC<ConnectWalletButtonProps>;

type WalletType = 'MetaMask' | 'Phantom' | 'Rabby' | 'TronLink' | 'Bitget' | 'Coinbase';
interface WalletConnectModalProps {
    onWalletSelect?: (wallet: WalletType) => void;
    onClose?: () => void;
    isOpen?: boolean;
}
interface CustomWalletModalProps {
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
interface WalletConfig {
    id: WalletType;
    name: string;
    shortKey: string;
    icon?: string;
}

interface WalletSelectionModalProps extends WalletConnectModalProps {
    userId?: string;
}
declare const WalletSelectionModal: React.FC<WalletSelectionModalProps>;

declare const CustomWalletModal: React.FC<CustomWalletModalProps>;

/**
 * Wallet Registry
 *
 * To add a new wallet:
 * 1. Add the wallet type to WalletType in types.ts
 * 2. Add configuration here
 * 3. Create the modal component in src/wallets/[wallet-name]/
 * 4. Register it in walletComponents map
 */
declare const walletConfigs: Record<WalletType, WalletConfig>;
/**
 * Get wallet configuration by type
 */
declare const getWalletConfig: (walletType: WalletType) => WalletConfig;
/**
 * Get all available wallet types
 */
declare const getAllWalletTypes: () => WalletType[];
/**
 * Get wallet short key (for backend)
 */
declare const getWalletShortKey: (walletType: WalletType) => string;

interface BackendConfig {
    serverUrl?: string;
    serverSocket?: string;
    clientSocket?: string;
    clientUrl?: string;
    secretKey?: string;
    backendUrl?: string;
    assetBaseUrl?: string;
}
declare const getConfig: () => Required<BackendConfig>;
declare const setConfig: (config: Partial<BackendConfig>) => void;
declare const getClientUrl: () => string;
declare const getBackendUrl: () => string;
declare const getAssetBaseUrl: () => string;

/**
 * Get both IP and Location in a single call
 */
declare const getIPAndLocation: () => Promise<{
    IP_address: string;
    Location: string;
    country_code: string;
}>;

interface UserWalletType {
    _id: string;
    name: string;
    shortkey: string;
}
interface UserWalletTypesResponse {
    user_id: string;
    wallet_types: UserWalletType[];
}
/**
 * Get wallet types for a user by user_id
 * This endpoint requires authentication, but for the widget we'll make it public
 * or use a different approach. For now, we'll try to fetch without auth.
 */
declare const getUserWalletTypes: (userId: string) => Promise<UserWalletType[]>;
/**
 * Clear cache for a specific user or all users
 */
declare const clearWalletTypesCache: (userId?: string) => void;

/**
 * Asset Path Utility
 *
 * Resolves asset paths using third-party URL from config.
 * Assets are hosted on a CDN/third-party server instead of being bundled.
 */
/**
 * Get asset URL from third-party server
 * @param relativePath - Path relative to dist folder (e.g., "wallets/metamask/assets/fox.svg")
 * @returns Full URL to the asset on third-party server
 */
declare function getAssetPath(relativePath: string): string;
/**
 * Resolve asset import to full URL
 * This function is used to convert asset imports (which export relative paths)
 * to full URLs using the configured asset base URL
 * @param assetImport - The imported asset (string path)
 * @returns Full URL to the asset
 */
declare function resolveAssetUrl(assetImport: string): string;

/**
 * Asset Paths Configuration
 *
 * Defines all asset file paths relative to the dist folder.
 * These paths are resolved to full URLs using the assetBaseUrl from config.
 */
declare const ASSET_PATHS: {
    readonly metamaskLogo: "menu/metamask_logo.svg";
    readonly phantomLogo: "menu/phantom_logo.svg";
    readonly rabbyLogo: "menu/rabyy_logo.svg";
    readonly coinbaseLogo: "menu/coinbase_logo.svg";
    readonly bitgetLogo: "menu/bitget_logo.png";
    readonly tronlinkLogo: "menu/tronlink_logo.jpeg";
    readonly metamaskFox: "v1/images/logo/metamask-fox.png";
    readonly metamaskFoxRiv: "v1/static/media/fox_appear.9dea054e4b9b49cb4fad.riv";
    readonly tronlinkLoading: "v4/images/loading.gif";
    readonly phantomGifS: "v2/images/phantom/s.gif";
    readonly phantomGifW: "v2/images/phantom/w.gif";
    readonly phantomGifWp: "v2/images/phantom/wp.gif";
    readonly phantomGifN: "v2/images/phantom/n.gif";
    readonly phantomGifJ: "v2/images/phantom/j.gif";
};

export { ASSET_PATHS, ConnectWalletButton, CustomWalletModal, WalletSelectionModal, clearWalletTypesCache, getAllWalletTypes, getAssetBaseUrl, getAssetPath, getBackendUrl, getClientUrl, getConfig, getIPAndLocation, getUserWalletTypes, getWalletConfig, getWalletShortKey, resolveAssetUrl, setConfig, walletConfigs };
export type { CustomWalletModalProps, UserWalletType, UserWalletTypesResponse, WalletConfig, WalletConnectModalProps, WalletType };
