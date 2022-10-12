import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={logo} alt={name} /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center mb-4">{name}</h2>
                <div className="card-actions grid grid-cols-1 md:grid-cols-2 justify-self-center items-center">
                    <p className='text-lg md:text-sm'>Total quiz: {total}</p>
                    <Link to={`quiz/${id}`}>
                        <button
                            className="btn btn-secondary">Start Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;