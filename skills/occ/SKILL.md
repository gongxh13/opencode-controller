---
name: occ
description: Control OpenCode to execute development tasks. Provides session management and task execution capabilities.
---

# OCC (OpenCode Controller)

Control OpenCode to execute development tasks via CLI.

## When to Use

Use this skill when:
- You want to delegate coding tasks to OpenCode
- You need to control OpenCode from external systems (like OpenCLAW)
- You want to automate development workflows

## Quick Start

### Prerequisites

1. OpenCode CLI must be installed and available in PATH
2. No need to start OpenCode Server manually - the script will automatically detect or start it

### Basic Usage

```bash
# Enter the scripts directory
cd skills/occ/scripts

# Install dependencies
npm install

# Query existing sessions
node bin/opencode-server.js query

# Create a new session
node bin/opencode-server.js create "Create a React login page"

# Continue a session with additional instructions
node bin/opencode-server.js continue <session-id> "Add password reset feature"

# Run task directly (create session + execute in one command)
node bin/opencode-server.js run "Fix the login bug"
```

## Commands

| Command | Description |
|---------|-------------|
| `query` | List all existing sessions |
| `create <task>` | Create a new session with a task |
| `continue <id> <msg>` | Send a message to an existing session |
| `run <task>` | Create session and execute task immediately |

## How It Works

The script automatically handles OpenCode Server:

1. **Port Detection**: Scans ports 4096-4200 to find an existing OpenCode Server
2. **Auto-Start**: If no server is found, automatically starts a new one
3. **Session Management**: Creates and manages development sessions through OpenCode's session API

## Output Format

All commands return JSON:

```json
// Query response
{
  "action": "query",
  "sessions": [
    {
      "id": "abc123",
      "title": "Create React login",
      "directory": "/path/to/workdir",
      "created": "2024-01-01T00:00:00Z",
      "updated": "2024-01-01T00:05:00Z"
    }
  ]
}

// Create/Run response
{
  "success": true,
  "sessionId": "abc123",
  "directory": "/path/to/workdir",
  "baseUrl": "http://127.0.0.1:4096",
  "message": "Session created. Use continue to execute task."
}
```

