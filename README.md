# Hashdata Ant Design Pro

该项目是在 ant-design-pro 生成的项目模版代码基础上，对其代码进一步进行精简，同时结合公司实际应用场景，引入登录，获取用户信息，权限等相关可复用代码。前端团队可以基于该项目模版创建新项目进行开发。

## 开发流程

```
# 安装项目依赖
pnpm install

## 启动服务
pnpm start

## 打包前端代码
pnpm run build

## 代码格式校验
pnpm run lint
pnpm run lint:fix
```

## 优化内容

这里，列出相对于默认的 ant-design-pro 模版，我们做了以下这些内容的优化，让大家更清楚我们做了哪些自定义优化内容。

- 国际化：只保留中英文，原来自带有 10+语言，同时把一些不需要的文案进行删减，同时结合公司，新增了一部分符合公司的文案
  - 标题
  - 顶部 header logo
  - 浏览器 tab favoron.io
  - 底部 footer 备案
  - 接口异常等相关文案
- 删减默认自带的业务代码，即 pages 下面相关组件，
  - 只保留首页对应的组件 Home，
  - 同时新增了一个 Warehouse 组件（没有实际内容，主要用于调试路由权限等相关逻辑）
- 调整登录，登出，用户用户信息等逻辑，
  - 登录逻辑：主要在 pages/User/Login 组件中维护。
  - 登出：主要在 components/RightContent/AvatarDropdown 中维护
  - 获取用户信息：主要在 app.tsx 中维护，存储在全局数据中。
- 样式：
  - 通过微生成器，引入 Tailwind CSS 插件，并且要禁止默认样式，因为会影响 antd 样式
  - 使用 react-transition-group 添加路由切换时动画效果。
- service
  - 目前以 cloud-meta 生成的 swagger.json 为例，生成了相应的 service，以供我们调试后端 API
- 集成 CI/CD 相关代码
  - git commit 前会对代码格式进行校验
  - git commit message 也会进行校验
  -
