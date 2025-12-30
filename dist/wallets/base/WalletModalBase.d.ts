import React from 'react';
import { WalletType } from '../../types';
/**
 * Base props for all wallet modals
 * Each wallet modal should extend this interface
 */
export interface WalletModalBaseProps {
    isOpen: boolean;
    onClose: () => void;
    wallet: WalletType;
    userId?: string;
    darkMode?: boolean;
}
/**
 * Base component interface for wallet modals
 * All wallet modals should implement this structure
 */
export interface WalletModalComponent extends React.FC<WalletModalBaseProps> {
}
/**
 * Helper to create a wallet modal wrapper
 * Ensures consistent structure across all wallet modals
 */
export declare const createWalletModalWrapper: <P extends WalletModalBaseProps>(ModalComponent: React.FC<P>) => WalletModalComponent;
//# sourceMappingURL=WalletModalBase.d.ts.map