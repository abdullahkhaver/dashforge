import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// ES modules require this to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modulesPath = path.join(__dirname, '../modules');

fs.readdirSync(modulesPath).forEach(async (folder) => {
  const routeFile = path.join(modulesPath, folder, `${folder}.routes.js`);

  if (fs.existsSync(routeFile)) {
    const moduleRouter = await import(routeFile); // <-- ES module dynamic import

    router.use(`/${folder}`, moduleRouter.default);
    console.log(`[Module Loaded]: ${folder}`);
  }
});

export default router;
