import React from 'react';
import { KeyboardShortcut } from '../../hooks/useKeyboardShortcuts';

export interface KeyboardShortcutHelpProps {
    shortcuts: KeyboardShortcut[];
    isVisible: boolean;
    onClose: () => void;
}

const KeyboardShortcutHelp: React.FC<KeyboardShortcutHelpProps> = ({
    shortcuts,
    isVisible,
    onClose
}) => {
    if (!isVisible) return null;

    const formatShortcut = (shortcut: KeyboardShortcut): string => {
        const keys = [];
        if (shortcut.ctrl) keys.push('Ctrl');
        if (shortcut.alt) keys.push('Alt');
        if (shortcut.shift) keys.push('Shift');
        keys.push(shortcut.key.toUpperCase());
        return keys.join(' + ');
    };

    return (
        <div className="keyboard-help-overlay" onClick={onClose}>
            <div className="keyboard-help-panel" onClick={(e) => e.stopPropagation()}>
                <div className="help-header">
                    <h3>⌨️ 键盘快捷键</h3>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                
                <div className="help-content">
                    <div className="shortcuts-list">
                        {shortcuts.map((shortcut, index) => (
                            <div key={index} className="shortcut-item">
                                <div className="shortcut-keys">
                                    {formatShortcut(shortcut)}
                                </div>
                                <div className="shortcut-description">
                                    {shortcut.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="help-footer">
                        <p>💡 按 <kbd>Shift + ?</kbd> 再次显示此帮助面板</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyboardShortcutHelp;
