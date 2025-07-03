#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入构建产物目录
cd docs/.vitepress/dist

# 初始化 git 并提交到 gh-pages 分支
git init
git add -A
git commit -m 'deploy'

# 推送到 GitHub Pages（替换你的 GitHub 用户名和仓库名）
git push -f git@github.com:lsy999/lue-docs.git master:gh-pages

cd -
