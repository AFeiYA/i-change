import { useState, useCallback } from 'react';
import { useKeyboardShortcuts, KeyboardShortcut } from './useKeyboardShortcuts';
import { useTheme } from '../contexts/ThemeContext';

export const useAppShortcuts = () => {
    const [isHelpVisible, setIsHelpVisible] = useState(false);
    const { theme, setTheme, currentTheme } = useTheme();

    const toggleTheme = useCallback(() => {
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [currentTheme, setTheme]);

    const showHelp = useCallback(() => {
        setIsHelpVisible(true);
    }, []);

    const hideHelp = useCallback(() => {
        setIsHelpVisible(false);
    }, []);

    const goHome = useCallback(() => {
        window.location.href = '/';
    }, []);

    const goToDivination = useCallback(() => {
        window.location.href = '/divination';
    }, []);

    const goToClassics = useCallback(() => {
        window.location.href = '/classics';
    }, []);

    const goToProfile = useCallback(() => {
        window.location.href = '/profile';
    }, []);

    const shortcuts: KeyboardShortcut[] = [
        {
            key: 't',
            ctrl: true,
            callback: toggleTheme,
            description: '切换主题 (亮色/暗色)',
        },
        {
            key: 'h',
            ctrl: true,
            callback: goHome,
            description: '返回首页',
        },
        {
            key: 'd',
            ctrl: true,
            callback: goToDivination,
            description: '前往占卜页面',
        },
        {
            key: 'c',
            ctrl: true,
            callback: goToClassics,
            description: '前往六十四卦页面',
        },
        {
            key: 'p',
            ctrl: true,
            callback: goToProfile,
            description: '前往个人档案',
        },
        {
            key: '?',
            shift: true,
            callback: showHelp,
            description: '显示快捷键帮助',
        },
        {
            key: 'Escape',
            callback: hideHelp,
            description: '关闭帮助面板',
        },
    ];

    useKeyboardShortcuts(shortcuts);

    return {
        shortcuts,
        isHelpVisible,
        showHelp,
        hideHelp,
    };
};

export default useAppShortcuts;
