import React from 'react';
import Information from './Information';
import Map from "./Map";

interface Props {}

class App extends React.Component<Props> {
    constructor(props:Props) {
        super(props);
    }

    render() {
        return (
            <div className=' flex flex-col items-center'>
                <header className='underline'>
                    MBRDI - Location Tracker
                </header>
                <Information/>
                <Map/>
            </div>
        )
    }
}
export default App;
