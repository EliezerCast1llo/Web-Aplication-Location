import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Modal, Button } from 'react-bootstrap';
import { POINTER_URL, GOOGLE_API_KEY } from '../../constants';

interface IUserProps {
  selectedLocation?: any;
  modalVisible: boolean;
  onHideModal: Function;
  locationsCount: number;
}

const AnyReactComponent = ({ text }: any) => (
  <div className="any-react-component-wrapper">
    <img src={POINTER_URL} className="any-react-component-img" alt="" />
    <b className="any-react-component-txt">{text}</b>
  </div>
);

const GoogleMaps = ({
  selectedLocation = {},
  modalVisible,
  onHideModal,
}: IUserProps) => {
  const { location } = selectedLocation;

  const coordinates = location ? location.split('(')[1] : '';
  const coordinatesSplited = coordinates ? coordinates.split(',') : [];
  let lat = coordinatesSplited[0];
  let lng = coordinatesSplited[1] ? coordinatesSplited[1].replace(')', '') : '';

  return (
    <Modal
      show={modalVisible}
      size="lg"
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      centered
      onHide={() => onHideModal()}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {coordinates ? 'User Location' : 'Nothing to show'}
        </Modal.Title>
      </Modal.Header>
      {lng && coordinates ? (
        <Modal.Body>
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: GOOGLE_API_KEY,
              }}
              defaultCenter={{
                lat: Number(lat),
                lng: Number(lng),
              }}
              defaultZoom={18}
            >
              <AnyReactComponent
                lat={lat}
                lng={lng}
                text={selectedLocation.message}
              />
            </GoogleMapReact>
          </div>
        </Modal.Body>
      ) : (
        []
      )}
      <Modal.Footer>
        <Button onClick={() => onHideModal()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GoogleMaps;
