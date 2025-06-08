# I Ching 占卜应用部署指南

## 🚀 快速部署到 Netlify

### 方法一：通过 Netlify 网站部署（推荐）

1. **登录 Netlify**
   - 访问 [netlify.com](https://netlify.com)
   - 使用 GitHub 账户登录

2. **创建新站点**
   - 点击 "New site from Git"
   - 选择 "GitHub"
   - 找到并选择 `i-change` 仓库

3. **配置构建设置**
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `build`
   - 点击 "Deploy site"

4. **等待部署完成**
   - 首次部署大约需要 2-3 分钟
   - 部署完成后会获得一个 `.netlify.app` 域名

### 方法二：使用 Netlify CLI（命令行）

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 在项目根目录运行
cd "h:\Photoshop\yijie\i-ching-app"

# 部署到生产环境
netlify deploy --prod --dir=build
```

## 🌍 其他部署选项

### GitHub Pages
1. 在 GitHub 仓库设置中启用 Pages
2. 选择 GitHub Actions 作为源
3. 创建 `.github/workflows/deploy.yml` 文件

### Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账户登录
3. 导入 `i-change` 仓库
4. 自动检测 React 应用并部署

## 📋 部署前检查清单

- ✅ 生产构建已完成 (`npm run build`)
- ✅ 所有代码已推送到 GitHub
- ✅ Netlify 配置文件已添加
- ✅ 本地生产服务器测试通过
- ✅ 响应式布局在移动端正常工作
- ✅ 暗色主题切换功能正常

## 🔧 构建信息

- **构建命令**: `npm run build`
- **输出目录**: `build/`
- **构建大小**: ~90KB (gzipped)
- **JavaScript**: 81.82 kB
- **CSS**: 8.17 kB

## 🎯 部署后验证

部署完成后，请验证以下功能：

1. **核心功能**
   - [ ] 占卜功能正常工作
   - [ ] 卦象显示正确
   - [ ] 历史记录保存和显示
   - [ ] 个人资料设置

2. **界面布局**
   - [ ] 历史页面右侧边栏布局正确
   - [ ] 统计卡片显示在右侧
   - [ ] 移动端响应式布局正常

3. **主题切换**
   - [ ] 明/暗主题切换正常
   - [ ] 主题偏好设置保存

## 🌐 推荐域名配置

如果需要自定义域名：

1. 在 Netlify 中点击 "Domain settings"
2. 添加自定义域名
3. 配置 DNS 记录指向 Netlify

## 📱 PWA 功能

应用支持 PWA 功能，用户可以：
- 添加到主屏幕
- 离线使用（已缓存的页面）
- 接收推送通知（如已配置）

## 🎉 部署完成

恭喜！您的 I Ching 占卜应用已成功部署。

现在用户可以通过以下方式访问：
- 网页浏览器
- 移动设备浏览器
- 添加到手机主屏幕作为应用

---

**技术栈**: React 18 + TypeScript + CSS Grid + LocalStorage
**部署平台**: Netlify (推荐) / Vercel / GitHub Pages
**更新日期**: 2025年6月8日
