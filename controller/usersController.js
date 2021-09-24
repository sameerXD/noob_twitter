const model = require('../models/index');
const User = model.User;

exports.createUser = async function (req, res) {
    try {
        const user = await User.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            phone_number: req.body.phoneNumber,
        });

        res.status(200).send(user);
    } catch (err) {
        throw err;
    }
}

exports.getUser = async function (req, res) {
    try {
        const user = await User.findAll({
            where: {
                email: req.params.email
            }
        });
        res.status(200).send(user);
    } catch (error) {
        throw error;
    }
}

exports.updateUser = async function (req, res) {
    try {

        const user = await User.update(req.body, {
            where: {
                email: req.params.email
            }
        });
        return res.status(200).send('user updated');
    } catch (err) {
        throw err;
    }
}