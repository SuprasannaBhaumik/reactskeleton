import React  from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
// @ts-ignore
import {MarkerData} from '../model/MarkerData';


interface InternalState {
    markers: MarkerData[];
}
interface Props {}

class Map extends React.Component<Props, InternalState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            markers: [
                {name: 'suprasanna', lat: 22, lng: 52},
                {name: 'poornima', lat: 52, lng: 22},
            ]
        }
    }

    componentDidMount() {
        //get data from url
    }

    render() {
        const {markers} = this.state;
        return (
            <MapContainer id='locationTracker'  center={[12.919965, 77.4833]} zoom={2}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map( (marker, index) => {
                    return (
                        <Marker key={index} position={[marker.lat, marker.lng]}>
                            <Popup>
                                {marker.name}
                            </Popup>
                        </Marker>
                    );
                })

                }
            </MapContainer>
        );
    }
}

export default Map;
