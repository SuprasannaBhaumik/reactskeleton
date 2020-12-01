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
            <div className='maxSm:h-70vh h-80vh' >
                <MapContainer id='locationTracker'  center={[21.149850, 79.080598]} zoom={4}>
                    <TileLayer
                        attribution='&copy; MBRDI TBE Connectivity Apps Team'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers.map( (marker, index) => {
                        return (
                            <Marker title={marker.userName} key={index} position={[marker.latitude, marker.longitude]}>
                                <Popup>
                                    {marker.userName}
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
        );
    }
}

export default Map;
