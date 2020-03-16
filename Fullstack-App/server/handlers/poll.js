const db = require('../models');

exports.showPolls = async (request, response, next) => {
  try{
    const polls = await db.Poll
        .find()
        .populate('user', ['username', 'id']);

    response.status(200).json(polls);
  } catch (e) {
      e.status = 400;
      next(e);
  }
};

exports.usersPolls = async(request, response, next) => {
    try{
        const {id} = request.decoded;

        const user = await db.User.findById(id)
            .populate('polls');

        response.status(200).json(user.polls);
    } catch (e) {
        e.status = 400;
        next(e);
    }
};

exports.getPoll = async (request, response, next) => {
    try {
        const {id} = request.params;
        const poll = await db.Poll.findById(id)
            .populate('user', [
                'username',
                'id'
            ]);
        if (!poll) throw new Error('No poll found');

        response.status(200).json(poll);

    } catch (e) {
        e.status = 400;
        next(e);
    }
}

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

exports.deletePoll = async (request, response, next) => {
    try{
        const {id: pollId} = request.params;
        const {id: userId} = request.decoded;

        const poll = await db.Poll.findById(pollId);
        if (!poll) throw new Error('No poll found');
        if(poll.user.toString() !== userId) {
            throw new Error('Unauthorized access');
        }

        await poll.remove();
        response.status(202).json(poll);

    } catch (e) {
        e.status = 400;
        next(e);
    }
};

exports.vote = async (request, response, next) => {
    try {
        const {id: pollId} = request.params;
        const {id: userId} = request.decoded;
        const {answer} = request.body;

        if(answer) {
            const poll = await db.Poll.findById(pollId);
            if(!poll) {
                throw new Error('No poll found');
            }

            const vote = poll.options.map(option =>
                option.option === answer
                    ? {
                        option: option.option,
                        _id: option._id,
                        votes: option.votes + 1,
                    }
                    : option,
                );

            if (poll.voted.filter(user =>
                user.toString() === userId).length <= 0) {
                poll.voted.push(userId);
                poll.options = vote;
                await poll.save();

                response.status(202).json(poll);
            } else {
                throw new Error('Already voted');
            }
        } else {
            throw new Error ('No answer provided');
        }

    } catch (e) {
        e.status = 400;
        next(e);
    }
}