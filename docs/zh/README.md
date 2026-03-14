# OpenCode Controller (OCC)

通过 CLI 控制 OpenCode 执行开发任务。

## 为什么要有 OCC？

OpenClaw 在执行复杂编程任务时存在一些局限性：

| 局限性 | 影响 |
|--------|------|
| Token 消耗大 | 完整代码分析需要大量上下文，成本显著增加 |
| Skill 调试困难 | 自定义 Skill 的开发调试需要在实际对话中反复测试 |
| 流程可视化不足 | 任务执行过程中的进度缺乏直观展示 |
| 并行执行困难 | OpenCode 启动时绑定固定工作目录 |
| 不适合移动办公 | 需要在终端前交互，不适合移动场景 |

OCC (OpenCode Controller) 通过 HTTP API 与 OpenCode Server 通信，无须 PTY，支持完整的会话管理、任务执行、问题处理能力。

## 项目优势

1. **低成本**：OpenCode 本地执行，OpenClaw 仅负责消息转发，Token 消耗大幅降低
2. **自动化**：通过 HTTP API 通信，无须人工持续交互
3. **并行能力**：支持通过会话池管理实现并发任务处理
4. **可扩展**：模块化设计，易于扩展，支持与 ADT 集成实现复杂工作流

## 安装

```bash
npx skills add gongxh13/opencode-controller
```

## 使用示例

### OpenClaw 集成（使用 `/occ` 前缀）

在 OpenClaw 中，可以使用 `occ` 技能，格式为 `/occ`：

```bash
# 查询现有会话
/occ query

# 创建新会话
/occ create "创建一个 React 登录页面"

# 继续现有会话
/occ continue <session-id> "添加密码重置功能"
```

```
## 安装