import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadPlugins = async (app) => {
  const pluginsPath = path.join(__dirname);

  for (const plugin of fs.readdirSync(pluginsPath)) {
    if (plugin === 'index.js') continue;

    const pluginFile = path.join(pluginsPath, plugin, 'plugin.js');

    if (fs.existsSync(pluginFile)) {
      const pluginModule = await import(pluginFile); 
      pluginModule.register(app);
      console.log(`[Plugin Loaded]: ${plugin}`);
    }
  }
};
