import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { CircleLoader } from 'react-spinners';
import { useGeolocation } from 'react-use';
import L from 'leaflet';
import 'leaflet.heat';

import ProblemCard from './ProblemCard';
import { useEffect } from 'react';

const HeatMap =
({ reports }) => {
  const map = useMap();

  useEffect(() => {
    if ( !reports ) return;

    L.heatLayer(reports.map(r => [r.lat, r.lng, 1]), {radius: 100}).addTo(map);
  }, [reports]);

  return "";
};

const Map =
  ({ reports }) => {
    const pos = useGeolocation();

    if ( pos.loading ) {
      return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
          <CircleLoader />
        </div>
      );
    }

    if ( pos.error ) {
      return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
          {pos.error.message}
        </div>
      );
    }

    return (
      <MapContainer
        center={[pos.latitude, pos.longitude]}
        zoom={12}
        zoomControl={false}
        inertia
        doubleClickZoom
        scrollWheelZoom
        dragging
        className="w-100 h-100"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          accessToken="pk.eyJ1Ijoidml4cmFudCIsImEiOiJja21nbDNtYXowYWVsMm5tb2I4YjdpazhnIn0.plBMqe9eheGOp8ZRFTKTBQ"
          // id="vixrant/ckmgm3cic22rg17oi3c45by0g"
          id="vixrant/ckniiq2bh0g1218mmzqennvkf"
        />

        <HeatMap reports={reports} />

        {reports && reports.map((r, i) => (
          <Marker position={[r.lat, r.lng]} style={{ innerWidth: "auto" }}>
            <Popup className="popover-fit">
              <ProblemCard {...r} key={i} />
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    );
  }

export default Map;
