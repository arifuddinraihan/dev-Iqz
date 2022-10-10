import React, { useContext } from 'react';
import { QuizContext } from '../../Layout/Root';

const Cards = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={logo} alt={name} /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center">{name}</h2>
                <div className="card-actions grid grid-cols-1 md:grid-cols-2 justify-self-center items-center">
                    <p className='text-lg md:text-sm'>Total quiz: {total}</p>
                    <button className="btn btn-primary">Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;