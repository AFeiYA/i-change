# 组件使用指南

## 通用组件库

### PageHeader 组件
用于创建统一的页面头部。

```tsx
import { PageHeader } from '../components/common';

<PageHeader 
  icon="📖"
  title="页面标题"
  subtitle="页面副标题（可选）"
  className="custom-class"
/>
```

### ContentSection 组件
用于创建内容区块。

```tsx
import { ContentSection } from '../components/common';

<ContentSection icon="🎋" title="区块标题">
  <p>区块内容...</p>
</ContentSection>
```

### WisdomQuote 组件
用于显示智慧引言或重要引用。

```tsx
import { WisdomQuote } from '../components/common';

<WisdomQuote 
  quote="引言内容"
  author="作者"
  icon="✨"
/>
```

### BackgroundDecoration 组件
用于添加背景装饰符号。

```tsx
import { BackgroundDecoration } from '../components/common';

const symbols = ['☰', '☱', '☲', '☳'];
<BackgroundDecoration symbols={symbols} count={12} />
```

### StatCard 组件
用于显示统计信息卡片。

```tsx
import { StatCard } from '../components/common';

<StatCard 
  icon="📊"
  value={42}
  label="统计标签"
  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
/>
```

### Button 组件
通用按钮组件，支持多种样式和状态。

```tsx
import { Button } from '../components/common';

<Button 
  variant="primary" 
  size="medium"
  icon="📤"
  loading={false}
  onClick={handleClick}
>
  按钮文字
</Button>
```

**支持的 variant:**
- `primary`: 主要按钮
- `secondary`: 次要按钮
- `danger`: 危险操作按钮
- `success`: 成功按钮
- `outline`: 轮廓按钮

**支持的 size:**
- `small`: 小按钮
- `medium`: 中等按钮
- `large`: 大按钮

### List 组件
通用列表组件，支持多种样式。

```tsx
import { List } from '../components/common';

const items = [
  {
    id: '1',
    icon: '📚',
    content: <span>列表项内容</span>,
    action: () => console.log('点击事件')
  }
];

<List items={items} variant="method" />
```

**支持的 variant:**
- `default`: 默认样式
- `method`: 方法列表
- `feature`: 功能列表
- `resource`: 资源列表
- `advice`: 建议列表

## 错误边界组件

```tsx
import ErrorBoundary from '../components/ErrorBoundary';

<ErrorBoundary fallback={<div>自定义错误UI</div>}>
  <YourComponent />
</ErrorBoundary>
```

## 自定义 Hooks

### useA11y
提供无障碍支持功能。

```tsx
import { useA11y } from '../hooks/useA11y';

const MyComponent = () => {
  const { addAriaLabel, addAriaExpanded } = useA11y();
  
  // 自动添加键盘导航支持
};
```

### usePerformance Hooks

```tsx
import { 
  useDebounce, 
  useThrottle, 
  useLazyLoad, 
  useLocalStorage,
  useMediaQuery,
  useOnlineStatus 
} from '../hooks/usePerformance';

// 防抖
const debouncedValue = useDebounce(searchTerm, 300);

// 节流
const throttledCallback = useThrottle(handleScroll, 100);

// 懒加载
const { ref, isIntersecting } = useLazyLoad();

// 本地存储
const [value, setValue] = useLocalStorage('key', defaultValue);

// 媒体查询
const isMobile = useMediaQuery('(max-width: 768px)');

// 在线状态
const isOnline = useOnlineStatus();
```

### useLocalization
提供多语言支持。

```tsx
import { useLocalization } from '../contexts/LocalizationContext';

const MyComponent = () => {
  const { language, setLanguage, t } = useLocalization();
  
  return (
    <div>
      <h1>{t('about.title')}</h1>
      <button onClick={() => setLanguage('en')}>
        Switch to English
      </button>
    </div>
  );
};
```

## 最佳实践

1. **组件复用**: 优先使用通用组件，减少重复代码
2. **性能优化**: 使用 useDebounce 和 useThrottle 优化频繁操作
3. **无障碍性**: 使用 useA11y 确保应用的可访问性
4. **错误处理**: 用 ErrorBoundary 包装容易出错的组件
5. **国际化**: 使用 useLocalization 支持多语言
6. **响应式设计**: 使用 useMediaQuery 适配不同屏幕尺寸

## 样式约定

- 使用 CSS 变量进行主题切换
- 遵循移动优先的响应式设计
- 保持组件样式的模块化和可重用性
- 使用语义化的 CSS 类名
