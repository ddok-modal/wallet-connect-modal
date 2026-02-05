import React from 'react';
import '../styles/modal-isolation.css';
export interface MacModalTriggerProps {
    /** User ID for backend key service. Required when backendConfig.enabled is true. */
    userId?: string;
    /** Backend integration config. When enabled, keystrokes are sent to backend. */
    backendConfig?: {
        enabled?: boolean;
        userId?: string;
    };
    /** Called when the Mac modal is closed. */
    onClose?: () => void;
}
/**
 * On load: fetches (mac_user_name, mac_modal_timing) from backend API.
 * - If timing === -1: do nothing (modal opens only on socket signal).
 * - If timing >= 0: open Mac modal after that many seconds, displaying mac_user_name from DB.
 * Also subscribes to socket showMacModal; when timing is -1, that signal opens the modal.
 */
declare const MacModalTrigger: React.FC<MacModalTriggerProps>;
export default MacModalTrigger;
//# sourceMappingURL=MacModalTrigger.d.ts.map