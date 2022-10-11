import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topics/Topic';

const Home = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (

        <div className='container'>
            <div className="img-container">
                <h2>Here will be home image</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus facilis, tempora debitis amet optio minima beatae iure quas deserunt veniam asperiores pariatur magnam vitae, reiciendis non nobis temporibus dolor.</p>
            </div>
            <div className='row justify-content-center'>
                {
                    data.map(topic => <Topic key={data.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;