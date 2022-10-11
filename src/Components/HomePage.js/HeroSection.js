import { Player } from '@lottiefiles/react-lottie-player';
import React, { useContext } from 'react';
import { QuizContext } from '../../Layout/Root';
import Cards from './Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const quizTopic = useContext(QuizContext)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Player src={'https://assets5.lottiefiles.com/packages/lf20_q89ckg1l.json'}
                        loop
                        autoplay
                        className='player'></Player>
                    <div>
                        <div className='grid grid-cols-1'>
                            <div className='grid grid-cols-1'>
                                <h1 className="text-5xl font-bold">Are you ready!</h1>
                                <p className="py-6 text-lg md:text-xl lg:text-2xl">Take a look at your <code className='badge text-2xl p-3'>Website Development</code> knowledge, and take these Quizzes!</p>
                            </div>
                            <div className='flex flex-col-reverse md:flex-row gap-2 justify-center'>
                                <Link to={'/blog'} className="btn shadow-lg bg-cyan-200 text-gray-900 hover:bg-slate-200 hover:text-black flex gap-4">
                                    Blog
                                    <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                                </Link>
                                <Link to={'/stat'} className="btn btn-ghost">See Stats ...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center min-h-screen'>
                <h1 className='text-4xl font-bold md:text-2xl lg:text-4xl mb-12 mx-8 md:mx-0 mt-8 md:mt-14'>Select Your Quiz Topic</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-500 p-10'>
                    {
                        quizTopic.map(topic => <Cards key={topic.id} topic={topic}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroSection;