# Contributing to godot-mcp

## Dev Setup

```bash
cd server
npm install
npm run build
npm test
```

## Making Changes

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes
3. Run tests: `npm test`
4. Build: `npm run build`
5. If you changed tool definitions, regenerate docs: `npm run generate-docs`
6. Commit with a conventional commit message (see below)
7. Push and open a PR

**Important:** The `main` branch is protected. All changes go through PRs.

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automatic versioning via release-please.

```
feat: add new feature        -> minor version bump (2.1.0 -> 2.2.0)
fix: fix a bug               -> patch version bump (2.1.0 -> 2.1.1)
refactor: change internals   -> patch version bump
docs: update documentation   -> no version bump
chore: maintenance tasks     -> no version bump
```

Examples:
- `feat: add input injection tool for testing`
- `fix: return newest messages instead of oldest`
- `docs: update Claude Code setup guide`

## Adding a New Tool

1. Create the tool definition in `server/src/tools/<category>.ts` using `defineTool()`
2. Export it from the category's tools array
3. Add the corresponding GDScript handler in `godot/addons/godot_mcp/commands/`
4. Register the command in `command_router.gd`
5. Add tests in `server/src/__tests__/tools/`
6. Run `npm run generate-docs` to update API docs

See existing tools for the pattern. The `defineTool()` helper handles schema validation via Zod.

## Releases

**Do not manually bump version numbers.** Release-please handles all versioning automatically.

When your PR is merged:
1. release-please creates a release PR with version bumps
2. When that PR is merged, it publishes to npm and creates a GitHub release
3. The addon zip is attached to the release

The MCP server and Godot addon share version numbers and are released together.

## Architecture

```
[Claude] <--stdio--> [MCP Server (TypeScript)] <--WebSocket:6550--> [Godot Addon (GDScript)]
```

- `server/src/tools/` - MCP tool definitions
- `server/src/resources/` - MCP resource handlers
- `server/src/connection/` - WebSocket client to Godot
- `godot/addons/godot_mcp/commands/` - GDScript command handlers
- `godot/addons/godot_mcp/core/` - Addon utilities (logger, debugger plugin)

## Questions?

Open a [GitHub issue](https://github.com/satelliteoflove/godot-mcp/issues) or start a [discussion](https://github.com/satelliteoflove/godot-mcp/discussions).
