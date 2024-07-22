import User from '../models/userModel.js';
import { hashPassword, correctPassword, generateAuthToken } from '../utils/helper.js'

export const getUsers = async (req, res) => {
    try {

        const users = await User.find().select({ _id: 0, name: 1, email: 1 });

        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const ifEmailAlreadyExist = await User.findOne({ email });

        if (ifEmailAlreadyExist) {
            return res.status(400).json("Email Already registered!");
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        console.log(user);
        
        const token = generateAuthToken(user._id);

        return res.status(201).json({ user, token });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await correctPassword(password, user.password))) {
            return res.status(401).json({ error: 'Incorrect email or password' });
        }

        const token = generateAuthToken(user._id);

        return res.status(200).json({ user, token });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
