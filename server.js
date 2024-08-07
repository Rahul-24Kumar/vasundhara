import 'dotenv/config';
import express from 'express';
import cors from 'cors'; // Import the cors package
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import contactUsRoutes from './routes/contactUsRoutes.js';
import { errorHandler } from './middlewares/middleware.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Connect to the database
connectDB();

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Set up routes
app.use('/api', userRoutes);
app.use('/api', contactUsRoutes);

app.use('/api', authRoutes)
// Error handling middleware
app.use(errorHandler);

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
