# OpenCode Controller (OCC)

Control OpenCode to execute development tasks via CLI.

## Features

- **Session Management**: Create, continue, and query OpenCode sessions
- **Auto Server Management**: Automatically detects or starts OpenCode Server
- **OpenCLAW Ready**: Can be used as a bridge for OpenCLAW to control OpenCode

## Quick Start

```bash
# Install dependencies
cd skills/occ/scripts
npm install

# Query existing sessions
node bin/opencode-server.js query

# Create a new session
node bin/opencode-server.js create "Create a React login page"

# Continue a session
node bin/opencode-server.js continue <session-id> "Add password reset"

# Run task directly
node bin/opencode-server.js run "Fix the login bug"
```

## Documentation

See [skills/occ/SKILL.md](skills/occ/SKILL.md) for detailed documentation.

## License

MIT