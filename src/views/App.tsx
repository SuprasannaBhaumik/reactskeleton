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
            /*<div className='text-white_one'>Hello World!!!</div>*/
            <div className=' flex flex-row '>
                <Information/>
                <Map/>
            </div>
        )
    }
}
export default App;
