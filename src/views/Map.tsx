import React  from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
// @ts-ignore
import {MarkerData} from '../model/MarkerData';
import axios from 'axios'

interface InternalState {
    markers: MarkerData[];
}
interface Props {}

class Map extends React.Component<Props, InternalState> {

    private interval: NodeJS.Timeout;

    constructor(props: Props) {
        super(props);
        this.state = {
            markers: []
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.getMapData();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    private getMapData() {
        axios.get('https://location-app-mbrdi-tbe.azurewebsites.net/getAllUsers').then((response) => {

            const prevLength = this.state.markers.length;
            const currentLength = response.data.length;

            if(prevLength !== currentLength) {
                this.setState( {
                    markers: response.data
                });
            }

        });
    }

    render() {
        const {markers} = this.state;
        return (
            <MapContainer id='locationTracker'  center={[12.919965, 77.4833]} zoom={2}>
                <TileLayer
                    attribution='&copy; <a>MBRDI Connectivity Apps Team</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map( (marker, index) => {
                    return (
                        <Marker key={index} position={[marker.latitude, marker.longitude]}>
                            <Popup>
                                {marker.userName}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        );
    }
}

export default Map;
