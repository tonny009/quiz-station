import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Questions/Question';
import './Quiz.css'

const Quiz = () => {
    const specificTopicQuiz = useLoaderData();
    const { data } = specificTopicQuiz;
    const { questions } = data;
    // console.log(data);
    // console.log(questions);
    return (
        <div className='container cmn-back'>
            <div className='topic-title'><h2>Quiz Topic : {data.name} </h2></div>
            <div className='qstn-container'>
                <ol>
                    {
                        questions.map(question => <Question key={question.id} eachQuestion={question}></Question>)
                    }
                </ol>

            </div>
        </div>
    );
};

export default Quiz;