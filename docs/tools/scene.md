# Scene Tools

Scene management tools

## Tools

- [godot_scene](#godot_scene)

---

## godot_scene

Manage scenes: open, save, or create scenes

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | `open`, `save`, `create` | Yes |  |
| `scene_path` | string | No | Path for the new scene file |
| `root_type` | string | No | Type of root node, e.g. "Node2D" |
| `root_name` | string | No | Name of root node (defaults to root_type) |

### Actions

#### `open`

#### `save`

#### `create`

### Examples

```json
// open
{
  "action": "open"
}
```

```json
// save
{
  "action": "save"
}
```

```json
// create
{
  "action": "create"
}
```

---

