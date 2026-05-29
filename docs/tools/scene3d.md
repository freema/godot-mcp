# Scene3D Tools

3D spatial information and bounding box tools

## Tools

- [godot_scene3d](#godot_scene3d)

---

## godot_scene3d

Get spatial information for 3D nodes: global transforms, bounding boxes, visibility. Use get_spatial_info for node details, get_bounds for combined AABB of a subtree.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | `get_spatial_info`, `get_bounds` | Yes |  |
| `node_path` | string | No | Path to the Node3D |
| `include_children` | boolean | No | Include child nodes |
| `type_filter` | string | No | Filter by node type, e.g. "MeshInstance3D" |
| `max_results` | integer | No | Limit number of results. Defaults to 50 when include_children=true. Set higher (e.g., 500) if needed. |
| `within_aabb` | object {position, size} | No | Only include nodes whose global position is within this AABB |
| `root_path` | string | No | Path to search root (defaults to scene root) |

### Actions

#### `get_spatial_info`

#### `get_bounds`

### Examples

```json
// get_spatial_info
{
  "action": "get_spatial_info"
}
```

```json
// get_bounds
{
  "action": "get_bounds"
}
```

---

