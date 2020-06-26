import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class RoutingRoundTrip extends MapLayer {
  createLeafletElement() {
    const { map, roundTripCoords } = this.props;

    let routingObj = {}
    let waypointsArr = []
    roundTripCoords.forEach((item) => {
      let coord = L.latLng(item[1], item[0]);
      waypointsArr.push(coord)
    });
    routingObj.waypoints = waypointsArr;

    let leafletElement = L.Routing.control(
      routingObj
    //   {
    //   waypoints: [
    //     L.latLng(51.627534, -0.391221),
    //     L.latLng(51.627602, -0.390801),
    //     L.latLng(51.627745, -0.389936),
    //     L.latLng(51.627846, -0.389318),
    //   ],
    // }
  ).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(RoutingRoundTrip);