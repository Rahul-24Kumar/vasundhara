import 'dotenv/config';
import express from 'express';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middlewares/middleware.js';

const app = express();

connectDB();

app.use(express.json());

app.use('/api', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
