import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Questions/Question';

const Quiz = () => {
    const specificTopicQuiz = useLoaderData();
    const { data } = specificTopicQuiz;
    const { questions } = data;
    // console.log(questions);
    return (
        <div className='container'>
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