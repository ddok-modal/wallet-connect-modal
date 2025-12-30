import React from 'react';
interface ModalContainerProps {
    children: React.ReactNode;
    className?: string;
}
/**
 * ModalContainer - Isolates modal styles from external project styles
 *
 * This component:
 * 1. Wraps modals in a scoped container to prevent style conflicts
 * 2. Uses CSS isolation to prevent external styles from affecting modal
 * 3. Ensures modal styles don't leak to the parent project
 * 4. Handles portal rendering to body
 *
 * Note: Individual modals should NOT use createPortal - this component handles it
 */
declare const ModalContainer: React.FC<ModalContainerProps>;
export default ModalContainer;
//# sourceMappingURL=ModalContainer.d.ts.map