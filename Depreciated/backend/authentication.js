const bcrypt = require('bcrypt');
const users = require('../classes/users');

const browseHref = "browse/";

async function handleAuthentication(req, res) {
    const { UsernameZero, PasswordEncrypted } = req.body;

    // Find the user by username
    const user = users.find(u => u.Username === UsernameZero);

    if (!user) {
        return res.status(401).json({ status: 'FAILED', reason: 'USER NOT FOUND' });
    }

    try {
        // Compare the provided password with the hashed password stored in the user data
        const passwordMatch = await bcrypt.compare(PasswordEncrypted, user.Password);

        if (!passwordMatch) {
            return res.status(401).json({ status: 'FAILED', reason: 'PASSWORD INCORRECT' });
        }

        if (user.isAllowed) {
            console.log("LOGGING SUCCESSFUL");
            return res.status(200).json({ status: 'SENDING INFORMATION', href: browseHref });
        } else {
            console.log("LOGGING SUCCESSFUL");
            return res.status(403).json({ status: 'ACCESS DENIED' });
        }
    } catch (error) {
        console.error('Error comparing passwords:', error);
        return res.status(500).json({ status: 'ERROR' });
    }
}

module.exports = {
    handleAuthentication
};

console.log("[Proprietary] Authentication System Loaded");


