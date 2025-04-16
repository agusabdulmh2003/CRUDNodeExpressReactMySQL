import User from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message }); // Send error response
    }
}
