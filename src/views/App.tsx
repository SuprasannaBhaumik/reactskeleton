import React from 'react';
import CustomTextArea from "./CustomTextArea";

interface Props {}

interface InternalState {
    textAreas: string[];
}

class App extends React.Component<Props, InternalState> {
    constructor(props:Props) {
        super(props);
        this.state = {
            textAreas: [
                'Examination',
                'Clinical History',
                'Technique',
                'Findings',
                'Impressions'
            ]
        }
        this.submitData = this.submitData.bind(this);
    }

    submitData = () => {

    }

    render() {

        const {textAreas} = this.state;

        return (
            <div className='mt-2 '>
                {textAreas.map( (textArea: string, index: number) => {
                    return <CustomTextArea key={index} id={textArea}/>;
                })}
                <button
                    className='bg-dodger_blue text-white float-right w-1/2 mt-50px rounded h-10 uppercase'
                    onClick={this.submitData}
                >Submit
                </button>
            </div>
        )
    }
}
export default App;
