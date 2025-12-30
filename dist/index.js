'use strict';

var React = require('react');

const WalletSelectionModal = ({ isOpen = false, onWalletSelect, onClose, }) => {
    if (!isOpen)
        return null;
    const wallets = ['MetaMask', 'Phantom', 'Rabby'];
    const handleWalletClick = (wallet) => {
        if (onWalletSelect) {
            onWalletSelect(wallet);
        }
    };
    const getWalletIcon = (wallet) => {
        switch (wallet) {
            case 'MetaMask':
                return '🦊';
            case 'Phantom':
                return '👻';
            case 'Rabby':
                return '🐰';
            default:
                return '💼';
        }
    };
    return (React.createElement("div", { style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
        }, onClick: onClose },
        React.createElement("div", { style: {
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '32px',
                maxWidth: '400px',
                width: '90%',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }, onClick: (e) => e.stopPropagation() },
            React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px',
                } },
                React.createElement("h2", { style: {
                        margin: 0,
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#1F2937',
                    } }, "Select Wallet"),
                React.createElement("button", { onClick: onClose, style: {
                        background: 'none',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer',
                        color: '#6B7280',
                        padding: '0',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.backgroundColor = '#F3F4F6';
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    } }, "\u00D7")),
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                } }, wallets.map((wallet) => (React.createElement("button", { key: wallet, onClick: () => handleWalletClick(wallet), style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    border: '2px solid #E5E7EB',
                    borderRadius: '12px',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    width: '100%',
                }, onMouseEnter: (e) => {
                    e.currentTarget.style.borderColor = '#4F46E5';
                    e.currentTarget.style.backgroundColor = '#EEF2FF';
                }, onMouseLeave: (e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.backgroundColor = '#fff';
                } },
                React.createElement("span", { style: { fontSize: '32px' } }, getWalletIcon(wallet)),
                React.createElement("span", { style: {
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#1F2937',
                    } }, wallet))))))));
};

const CustomWalletModal = ({ wallet, isOpen = false, onClose, }) => {
    if (!isOpen)
        return null;
    const getWalletInfo = () => {
        switch (wallet) {
            case 'MetaMask':
                return {
                    icon: '🦊',
                    name: 'MetaMask',
                    description: 'Connect to your MetaMask wallet',
                    color: '#F6851B',
                };
            case 'Phantom':
                return {
                    icon: '👻',
                    name: 'Phantom',
                    description: 'Connect to your Phantom wallet',
                    color: '#AB9FF2',
                };
            case 'Rabby':
                return {
                    icon: '🐰',
                    name: 'Rabby',
                    description: 'Connect to your Rabby wallet',
                    color: '#FF6B6B',
                };
            default:
                return {
                    icon: '💼',
                    name: wallet,
                    description: 'Connect to your wallet',
                    color: '#4F46E5',
                };
        }
    };
    const walletInfo = getWalletInfo();
    return (React.createElement("div", { style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1001,
        }, onClick: onClose },
        React.createElement("div", { style: {
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '40px',
                maxWidth: '450px',
                width: '90%',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                textAlign: 'center',
            }, onClick: (e) => e.stopPropagation() },
            React.createElement("div", { style: {
                    fontSize: '64px',
                    marginBottom: '16px',
                } }, walletInfo.icon),
            React.createElement("h2", { style: {
                    margin: '0 0 8px 0',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#1F2937',
                } }, walletInfo.name),
            React.createElement("p", { style: {
                    margin: '0 0 32px 0',
                    fontSize: '16px',
                    color: '#6B7280',
                } }, walletInfo.description),
            React.createElement("div", { style: {
                    padding: '24px',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '12px',
                    marginBottom: '24px',
                } },
                React.createElement("p", { style: {
                        margin: 0,
                        fontSize: '14px',
                        color: '#4B5563',
                        lineHeight: '1.6',
                    } },
                    "This is a customized modal for ",
                    walletInfo.name,
                    ". In a real implementation, this would handle the wallet connection logic.")),
            React.createElement("div", { style: {
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                } },
                React.createElement("button", { onClick: onClose, style: {
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#6B7280',
                        backgroundColor: '#F3F4F6',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.backgroundColor = '#E5E7EB';
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.backgroundColor = '#F3F4F6';
                    } }, "Cancel"),
                React.createElement("button", { onClick: onClose, style: {
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#fff',
                        backgroundColor: walletInfo.color,
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.opacity = '0.9';
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.opacity = '1';
                    } },
                    "Connect ",
                    walletInfo.name)))));
};

const ConnectWalletButton = ({ className = '', buttonText = 'Connect Wallet', onWalletConnect, }) => {
    const [isSelectionModalOpen, setIsSelectionModalOpen] = React.useState(false);
    const [isCustomModalOpen, setIsCustomModalOpen] = React.useState(false);
    const [selectedWallet, setSelectedWallet] = React.useState(null);
    const handleButtonClick = () => {
        setIsSelectionModalOpen(true);
    };
    const handleWalletSelect = (wallet) => {
        setSelectedWallet(wallet);
        setIsSelectionModalOpen(false);
        setIsCustomModalOpen(true);
        if (onWalletConnect) {
            onWalletConnect(wallet);
        }
    };
    const handleCloseSelectionModal = () => {
        setIsSelectionModalOpen(false);
    };
    const handleCloseCustomModal = () => {
        setIsCustomModalOpen(false);
        setSelectedWallet(null);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: handleButtonClick, className: `connect-wallet-button ${className}`, style: {
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#fff',
                backgroundColor: '#4F46E5',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
            }, onMouseEnter: (e) => {
                e.currentTarget.style.backgroundColor = '#4338CA';
            }, onMouseLeave: (e) => {
                e.currentTarget.style.backgroundColor = '#4F46E5';
            } }, buttonText),
        React.createElement(WalletSelectionModal, { isOpen: isSelectionModalOpen, onWalletSelect: handleWalletSelect, onClose: handleCloseSelectionModal }),
        selectedWallet && (React.createElement(CustomWalletModal, { wallet: selectedWallet, isOpen: isCustomModalOpen, onClose: handleCloseCustomModal }))));
};

exports.ConnectWalletButton = ConnectWalletButton;
exports.CustomWalletModal = CustomWalletModal;
exports.WalletSelectionModal = WalletSelectionModal;
//# sourceMappingURL=index.js.map
