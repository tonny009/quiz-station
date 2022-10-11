import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topics/Topic';
import pic from '../../images/quizTime.png'
import picture from '../../images/quix.jpeg'
import './Home.css';

const Home = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (

        <div className='container '>
            <div id="carouselExampleSlidesOnly" className='carousel slide title-pic' data-bs-ride="carousel">
                <div className='carousel-inner rounded'>
                    <div className='carousel-item active slide_pic'>
                        <img src={pic} className='d-block w-100' alt="..." />
                        <div className='carousel-caption  d-sm-block'>
                            <p className='fs-1 fw-bolder text'>Test Yourself</p>
                            <p className='fs-4'>This platform is for all self-lerner to push up their confidence with quiz assesments.Be one step forward to your career.</p>
                        </div>
                    </div>
                </div>
            </div>
            < div className='row justify-content-center' >
                {
                    data.map(topic => <Topic key={data.id} topic={topic}></Topic>)
                }
            </div >
        </div >
    );
};

export default Home;