import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
    try {
        const loggedInUserId = req.User._id;

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        console.log(req.User,filteredUsers)
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error is getAllUser:", error.message);
        res.status(500).json({
            error: "Internal server Error"
        });
    }
}