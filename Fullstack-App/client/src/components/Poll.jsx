import React from "react";
import {connect} from "react-redux";
import {store} from "../store";
import {insertVote} from "../store/actions";
import {Pie} from "react-chartjs-2";

const color = () => {
    return('#' +
        Math.random()
            .toString(16)
            .slice(2,8));
};

const Poll = ({poll, insertVote}) => {

    const answers =
        poll.options &&
        poll.options.map(option => (
            <button
                onClick={() => insertVote(poll._id, {answer: option.option})}
                key={option._id}>
                {option.option}
            </button>
        ));

    const data = poll.options && {
        labels: poll.options.map(option => option.option),
        datasets: [
            {
                label: poll.question,
                backgroundColor: poll.options.map(option => color()),
                borderColor: '#323643',
                data: poll.options.map(option => option.votes),
            },
        ],
    };

    return (
        <div>
            <h3>{poll.question}</h3>
            <div>{answers}</div>
            {poll.options && <Pie data={data}/>}
        </div>
    );
};

export default connect(
    store => ({
        poll: store.currentPoll,
    }),
    { insertVote },
)(Poll);