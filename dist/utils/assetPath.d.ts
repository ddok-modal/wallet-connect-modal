/**
 * Asset Path Utility
 *
 * Resolves asset paths using third-party URL from config.
 * Assets are hosted on a CDN/third-party server instead of being bundled.
 */
/**
 * Get asset URL from third-party server
 * @param relativePath - Path relative to dist folder (e.g., "wallets/metamask/assets/fox.svg")
 * @returns Full URL to the asset on third-party server
 */
export declare function getAssetPath(relativePath: string): string;
/**
 * Resolve asset import to full URL
 * This function is used to convert asset imports (which export relative paths)
 * to full URLs using the configured asset base URL
 * @param assetImport - The imported asset (string path)
 * @returns Full URL to the asset
 */
export declare function resolveAssetUrl(assetImport: string): string;
//# sourceMappingURL=assetPath.d.ts.map