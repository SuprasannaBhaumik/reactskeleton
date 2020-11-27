import React  from "react";

interface InternalState {}
interface Props {}

class Map extends React.Component<Props, InternalState> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        //get data from url
    }

    render() {
        return (
            <div>
                Map comes here
            </div>
        );
    }
}

export default Map;
