import React from 'react';
import CustomTextArea from "./CustomTextArea";
import {MedicalEvaluation} from "../model/MedicalEvaluation";
import {State} from "../state";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FormData} from "../model/FormData";

interface Props {
    formData: FormData;
}

interface InternalState {
    textAreas: MedicalEvaluation[];
}

export const mapStateToProps = (state: State) => {
    return {
        formData: state.formData
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    }
}

class App extends React.Component<Props, InternalState> {
    constructor(props:Props) {
        super(props);
        this.state = {
            textAreas: [
                {key: 'examination', value: 'Examination'},
                {key:'clinicalHistory', value: 'Clinical History'},
                {key:'technique', value: 'Technique'},
                {key:'findings', value: 'Findings'},
                {key:'impressions', value: 'Impressions'}
            ]
        }
        this.submitData = this.submitData.bind(this);
    }

    submitData = () => {
        console.log(this.props.formData);
    }

    render() {

        const {textAreas} = this.state;

        return (
            <div className='mt-2 pl-10px'>
                {textAreas.map( (medicalEvaluation: MedicalEvaluation, index: number) => {
                    return <CustomTextArea key={index} id={medicalEvaluation.key} labelValue={medicalEvaluation.value}/>;
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
export default connect(mapStateToProps, mapDispatchToProps) (App);
