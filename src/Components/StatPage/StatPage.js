import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { QuizContext } from '../../Layout/Root';


const StatPage = () => {
    const data = useContext(QuizContext)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className='text-center min-h-screen'>
                <h1 className='text-4xl font-bold md:text-2xl lg:text-4xl mx-8 md:mx-0 my-8 md:my-14 flex flex-col md:flex-row gap-4 justify-center'>
                    Find Your
                    <div className='flex flex-row gap-4 justify-center items-center'>
                        <FontAwesomeIcon icon={faChartColumn} className='hidden md:block'></FontAwesomeIcon>
                        <span className='text-cyan-400'>Stats</span>
                    </div>
                </h1>
                <div className='container mx-auto rounded-lg grid grid-cols-1 justify-items-center gap-4 bg-slate-500 p-10'>
                    <LineChart width={350} height={400} data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
                        <Line type="monotone" dataKey="total" stroke="#22d3ee"></Line>
                        <CartesianGrid stroke="#94a3b8" strokeDasharray="5 5" />
                        <XAxis dataKey="name" stroke='#22d3ee'></XAxis>
                        <YAxis stroke='#22d3ee'></YAxis>
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        </ResponsiveContainer>
    );
};

export default StatPage;