import { defineResource } from '../core/define-resource.js';

export const currentScriptResource = defineResource({
  uri: 'godot://script/current',
  name: 'Current Script',
  description: 'The currently open script in the Godot editor',
  mimeType: 'text/x-gdscript',
  async handler({ godot }) {
    const result = await godot.sendCommand<{
      path: string | null;
      content: string | null;
    }>('get_current_script');

    if (!result.path) {
      return '# No script currently open';
    }

    const content = result.content ?? '';
    const header = `# Path: ${result.path}`;
    return content.length > 0 ? `${header}\n${content}` : `${header}\n`;
  },
});

export const scriptResources = [currentScriptResource];
