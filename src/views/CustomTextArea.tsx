// @ts-ignore
import React from 'react';
import {getFormData, State} from "../state";
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {saveData} from "../actions/saveData";
import {FormData} from "../model/FormData";

interface Props {
    id: string;
    labelValue: string;
    data?: string;
    formData: FormData;
    saveData(type: string, data: string): void;
}

interface InternalState {
    value: string;
    rows: number;
    processCompleted: boolean;
}

export const mapStateToProps = (state: State) => {
    return {
        formData: getFormData(state),
    };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        saveData: (type: string, data: string) => dispatch(saveData(type, data))
    }
}

class CustomTextArea extends React.Component<Props, InternalState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            value: '',
            rows: 1,
            processCompleted: false
        }
        this.changeTextInput = this.changeTextInput.bind(this);
    }

    /**
     * onChange event handler for the text-area
     * not an effective way to do the re-sizing,
     * due to time constraints will explore on alternate solutions
     * @param event, the native event that triggered the onchange
     */
    changeTextInput = (event: any) => {
        if(event.nativeEvent.inputType === "insertLineBreak") {
            this.setState({
                value: event.target.value,
                rows: this.state.rows + 1
            }, () => {
               (this.refs.myTextArea as any).selectionStart = (this.refs.myTextArea as any).selectionEnd + 1;
            });
        } else if (event.nativeEvent.inputType === "deleteContentBackward") {
            const newText = event.target.value;
            if(newText[newText.length-1] === '\n') {
                this.setState({
                    value: newText.substring(0, newText.length-1),
                    rows: this.state.rows - 1
                });
            } else if (newText === '') {
                this.setState({
                    value: newText,
                    rows: 1
                });
            } else {
                this.setState({
                    value: newText
                });
            }
        } else {
            this.setState({
                value: event.target.value
            }, () => {
               (this.refs.myTextArea as any).selectionStart = (this.refs.myTextArea as any).selectionEnd + 1;
            });
        }

        //save the data in the global portal state
        this.props.saveData(
            event.target.name,
            event.target.value
        );
    }

    /**
     * Lifecycle method to check for data
     * Checks for available data inside of the textarea
     * if data available highlights with blue color, else grey
     * @param prevProps, for comparison
     */
    componentDidUpdate(prevProps: Readonly<Props>) {
        /*if(this.props.data !== '' && this.props.data !== prevProps.data) {
            this.setState({
                processCompleted: true
            });
        }*/
    }

    render() {
        const {rows, processCompleted } = this.state;

        return (
            <div
                className=
                    {`
                        flex flex-col 
                        border border-t-0 border-b-0 border-r-0  
                        ${processCompleted ? 'border-dodger_blue' : 'border-greyish'} 
                        mb-10px`
                    }
            >
                <div className='mb-10px ml-20px'>
                    <label htmlFor={this.props.id}>{this.props.labelValue}</label>
                </div>
                <div className='h-auto ml-20px'>
                    <textarea
                        ref='myTextArea'
                        className='h-50px w-full border border-greyish rounded overflow-hidden h-auto focus:outline-none focus:border-dodger_blue'
                        style={{backgroundColor: 'transparent'}}
                        name={this.props.id}
                        value={this.state.value}
                        onChange={this.changeTextInput}
                        rows={this.state.rows}
                    />
                </div>
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomTextArea);
