import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './src/core/database.js';
import { loadPlugins } from './src/plugins/index.js';
import rootRoutes from './src/routes/index.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// DB Connect
connectDB();

// Core + Module Routes
app.use('/api', rootRoutes);

// Plugin Autoloader
loadPlugins(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
