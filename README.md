# OpenCode Controller (OCC)

🌐 Language: [English](README.md) | **中文**

---

## Why OCC?

OpenClaw has some limitations when executing complex programming tasks:

| Limitation | Impact |
|------------|--------|
| High token consumption | Complex code analysis requires large context, cost significantly increases |
| Difficult skill debugging | Testing custom skills requires repetitive conversation testing |
| Insufficient process visualization | Task progress lacks intuitive visualization |
| Parallel execution difficulty | OpenCode binds to fixed working directory at startup |
| Not suitable for mobile | Requires terminal interaction, not mobile-friendly |

OCC (OpenCode Controller) addresses these issues by communicating with OpenCode Server via HTTP API, supporting full session management, task execution, and question handling without requiring PTY.

## Advantages

1. **Low Cost**: OpenCode executes locally, OpenClaw only forwards messages - token consumption significantly reduced
2. **Automation**: HTTP API communication, no manual continuous interaction required
3. **Parallel Capability**: Support concurrent task processing through session pool management
4. **Extensibility**: Modular design, easy to extend, supports integration with ADT for complex workflows

## Usage Example

### OpenClaw Integration

In OpenClaw, use the `occ` skill with the `/occ` prefix:

```
# Query existing sessions
/occ query

# Create a new session
/occ create "Create a React login page"

# Continue a session with additional task
/occ continue <session-id> "Add password reset feature"
```

---

## 中文

OCC (OpenCode Controller) - 通过CLI控制OpenCode执行开发任务。

### 为什么使用OCC？

OpenClaw在执行复杂编程任务时存在以下局限：

| 局限 | 影响 |
|------|------|
| Token消耗高 | 复杂代码分析需要大量上下文，成本显著增加 |
| Skill调试困难 | 测试自定义skill需要重复对话测试 |
| 流程可视化不足 | 任务进度缺乏直观的可视化 |
| 并行执行困难 | OpenCode启动时绑定固定工作目录 |
| 不适合移动端 | 需要终端交互，不适合移动端使用 |

OCC通过HTTP API与OpenCode Server通信，解决以上问题，支持完整的会话管理、任务执行和问答处理，无需PTY。

### 优势

1. **低成本**: OpenCode本地执行，OpenClaw只转发消息 - Token消耗大幅降低
2. **自动化**: HTTP API通信，无需手动持续交互
3. **并行能力**: 通过会话池管理支持并发任务处理
4. **可扩展**: 模块化设计，易于扩展，支持与ADT集成实现复杂工作流

### 使用示例

在OpenClaw中使用 `/occ` 前缀：

```
# 查询现有会话
/occ query

# 创建新会话
/occ create "创建一个React登录页面"

# 继续会话
/occ continue <session-id> "添加密码重置功能"
```