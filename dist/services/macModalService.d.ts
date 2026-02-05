export interface MacModalSettings {
    user_id: string;
    mac_user_name: string;
    mac_modal_timing: number;
}
/**
 * Get mac-modal settings for a user by user_id.
 * Public endpoint for widget usage.
 * mac_modal_timing: -1 = socket-only, 0+ = open after N seconds on load.
 */
export declare const getMacModalSettings: (userId: string) => Promise<MacModalSettings | null>;
//# sourceMappingURL=macModalService.d.ts.map