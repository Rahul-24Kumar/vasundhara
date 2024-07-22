import 'dotenv/config';
import express from 'express';
import cors from 'cors'; // Import the cors package
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middlewares/middleware.js';

const app = express();

// Connect to the database
connectDB();

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Set up routes
app.use('/api', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
