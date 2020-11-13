import React from 'react';

interface Props {}

class App extends React.Component<Props> {
    constructor(props:Props) {
        super(props);
    }

    render() {
        return (
            <div className='text-white_one'>Hello World!!!</div>
        )
    }
}
export default App;
