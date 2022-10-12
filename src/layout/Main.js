import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';


export const CoursesContext = createContext([]);  //context api definning in this section to load all course data
const Main = () => {
    const topics = useLoaderData();
    const quizTopics = topics.data;
    return (
        <CoursesContext.Provider value={quizTopics}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </CoursesContext.Provider>

    );
};

export default Main;