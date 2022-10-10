import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizQuestions = useLoaderData();
    const {name, total, logo} = quizQuestions.data;
    console.log(quizQuestions);
    return (
        <div>
            <h1>This is Quiz Section of: {name}</h1>
        </div>
    );
};

export default Quiz;