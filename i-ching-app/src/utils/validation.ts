// 数据验证工具
export const validators = {
  // 验证卦象数据
  validateHexagram: (hexagram: any): boolean => {
    if (!hexagram || typeof hexagram !== 'object') return false;
    
    const requiredFields = ['number', 'chineseName', 'englishName', 'lines'];
    return requiredFields.every(field => hexagram[field] !== undefined);
  },

  // 验证爻线数据
  validateLine: (line: any): boolean => {
    if (!line || typeof line !== 'object') return false;
    
    return typeof line.position === 'number' && 
           ['solid', 'broken'].includes(line.type) &&
           line.position >= 1 && line.position <= 6;
  },

  // 验证用户偏好设置
  validatePreferences: (prefs: any): boolean => {
    if (!prefs || typeof prefs !== 'object') return false;
    
    const validThemes = ['light', 'dark', 'auto'];
    const validLanguages = ['zh-CN', 'zh-TW', 'en'];
    
    return (!prefs.theme || validThemes.includes(prefs.theme)) &&
           (!prefs.language || validLanguages.includes(prefs.language)) &&
           (prefs.autoSave === undefined || typeof prefs.autoSave === 'boolean');
  },

  // 验证导出数据格式
  validateExportData: (data: any): boolean => {
    if (!data || typeof data !== 'object') return false;
    
    const requiredSections = ['version', 'timestamp', 'preferences', 'history'];
    return requiredSections.every(section => data[section] !== undefined);
  },

  // 验证占卜历史记录
  validateHistoryEntry: (entry: any): boolean => {
    if (!entry || typeof entry !== 'object') return false;
    
    return entry.id && 
           entry.timestamp && 
           entry.method && 
           entry.hexagram &&
           validators.validateHexagram(entry.hexagram);
  },

  // 验证文件大小
  validateFileSize: (file: File, maxSize: number): boolean => {
    return file.size <= maxSize;
  },

  // 验证JSON格式
  validateJSON: (jsonString: string): any => {
    try {
      return JSON.parse(jsonString);
    } catch {
      return null;
    }
  },
};

// 数据清理工具
export const cleaners = {
  // 清理用户输入
  sanitizeInput: (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  },

  // 清理HTML内容
  sanitizeHTML: (html: string): string => {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  },

  // 移除无效的历史记录
  cleanHistoryData: (history: any[]): any[] => {
    return history.filter(entry => validators.validateHistoryEntry(entry));
  },

  // 标准化卦象数据
  normalizeHexagram: (hexagram: any): any => {
    return {
      ...hexagram,
      number: parseInt(hexagram.number),
      lines: hexagram.lines.map((line: any) => ({
        ...line,
        position: parseInt(line.position),
      })),
    };
  },
};

// 错误处理工具
export const errorHandlers = {
  // 处理网络错误
  handleNetworkError: (error: Error): string => {
    if (error.message.includes('fetch')) {
      return '网络连接失败，请检查网络设置';
    }
    return '网络请求出错，请稍后重试';
  },

  // 处理数据解析错误
  handleParseError: (error: Error): string => {
    return '数据格式错误，请检查文件内容';
  },

  // 处理权限错误
  handlePermissionError: (error: Error): string => {
    return '权限不足，请检查浏览器设置';
  },

  // 通用错误处理
  handleGenericError: (error: Error): string => {
    console.error('Application error:', error);
    return '发生未知错误，请联系技术支持';
  },
};

// 性能监控工具
export const performanceUtils = {
  // 测量函数执行时间
  measureTime: async <T>(fn: () => Promise<T> | T, label: string): Promise<T> => {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(`${label}: ${end - start}ms`);
    return result;
  },

  // 防抖函数
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  // 节流函数
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  },
  // 内存使用监控
  getMemoryUsage: (): any => {
    if ('memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  },
};
