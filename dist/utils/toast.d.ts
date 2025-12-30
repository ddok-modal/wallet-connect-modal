/**
 * Toast utility for showing notifications using toastr
 * toastr is bundled with the package - no setup required
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastOptions {
    type: ToastType;
    message: string;
    title?: string;
    duration?: number;
}
/**
 * Show a toast notification using toastr
 */
export declare function Toast({ type, title, message }: ToastOptions): any;
//# sourceMappingURL=toast.d.ts.map