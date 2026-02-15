const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    const adminEmail = "parassingh123@gmail.com";
    const adminPassword = "paras@123";

    if (email === adminEmail && password === adminPassword) {
        const token = jwt.sign(
            { role: 'admin' },
            process.env.JWT_SECRET || 'secret_key',
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            success: true,
            token,
            message: 'Login successful'
        });
    }

    return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
    });
};

module.exports = { login };
