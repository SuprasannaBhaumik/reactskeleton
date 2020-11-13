// @ts-ignore
import React from "react";

interface Props {
    isCompleted: boolean;
}
const CircularProgress = (props: Props) => {
    return (
        <div
            className={`
            rounded-full
            w-30px
            h-30px
            top-0
            absolute
            ${props.isCompleted ? 'border-dodger_blue': 'border-greyish'}
            ${props.isCompleted ? 'bg-dodger_blue': 'bg-greyish'}
            text-center
            `}
            style={{
                left: '-35px'
            }}
        >
            {props.isCompleted &&
			    <span className='text-white'>&#10003;</span>
            }
        </div>
    );
}

export default CircularProgress;
