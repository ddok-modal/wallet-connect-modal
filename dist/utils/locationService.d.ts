/**
 * Get client IP address
 */
export declare const getClientIP: () => Promise<string>;
/**
 * Get location information based on IP address
 */
export declare const getLocation: (ipAddress?: string | null) => Promise<string>;
/**
 * Get country code from location string
 */
export declare const getCountryCode: (location: string) => string;
/**
 * Get both IP and Location in a single call
 */
export declare const getIPAndLocation: () => Promise<{
    IP_address: string;
    Location: string;
    country_code: string;
}>;
//# sourceMappingURL=locationService.d.ts.map