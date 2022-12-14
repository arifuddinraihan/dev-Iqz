import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

export const QuizContext = createContext()

const Root = () => {
    const fetchData = useLoaderData()
    const quizData = fetchData.data
    return (
        <div>
            <QuizContext.Provider value={quizData}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizContext.Provider>
        </div>
    );
};

export default Root;