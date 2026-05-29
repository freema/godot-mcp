# TileMapLayer/GridMap Tools

TileMapLayer and GridMap editing tools (uses Godot 4.3+ TileMapLayer, not deprecated TileMap)

## Tools

- [godot_tilemap](#godot_tilemap)
- [godot_gridmap](#godot_gridmap)

---

## godot_tilemap

Query and edit TileMapLayer data: list layers, get info, get/set cells, convert coordinates

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | `list_layers`, `get_info`, `get_tileset_info`, `get_used_cells`, `get_cell`, `get_cells_in_region`, `convert_coords`, `set_cell`, `erase_cell`, `clear_layer`, `set_cells_batch` | Yes |  |
| `root_path` | string | No | Starting node path (defaults to scene root) |
| `node_path` | string | No | Path to the TileMapLayer |
| `coords` | object {x, y} | No | Cell coordinates |
| `min_coords` | object {x, y} | No | Minimum corner of region |
| `max_coords` | object {x, y} | No | Maximum corner of region |
| `local_position` | object {x, y} | No | Local position to convert to map coords |
| `map_coords` | object {x, y} | No | Map coordinates to convert to local position |
| `source_id` | integer | No | TileSet source ID, default 0 |
| `atlas_coords` | object {x, y} | No | Atlas coordinates, default 0,0 |
| `alternative_tile` | integer | No | Alternative tile ID, default 0 |
| `cells` | object[] | No | Array of cells to set |

### Actions

#### `list_layers`

#### `get_info`

#### `get_tileset_info`

#### `get_used_cells`

#### `get_cell`

#### `get_cells_in_region`

#### `convert_coords`

#### `set_cell`

#### `erase_cell`

#### `clear_layer`

#### `set_cells_batch`

### Examples

```json
// list_layers
{
  "action": "list_layers"
}
```

```json
// get_info
{
  "action": "get_info"
}
```

```json
// get_tileset_info
{
  "action": "get_tileset_info"
}
```

*8 more actions available: `get_used_cells`, `get_cell`, `get_cells_in_region`, `convert_coords`, `set_cell`, `erase_cell`, `clear_layer`, `set_cells_batch`*

---

## godot_gridmap

Query and edit GridMap data: list gridmaps, get info, get/set cells

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | `list`, `get_info`, `get_meshlib_info`, `get_used_cells`, `get_cell`, `get_cells_by_item`, `set_cell`, `clear_cell`, `clear`, `set_cells_batch` | Yes |  |
| `root_path` | string | No | Starting node path (defaults to scene root) |
| `node_path` | string | No | Path to the GridMap |
| `coords` | object {x, y, z} | No | Cell coordinates |
| `item` | integer | No | MeshLibrary item index |
| `orientation` | integer | No | Orientation 0-23, default 0 |
| `cells` | object[] | No | Array of cells to set |

### Actions

#### `list`

#### `get_info`

#### `get_meshlib_info`

#### `get_used_cells`

#### `get_cell`

#### `get_cells_by_item`

#### `set_cell`

#### `clear_cell`

#### `clear`

#### `set_cells_batch`

### Examples

```json
// list
{
  "action": "list"
}
```

```json
// get_info
{
  "action": "get_info"
}
```

```json
// get_meshlib_info
{
  "action": "get_meshlib_info"
}
```

*7 more actions available: `get_used_cells`, `get_cell`, `get_cells_by_item`, `set_cell`, `clear_cell`, `clear`, `set_cells_batch`*

---

