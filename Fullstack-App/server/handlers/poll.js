const db = require('../models');

exports.showPolls = async (request, response, next) => {
  try{
    const polls = await db.Poll.find();

    response.status(200).json(polls);
  } catch (e) {
      e.status = 400;
      next(e);
  }
};

exports.createPoll = async (request, response, next) => {
    try {
        console.log(request.decoded);
        const {id} = request.decoded;
        const user = await db.User.findById(id);

        const {question, options} = request.body;
        const poll = await db.Poll.create({
            question,
            user,
            options: options.map(option => ({ option, votes: 0 }))
        });
        user.polls.push(poll._id);
        await user.save();

        response.status(201).json({...poll._doc, user: user._id});
    }
    catch (e) {

        next(e);
    }
};