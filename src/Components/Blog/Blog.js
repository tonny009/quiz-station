import React from 'react';
import QuestionAns from '../Question/QuestionAns';

import './Blog.css';

const Blog = () => {
    const qstnAns = [{ id: 1, qstn: 'What is the purpose of react router?', ans: 'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.' },
    {
        id: 2, qstn: 'How doest context api works?', ans: 'The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem. It returns a consumer and a provider. Provider is a component that as its names suggests provides the state to its children.It will hold the "store" and be the parent of all the components that might need that store.Consumer as it so happens is a component that consumes and uses the state.'
    },
    { id: 3, qstn: 'Write about useRef Hook', ans: 'The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.' }
    ]
    return (
        <div className='container qstn-answr-container cmn-back'>
            {
                qstnAns.map(question => <QuestionAns qstn={question} key={question.id} ></QuestionAns>)
            }
        </div>
    )
};

export default Blog;