import mongoose from 'mongoose';

const connectDB = async () => {
    
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
        console.error('MongoDB connection string is missing. Please set MONGO_URI in your .env file.');
        process.exit(1); // Exit process with failure
    }

    try {
        await mongoose.connect(mongoURI);

        console.log('MongoDB connected...');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
