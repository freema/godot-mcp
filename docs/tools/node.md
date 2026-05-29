# Node Tools

Node manipulation and script attachment tools

## Tools

- [godot_node](#godot_node)

---

## godot_node

Manage scene nodes: get properties, find, create, update, delete, reparent, attach/detach scripts, connect signals

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | `get_properties`, `find`, `create`, `update`, `delete`, `reparent`, `attach_script`, `detach_script`, `connect_signal` | Yes |  |
| `node_path` | string | No | Path to the node emitting the signal |
| `name_pattern` | string | No | Glob pattern to match node names, e.g. "*Spawner*", "Turret?" |
| `type` | string | No | Filter by node type, e.g. "CharacterBody2D", "Area2D" |
| `root_path` | string | No | Path to start search from (defaults to scene root) |
| `parent_path` | string | No | Path to the parent node |
| `node_name` | string | No | Name for the new node |
| `node_type` | string | No | Type of node to create, e.g. "Sprite2D" (use this OR scene_path) |
| `scene_path` | string | No | Path to scene to instantiate, e.g. "res://enemies/goblin.tscn" (use this OR node_type) |
| `properties` | Record<string, unknown> | No | Properties to set on the node |
| `new_parent_path` | string | No | Path to the new parent node |
| `script_path` | string | No | Path to the script file |
| `signal_name` | string | No | Name of the signal, e.g. "pressed", "body_entered" |
| `target_path` | string | No | Path to the target node that will receive the signal |
| `method_name` | string | No | Name of the method to call on the target node |

### Actions

#### `get_properties`

#### `find`

#### `create`

#### `update`

#### `delete`

#### `reparent`

#### `attach_script`

#### `detach_script`

#### `connect_signal`

### Examples

```json
// get_properties
{
  "action": "get_properties"
}
```

```json
// find
{
  "action": "find"
}
```

```json
// create
{
  "action": "create"
}
```

*6 more actions available: `update`, `delete`, `reparent`, `attach_script`, `detach_script`, `connect_signal`*

---

