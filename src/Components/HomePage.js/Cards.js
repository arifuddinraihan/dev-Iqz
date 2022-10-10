import React, { useContext } from 'react';
import { QuizContext } from '../../Layout/Root';

const Cards = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={logo} alt={name} /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center">{name}</h2>
                <div className="card-actions flex flex-row">
                    <p className='text-lg'>Total quiz: {total}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;