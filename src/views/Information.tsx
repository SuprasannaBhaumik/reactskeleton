import React from 'react';
import axios from 'axios';

interface Props{}

interface InternalState {
    name: string;
    dataSubmitted: boolean;
    latitude: number;
    longitude: number;
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
        await navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude
                let lng = position.coords.longitude
                console.log("getCurrentPosition Success " + lat + lng) // logs position correctly
                this.setState({
                    latitude: lat,
                    longitude: lng,
                    dataSubmitted: true
                })
            },
            (error) => {
                console.log("Error dectecting your location");
                console.error(JSON.stringify(error))
            },
            {enableHighAccuracy: true}
        );
    }

    render() {

        const {dataSubmitted, name} = this.state;
        return (
            <div className='flex flex-row text-white_one m-10px'>
                {!dataSubmitted &&
				<>
					<div>
						<span className='inline-block'>Please enter your name:</span>
						<div className='inline-block ml-3'>
							<input type='text' className='text-black' onChange = {this.nameChange} value={this.state.name}/>
						</div>
					</div>
					<div className='ml-3'>
						<a className="button7" style={{backgroundColor: '#2979ff'}} onClick={this.submitForm}>Submit</a>
					</div>
				</>
                }
                {dataSubmitted &&
                    <div>
						Thanks {name} for sharing your information. Enjoy live tracking your teammates &#128540;
                    </div>
                }
            </div>
        );
    }

}

export default Information;
