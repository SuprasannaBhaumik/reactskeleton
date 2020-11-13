// @ts-ignore
import React from 'react';

interface Props {
    id: string;
}

interface InternalState {
    value: string;
    rows: number;
}

class CustomTextArea extends React.Component<Props, InternalState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            value: '',
            rows: 1
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
                }, () => {
                    //(this.refs.myTextArea as any).selectionEnd -= 1;
                });
            } else if (newText === '') {
                this.setState({
                    value: newText,
                    rows: 1
                });
            } else {
                this.setState({
                    value: newText
                }, () => {
                    //(this.refs.myTextArea as any).selectionEnd -= 1;
                });
            }
        } else {
            this.setState({
                value: event.target.value
            }, () => {
               (this.refs.myTextArea as any).selectionStart = (this.refs.myTextArea as any).selectionEnd + 1;
            });
        }
    }

    render() {
        const {rows} = this.state;

        return (
            <div className='flex flex-col'>
                <div className='mb-10px'>
                    <label htmlFor={this.props.id}>{this.props.id}</label>
                </div>
                <div className='h-auto'>
                    <textarea
                        ref='myTextArea'
                        className='w-full border border-greyish rounded overflow-hidden h-auto focus:outline-none focus:border-dodger_blue'
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
export default CustomTextArea;
