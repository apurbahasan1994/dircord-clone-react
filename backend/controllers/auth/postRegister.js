const User = require("../../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const postRegister = async (req, res, next) => {
    try {
        const { email, password, username } = req.body;

        //check if user exists
        const userExists = await User.exists({ email: email.toLowerCase() });

        if (userExists) {
            //resource already exist
            return res.status(409).json({ 'message': 'email already exist' });
        }

        // encrypt password

        const encryptedPassword = await bcrypt.hash(password, 10);//how many char would be added to the pass when encryptiing

        //create user doc and save in db

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        //create jwt token

        const token = jwt.sign({
            userId: user._id,
            email: email
        },

            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'
            }

        );

        res.status(201).json({
            userDetails: {
                email: user.email,
                token: token,
                username: username,
                _id:user._id
            }

        });



    }
    catch (e) {
        return res.status(500).json({
            'message': 'something went wrong'
        });
    }

}
module.exports = postRegister;