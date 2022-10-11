import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = (props) => {
    const { logo, id, name, total } = props.topic;
    return (
        <div className='card EachCards  '>
            <div>
                <img src={logo} className='card-img-top' alt="" srcset="" />
            </div>
            <div className='card-body'>
                <div className='course-text'>
                    <p className='card-text'>Name : {name}</p>
                    <p className='card-text'>Total Questions : {total}</p>
                </div>


                <div className='quiz-btn'>
                    <Link className='btn-link'>Take Quiz</Link>
                </div>


            </div>
        </div>
    );
};

export default Topic;