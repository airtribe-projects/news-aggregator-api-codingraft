const getPreferences = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({ preferences: user.preferences || [] });
    } catch (error) {
        console.log("Error in getPreferences controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updatePreferences = async (req, res) => {
    try {
        const { preferences } = req.body;
        const user = req.user;
        user.preferences = preferences;
        await user.save();
        res.status(200).json({ message: "Preferences updated successfully" });
    } catch (error) {
        console.log("Error in updatePreferences controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { getPreferences, updatePreferences };