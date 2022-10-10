import { Player } from '@lottiefiles/react-lottie-player';
import React, { useContext } from 'react';
import { QuizContext } from '../../Layout/Root';
import Cards from './Cards';

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
                        <h1 className="text-5xl font-bold">Are you ready!</h1>
                        <p className="py-6 text-lg md:text-xl lg:text-2xl">Take a look at your <code className='badge text-2xl p-3'>Website Development</code> knowledge, and take these Quizzes!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto text-center my-14'>
                <h1 className='text-4xl my-8'>Select Your Quiz Topic</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        quizTopic.map(topic => <Cards key={topic.id} topic={topic}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroSection;