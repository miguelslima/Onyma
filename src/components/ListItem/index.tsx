import React, { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import mapIcon from "../../utils/mapIcon";
import {
  Container,
  CardContainer,
  ContainerMap,
  ServiceContainer,
} from "./styles";

interface ClinicData {
  name: string;
  address: string;
  addressNumber: string;
  addressComplement: string;
  latitude: number;
  longitude: number;
  email: string;
  postalCode: string;
  phone: string;
  services: {
    clinical: Boolean;
    complementary: Boolean;
    ppra: Boolean;
    pcmso: Boolean;
  };
}

const ListItem: React.FC = () => {
  const [clinic, setClinic] = useState<ClinicData>();

  return (
    <Container>
      <CardContainer>
        <h1>Clinica</h1>
        <p>Nossa Clínica</p>
        <h3>Endereço</h3>
        <p>Av João da Escóssia</p>
        <h3>Email</h3>
        <p>nossaclinica@email.com</p>

        <h3>Whatsapp</h3>
        <a href="https://wa.me/5584988998888" target="_blank">
          (84) 98899-8888
        </a>

        <ServiceContainer>
          <p>Exames Clínicos</p>
          <p>Exames Complementares</p>
          <p>PCMCO</p>
          <p>PPRA</p>
        </ServiceContainer>
      </CardContainer>

      <ContainerMap>
        <MapContainer
          center={[-5.1766991, -37.3720384]}
          zoom={16}
          style={{ width: 400, height: 380 }}
          dragging={false}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/gnomolouco/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token={pk.eyJ1IjoiZ25vbW9sb3VjbyIsImEiOiJja2o5YTltZTIyYnpxMndwZGRqZng4eWtpIn0.vUG-OHVUDkhULGksXuOjVg}`}
          />
          <Marker
            interactive={false}
            icon={mapIcon}
            position={[-5.1766991, -37.3720384]}
          />
        </MapContainer>
      </ContainerMap>
    </Container>
  );
};

export default ListItem;
