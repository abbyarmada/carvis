import express from 'express';
import { PORT, configureServer } from './config';
import authRoutes from './routes/authRoutes';
import staticFileRoutes from './routes/staticFileRoutes';

const app = express();

configureServer(app);

// Set up routes
staticFileRoutes(app);
authRoutes(app);


app.listen(PORT, () => console.log('listening on port', PORT));
