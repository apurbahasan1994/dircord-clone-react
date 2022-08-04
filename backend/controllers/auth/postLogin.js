const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const postLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase() });

        if (user && (await bcrypt.compare(password, user.password))) {
            //send new token
            const token = jwt.sign({
                userId: user._id,
                email: email
            },

                process.env.TOKEN_KEY,
                {
                    expiresIn: '24h'
                }

            );
            return res.json(
                {
                    userDetails: {
                        email: user.email,
                        token: token,
                        username: user.username
                    }
                }
            );

        }
        else {
            return res.status(400).json({ message: 'Invalid credentials,please try again' });
        }


    }
    catch (e) {
        return res.status(500).json({ message: "Something went wrong!" });
    }

}
module.exports = postLogin;