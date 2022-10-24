import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Questions = ({ question , optionBtnHandle }) => {
    const { question: ques, options, correctAnswer } = question;
    const showCorrectAns = () => {
        Swal.fire({
            title : 'Correct Answer',
            text : correctAnswer,
            confirmButtonText: 'OK'
        })
    }

    return (
        <div className="card card-side bg-slate-300 shadow-xl">
            <div className="card-body">
                <div className="text-black font-bold text-xs md:text-lg flex items-center" >
                    <h2 className="text-start text-black flex-grow" dangerouslySetInnerHTML={{ __html: ques }}></h2>
                    <FontAwesomeIcon
                        icon={faEye}
                        className="text-slate-500 btn btn-ghost btn-xs"
                        onClick={showCorrectAns}></FontAwesomeIcon>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {
                        options.map((option, index) =>
                            <li key={index}
                                className='btn btn-secondary flex flex-nowrap py-8 text-slate-800'
                                onClick={()=>optionBtnHandle(option)}>
                                <FontAwesomeIcon 
                                icon={faCircle}></FontAwesomeIcon>
                                <p className='flex-grow text-start ml-2'>
                                    {option}
                                </p>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Questions;