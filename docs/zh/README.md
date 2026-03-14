# OpenCode Controller (OCC)

通过CLI控制OpenCode执行开发任务。

## 使用场景

- 将编码任务委托给OpenCode
- 从外部系统（如OpenCLAW）控制OpenCode
- 自动化开发工作流

## 工作流程

### 步骤1: 选择工作目录

⚠️ **重要**: 在希望OpenCode工作的目录下运行脚本。会话将在当前目录创建。

### 步骤2: 决定会话模式

- **新会话**: 使用 `create` 命令（仅创建会话，然后使用 `continue` 执行任务）
- **继续现有会话**: 使用 `continue` 命令（会话ID由调用方提供）

### 步骤3: 运行命令

```bash
# 查询现有会话
node skills/occ/scripts/bin/opencode-server.js query

# 创建新会话
node skills/occ/scripts/bin/opencode-server.js create "创建一个React登录页面"

# 继续会话
node skills/occ/scripts/bin/opencode-server.js continue <session-id> "添加密码重置功能"
```

## 工作原理

脚本自动管理OpenCode Server：

1. **端口检测**: 扫描端口4096-4200查找已运行的OpenCode Server
2. **自动启动**: 如果没有找到Server，自动启动新的
3. **会话管理**: 通过OpenCode的会话API创建和管理开发会话