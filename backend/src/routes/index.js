import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modulesPath = path.join(__dirname, '../modules');

fs.readdirSync(modulesPath).forEach(async (folder) => {
  const routeFile = path.join(modulesPath, folder, `${folder}.routes.js`);

  if (fs.existsSync(routeFile)) {
    const moduleRouter = await import(routeFile);

    router.use(`/${folder}`, moduleRouter.default);
    console.log(`[Module Loaded]: ${folder}`);
  }
});

export default router;
