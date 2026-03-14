# OpenCode Controller

Control OpenCode to execute development tasks. This skill provides session management, intent detection, and task execution capabilities for automating development workflows.

## Features

- **Session Management**: Create, continue, and query OpenCode sessions
- **Intent Detection**: Automatically detect user intent from natural language
- **REST API Integration**: Work with OpenCode Server via HTTP
- **OpenCLAW Ready**: Can be used as a bridge for OpenCLAW to control OpenCode

## Quick Start

```bash
# Install dependencies
cd skills/adt-handler/scripts
npm install

# List all sessions
node bin/opencode-server.js query

# Create a new session
node bin/opencode-server.js create "帮我创建一个React项目"

# Continue a session
node bin/opencode-server.js continue <session-id> "添加用户登录功能"

# Run task directly
node bin/opencode-server.js run "修复登录页面的bug"
```

## Documentation

See [skills/adt-handler/SKILL.md](skills/adt-handler/SKILL.md) for detailed documentation.

## License

MIT