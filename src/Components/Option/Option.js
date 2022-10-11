import React from 'react';
import './Option.css'

const Option = (props) => {
    const { getanswer } = props;

    return (
        <div className='option-part'>
            <div >
                <button className='option-btn' onClick={() => { getanswer(props.option) }}>
                    <h5>{props.option}</h5>
                </button>

            </div>



        </div >
    );
};

export default Option;