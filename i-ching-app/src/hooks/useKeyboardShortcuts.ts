import { useEffect, useCallback } from 'react';

export interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  callback: () => void;
  description: string;
}

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const matchedShortcut = shortcuts.find(
        (shortcut) =>
          event.key.toLowerCase() === shortcut.key.toLowerCase() &&
          !!event.ctrlKey === !!shortcut.ctrl &&
          !!event.altKey === !!shortcut.alt &&
          !!event.shiftKey === !!shortcut.shift
      );

      if (matchedShortcut) {
        event.preventDefault();
        matchedShortcut.callback();
      }
    },
    [shortcuts]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};

// 预定义的快捷键
export const APP_SHORTCUTS: KeyboardShortcut[] = [
  {
    key: 't',
    ctrl: true,
    callback: () => {
      // 这将由使用的组件提供
    },
    description: 'Ctrl+T - 切换主题',
  },
  {
    key: 'h',
    ctrl: true,
    callback: () => {
      window.location.href = '/';
    },
    description: 'Ctrl+H - 返回首页',
  },
  {
    key: '?',
    shift: true,
    callback: () => {
      // 显示帮助面板
    },
    description: 'Shift+? - 显示快捷键帮助',
  },
];
