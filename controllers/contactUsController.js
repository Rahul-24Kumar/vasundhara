import contactUs from "../models/contactUsModel";

export const contactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        const newMessage = new contactUs({
            name: name,
            email: email,
            message: message
        });

        await newMessage.save();

        return res.status(200).json({ success: true, message: 'Message received successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
