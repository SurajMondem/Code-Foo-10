const jwt = require('jsonwebtoken');

const db = require('../models');

exports.register = async (request, response, next) => {
    try{
        const user = await db.User.create(request.body);
        const {id, username} = user;
        const token = jwt.sign({id, username}, process.env.SECRET);

        response.status(201).json({
            id,
            username,
            token
        });
    }
    catch (e) {
        if (e.code === 11000){
            e.message = "Sorry, that User already exists";
        }
        next(e);
    }
};

exports.login = async (request, response, next) =>
{
    try{
        const user = await db.User.findOne({
            username: request.body.username
        });
        const {id, username} = user;

        const valid = await user.comparePassword(request.body.password);
        if (valid){
            const token = jwt.sign({id, username}, process.env.SECRET);

            response.json({
                id,
                username,
                token: 'JWT ' + token,
            });
        } else {
            throw new Error();
        }
    } catch (e) {
        e.message = 'Invalid Username/Password';
    }
};