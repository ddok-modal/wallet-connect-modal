export interface UserWalletType {
    _id: string;
    name: string;
    shortkey: string;
}
export interface UserWalletTypesResponse {
    user_id: string;
    wallet_types: UserWalletType[];
}
/**
 * Get wallet types for a user by user_id
 * This endpoint requires authentication, but for the widget we'll make it public
 * or use a different approach. For now, we'll try to fetch without auth.
 */
export declare const getUserWalletTypes: (userId: string) => Promise<UserWalletType[]>;
/**
 * Clear cache for a specific user or all users
 */
export declare const clearWalletTypesCache: (userId?: string) => void;
//# sourceMappingURL=userWalletService.d.ts.map