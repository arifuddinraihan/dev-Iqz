import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QuizContext } from '../../Layout/Root';


const StatPage = () => {
    const data = useContext(QuizContext)
    const [quizName, setQuizName] = useState([])
    let names = []
    data.map(singleData => console.log(singleData.name))
    return (
        <div className='text-center min-h-screen'>
            <h1 className='text-4xl font-bold md:text-2xl lg:text-4xl mx-8 md:mx-0 my-8 md:my-14 flex flex-col md:flex-row gap-4 justify-center'>
                Find Your
                <div className='flex flex-row gap-4 justify-center items-center'>
                    <FontAwesomeIcon icon={faChartColumn} className='hidden md:block'></FontAwesomeIcon>
                    <span className='text-cyan-400'>Stats</span>
                </div>
            </h1>
            <div className='grid grid-cols-1 gap-4 bg-slate-500 p-10'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatPage;