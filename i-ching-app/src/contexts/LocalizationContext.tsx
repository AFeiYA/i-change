import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh-CN' | 'zh-TW' | 'en';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// 翻译字典
const translations = {
  'zh-CN': {
    // Navigation
    'nav.divination': '占卜',
    'nav.classics': '经典',
    'nav.history': '历史',
    'nav.about': '关于',
    'nav.profile': '我的',
    
    // About Page
    'about.title': '关于易经',
    'about.subtitle': '探索古老智慧，洞察人生真理',
    'about.intro.title': '易经简介',
    'about.methods.title': '占卜方法',
    'about.suggestions.title': '使用建议',
    'about.features.title': '应用特色',
    'about.resources.title': '学习资源',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '出错了',
    'common.retry': '重试',
    'common.close': '关闭',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.confirm': '确认',
  },
  'zh-TW': {
    // Navigation
    'nav.divination': '占卜',
    'nav.classics': '經典',
    'nav.history': '歷史',
    'nav.about': '關於',
    'nav.profile': '我的',
    
    // About Page
    'about.title': '關於易經',
    'about.subtitle': '探索古老智慧，洞察人生真理',
    'about.intro.title': '易經簡介',
    'about.methods.title': '占卜方法',
    'about.suggestions.title': '使用建議',
    'about.features.title': '應用特色',
    'about.resources.title': '學習資源',
    
    // Common
    'common.loading': '載入中...',
    'common.error': '出錯了',
    'common.retry': '重試',
    'common.close': '關閉',
    'common.save': '儲存',
    'common.cancel': '取消',
    'common.confirm': '確認',
  },
  'en': {
    // Navigation
    'nav.divination': 'Divination',
    'nav.classics': 'Classics',
    'nav.history': 'History',
    'nav.about': 'About',
    'nav.profile': 'Profile',
    
    // About Page
    'about.title': 'About I Ching',
    'about.subtitle': 'Explore Ancient Wisdom, Gain Life Insights',
    'about.intro.title': 'Introduction to I Ching',
    'about.methods.title': 'Divination Methods',
    'about.suggestions.title': 'Usage Suggestions',
    'about.features.title': 'App Features',
    'about.resources.title': 'Learning Resources',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.retry': 'Retry',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
  },
};

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('i-ching-language');
    return (saved as Language) || 'zh-CN';
  });

  useEffect(() => {
    localStorage.setItem('i-ching-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
