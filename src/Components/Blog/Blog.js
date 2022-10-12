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
            <div className=' container mx-auto rounded-2xl grid grid-cols-1 justify-items-center gap-4 bg-slate-500 p-10'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;