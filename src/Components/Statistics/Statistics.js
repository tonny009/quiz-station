import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const courseData = useLoaderData();
    const { data } = courseData;
    console.log(data);
    return (
        <div className='stat container'>

            <BarChart width={430} height={450} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />

            </BarChart>


        </div>
    );
};

export default Statistics;