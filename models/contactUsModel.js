import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

const contactUs = mongoose.model('ContactUs', contactUsSchema);

export default contactUs;
