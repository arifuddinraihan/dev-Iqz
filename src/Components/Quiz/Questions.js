import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Questions = ({ question }) => {
    const { question: ques, options, correctAnswer } = question;
    const optionBtnHandle = (data) => {
        if (data === correctAnswer) {
            toast.success('Bravo! Correct Answer.', {
                position: "bottom-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.error(`Wrong Answer`, {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className="card card-side bg-slate-300 shadow-xl">
            <div className="card-body">
                <div className="card-title" >
                    <h2 className="text-start text-black" dangerouslySetInnerHTML={{ __html: ques }}></h2>
                    <FontAwesomeIcon></FontAwesomeIcon>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {
                        options.map((option, index) =>
                            <li key={index}
                                className='btn btn-secondary flex flex-nowrap my-4 md:my-0 text-slate-800'
                                onClick={() => optionBtnHandle(option)}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
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