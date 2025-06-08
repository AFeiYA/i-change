#!/bin/bash
# 部署验证脚本

echo "=== I-Ching 应用部署验证 ==="
echo "时间: $(date)"
echo ""

# 检查本地构建
echo "1. 检查本地构建..."
if [ -f "i-ching-app/build/index.html" ]; then
    echo "✓ 构建文件存在"
    
    # 检查是否有错误的脚本引用
    if grep -q "bundle.js" i-ching-app/build/index.html; then
        echo "✗ 发现错误的 bundle.js 引用"
    else
        echo "✓ 没有错误的脚本引用"
    fi
    
    # 检查正确的资源引用
    if grep -q "/static/js/main" i-ching-app/build/index.html; then
        echo "✓ 找到正确的 JavaScript 资源"
    else
        echo "✗ 缺少 JavaScript 资源引用"
    fi
    
    if grep -q "/static/css/main" i-ching-app/build/index.html; then
        echo "✓ 找到正确的 CSS 资源"
    else
        echo "✗ 缺少 CSS 资源引用"
    fi
else
    echo "✗ 构建文件不存在，请先运行 npm run build"
    exit 1
fi

echo ""
echo "2. 检查 Netlify 配置..."
if [ -f "netlify.toml" ]; then
    echo "✓ netlify.toml 存在"
    
    if grep -q 'base = "i-ching-app"' netlify.toml; then
        echo "✓ 基础目录配置正确"
    else
        echo "✗ 基础目录配置错误"
    fi
    
    if grep -q 'publish = "i-ching-app/build"' netlify.toml; then
        echo "✓ 发布目录配置正确"
    else
        echo "✗ 发布目录配置错误"
    fi
else
    echo "✗ netlify.toml 不存在"
fi

echo ""
echo "3. 检查 Git 状态..."
git status --porcelain
if [ $? -eq 0 ] && [ -z "$(git status --porcelain)" ]; then
    echo "✓ 工作目录干净，所有更改已提交"
else
    echo "⚠ 有未提交的更改"
fi

echo ""
echo "=== 验证完成 ==="
echo ""
echo "下一步："
echo "1. 访问你的 Netlify 站点 URL"
echo "2. 检查应用是否正常加载"
echo "3. 测试易经占卜功能"
echo "4. 验证所有页面路由正常工作"
