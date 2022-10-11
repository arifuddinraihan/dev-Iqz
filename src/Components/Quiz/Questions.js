import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Questions = ({ question }) => {
    const { question: ques, options, correctAnswer } = question;
    function optionBtnHandle() {
        options.find(rightAnswer => {
            if (rightAnswer !== correctAnswer) {
                toast.success('Correct Answer!', {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                console.log("false Answer");
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-start">{ques}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {
                        options.map((option, index) =>
                            <li key={index}
                                className='btn btn-ghost flex flex-nowrap my-4 md:my-0'
                                onClick={optionBtnHandle}>
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