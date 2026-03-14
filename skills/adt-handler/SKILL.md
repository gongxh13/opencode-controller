---
name: opencode-controller
description: Control OpenCode to execute development tasks. Provides session management, intent detection, and task execution capabilities for automating development workflows.
---

# OpenCode Controller

A skill for controlling OpenCode to execute development tasks. This skill demonstrates how to integrate external AI coding agents with OpenCode.

## Language Detection and Response

### Language Detection
- Automatically detect the language of user input

### Response Language Matching
- Respond in the same language as the user input

## When to Use

Use this skill when:
- You want to delegate coding tasks to OpenCode
- You need to manage multiple development sessions
- You want to automate development workflows
- You need to control OpenCode from external systems (like OpenCLAW)

## Quick Start

### Prerequisites

1. OpenCode Server must be running
2. Configure the OpenCode Server URL (default: http://127.0.0.1:8089)

### Basic Usage

#### 1. Query Existing Sessions

```bash
node skills/adt-handler/scripts/bin/opencode-server.js query
```

#### 2. Create a New Session

```bash
node skills/adt-handler/scripts/bin/opencode-server.js create "帮我创建一个React项目"
```

#### 3. Continue a Session

```bash
node skills/adt-handler/scripts/bin/opencode-server.js continue <session-id> "添加用户登录功能"
```

#### 4. Run Task Directly

```bash
node skills/adt-handler/scripts/bin/opencode-server.js run "修复登录页面的bug"
```

## Intent Detection

The skill recognizes user intent based on these keywords:

| Intent | Keywords (Chinese) | Keywords (English) |
|--------|-------------------|-------------------|
| **init** | 初始化, 新建项目, 创建项目, 开始项目 | init, new project, create project |
| **feature** | 功能, 需求, issue, 特性, 创建需求, 更新需求, 修改需求 | feature, issue, create, update, modify |
| **start** | 开始, 开发, 做, 启动 | start, develop, do, begin |
| **start-auto** | 自动, 自动化, 无人值守 | auto, automatic, automate |

## Architecture

```
User Input
    │
    ▼
Intent Detection
    │
    ▼
OpenCode Server API
    │
    ├── create-session → Get session ID
    │
    └── continue-session → Send message, get response
    │
    ▼
Return Result to User
```

## Session Management

### Session Lifecycle

1. **Create Session**: Initialize a new development session
2. **Continue Session**: Send messages to continue the conversation
3. **Query Sessions**: List all active sessions
4. **Session Timeout**: Sessions auto-expire after inactivity

### Session Reuse Logic

- **New command**: If user sends a new task, create a new session
- **Continue conversation**: If user sends regular input AND there's an existing session, continue with that session

## Integration Examples

### OpenCLAW Integration

If you're using OpenCLAW, you can use this skill as a bridge:

```javascript
// In your OpenCLAW skill
const { createSession, continueSession } = require('./opencode-controller');

async function handleUserRequest(userInput) {
  // Detect intent
  const intent = detectIntent(userInput);
  
  if (intent === 'start') {
    // Create session and execute
    const session = await createSession(userInput);
    const result = await continueSession(session.sessionId, userInput);
    return result;
  }
  
  // Handle other intents...
}
```

### REST API Example

You can also call OpenCode Server directly via HTTP:

```bash
# Create session
curl -X POST http://127.0.0.1:8089/sessions \
  -H "Content-Type: application/json" \
  -d '{"message": "帮我创建一个登录页面"}'

# Continue session
curl -X POST http://127.0.0.1:8089/sessions/{session-id}/continue \
  -H "Content-Type: application/json" \
  -d '{"message": "添加手机验证码登录"}'
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENCODE_SERVER_URL` | OpenCode Server URL | http://127.0.0.1:8089 |
| `OPENCODE_API_KEY` | API Key (if required) | - |

### Configuration File

You can also configure via `config.json`:

```json
{
  "opencode": {
    "serverUrl": "http://127.0.0.1:8089",
    "apiKey": ""
  }
}
```

## API Reference

### opencode-server.js

```
Usage:
  opencode-server query              - List all sessions
  opencode-server create <task>      - Create new session with task
  opencode-server continue <id> <msg> - Send message to session
  opencode-server run <task>         - Create and run task in one command

Options:
  --url <url>    Override OpenCode Server URL
  --help         Show help message
```

### Return Values

All commands return JSON:

```json
// Query response
{
  "sessions": [
    {
      "sessionId": "abc123",
      "createdAt": "2024-01-01T00:00:00Z",
      "lastActive": "2024-01-01T00:05:00Z"
    }
  ]
}

// Create/Continue response
{
  "sessionId": "abc123",
  "response": "好的，我来帮你创建...",
  "done": false
}
```

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| Connection refused | OpenCode Server not running | Start OpenCode Server |
| Session not found | Session expired or invalid | Create new session |
| API error | Invalid request | Check message format |

## Extension Points

This skill can be extended to:

1. **Multi-agent coordination**: Coordinate multiple AI coding agents
2. **Workflow automation**: Automate complex development workflows
3. **Custom intents**: Add your own intent detection logic
4. **Result parsing**: Parse and format OpenCode responses differently

## License

MIT