import React from 'react';
import './QuestionAns.css';

const QuestionAns = (props) => {
    const { qstn, ans } = props.qstn;
    return (
        <div className='qstn-answer'>
            <p>Question: {qstn}</p>
            <p>Answer: {ans}</p>

        </div>
    );
};

export default QuestionAns;