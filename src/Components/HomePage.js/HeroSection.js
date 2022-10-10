import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Cards from './Cards';

const HeroSection = () => {
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
            <div>
                <Cards></Cards>
            </div>
        </div>
    );
};

export default HeroSection;