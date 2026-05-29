# Input Tools

Input injection for testing running games (action-based, no mouse/coordinates yet)

## Tools

- [godot_input](#godot_input)

---

## godot_input

Inject input into a running Godot game for testing. Use get_map to discover available input actions, sequence to execute inputs with precise timing, or type_text to type into UI elements. Note: Mouse/coordinate input not yet supported.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | `get_map`, `sequence`, `type_text` | Yes |  |
| `inputs` | object[] | No | Array of inputs to execute |
| `text` | string | No | Text to type |
| `delay_ms` | integer | No | Delay between keystrokes in milliseconds (default 50) |
| `submit` | boolean | No | Press Enter after typing to submit (for LineEdit text_submitted) |

### Actions

#### `get_map`

#### `sequence`

#### `type_text`

### Examples

```json
// get_map
{
  "action": "get_map"
}
```

```json
// sequence
{
  "action": "sequence"
}
```

```json
// type_text
{
  "action": "type_text"
}
```

---

