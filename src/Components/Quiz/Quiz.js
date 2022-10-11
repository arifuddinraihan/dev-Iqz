import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Questions from './Questions';

const Quiz = () => {
    const quizQuestions = useLoaderData();
    const { name, total, logo, questions } = quizQuestions.data;
    return (
        <div className='text-center min-h-screen'>
            <h1 className='text-4xl font-bold md:text-2xl lg:text-4xl mx-8 md:mx-0 mt-8 md:mt-14 flex flex-col md:flex-row gap-4 justify-center'>
                Quiz Topic
                <div className='flex flex-row gap-4 justify-center items-center'>
                    <FontAwesomeIcon icon={faArrowRightLong} className='hidden md:block'></FontAwesomeIcon>
                    <span className='text-cyan-400'>{name}</span>
                </div>
                </h1>
            <h3 className='text-xl font-bold md:text-xl lg:text-2xl mb-8 mx-8 md:mx-0 mt-6 md:mt-8'>Select the right answer of <span className='text-cyan-400'>{total}</span> questions</h3>
            <div className='grid grid-cols-1 gap-4 bg-slate-500 p-10'>
                {
                    questions.map(question => <Questions key={question.id} question={question}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;