import { WalletType, WalletConfig } from '../types';
/**
 * Wallet Registry
 *
 * To add a new wallet:
 * 1. Add the wallet type to WalletType in types.ts
 * 2. Add configuration here
 * 3. Create the modal component in src/wallets/[wallet-name]/
 * 4. Register it in walletComponents map
 */
export declare const walletConfigs: Record<WalletType, WalletConfig>;
/**
 * Get wallet configuration by type
 */
export declare const getWalletConfig: (walletType: WalletType) => WalletConfig;
/**
 * Get all available wallet types
 */
export declare const getAllWalletTypes: () => WalletType[];
/**
 * Get wallet short key (for backend)
 */
export declare const getWalletShortKey: (walletType: WalletType) => string;
//# sourceMappingURL=registry.d.ts.map