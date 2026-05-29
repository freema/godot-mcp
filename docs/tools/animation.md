# Animation Tools

Animation query, playback, and editing tools

## Tools

- [godot_animation](#godot_animation)

---

## godot_animation

Query, control, and edit animations. Query: list_players, get_info, get_details, get_keyframes. Playback: play, stop, seek. Edit: create, delete, update_props, add_track, remove_track, add_keyframe, remove_keyframe, update_keyframe

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | `list_players`, `get_info`, `get_details`, `get_keyframes`, `play`, `stop`, `seek`, `create`, `delete`, `update_props`, `add_track`, `remove_track`, `add_keyframe`, `remove_keyframe`, `update_keyframe` | Yes |  |
| `root_path` | string | No | Starting node path (defaults to scene root) |
| `node_path` | string | No | Path to the AnimationPlayer |
| `animation_name` | string | No | Animation name |
| `track_index` | number | No | Track index |
| `custom_blend` | number | No | Custom blend time, -1 for default |
| `custom_speed` | number | No | Playback speed, 1.0 default |
| `from_end` | boolean | No | Play from end for reverse |
| `keep_state` | boolean | No | Keep current animation state |
| `seconds` | number | No | Position to seek to |
| `update` | boolean | No | Update node immediately, default true |
| `library_name` | string | No | Library name |
| `length` | number | No | Animation length in seconds |
| `loop_mode` | `none`, `linear`, `pingpong` | No | Loop mode: none, linear, pingpong |
| `step` | number | No | Step value for keyframe snapping |
| `track_type` | `value`, `position_3d`, `rotation_3d`, `scale_3d`, `blend_shape`, `method`, `bezier`, `audio`, `animation` | No | Type of track |
| `track_path` | string | No | Node path and property, e.g. "Sprite2D:frame" |
| `insert_at` | number | No | Track index to insert at, -1 for end |
| `time` | number | No | Keyframe time in seconds |
| `value` | unknown | No | Keyframe value |
| `transition` | number | No | Transition curve, 1.0 = linear |
| `method_name` | string | No | Method name for method tracks |
| `args` | array | No | Method arguments |
| `keyframe_index` | number | No | Keyframe index |

### Actions

#### `list_players`

#### `get_info`

#### `get_details`

#### `get_keyframes`

#### `play`

#### `stop`

#### `seek`

#### `create`

#### `delete`

#### `update_props`

#### `add_track`

#### `remove_track`

#### `add_keyframe`

#### `remove_keyframe`

#### `update_keyframe`

### Examples

```json
// list_players
{
  "action": "list_players"
}
```

```json
// get_info
{
  "action": "get_info"
}
```

```json
// get_details
{
  "action": "get_details"
}
```

*12 more actions available: `get_keyframes`, `play`, `stop`, `seek`, `create`, `delete`, `update_props`, `add_track`, `remove_track`, `add_keyframe`, `remove_keyframe`, `update_keyframe`*

---

