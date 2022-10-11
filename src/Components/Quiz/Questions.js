import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; 

const Questions = ({ question }) => {
    const { question: ques, options, correctAnswer } = question;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-start">{ques}</h2>
                <ul className="flex flex-col gap-2">
                    {
                        options.map(option => <li className='btn btn-ghost flex flex-row flex-nowrap gap-4 p-3'>
                            <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            <p className='flex-grow text-start'>{option}</p>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Questions;