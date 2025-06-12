// 应用配置常量
export const APP_CONFIG = {
  name: '易经 I Ching',
  version: '1.0.0',
  description: '传统易经占卜应用',
  author: 'I Ching Team',
  
  // 功能开关
  features: {
    soundEffects: true,
    animations: true,
    darkMode: true,
    analytics: false,
    notifications: true,
  },
  
  // 本地化设置
  defaultLanguage: 'zh-CN',
  supportedLanguages: ['zh-CN', 'zh-TW', 'en'],
  
  // 主题设置
  defaultTheme: 'light',
  supportedThemes: ['light', 'dark', 'auto'],
  
  // 数据限制
  limits: {
    maxHistoryItems: 1000,
    maxExportSize: 10 * 1024 * 1024, // 10MB
    sessionTimeout: 30 * 60 * 1000, // 30分钟
  },
  
  // API设置
  api: {
    baseUrl: process.env.REACT_APP_API_URL || '',
    timeout: 10000,
    retryAttempts: 3,
  },
  
  // 缓存设置
  cache: {
    ttl: 24 * 60 * 60 * 1000, // 24小时
    maxSize: 100,
  },
} as const;

// 易经相关常量
export const ICHING_CONSTANTS = {
  totalHexagrams: 64,
  totalTrigrams: 8,
  linesPerHexagram: 6,
  
  // 占卜方法
  divinationMethods: {
    quick: 'quick',
    threeCoin: 'three-coin',
    yarrowStalk: 'yarrow-stalk',
  },
  
  // 卦象符号
  symbols: {
    solidLine: '━━━',
    brokenLine: '━ ━',
    changingYin: '━⚬━',
    changingYang: '━●━',
  },
  
  // 八卦符号
  trigramSymbols: ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'],
  
  // 装饰符号
  decorativeSymbols: ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷', '太', '极', '阴', '阳'],
} as const;

// 成就系统常量
export const ACHIEVEMENT_TYPES = {
  firstDivination: 'first-divination',
  multipleMethod: 'multiple-method',
  consistent: 'consistent',
  explorer: 'explorer',
  scholar: 'scholar',
} as const;

// 错误消息
export const ERROR_MESSAGES = {
  networkError: '网络连接失败，请检查网络设置',
  dataCorrupted: '数据损坏，请重新导入',
  exportFailed: '导出失败，请重试',
  importFailed: '导入失败，请检查文件格式',
  sessionExpired: '会话已过期，请刷新页面',
  unknownError: '发生未知错误，请联系技术支持',
} as const;

// 本地存储键名
export const STORAGE_KEYS = {
  theme: 'iching-theme',
  language: 'iching-language',
  preferences: 'iching-preferences',
  history: 'iching-history',
  stats: 'iching-stats',
  achievements: 'iching-achievements',
  lastVisit: 'iching-last-visit',
} as const;
