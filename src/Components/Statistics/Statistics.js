import React, { useContext } from 'react';

import './Statistics.css'
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CoursesContext } from '../../layout/Main';

const Statistics = () => {
    const courseData = useContext(CoursesContext);
    // console.log(courseData)
    return (
        <div className='stat container'>

            <BarChart width={430} height={450} data={courseData}>
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