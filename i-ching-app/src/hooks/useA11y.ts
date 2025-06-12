import { useEffect } from 'react';

export const useA11y = () => {
  useEffect(() => {
    // 添加键盘导航支持
    const handleKeyDown = (event: KeyboardEvent) => {
      // ESC 键关闭模态框
      if (event.key === 'Escape') {
        const closeButtons = document.querySelectorAll('.close-btn, .modal-overlay');
        const lastCloseButton = closeButtons[closeButtons.length - 1] as HTMLElement;
        if (lastCloseButton) {
          lastCloseButton.click();
        }
      }
      
      // Tab 键循环焦点在模态框内
      if (event.key === 'Tab') {
        const modal = document.querySelector('.modal-overlay:last-of-type');
        if (modal) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 添加 ARIA 标签的辅助函数
  const addAriaLabel = (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  };

  const addAriaExpanded = (element: HTMLElement, expanded: boolean) => {
    element.setAttribute('aria-expanded', expanded.toString());
  };

  const addAriaHidden = (element: HTMLElement, hidden: boolean) => {
    element.setAttribute('aria-hidden', hidden.toString());
  };

  return {
    addAriaLabel,
    addAriaExpanded,
    addAriaHidden,
  };
};
