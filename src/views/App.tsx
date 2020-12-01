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
            <div className='items-center h-full'>
                <header className='underline text-center'>
                    MBRDI - Location Tracker
                </header>
                <Information/>
                <Map/>
            </div>
        )
    }
}
export default App;
