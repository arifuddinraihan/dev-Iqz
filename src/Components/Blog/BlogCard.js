import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ singleData }) => {
    const { name, image, answer } = singleData
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full text-start">
            <figure><img src={image} alt={name} className='w-96'/></figure>
            <div className="card-body">
                <div>
                    <FontAwesomeIcon icon={faCodeFork} className="text-lg md:text-xl"></FontAwesomeIcon>
                    <h2 className="card-title text-cyan-400">{name}</h2>
                </div>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default BlogCard;