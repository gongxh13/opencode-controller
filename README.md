# OpenCode Controller (OCC)

Control OpenCode to execute development tasks via CLI.

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

1. **Low Cost**: OpenCode executes locally, OpenClaw only forwards messages -token consumption significantly reduced
2. **Automation**: HTTP API communication, no manual continuous interaction required
3. **Parallel Capability**: Support concurrent task processing through session pool management
4. **Extensibility**: Modular design, easy to extend, supports integration with ADT for complex workflows

## Install

```bash
npx skills add gongxh13/opencode-controller
```

## Usage Example

### OpenClaw Integration (with `:/occ` prefix)

In OpenClaw, use the `occ` skill with the `:/occ` prefix:

```bash
# Query existing sessions
:/occ query

# Create a new session
:/occ create "Create a React login page"

# Continue a session with additional task
:/occ continue <session-id> "Add password reset feature"
```

### Direct CLI Usage

```bash
# Query existing sessions
node skills/occ/scripts/bin/opencode-server.js query

# Create a new session
node skills/occ/scripts/bin/opencode-server.js create "Create a React login page"

# Continue a session
node skills/occ/scripts/bin/opencode-server.js continue <session-id> "Add password reset"
```

### Integration with ADT

OCC works seamlessly with [ADT](https://atomgit.com/leon-wang2021/agent-dev-team) (Agent Development Team) for automated issue handling:

```bash
# Initialize new project
:/occ create "/adt:init"

# Create a feature/issue
:/occ create "/adt:feature 用户登录功能"

# Start development
:/occ create "/adt:start #123"

# Automated execution
:/occ create "/adt:start-auto 测试登录功能"
```

See [docs/](docs/) for usage in different languages.