import React from 'react';
import axios from 'axios';

interface Props{}

interface InternalState {
    name: string;
    dataSubmitted: boolean;
    latitude: any;
    longitude: any;
}

class Information extends React.Component<Props, InternalState> {


    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            dataSubmitted: false,
            latitude: null,
            longitude: null,
        }
        this.submitForm = this.submitForm.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    nameChange = (event: any) => {
        this.setState({
            name: event.target.value
        })
    }

    submitForm = async () => {
        console.log('form is submitted');
        console.log('name:'+this.state.name);
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, () => {
                console.log(this.state.latitude);
                console.log(this.state.longitude);
            }),
            err => console.log(err),
            { enableHighAccuracy: true }
        );

    }

    render() {

        const {dataSubmitted, name} = this.state;
        return (
            <div className='flex flex-col text-white_one'>
                {!dataSubmitted &&
				<>
					<div>
						<span>Please enter your name:</span>
						<div>
							<input type='text' onChange = {this.nameChange} value={this.state.name}/>
						</div>
					</div>
					<div>
						<button type='submit' className='' onClick={this.submitForm}>Submit</button>
					</div>
				</>
                }
                {dataSubmitted &&
                    <div>
                        {name}!!! thanks for sharing your information.
                    </div>
                }
            </div>
        );
    }

}

export default Information;
