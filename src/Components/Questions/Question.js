import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Option from '../Option/Option';
import './Question.css';
import 'react-toastify/dist/ReactToastify.css';

const Question = (props) => {
    const { options, id, question, correctAnswer } = props.eachQuestion;
    let qstn_id = id;

    let sliced = question.replace(/(<([^>]+)>)/ig, ''); //<p> tag removed from api questions
    const getanswer = (ans) => {
        let statusMsg = document.getElementById(id);
        if (ans === correctAnswer) {
            statusMsg.innerText = "Correct";
        }
        else {
            statusMsg.innerText = "Wrong Answer";
        }

    }


    const iconMsgShow = () => {
        toast.success(`Correct Answer is : ${correctAnswer}`, {
            position: "top-center",
            autoClose: 4996,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div >
            <div className='qstn-part'>

                <div><li>{sliced}</li></div>
                <div><button onClick={iconMsgShow} className='icon-btn'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button></div>
                <ToastContainer></ToastContainer>
            </div>

            <div className='option-part'>
                <div>
                    {
                        options.map(option => <Option option={option} getanswer={getanswer}></Option>)
                    }
                </div>
                <div className='status_part'>
                    <div id={qstn_id}></div>
                </div>
            </div>



        </div>
    );
};

export default Question;