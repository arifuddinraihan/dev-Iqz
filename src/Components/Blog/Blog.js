import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div className='text-center min-h-screen'>
            <h1 className='text-4xl font-bold md:text-2xl lg:text-4xl mx-8 md:mx-0 my-8 md:my-14 flex flex-col md:flex-row gap-4 justify-center'>
                Read New
                <div className='flex flex-row gap-4 justify-center items-center'>
                    <FontAwesomeIcon icon={faCodeCompare} className='hidden md:block'></FontAwesomeIcon>
                    <span className='text-cyan-200'>Blogs!</span>
                </div>
            </h1>
            <div className='grid grid-cols-1 gap-4 bg-slate-500 p-10'>
                
            </div>
        </div>
    );
};

export default Blog;